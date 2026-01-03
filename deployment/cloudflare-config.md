# Cloudflare Pages Configuration for LEM Website

## Build Configuration

### Build Settings
- **Build Command:** `echo "Build not required for static site"`
- **Build Output Directory:** `./` (root directory)
- **Root Directory:** `./`

### Environment Variables
```
# No environment variables needed for static site
# All configuration is contained in the HTML/CSS/JS files
```

## Custom Headers

### Security Headers
```
/*
  Always use HTTPS
*/
/.well-known/acme-challenge/*
  X-Robots-Tag: none

/*
  Security and performance headers for all routes
*/
/*
  Cache CSS and JS files for better performance
*/
/static/css/*, /src/css/*
  Cache-Control: public, max-age=31536000, immutable

/static/js/*, /src/js/*
  Cache-Control: public, max-age=31536000, immutable

/static/images/*, /src/images/*
  Cache-Control: public, max-age=31536000, immutable

/*
  Security headers
*/
/*
  Apply security headers to all routes except .well-known
*/
!/.well-known/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Caching Configuration

### File-based Caching
- **CSS/JS Files:** Cache for 1 year with immutable directive
- **Image Files:** Cache for 1 year
- **HTML Files:** Cache for 10 minutes (to allow for quick updates)
- **JSON Files:** Cache for 1 hour
- **XML Sitemap:** Cache for 1 hour

## Redirect Rules

### HTTP to HTTPS
```
# Automatic redirect from HTTP to HTTPS handled by Cloudflare
```

### Legacy URL Redirects (if applicable)
```
# Add any legacy URL redirects here if migrating from old site
# /old-page -> /new-page
```

## Functions (if needed in future)

### Example Function for Dynamic Content
```javascript
// This is a placeholder for potential future functions
// Currently not needed as the site is static

export async function onRequest(context) {
  // Optional: Custom logic to execute on each request
  return await context.next();
}
```

## Environment-Specific Configurations

### Production Environment
- **Branch:** `main`
- **Build Command:** `echo "Production build not required for static site"`
- **Environment Variables:** None
- **Custom Domains:** `lem.elec-distributor.com`

### Preview Environments
- **Branch Pattern:** `feature/*` or `bug/*`
- **Build Command:** `echo "Preview build not required for static site"`
- **Environment Variables:** None

## DNS Configuration

### Required DNS Records
```
# A record for the main domain
lem.elec-distributor.com    A    [Cloudflare-provided IP]

# CNAME record for www (optional)
www.lem.elec-distributor.com    CNAME    lem.elec-distributor.com
```

## SSL/TLS Configuration

### SSL/TLS Settings
- **SSL/TLS Mode:** Flexible (since site is static and doesn't have backend)
- **Always Use HTTPS:** Enabled
- **Automatic HTTPS Rewrites:** Enabled
- **Minimum TLS Version:** 1.2

## Security Configuration

### Bot Management
- **Bot Fight Mode:** Standard
- **Rate Limiting:** Default Cloudflare rate limits

### WAF Rules
- **Enabled Managed Rulesets:**
  - Cloudflare Security Managed Ruleset
  - Cloudflare Bad Behavior Managed Ruleset

## Performance Configuration

### Optimization Settings
- **Auto Minify:** 
  - HTML: Enabled
  - CSS: Enabled
  - JavaScript: Enabled
- **Rocket Loader:** Enabled for JavaScript
- **Polish:** Lossless for images
- **Mirage:** Disabled (not needed for sensor website)
- **HTTP/2:** Enabled
- **Brotli Compression:** Enabled

## Analytics Configuration

### Google Analytics
- **Property ID:** [To be filled during deployment]
- **Measurement ID:** [To be filled during deployment]

### Error Monitoring
- **Sentry DSN:** [To be filled if adding error monitoring]
- **Log Push:** Enabled to Cloudflare Logs

## Monitoring and Alerting

### Performance Monitoring
- **Core Web Vitals:** Monitored via Google Analytics 4
- **Page Load Times:** Monitored via Google Analytics 4
- **Error Rates:** Monitored via custom JavaScript or third-party service

### Uptime Monitoring
- **Status Page:** [To be set up if needed]
- **Alerting:** Email alerts for >503 errors or >90s response times

## Deployment Commands

### GitHub Actions Workflow (if using GitHub)
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: lem-website
          directory: ./
```

## Backup and Recovery

### Backup Strategy
- **Git Repository:** Main backup method (all files tracked in version control)
- **Cloudflare Backup:** Automatic backup by Cloudflare
- **Manual Backup:** Periodic export of analytics and logs

## Maintenance Schedule

### Regular Maintenance Tasks
- **Weekly:**
  - Review Google Analytics for performance and traffic patterns
  - Check for any broken links or missing resources
  - Review security logs for any potential issues

- **Monthly:**
  - Update content if needed
  - Review and optimize images if necessary
  - Check for any new security recommendations

- **Quarterly:**
  - Review and update SEO performance
  - Update technical content based on new products
  - Review and audit all external links

## Rollback Procedure

### In Case of Issues
1. **Immediate Response:**
   - Document the issue and its impact
   - Assess whether to rollback or hotfix
   - Notify stakeholders

2. **Rollback Process:**
   - If using Git, revert to last known good commit
   - If using Cloudflare Pages, deploy previous version
   - Verify the rollback was successful

3. **Post-Rollback:**
   - Investigate root cause
   - Implement fix for next deployment
   - Update deployment process if needed
```

This configuration document provides all the necessary details for deploying the LEM website to Cloudflare Pages, including security, performance, and maintenance configurations.