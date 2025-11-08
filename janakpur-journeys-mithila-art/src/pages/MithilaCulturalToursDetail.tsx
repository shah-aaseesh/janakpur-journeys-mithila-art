
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ServiceDetail from "@/components/ServiceDetail";

const MithilaCulturalToursDetail = () => {
  const serviceData = {
    title: "Mithila Cultural Tours",
    description: "Immerse in the rich Mithila art, culture, and traditions of the region.",
    longDescription: "Experience the vibrant cultural heritage of Mithila through our immersive cultural tours. From traditional art workshops to folk performances, local cuisine, and interactions with local communities, our tours offer an authentic glimpse into the heart of Mithila culture.",
    packageOptions: [
      {
        name: "Full Cultural Immersion",
        duration: "Full Day (8 hours)",
        coverage: "Art centers, cultural sites, local interactions",
        idealFor: "Culture enthusiasts, art lovers, families",
        price: "Rs. 4,500",
        itinerary: [
          { time: "8:00 AM", activity: "Visit JWDC", description: "Mithila art workshop" },
          { time: "10:30 AM", activity: "Traditional pottery visit", description: "Local artisan demonstration" },
          { time: "12:00 PM", activity: "Folk music session", description: "Local performer interaction" },
          { time: "1:30 PM", activity: "Mithila cuisine lunch", description: "Traditional home-cooked meal" },
          { time: "3:00 PM", activity: "Local market walk", description: "Cultural shopping experience" },
          { time: "4:30 PM", activity: "Traditional craft workshop", description: "Hands-on learning" },
          { time: "6:00 PM", activity: "Cultural performance", description: "Folk dance or music" }
        ],
        includes: ["Professional cultural guide", "Workshop materials", "Traditional lunch", "Performance tickets", "Cultural souvenir"]
      }
    ],
    highlights: ["Mithila art workshops", "Traditional cuisine", "Local artisan visits", "Folk performances"],
    pattern: "flower" as const
  };

  return (
    <>
      <Helmet>
        <title>Mithila Cultural Tours - Art, Food & Traditions | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Immerse in authentic Mithila culture with art workshops, traditional cuisine, folk performances, and local artisan visits. Experience the vibrant heritage of Janakpur region." 
        />
        <meta name="keywords" content="Mithila culture tours, Madhubani art, traditional cuisine, folk performances, cultural immersion, Janakpur culture, local artisans" />
      </Helmet>
      <ServiceDetail {...serviceData} />
    </>
  );
};

export default MithilaCulturalToursDetail;
