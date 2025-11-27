/*
LEM Distributor Website - Main JavaScript
Handles interactive elements and functionality
*/

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize other components
    initializeTooltips();
    initializeAccordions();
    initializeProductFiltering();
    initializeContactForms();
});

// Initialize tooltips (for technical specifications)
function initializeTooltips() {
    // Implementation for technical specification tooltips
    // Would show additional details on hover/focus
}

// Initialize accordion components (for FAQ section)
function initializeAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // Toggle active class
            content.classList.toggle('active');
            icon.classList.toggle('active');
            
            // Toggle height for animation
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// Initialize product filtering functionality
function initializeProductFiltering() {
    const filterForm = document.getElementById('product-filter-form');
    
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            applyFilters();
        });
        
        // Add event listeners for filter changes
        const filterInputs = filterForm.querySelectorAll('input, select');
        filterInputs.forEach(input => {
            input.addEventListener('change', applyFilters);
        });
    }
}

// Apply filters to product listings
function applyFilters() {
    const form = document.getElementById('product-filter-form');
    if (!form) return;
    
    const formData = new FormData(form);
    const filters = {};
    
    // Collect filter values
    for (let [key, value] of formData.entries()) {
        if (value) {
            filters[key] = value;
        }
    }
    
    // Apply filters logic here
    // This would filter product cards/rows based on selected criteria
    console.log('Applying filters:', filters);
    
    // Example filtering logic would go here
    // Update the DOM based on filter results
}

// Initialize contact forms
function initializeContactForms() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm(form)) {
                // Submit form data
                submitContactForm(form);
            }
        });
    });
}

// Validate contact form
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            showError(field, 'This field is required');
        } else {
            clearError(field);
        }
    });
    
    // Additional validation for email format
    const emailField = form.querySelector('input[type="email"]');
    if (emailField) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            showError(emailField, 'Please enter a valid email address');
        }
    }
    
    return isValid;
}

// Show error for a form field
function showError(field, message) {
    // Remove existing error
    clearError(field);
    
    // Add error class
    field.classList.add('error');
    
    // Create error element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // Insert after the field
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

// Clear error for a form field
function clearError(field) {
    field.classList.remove('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Submit contact form
function submitContactForm(form) {
    // In a real implementation, this would send the form data to a server
    // For now, we'll just show a success message
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        alert('Thank you for your inquiry! Our team will contact you soon.');
        
        // Reset form
        form.reset();
    }, 1500);
}

// Initialize product comparison functionality
function initializeProductComparison() {
    const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
    
    compareCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateComparisonList(this);
        });
    });
}

// Update product comparison list
function updateComparisonList(checkbox) {
    // Implementation for adding/removing products from comparison
    // This would typically involve updating a persistent comparison list
    console.log('Update comparison list:', checkbox);
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
    
    // Add search suggestions
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            showSearchSuggestions(this.value);
        });
    }
}

// Perform search
function performSearch(query) {
    // Implementation for searching products, articles, etc.
    console.log('Search for:', query);
    // Would redirect to search results page
}

// Show search suggestions
function showSearchSuggestions(query) {
    // Implementation for displaying search suggestions
    // Would typically involve AJAX call to get suggestions
    console.log('Show suggestions for:', query);
}

// Initialize technical diagram interactions
function initializeTechnicalDiagrams() {
    const diagramElements = document.querySelectorAll('.tech-diagram-element');
    
    diagramElements.forEach(element => {
        element.addEventListener('click', function() {
            showDiagramInfo(this.dataset.info);
        });
    });
}

// Show information for technical diagram element
function showDiagramInfo(infoId) {
    // Implementation for showing detailed info for diagram elements
    console.log('Show diagram info:', infoId);
}

// Utility function to update page title dynamically
function updatePageTitle(title) {
    document.title = title + ' - LEM Sensors - Authorized Distributor | LiTong Electronics';
}

// Utility function to update metatags dynamically
function updateMetaTags(description, keywords) {
    const descTag = document.querySelector('meta[name="description"]');
    const keyTag = document.querySelector('meta[name="keywords"]');

    if (descTag && description) {
        descTag.setAttribute('content', description);
    }

    if (keyTag && keywords) {
        keyTag.setAttribute('content', keywords);
    }
}

// A/B Testing Framework for CTAs and Messaging
function initializeABTesting() {
    // Define variations for CTAs and messaging
    const variations = {
        'cta-variation': {
            'original': {
                'hero-primary': '探索产品',
                'hero-secondary': '联系技术支持',
                'weight': 50
            },
            'variation-a': {
                'hero-primary': '获取报价',
                'hero-secondary': '申请样品',
                'weight': 25
            },
            'variation-b': {
                'hero-primary': '查看解决方案',
                'hero-secondary': '技术咨询',
                'weight': 25
            }
        }
    };

    // Check if user is already assigned to a variation
    let currentVariation = localStorage.getItem('lem-site-variation');
    if (!currentVariation) {
        // Assign to a variation based on weights
        currentVariation = getRandomVariation(variations['cta-variation']);
        localStorage.setItem('lem-site-variation', currentVariation);
    }

    // Apply the selected variation
    applyVariation(currentVariation, variations['cta-variation']);

    // Track the page view with the assigned variation
    trackABTest(currentVariation);
}

// Helper function to select a variation based on weights
function getRandomVariation(variations) {
    const totalWeight = Object.values(variations).reduce((sum, v) => sum + v.weight, 0);
    let random = Math.random() * totalWeight;

    for (const [key, value] of Object.entries(variations)) {
        random -= value.weight;
        if (random <= 0) {
            return key;
        }
    }

    // Fallback to first variation
    return Object.keys(variations)[0];
}

// Apply the selected variation to the page
function applyVariation(variationKey, variationData) {
    const variation = variationData[variationKey];

    if (variation) {
        // Update hero primary button text
        const heroPrimaryBtn = document.querySelector('.hero-cta .btn-primary');
        if (heroPrimaryBtn) {
            heroPrimaryBtn.textContent = variation['hero-primary'];
        }

        // Update hero secondary button text
        const heroSecondaryBtn = document.querySelector('.hero-cta .btn-secondary');
        if (heroSecondaryBtn) {
            heroSecondaryBtn.textContent = variation['hero-secondary'];
        }
    }
}

// Track the A/B test in analytics
function trackABTest(variation) {
    // In a real implementation, this would send data to an analytics service
    console.log(`A/B Test: User assigned to variation ${variation}`);

    // Example of how to send to Google Analytics or other tracking service
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'ab_test_exposure', {
    //         'experiment_id': 'cta-variations',
    //         'variation_name': variation
    //     });
    // }
}

// Initialize A/B testing when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize other components
    initializeTooltips();
    initializeAccordions();
    initializeProductFiltering();
    initializeContactForms();

    // Initialize A/B testing framework
    initializeABTesting();
});