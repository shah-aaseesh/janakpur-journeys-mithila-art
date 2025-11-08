
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ServiceDetail from "@/components/ServiceDetail";

const NatureTreksDetail = () => {
  const serviceData = {
    title: "Nature Treks",
    description: "Experience the natural beauty of Janakpur's surrounding landscapes.",
    longDescription: "Discover the serene natural beauty surrounding Janakpur through our guided nature treks. From peaceful walks along the Dudhmati River to exploring the lush greenery of nearby villages, our treks offer a refreshing escape from the urban hustle while connecting you with the region's natural heritage.",
    packageOptions: [
      {
        name: "River & Village Trek",
        duration: "Half Day (4-5 hours)",
        coverage: "Dudhmati riverbank, nearby villages",
        idealFor: "Nature lovers, photographers, casual hikers",
        price: "Rs. 2,500",
        itinerary: [
          { time: "7:00 AM", activity: "Start from city center", description: "Brief orientation" },
          { time: "7:30 AM", activity: "Dudhmati river walk", description: "Scenic riverside path" },
          { time: "9:00 AM", activity: "Village exploration", description: "Local life interaction" },
          { time: "10:30 AM", activity: "Traditional boat ride", description: "River experience" },
          { time: "11:30 AM", activity: "Local farm visit", description: "Agricultural insights" },
          { time: "12:00 PM", activity: "Traditional snacks", description: "Local refreshments" }
        ],
        includes: ["Professional nature guide", "Boat ride", "Local refreshments", "Photography stops", "Cultural insights"]
      }
    ],
    highlights: ["River walks", "Village exploration", "Boat rides", "Local farm visits"],
    pattern: "peacock" as const
  };

  return (
    <>
      <Helmet>
        <title>Nature Treks Janakpur - River Walks & Village Trails | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Experience the natural beauty of Janakpur with guided nature treks. Walk along the Dudhmati River, explore villages, enjoy boat rides, and connect with the region's natural heritage." 
        />
        <meta name="keywords" content="nature treks Janakpur, river walks, village trails, boat rides, eco tourism, outdoor activities, nature tours Nepal" />
      </Helmet>
      <ServiceDetail {...serviceData} />
    </>
  );
};

export default NatureTreksDetail;
