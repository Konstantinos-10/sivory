import { HeroParallax } from '../components/HeroParallax'
import ServicesSection from '../components/ServicesSection'
import ContactFormSection from '../components/ContactFormSection'
import { ProfessionalFooter } from '../components/ProfessionalFooter'

// Sivory Design Projects - Real Portfolio
const pergolaProjects = [
  // Outdoor Design Projects
  {
    title: "Awning Pergola Paradise",
    link: "/outdoor-design/awning-pergola",
    thumbnail: "/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 1.png"
  },
  {
    title: "Elegant Outdoor Umbrellas",
    link: "/outdoor-design/umbrellas", 
    thumbnail: "/images/OutdoorDesign/Umbrellas/omprelles_skiasis 1.png"
  },
  {
    title: "Premium Blinds Installation",
    link: "/indoor-design/blinds",
    thumbnail: "/images/IndoorDesign/Blinds/33.png"
  },
  {
    title: "Modern Vertical Awnings",
    link: "/outdoor-design/vertical-awnings",
    thumbnail: "/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 1.png"
  },
  {
    title: "Perforated Fabric Solutions",
    link: "/outdoor-design/perforated-fabrics",
    thumbnail: "/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 1.png"
  },
  {
    title: "Luxury Curtain Design",
    link: "/indoor-design/curtains",
    thumbnail: "/images/IndoorDesign/curtains/30.png"
  },
  {
    title: "Outdoor Wall Covering",
    link: "/outdoor-design/outdoor-wall-covering",
    thumbnail: "/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 1.png"
  },
  {
    title: "Contemporary Awning Pergola",
    link: "/outdoor-design/awning-pergola",
    thumbnail: "/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 3.png"
  },
  {
    title: "Designer Wallpaper",
    link: "/indoor-design/wallpaper",
    thumbnail: "/images/IndoorDesign/wallpaper/27.png"
  },
  {
    title: "Shade Umbrellas Collection",
    link: "/outdoor-design/umbrellas",
    thumbnail: "/images/OutdoorDesign/Umbrellas/omprelles_skiasis 3.png"
  },
  {
    title: "Sophisticated Perforated Fabrics",
    link: "/outdoor-design/perforated-fabrics",
    thumbnail: "/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 4.png"
  },
  {
    title: "Premium Blinds System",
    link: "/indoor-design/blinds",
    thumbnail: "/images/IndoorDesign/Blinds/34.png"
  },
  {
    title: "Vertical Awning Excellence",
    link: "/outdoor-design/vertical-awnings",
    thumbnail: "/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 3.png"
  },
  {
    title: "Elegant Curtain Solutions",
    link: "/indoor-design/curtains",
    thumbnail: "/images/IndoorDesign/curtains/31.png"
  },
  {
    title: "Outdoor Design Mastery",
    link: "/outdoor-design/awning-pergola",
    thumbnail: "/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 5.png"
  }
];

export default function Home() {
  return (
    <main>
      <HeroParallax products={pergolaProjects} />
      <ServicesSection />
      <ContactFormSection />
      <ProfessionalFooter pageType="home" />
    </main>
  )
}
