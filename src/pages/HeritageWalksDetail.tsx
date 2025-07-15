
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const HeritageWalksDetail = () => {
  const serviceData = {
    title: "Heritage Walks",
    description: "Journey through centuries of history as we explore ancient temples, historical sites, and architectural marvels with expert commentary.",
    longDescription: "Step back in time and discover the rich historical tapestry of Janakpur through our carefully curated heritage walks. Led by knowledgeable guides, these tours take you through ancient temples, historical monuments, and sites of archaeological significance. Learn about the Mithila kingdom, the architectural styles of different periods, and the stories that shaped this sacred city. Each site comes alive through detailed narration and historical context.",
    duration: "3-4 hours",
    groupSize: "1-10 people",
    highlights: [
      "Visit ancient temples and monuments",
      "Learn about Mithila kingdom history",
      "Explore architectural heritage",
      "Historical storytelling by expert guides",
      "Archaeological site visits",
      "Traditional architecture photography"
    ],
    itinerary: [
      {
        time: "8:00 AM",
        activity: "Historical Overview",
        description: "Meet your heritage guide and get an introduction to Janakpur's historical significance"
      },
      {
        time: "8:30 AM",
        activity: "Ancient Temples Tour",
        description: "Visit and explore the oldest temples in Janakpur with detailed historical context"
      },
      {
        time: "10:00 AM",
        activity: "Archaeological Sites",
        description: "Explore sites of archaeological importance and learn about excavation findings"
      },
      {
        time: "11:00 AM",
        activity: "Heritage Architecture",
        description: "Study traditional Mithila architecture and construction techniques"
      },
      {
        time: "12:00 PM",
        activity: "Historical Narratives",
        description: "Listen to fascinating stories and legends associated with various sites"
      }
    ],
    pricing: {
      individual: "NPR 3,500",
      group: "NPR 2,800 per person"
    },
    includes: [
      "Expert heritage guide",
      "Temple entrance fees",
      "Historical documentation",
      "Bottled water and snacks",
      "Photography permissions",
      "Detailed site explanations"
    ],
    pattern: "fish" as const
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

export default HeritageWalksDetail;
