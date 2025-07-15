
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CityToursDetail = () => {
  const serviceData = {
    title: "City Tours",
    description: "Discover the vibrant heart of Janakpur through guided tours of bustling streets, colorful markets, and modern attractions.",
    longDescription: "Experience the living culture of Janakpur as we take you through the city's most dynamic areas. From the bustling local markets where vendors sell everything from fresh produce to traditional crafts, to the modern developments that showcase the city's growth, this tour offers a comprehensive view of contemporary Janakpur life. You'll interact with locals, taste street food, and understand the daily rhythm of this sacred city.",
    duration: "4-5 hours",
    groupSize: "1-8 people",
    highlights: [
      "Visit vibrant local markets and bazaars",
      "Explore modern Janakpur developments",
      "Street food tasting experience",
      "Interaction with local vendors and artisans",
      "Photography opportunities at scenic spots",
      "Learn about daily life in Janakpur"
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Meet & Greet",
        description: "Meet your guide at the designated location and brief introduction about the tour"
      },
      {
        time: "9:30 AM",
        activity: "Local Markets Tour",
        description: "Explore the bustling local markets, interact with vendors, and learn about local produce and crafts"
      },
      {
        time: "11:00 AM",
        activity: "Street Food Experience",
        description: "Taste authentic local street food and beverages at popular local spots"
      },
      {
        time: "12:30 PM",
        activity: "Modern Janakpur",
        description: "Visit modern developments, shopping areas, and contemporary attractions"
      },
      {
        time: "1:30 PM",
        activity: "Tour Conclusion",
        description: "Return to starting point with recommendations for further exploration"
      }
    ],
    pricing: {
      individual: "NPR 2,500",
      group: "NPR 2,000 per person"
    },
    includes: [
      "Professional local guide",
      "Street food tasting",
      "Market entrance fees",
      "Bottled water",
      "Photography assistance",
      "Cultural insights and stories"
    ],
    pattern: "peacock" as const
  };

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <ServiceDetail {...serviceData} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CityToursDetail;
