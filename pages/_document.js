import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getTestimonials } from '../components/TestimonialsData.js';

class MyDocument extends Document {

  

  render() {
    const testimonials = getTestimonials();

    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://379pj43m47.execute-api.us-west-2.amazonaws.com https://maps.googleapis.com https://clientstream.launchdarkly.com;
      frame-src 'self' https://www.google.com;
    `.replace(/\s{2,}/g, ' ').trim();

    return (
      <Html>
        <Head>
          {process.env.NEXT_PUBLIC_ENABLE_CSP === 'true' && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={csp}
            />
          )}
          {/* Preconnect to Google domains for performance */}
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.gstatic.com" />
          {/* Alternate link for language */}
          <link rel="alternate" hrefLang="en" href="https://greenviewsolutions.net" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebSite",
                    "@id": "https://greenviewsolutions.net/#website",
                    "url": "https://greenviewsolutions.net/",
                    "name": "GreenView Solutions",
                    "description": "Professional fencing solutions in Seattle, Washington",
                    "potentialAction": [
                      {
                        "@type": "SearchAction",
                        "target": "https://greenviewsolutions.net/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                      }
                    ]
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://greenviewsolutions.net/#localbusiness1",
                    "name": "GreenView Solutions - Seattle",
                    "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                    "url": "https://greenviewsolutions.net",
                    "telephone": "+206-555-1234",
                    "priceRange": "$$",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "123 Seattle Ave NW Suite 101",
                      "addressLocality": "Seattle",
                      "addressRegion": "WA",
                      "postalCode": "98101",
                      "addressCountry": "US"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 47.6062,
                      "longitude": -122.3321
                    },
                    "openingHoursSpecification": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                      }
                    ],
                    "sameAs": [
                      "https://www.facebook.com/greenviewsolutions",
                      "https://www.twitter.com/greenviewsolutions",
                      "https://www.instagram.com/greenview_solutions_llc"
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Fencing Installation",
                    "provider": {
                      "@id": "https://greenviewsolutions.net/#localbusiness1"
                    },
                    "areaServed": [
                      "Seattle, WA",
                      "Bellevue, WA",
                      "Kirkland, WA",
                      "Redmond, WA",
                      "Tacoma, WA",
                      "Everett, WA",
                      "Renton, WA",
                      "Kent, WA",
                      "Shoreline, WA",
                      "Issaquah, WA"
                    ],
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Fencing Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Wood Fence Installation"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Vinyl Fence Installation"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Chain Link Fence Installation"
                          }
                        }
                      ]
                    }
                  }
                ]
              })
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://greenviewsolutions.net/",
                      "name": "Home"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://greenviewsolutions.net/wood-fences/",
                      "name": "Wood Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@id": "https://greenviewsolutions.net/vinyl-fences/",
                      "name": "Vinyl Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@id": "https://greenviewsolutions.net/chain-link-fences/",
                      "name": "Chain Link Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@id": "https://greenviewsolutions.net/ornamental-iron-fences/",
                      "name": "Ornamental Iron Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                      "@id": "https://greenviewsolutions.net/portfolio/",
                      "name": "Portfolio"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                      "@id": "https://greenviewsolutions.net/contact/",
                      "name": "Contact"
                    }
                  }
                ]
              })
            }}
          />

          <script
            type="application/ld+json"
            
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "GreenView Solutions",
                "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                "url": "https://greenviewsolutions.net",
                "review": testimonials.map(testimonial => ({
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": testimonial.rating.toString()
                  },
                  "name": testimonial.review.substring(0, 50) + "...",
                  "author": {
                    "@type": "Person",
                    "name": testimonial.author
                  },
                  "reviewBody": testimonial.review,
                  "datePublished": testimonial.date
                })),
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
                  "reviewCount": testimonials.length.toString()
                }
              })
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;