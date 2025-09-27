# Website Maintenance Guide

## Current Outdated Dependencies
Based on the latest check, you have these major updates available:
- **Next.js**: ^14.2.32 → ^15.5.4 (major version update)
- **React**: ^18 → ^19 (major version update) 
- **React-DOM**: ^18 → ^19 (major version update)
- **TailwindCSS**: ^3.3.0 → ^4.1.13 (major version update)

## Maintenance Strategy

### 1. Automated Updates (Recommended)
- **Dependabot**: Configured in `.github/dependabot.yml` to create weekly PRs
- **GitHub Actions**: Set up automated testing on PRs
- **Vercel**: Automatic deployments on merge to main

### 2. Manual Maintenance Schedule

#### Weekly
- Review and merge Dependabot PRs for patch/minor updates
- Check for security vulnerabilities: `npm audit`

#### Monthly  
- Review major version updates
- Update development dependencies
- Test on staging environment

#### Quarterly
- Plan major framework updates (like React 19, Next.js 15)
- Review and update build tools
- Performance audit

## Commands for Manual Maintenance

### Check for Updates
```bash
# See all outdated packages
ncu

# Update to latest versions (be careful with major updates)
ncu -u

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Safe Update Process
1. **Create a feature branch**: `git checkout -b update-dependencies`
2. **Update patch/minor versions**: `ncu -u --target minor`
3. **Test thoroughly**: `npm run build && npm run dev`
4. **Update major versions one at a time**: Test each major update separately
5. **Deploy to staging**: Test on Vercel preview deployment
6. **Merge and deploy**: Only after thorough testing

### Major Updates (Current Priority)
These require careful planning:

#### React 18 → 19
- Review breaking changes: https://react.dev/blog/2024/12/05/react-19
- Test all components for compatibility
- Update TypeScript types if needed

#### Next.js 14 → 15
- Review migration guide: https://nextjs.org/docs/app/building-your-application/upgrading/version-15
- Check for deprecated features
- Update middleware if used

#### TailwindCSS 3 → 4
- Major rewrite with breaking changes
- Review migration guide: https://tailwindcss.com/docs/upgrade-guide
- Update configuration and classes

## Security Monitoring

### npm audit
```bash
# Check for vulnerabilities
npm audit

# Fix automatically fixable issues
npm audit fix

# Force fix (use with caution)
npm audit fix --force
```

### Alternative Tools
- **Snyk**: `npm install -g snyk && snyk test`
- **GitHub Security Advisories**: Monitor your repository's security tab

## Performance Monitoring

### Bundle Analysis
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Lighthouse CI for performance
npm install -g @lhci/cli
lhci autorun
```

## Backup Strategy
- **Code**: Git repositories (GitHub)
- **Database**: If using external DB, set up automated backups
- **Assets**: Ensure images/assets are backed up
- **Environment Variables**: Store securely (Vercel handles this)

## Monitoring & Alerts
- **Uptime**: Set up UptimeRobot or similar
- **Performance**: Use Vercel Analytics or Google Analytics
- **Error Tracking**: Consider Sentry for production error monitoring
- **Dependency Alerts**: GitHub will notify of security vulnerabilities

## Emergency Procedures
1. **Security Vulnerability**: Update immediately, even if breaking
2. **Build Failures**: Revert to last working commit
3. **Performance Issues**: Use Vercel's rollback feature
4. **Data Loss**: Restore from backups

## Quick Checklist Before Major Updates
- [ ] Create feature branch
- [ ] Read official migration guides
- [ ] Update dependencies one at a time
- [ ] Test locally thoroughly
- [ ] Test on staging/preview
- [ ] Check for breaking changes in your code
- [ ] Update documentation if needed
- [ ] Deploy during low-traffic periods
- [ ] Monitor after deployment
