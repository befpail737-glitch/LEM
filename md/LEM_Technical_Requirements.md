# LEM English Website - Technical Requirements

## Overview
This document outlines the technical specifications, performance requirements, security standards, and implementation guidelines for the LEM English Website. These requirements ensure the website meets SEO objectives for "LEM代理" keywords while providing a reliable, fast, and secure experience for global users.

## Platform Specifications

### Hosting Environment
- **Platform**: Cloudflare Pages (as specified in requirements)
- **Domain**: lem.elec-distributor.com
- **CDN**: Cloudflare global CDN for worldwide performance
- **SSL**: Automatic SSL certificate management with HSTS
- **Build System**: Static site generation with optimized asset delivery

### Technology Stack
- **Frontend**: Pure HTML, CSS, and JavaScript (as specified in requirements)
- **No JavaScript Frameworks**: Vanilla JS only for minimal bundle size
- **CSS Methodology**: Utility-first approach with custom components
- **Asset Optimization**: WebP images with fallbacks, SVG icons, compressed assets

### Browser Support
- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Browsers**: iOS Safari 13+, Chrome Mobile 80+
- **Accessibility**: Full support for screen readers and keyboard navigation

## Performance Requirements

### Page Load Times
- **First Contentful Paint (FCP)**: <1.5 seconds globally
- **Largest Contentful Paint (LCP)**: <2.5 seconds globally
- **Time to Interactive (TTI)**: <3 seconds globally
- **Cumulative Layout Shift (CLS)**: <0.1 (minimal layout shifts)
- **PageSpeed Insights**: Score >90 on mobile and desktop

### Performance Metrics
- **Resource Sizes**:
  - Total HTML < 100KB
  - Total CSS < 100KB
  - Total JavaScript < 50KB
  - Images optimized with WebP format
  - Critical CSS inlined for above-the-fold content
- **Caching Strategy**:
  - HTML: 10 minutes (with Cloudflare cache)
  - CSS/JS: 1 year (with content hash)
  - Images: 1 month
  - API responses: 10 minutes

### Optimization Techniques
- **Critical Resources**: Inline critical CSS and essential JS
- **Lazy Loading**: Images and non-critical content below fold
- **Preloading**: Important resources and navigation elements
- **Compression**: Gzip/Brotli compression enabled
- **Asset Optimization**: Minification and tree-shaking for all assets

## Security Standards

### Web Security
- **HTTPS**: Required for all pages with automatic redirects
- **CSP (Content Security Policy)**: Prevent XSS attacks with strict policy
- **HSTS**: HTTP Strict Transport Security header
- **XSS Protection**: Built-in browser XSS protection headers
- **Clickjacking Protection**: X-Frame-Options header

### Data Protection
- **Form Security**: Rate limiting and validation on contact forms
- **Privacy Compliance**: GDPR compliance for EU users
- **Cookie Policy**: Clear cookie usage disclosure
- **Data Encryption**: All sensitive data encrypted in transit

### Infrastructure Security
- **DDoS Protection**: Cloudflare's built-in DDoS protection
- **Rate Limiting**: Automatic protection against abusive requests
- **Security Headers**: Proper implementation of security headers
- **Regular Updates**: Automatic security updates for platform

## SEO Technical Requirements

### URL Structure
- **Hierarchy**: Clear, logical hierarchy reflecting site architecture
- **Static URLs**: Clean URLs without session IDs or parameters
- **Canonical Tags**: Proper implementation on all pages
- **Redirects**: 301 redirects for any URL changes
- **Example Structure**:
  - Homepage: https://lem.elec-distributor.com/
  - Products: https://lem.elec-distributor.com/products/hall-sensors/
  - Product Detail: https://lem.elec-distributor.com/products/la-55-p/
  - Solutions: https://lem.elec-distributor.com/solutions/ev-bms/
  - News: https://lem.elec-distributor.com/news/latest-update/

### Meta Tags & Structured Data
- **Title Tags**: Unique, descriptive titles with target keywords
- **Meta Descriptions**: Compelling descriptions under 160 characters
- **Meta Keywords**: Legacy tag with relevant terms
- **Structured Data**: JSON-LD for products, articles, and organization
- **Open Graph Tags**: Complete set for social media sharing
- **Twitter Cards**: Optimized for Twitter sharing

### Technical SEO Elements
- **XML Sitemap**: Automatically generated and updated
- **Robots.txt**: Properly configured for search engine crawling
- **Pagination**: Rel=prev/next for product listings
- **Breadcrumbs**: Schema markup for breadcrumb navigation
- **Hreflang**: For international language targeting if needed

### Site Speed Optimization
- **Server Response Time**: <200ms globally
- **Assets Optimization**: Compressed and minified resources
- **CDN Distribution**: Global content delivery network
- **Browser Caching**: Leverage browser caching for repeat visitors

## Implementation Guidelines

### HTML Standards
- **Semantic HTML**: Proper use of semantic elements (header, nav, main, article)
- **Accessibility**: WCAG 2.1 AA compliance
- **Validation**: Valid HTML5 without errors
- **Heading Structure**: Proper h1-h6 hierarchy for SEO

### CSS Architecture
- **Modular Approach**: Component-based CSS architecture
- **Utility Classes**: Reusable utility classes for common styles
- **Naming Convention**: BEM methodology for CSS classes
- **Responsive Design**: Mobile-first approach with media queries

### JavaScript Implementation
- **Progressive Enhancement**: Core functionality without JS
- **Modular Code**: Separate modules for different page features
- **Performance**: Minimal JS with optimized execution
- **External Libraries**: Avoid if possible, use vanilla JS only

### Content Management
- **Static Site Generation**: Pre-built pages for faster delivery
- **Template System**: Reusable templates for similar page types
- **Content Updates**: Efficient content update process
- **Version Control**: Git-based version control for all content

## Quality Assurance Requirements

### Cross-Browser Testing
- **Manual Testing**: Primary browsers and devices
- **Automated Testing**: Regression testing for critical paths
- **Responsive Testing**: Multiple device sizes and orientations
- **Performance Testing**: Load testing with real-world scenarios

### SEO Testing
- **Crawling Test**: Verify search engines can access all pages
- **Indexation**: Monitor which pages get indexed
- **Ranking Tracking**: Monitor for target keywords ("LEM代理", etc.)
- **Schema Validation**: Test structured data with Google tools

### Performance Monitoring
- **Real User Monitoring**: Track actual user experience
- **Error Tracking**: Monitor JavaScript errors and server issues
- **Speed Monitoring**: Continuous LCP, FCP, and TTI tracking
- **Uptime Monitoring**: 99.9% uptime requirement

## Deployment Requirements

### Build Process
- **CI/CD Pipeline**: Automated build and deployment
- **Testing Stage**: Pre-production testing environment
- **Rollback Capability**: Quick rollback for critical issues
- **Build Optimization**: Optimized builds with asset hashing

### Monitoring and Analytics
- **Analytics**: Google Analytics 4 for traffic monitoring
- **Performance**: Core Web Vitals monitoring
- **SEO Monitoring**: Keyword ranking and visibility tracking
- **Error Monitoring**: Real-time error alerts

### Maintenance Requirements
- **Regular Updates**: Monthly content and feature updates
- **Security Patches**: Immediate security updates
- **Performance Audits**: Quarterly performance reviews
- **SEO Audits**: Regular SEO health checks