import { useEffect } from 'react';

const SEO = ({
  title = "PubjaabFilms - Professional Film Production Services",
  description = "PubjaabFilms - Creating compelling stories through professional film production, commercials, documentaries, and creative video services in Punjab and beyond.",
  keywords = "film production, video production, commercials, documentaries, Punjab films, Punjabi cinema, video editing, post production, creative direction, brand videos",
  image = "/images/logo.png",
  url = "https://pubjaabfilms.com",
  type = "website",
  author = "PubjaabFilms",
  canonical
}) => {
  const siteTitle = "PubjaabFilms";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteTitle, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Add structured data
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PubjaabFilms",
        "url": "https://pubjaabfilms.com",
        "logo": "https://pubjaabfilms.com/images/logo.png",
        "description": "Professional film production company specializing in commercials, documentaries, and creative video services",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@pubjaabfilms.com"
        },
        "sameAs": [
          "https://www.instagram.com/pubjaabfilms",
          "https://www.facebook.com/pubjaabfilms",
          "https://www.youtube.com/pubjaabfilms"
        ],
        "foundingDate": "2014",
        "numberOfEmployees": "10-50",
        "industry": "Film Production",
        "services": [
          "Film Production",
          "Commercial Videos",
          "Post-Production",
          "Audio Production",
          "Creative Direction",
          "Digital Marketing"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    addStructuredData();
  }, [fullTitle, description, keywords, image, url, type, author, canonical]);

  return null;
};

// Simple provider component (no longer needed but keeping for compatibility)
export const SEOProvider = ({ children }) => {
  return children;
};

export default SEO;