# LEM English Website - UX/UI Design Guidelines

## Overview
This document establishes the visual identity, design principles, and component guidelines for the LEM English Website. The design must convey technical precision, reliability, and global reach while supporting the SEO objectives for "LEM代理" and international markets.

## Visual Identity

### Brand Colors
- **Primary Blue**: #1E3A8A (Deep blue representing technical precision and reliability)
- **Secondary Blue**: #3B82F6 (Bright blue for accents and CTAs)
- **Accent Orange**: #F59E0B (Warm orange for highlights and important elements)
- **Neutral Gray**: #6B7280 (Slate gray for secondary text and borders)
- **Off White**: #F8FAFC (Background color for content areas)

### Typography
- **Headings**: Inter Bold - Clean, technical look that works well for technical specifications
- **Body Text**: Inter Regular - Highly readable with excellent technical document support
- **Code/Specifications**: JetBrains Mono - Monospace for technical parameters and part numbers
- **Font Sizes**:
  - H1: 2.5rem (40px)
  - H2: 2rem (32px)
  - H3: 1.5rem (24px)
  - H4: 1.25rem (20px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Logo Design
- **Primary Logo**: "LiTong" in bold Inter typeface with "Authorized LEM Distributor" subtitle
- **Icon Treatment**: Clean geometric forms representing sensor technology
- **Usage**: Full logo for header, abbreviated versions for mobile
- **Color Variants**: Primary color for light backgrounds, inverted for dark backgrounds

## Design Principles

### 1. Technical Precision
- Clean, uncluttered layouts that emphasize technical specifications
- Consistent use of white space to separate complex technical information
- Grid-based layouts for alignment and professional appearance
- Clear visual hierarchy emphasizing important technical data

### 2. Trust & Reliability
- Professional color scheme and typography
- Consistent design language across all pages
- Clear indication of authorized distributor status
- Prominent display of certifications and quality standards

### 3. Global Approach
- Culturally neutral imagery and iconography
- Clear, simple navigation for international users
- Responsive design for various global devices
- Multi-region contact information accessibility

### 4. Performance Focus
- Optimized for fast loading times globally
- Minimal heavy assets that can slow page loads
- Progressive enhancement approach for different browsers
- Efficient image loading and caching strategies

## Layout Specifications

### Grid System
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Columns**: 12-column responsive grid system
- **Gutters**: 16px on mobile, 24px on tablet, 32px on desktop
- **Margins**: 16px from screen edge on mobile, 24px on desktop

### Header Specifications
- **Height**: 80px fixed height
- **Elements**: Logo, primary navigation, search, contact CTA
- **Sticky Behavior**: Fixed on scroll after initial view
- **Mobile**: Collapsible hamburger menu, logo with contact button

### Footer Specifications
- **Height**: 300px desktop, 400px mobile
- **Columns**: 4-column layout on desktop (2-column mobile)
- **Sections**: Company info, product links, solution links, contact information
- **Copyright**: Clear copyright and LEM authorization details

## Component Guidelines

### 1. Navigation Components

#### Main Navigation
- **Height**: 60px
- **Spacing**: 20px horizontal padding per item
- **Hover State**: Subtle blue underline, 0.3s transition
- **Active State**: Stronger blue underline, bold text
- **Dropdown**: 300ms fade-in animation, box shadow for depth
- **Mobile**: Full-screen overlay menu with slide-in animation

#### Breadcrumb Navigation
- **Style**: > separator, #6B7280 text color
- **Hover**: Primary blue color transition
- **Position**: Below main header, above page content
- **Responsive**: Hidden on mobile when space is limited

### 2. Content Components

#### Product Cards
- **Size**: 300px x 220px standard, responsive scaling
- **Elements**: Image, model number, key specs, CTA button
- **Hover Effect**: Subtle shadow increase, 0.3s transition
- **Border**: 1px solid #E5E7EB, rounded corners (4px)
- **Spacing**: 24px between cards (responsive)

#### Solution Cards
- **Layout**: Horizontal on desktop, vertical on mobile
- **Elements**: Icon/image, title, description, CTA
- **Spacing**: 32px between cards
- **Color**: White background with accent border on hover

#### Article Cards
- **Thumbnail**: 16:9 aspect ratio, lazy loaded
- **Meta Information**: Date, author, category tags
- **Content**: Title, excerpt, read time estimate
- **Hover**: Lift effect with shadow, 0.3s transition

### 3. Form Components

#### Contact Forms
- **Fields**: Consistent 44px height, 16px padding
- **Spacing**: 16px vertical spacing between elements
- **Labels**: Above fields, #374151 color
- **Placeholder**: #9CA3AF color, hint text
- **Validation**: Red border for errors, green for success

#### Search Component
- **Bar**: 44px height with search icon
- **Placeholder**: "Search sensors, models, applications..."
- **Suggestions**: Dropdown with matching results
- **Button**: Magnifying glass icon, #3B82F6 color

#### Filter Components
- **Layout**: Sidebar on desktop (40% width), modal on mobile
- **Controls**: Range sliders, checkboxes, dropdowns
- **Apply Button**: Sticky at bottom of mobile filters
- **Reset Function**: Clear all filters option

### 4. Interactive Components

#### Buttons
- **Primary**: Blue background (#3B82F6), white text, 8px padding Y / 16px X
- **Secondary**: White background, blue border (#3B82F6), blue text
- **CTA**: Orange background (#F59E0B), white text for urgency
- **Hover States**: Darken by 10% with 0.2s transition
- **Mobile**: Minimum 44px touch target size

#### Tabs
- **Header**: Horizontal alignment with equal width
- **Active State**: Blue bottom border, bold text
- **Inactive State**: Gray text, subtle hover effect
- **Content Area**: Smooth transition between panels

#### Accordion/FAQ
- **Header**: Background #F9FAFB, 48px height
- **Indicator**: Chevron icon with rotation animation
- **Content**: White background, 16px padding
- **Animation**: Smooth height transition (300ms)

### 5. Table Components

#### Product Specification Tables
- **Header**: Dark background (#1E3A8A), white text, bold
- **Rows**: Alternating background (#FFFFFF / #F9FAFB)
- **Borders**: Subtle horizontal lines (#E5E7EB)
- **Zebra Striping**: For readability of technical data
- **Responsive**: Horizontal scroll on mobile

#### BOM Tables
- **Columns**: Part number, description, quantity, notes
- **Linking**: Part numbers as clickable links to product pages
- **Styling**: Header with blue background, body alternating rows

## Visual Elements

### Iconography
- **Style**: Line-style, consistent stroke width (2px)
- **Set**: Custom SVG icons for sensor types (Hall, voltage, fluxgate, Rogowski)
- **Color**: #4B5563 for default, #3B82F6 for active
- **Size**: 24px standard, scalable for different contexts

### Imagery
- **Style**: Professional product photography with white/gray backgrounds
- **Application**: Technical diagrams and solution block diagrams
- **Optimization**: WebP format with JPEG fallback, lazy loading
- **Alt Text**: Detailed descriptions following accessibility standards

### Backgrounds
- **Hero Sections**: Abstract technological patterns or gradients
- **Feature Sections**: Subtle geometric patterns in off-white
- **Cards**: Clean white with subtle shadows for depth
- **Accents**: Orange or blue highlights for CTAs

## Responsive Design Guidelines

### Mobile-First Approach
- **Base Styles**: Designed for 320px screen width
- **Progressive Enhancement**: Add complexity for larger screens
- **Touch Targets**: Minimum 44px for interactive elements
- **Navigation**: Hamburger menu with slide-out implementation

### Tablet Optimization
- **Layout**: Two-column displays where appropriate
- **Navigation**: Hybrid approach - menu icon with submenu preview
- **Forms**: Larger input areas for touch interaction
- **Images**: Responsive scaling for screen real estate

### Desktop Experience
- **Navigation**: Full horizontal menu with dropdowns
- **Grid Layouts**: Multi-column content arrangements
- **Advanced Interactions**: Hover states and tooltips
- **Efficiency**: Reduced clicks for complex tasks

## Accessibility Standards

### Color Contrast
- **Text/Background**: Minimum 4.5:1 ratio (AA compliance)
- **Large Text**: 3:1 ratio for text 18px+
- **Interactive Elements**: Clear visual states for keyboard navigation

### Keyboard Navigation
- **Focus Indicators**: Visible outlines for all interactive elements
- **Logical Flow**: Tab order following visual sequence
- **Skip Links**: Direct navigation to main content

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy (H1-H6)
- **ARIA Labels**: Descriptive labels for interactive components
- **Alternative Text**: Descriptive alt text for all meaningful images