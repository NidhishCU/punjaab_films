import { Helmet, HelmetProvider } from 'react-helmet-async';

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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@pubjaabfilms" />
      <meta name="twitter:creator" content="@pubjaabfilms" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#ff6b35" />
      <meta name="msapplication-TileColor" content="#ff6b35" />
      <meta name="application-name" content={siteTitle} />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "PubjaabFilms",
          "image": "https://pubjaabfilms.com/images/logo.png",
          "url": "https://pubjaabfilms.com",
          "telephone": "+91-XXXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Punjab",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.7333",
            "longitude": "76.7794"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

// Higher-order component to provide Helmet context
export const SEOProvider = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEO;