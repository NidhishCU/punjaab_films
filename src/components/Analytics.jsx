import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 (GA4) tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }

    // Track page views
    trackPageView(location.pathname);
  }, [location]);

  const trackPageView = (page) => {
    // Custom page view tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }
  };

  // Track custom events
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }
  };

  // Track business-specific events
  useEffect(() => {
    // Track service inquiries
    const trackServiceInquiry = (service) => {
      trackEvent('service_inquiry', {
        event_category: 'lead_generation',
        service_type: service,
        event_label: `Inquiry for ${service}`
      });
    };

    // Track portfolio views
    const trackPortfolioView = (project) => {
      trackEvent('portfolio_view', {
        event_category: 'engagement',
        project_name: project,
        event_label: `Viewed ${project} project`
      });
    };

    // Track contact form submissions
    const trackContactSubmission = () => {
      trackEvent('contact_form_submit', {
        event_category: 'lead_generation',
        event_label: 'Contact form submitted'
      });
    };

    // Make tracking functions globally available
    window.trackServiceInquiry = trackServiceInquiry;
    window.trackPortfolioView = trackPortfolioView;
    window.trackContactSubmission = trackContactSubmission;

    return () => {
      // Cleanup
      delete window.trackServiceInquiry;
      delete window.trackPortfolioView;
      delete window.trackContactSubmission;
    };
  }, []);

  return null; // This component doesn't render anything
};

// Google Analytics Script Component
export const GoogleAnalytics = ({ measurementId }) => {
  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production' || !measurementId) return;

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
};

// Schema.org structured data for better SEO
export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pubjaabfilms.com/#organization",
        "name": "PubjaabFilms",
        "url": "https://pubjaabfilms.com",
        "sameAs": [
          "https://www.instagram.com/pubjaabfilms",
          "https://www.facebook.com/pubjaabfilms",
          "https://www.youtube.com/pubjaabfilms"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://pubjaabfilms.com/images/logo.png",
          "width": 200,
          "height": 200
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@pubjaabfilms.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://pubjaabfilms.com/#website",
        "url": "https://pubjaabfilms.com",
        "name": "PubjaabFilms - Professional Film Production Services",
        "description": "Professional film production company specializing in commercials, documentaries, and creative video services",
        "publisher": {
          "@id": "https://pubjaabfilms.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://pubjaabfilms.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://pubjaabfilms.com/#webpage",
        "url": "https://pubjaabfilms.com",
        "name": "PubjaabFilms - Professional Film Production Services",
        "isPartOf": {
          "@id": "https://pubjaabfilms.com/#website"
        },
        "about": {
          "@id": "https://pubjaabfilms.com/#organization"
        },
        "description": "Professional film production company with 10+ years experience in creating compelling stories through commercials, documentaries, and creative video services"
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Analytics;