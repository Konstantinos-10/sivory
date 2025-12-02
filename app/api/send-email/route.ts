import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    // Reset window
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message, honeypot } = body;

    // Honeypot check - if this field is filled, it's a bot
    if (honeypot) {
      // Pretend success to fool the bot
      return NextResponse.json({ success: true });
    }

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'konstantinoskyprianou10@gmail.com';

    // Format project type for display
    const projectTypeDisplay = projectType === 'outdoor' ? 'Outdoor Design (Pergolas, Awnings)' :
                               projectType === 'indoor' ? 'Indoor Design (Blinds, Curtains)' :
                               projectType === 'both' ? 'Both Indoor & Outdoor' :
                               'General Consultation';

    console.log('Attempting to send email to:', contactEmail);
    console.log('Form data received:', { name, email, phone, projectType, message: message.substring(0, 50) + '...' });

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: 'Sivory Designs <onboarding@resend.dev>',
      to: [contactEmail],
      replyTo: email,
      subject: `🏠 New Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #CF9160; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">
                SIVORY DESIGNS
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0; font-size: 14px; opacity: 0.8;">
                New Project Inquiry
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background-color: #f9f9f9; border-left: 4px solid #CF9160; padding: 20px; margin-bottom: 30px;">
                <h2 style="color: #1a1a1a; margin: 0 0 5px; font-size: 20px;">
                  ${name}
                </h2>
                <p style="color: #666; margin: 0; font-size: 14px;">
                  wants to discuss a project with you
                </p>
              </div>

              <!-- Contact Details -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br>
                    <a href="mailto:${email}" style="color: #CF9160; text-decoration: none; font-size: 16px;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</span><br>
                    <a href="tel:${phone || 'Not provided'}" style="color: #1a1a1a; text-decoration: none; font-size: 16px;">${phone || 'Not provided'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Type</span><br>
                    <span style="color: #1a1a1a; font-size: 16px;">${projectTypeDisplay}</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <span style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                <div style="background-color: #f9f9f9; padding: 20px; margin-top: 10px; border-radius: 8px;">
                  <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Reply Button -->
              <div style="text-align: center;">
                <a href="mailto:${email}?subject=Re: Your Inquiry to Sivory Designs" 
                   style="display: inline-block; background-color: #CF9160; color: #ffffff; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; letter-spacing: 1px;">
                  REPLY TO ${name.toUpperCase()}
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #1a1a1a; padding: 25px 30px; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This email was sent from your Sivory Designs website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully! Response:', data);

    // NOTE: Confirmation email to client is disabled until a custom domain is verified
    // Once you verify a domain at resend.com/domains, uncomment the code below
    // to send automatic confirmation emails to clients
    
    /*
    // Send confirmation email to the client
    await resend.emails.send({
      from: 'Sivory Designs <hello@yourdomain.com>', // Change to your verified domain
      to: [email],
      subject: 'Thank you for contacting Sivory Designs ✨',
      html: `...confirmation email HTML...`,
    });
    */

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

