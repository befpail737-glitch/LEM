# LEM English Website - Feature Specifications

## Overview
This document details the functional and technical specifications for all features of the LEM English Website. Each feature is designed to address specific user needs while supporting SEO objectives and business goals.

## 1. Homepage Features

### 1.1 Hero Banner
- **Purpose**: Create immediate impact and communicate value proposition
- **Visual Elements**: Abstract magnetic field lines or industrial automation imagery with clear call-to-action overlay
- **Text Elements**: 
  - Primary headline: "Global Leader in Electrical Measurement Solutions - Authorized LEM Distributor"
  - Secondary text: "Premium LEM sensors for industrial, automotive, and renewable energy applications"
  - Primary CTA: "Explore Products" (links to product center)
  - Secondary CTA: "Contact Technical Support"
- **Responsive Design**: Full-width on desktop, optimized for mobile with reduced text overlay
- **Performance**: Image optimization with lazy loading, load time <2 seconds

### 1.2 Core Advantages Section
- **Layout**: 4-column grid with icon, title, and description
- **Advantages**:
  1. "Original Factory Channel" - Direct LEM supply chain
  2. "Stock Inventory" - Immediate availability for critical components
  3. "FAE Technical Support" - Expert engineering guidance
  4. "Rapid Response" - Quick quote/delivery turnaround
- **Visual Elements**: Custom SVG icons for each advantage
- **Content**: 2-3 sentence descriptions with specific benefits

### 1.3 Core Product Areas
- **Layout**: 5-card grid layout with hover effects
- **Categories**:
  1. Industrial Hall Sensors - Open-loop and closed-loop current transducers
  2. High Precision Sensors - Fluxgate technology for maximum accuracy
  3. Automotive Sensors - Specialized for vehicular applications (HAH, CAB, DHAB series)
  4. Smart Grid Products - Voltage transducers and current sensors for power systems
  5. Rogowski Coils - Flexible AC current measurement solutions
- **Visual Elements**: Custom SVG icons for each category
- **Functionality**: Clickable cards linking to respective product category pages

### 1.4 Solutions & Applications
- **Layout**: 4-card layout showcasing industry applications
- **Applications**:
  1. Industrial Drives - Variable frequency drives, servo systems
  2. Rail Traction - Train control and power systems
  3. Solar/Wind Power - Inverters and power conversion
  4. BMS Systems - Battery management for EVs and energy storage
- **Visual Elements**: Industry-specific imagery or diagrams
- **Functionality**: Links to detailed solution pages

### 1.5 Latest News Section
- **Content**: 3 most recent news items (company updates, product releases, industry news)
- **Display**: Cards with thumbnail, title, excerpt, and publication date
- **Functionality**: Auto-rotate with manual controls, linking to full articles

### 1.6 Final CTA Section
- **Layout**: Full-width banner with contrasting background
- **Message**: "Need technical support or product samples? Contact our FAE team."
- **CTA Options**: 
  - "Request Product Samples"
  - "Schedule Technical Consultation"
  - "Get Product Quote"
- **Contact Integration**: Direct form submission or phone click-to-call

## 2. Product Center Features

### 2.1 Product Categories Navigation
- **Structure**: Hierarchical navigation matching requirements:
  - Hall Effect Current Transducers
    - Open Loop Sensors
    - Closed Loop Sensors
  - Voltage Transducers
  - High Precision Sensors (Fluxgate)
  - Automotive Sensors
  - Rogowski Coils
- **Layout**: Sidebar navigation with expandable categories
- **Visual**: Custom SVG icons for each category
- **Functionality**: Breadcrumb navigation to maintain context

### 2.2 Category Pages (e.g., Hall Effect Current Transducers)
- **Top Content Area**: 200-300 word introduction about the sensor category
- **Key Parameters**: Highlight critical specifications with icons
- **Typical Models**: Featured product showcase with links
- **Advantages Comparison**: Visual table comparing open-loop vs closed-loop sensors
- **Selection Guide**: Link to detailed selection guide "How to Choose Current Sensors for Drives"
- **FAE Review**: Expert commentary on category highlights and applications
- **Alternatives/Companions**: Links to related accessories or alternative models
- **FAQ Module**: 3-5 common questions about the category
- **CTA Elements**: 
  - "Download Datasheet"
  - "Request Sample"
  - "Get Quote"
  - "Technical Consultation"

### 2.3 Product Model Tables
- **Layout**: Responsive table with horizontal scrolling on mobile
- **Columns**: Model, IPN, Supply Voltage, Accuracy, Bandwidth, Mounting Type, Package
- **Filtering**: Dynamic filtering controls for each parameter
- **Sorting**: Clickable headers for ascending/descending sort
- **Export**: Option to export table data to CSV

### 2.4 Product Filtering System
- **Filter Options**:
  - Rated Current (IPN): Range slider and presets
  - Supply Voltage: Checkbox selection
  - Accuracy: Range slider
  - Bandwidth: Range slider
  - Mounting Type: PCB vs. Through-hole vs. Panel mount
  - Package Type: Dropdown selection
- **Functionality**: Real-time filtering, saved filter states
- **UI**: Collapsible filter panel with "Apply Filters" button

### 2.5 Product Schema Implementation
- **Format**: JSON-LD markup for each product
- **Properties**: Name, SKU, description, manufacturer, technical specifications
- **Availability**: Stock status and pricing information
- **Validation**: Testing with Google's Rich Results Test tool

## 3. Solutions Section Features

### 3.1 Solution Categories
- **URL Structure**: `/solutions/ev-bms`, `/solutions/solar-inverters`, etc.
- **Pages**:
  1. Electric Vehicle BMS (Battery Management Systems)
  2. Solar Inverter Current Detection
  3. Servo Drive Motor Control
  4. DC Charging Station Metering
  5. Rail Traction Monitoring

### 3.2 Solution Page Structure
- **Solution Diagram**: Visual block diagram showing LEM sensor placement
- **Core Advantages**: 3-5 key benefits of using LEM sensors for the application
- **BOM Recommendations**: Table of recommended LEM products (with links to product pages)
- **Technical Considerations**: Specific requirements and challenges for the application
- **Case Study**: Real-world implementation example
- **Related Products**: Carousel of directly linked products

### 3.3 BOM Linking System
- **Automatic Linking**: Part numbers in BOM tables link directly to product pages
- **Cross-referencing**: Related applications linked to the same products
- **Updates**: Central management of part number links across all solution pages

## 4. Technical Support Features

### 4.1 Content Categories
- **Selection**: "Selection Guides", "Application Notes", "Installation Guides", "Troubleshooting"
- **Tags**: "Hall Effect", "Fluxgate", "DC Measurement", "AC Measurement", "Isolation", "BMS"
- **Structure**: Taxonomy that allows multiple category and tag assignments per article

### 4.2 Contextual Linking System
- **Automatic Linking**: Internal linking of product models (e.g., "LA 55-P") to product pages
- **Related Terms**: Linking technical concepts (e.g., "magnetic saturation") to relevant articles
- **Smart Recommendations**: 3 related articles suggested at the end of each article

### 4.3 FAE Author Pages
- **Profile Pages**: Dedicated pages for each FAE with expertise areas
- **Content Attribution**: Clear authorship on technical articles
- **Contact Integration**: Direct contact options for each FAE
- **Expertise Display**: Areas of specialization and industry experience

### 4.4 Technical Article Structure
- **Minimum Length**: 800+ words of substantive technical content
- **Problem-Solution Format**: Addressing real engineering challenges
- **Practical Examples**: Circuit diagrams, implementation notes, and design calculations
- **Reference Materials**: Links to relevant datasheets, application notes, and standards

## 5. News Center Features

### 5.1 Content Classification
- **Company News**: Inventory updates, new certifications, office expansions
- **Industry News**: Market trends, regulatory changes, technology developments

### 5.2 SEO Schema Implementation
- **NewsArticle Schema**: JSON-LD markup for news items
- **Rich Snippets**: Optimized for search engine rich results
- **Publication Details**: Author, date, and article description

### 5.3 Content Strategy
- **Topic Relevance**: Connection to "carbon neutrality", "energy storage", "EV growth"
- **Keyword Integration**: Natural use of long-tail keywords like "LEM sensor in energy storage"

## 6. Contact & About Us Features

### 6.1 About Us Page
- **Company History**: Timeline of LiTong Electronics evolution as sensor distributor
- **Capabilities**: Warehousing, technical support, and global reach
- **Certifications**: LEM authorization and quality certifications
- **Team Profiles**: Key personnel and their expertise

### 6.2 Global Contact Page
- **Office Display**: 
  - Hong Kong headquarters with address, email, and map
  - Regional offices with local addresses and contacts
  - International offices (USA, Germany, Japan, India, etc.)
- **Contact Forms**: By region/office for targeted inquiries
- **Direct Contact Options**: WhatsApp (15013702378), WeChat (18612518271) integration

### 6.3 Sidebar Contact Information
- **Persistent Display**: Available on all pages
- **Contact Options**: Phone, email, live chat, and social media links
- **Hours of Operation**: Clear display of business hours by region

## 7. SEO & Internal Linking Features

### 7.1 Automatic Internal Linking
- **Product Model Links**: Automatic linking of part numbers across all content
- **Category Links**: Cross-referencing product categories with solution applications
- **Technical Term Links**: Linking concepts and technologies across articles

### 7.2 Schema Markup
- **Product Schema**: For all products with specifications and availability
- **Article Schema**: For blog posts and technical articles
- **Organization Schema**: For company information and contact details

### 7.3 Site Structure
- **URL Structure**: Clean, descriptive URLs with appropriate hierarchy
- **Breadcrumb Navigation**: Consistent across all product and content pages
- **XML Sitemap**: Dynamically generated for all pages and content

## 8. User Interface Components

### 8.1 Navigation Components
- **Main Navigation**: Horizontal menu with hover effects and submenu indicators
- **Mobile Navigation**: Hamburger menu with smooth animation
- **Secondary Navigation**: Breadcrumb navigation and related content links

### 8.2 Interactive Components
- **Product Comparison Tool**: Side-by-side product specification comparison
- **Search Functionality**: Advanced search with filters and autocomplete
- **Quick Quote System**: Streamlined request form for quotes and samples

### 8.3 Content Components
- **FAQ Accordion**: Expandable/collapsible question-answer sections
- **Technical Diagrams**: Interactive diagrams with hover/click information
- **Image Gallery**: Lightbox-enabled product and application images