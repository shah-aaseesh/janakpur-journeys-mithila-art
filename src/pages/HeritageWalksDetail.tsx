
import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceDetail from "@/components/ServiceDetail";

const HeritageWalksDetail = () => {
  const serviceData = {
    title: "Heritage Walks",
    description: "Explore ancient temples and historical sites with expert commentary.",
    longDescription: "Step into the pages of history as we guide you through Janakpur's ancient temples, sacred sites, and historical monuments. Our heritage walks reveal the architectural marvels and spiritual significance of this holy city.",
    packageOptions: [
      {
        name: "Full Day Heritage Walk",
        duration: "6-8 hours",
        coverage: "12+ heritage sites",
        idealFor: "History enthusiasts, pilgrims",
        price: "Rs. 3,500",
        itinerary: [
          { time: "7:00 AM", activity: "Start at Janaki Mandir", description: "Main temple complex tour" },
          { time: "9:00 AM", activity: "Ram Mandir & Janak Mandir", description: "Historical significance" },
          { time: "11:00 AM", activity: "Ancient pond circuit", description: "Sacred water bodies" },
          { time: "1:00 PM", activity: "Lunch break", description: "Traditional meal" },
          { time: "2:30 PM", activity: "Rajdevi & other temples", description: "Local deities" },
          { time: "4:00 PM", activity: "Historical monuments", description: "Architecture study" },
          { time: "5:30 PM", activity: "Evening aarti", description: "Spiritual conclusion" }
        ],
        includes: ["Professional guide", "All entry fees", "Traditional lunch", "Cultural insights", "Photography guidance"]
      }
    ],
    highlights: ["Ancient temple architecture", "Historical storytelling", "Sacred pond visits", "Cultural immersion"],
    pattern: "fish" as const
  };

  return (
    <>
      <Helmet>
        <title>Heritage Walks Janakpur - Ancient Temples & History Tours | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Explore Janakpur's rich heritage with guided walks through ancient temples, historical sites, and sacred monuments. Discover centuries-old architecture and spiritual stories." 
        />
        <meta name="keywords" content="heritage walks Janakpur, temple tours, historical sites, ancient architecture, cultural heritage, guided walks Nepal" />
        <link rel="canonical" href="https://traveljanakpur.com/services/heritage-walks" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traveljanakpur.com/services/heritage-walks" />
        <meta property="og:title" content="Heritage Walks Janakpur - Ancient Temples & History Tours | Travel Janakpur" />
        <meta property="og:description" content="Explore Janakpur's rich heritage with guided walks through ancient temples, historical sites, and sacred monuments. Discover centuries-old architecture and spiritual stories." />
        <meta property="og:site_name" content="Travel Janakpur" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heritage Walks Janakpur - Ancient Temples & History Tours | Travel Janakpur" />
        <meta name="twitter:description" content="Explore Janakpur's rich heritage with guided walks through ancient temples, historical sites, and sacred monuments." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Heritage Walks Janakpur",
            "description": "Step into the pages of history as we guide you through Janakpur's ancient temples, sacred sites, and historical monuments.",
            "touristType": ["History enthusiasts", "Pilgrims"],
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Janakpur",
              "url": "https://traveljanakpur.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "3500",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <ServiceDetail {...serviceData} />
    </>
  );
};

export default HeritageWalksDetail;
