export default function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": "AFBAM Plumbing & Integrated Services",
    "image": "https://www.afbam.com/logo.png", // Replace with your actual logo URL
    "@id": "https://www.afbam.com",
    "url": "https://www.afbam.com",
    "telephone": "+1234567890", // Replace with your actual phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Service Lane",
      "addressLocality": "Your City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128, // Replace with your coordinates
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/afbamplumbing",
      "https://instagram.com/afbamplumbing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}