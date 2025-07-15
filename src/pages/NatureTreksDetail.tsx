
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const NatureTreksDetail = () => {
  const serviceData = {
    title: "Nature Treks",
    description: "Embark on hiking adventures through the beautiful landscapes surrounding Janakpur, discovering natural beauty and wildlife.",
    longDescription: "Escape the city and explore the natural beauty surrounding Janakpur through our carefully planned nature treks. These adventures take you through diverse landscapes including forests, rural villages, rivers, and hills. Experience the biodiversity of the region, spot local wildlife, and enjoy panoramic views while learning about the local ecosystem and conservation efforts. Perfect for nature enthusiasts and photography lovers.",
    duration: "6-8 hours",
    groupSize: "1-8 people",
    highlights: [
      "Scenic hiking trails and viewpoints",
      "Wildlife spotting opportunities",
      "Visit to rural villages",
      "River and forest exploration",
      "Traditional village lunch",
      "Photography of natural landscapes"
    ],
    itinerary: [
      {
        time: "7:00 AM",
        activity: "Early Start",
        description: "Meet at designated point and drive to trek starting location"
      },
      {
        time: "8:00 AM",
        activity: "Trek Begins",
        description: "Start hiking through scenic trails with nature guide"
      },
      {
        time: "10:00 AM",
        activity: "Wildlife Spotting",
        description: "Pause for wildlife observation and photography"
      },
      {
        time: "12:00 PM",
        activity: "Village Visit",
        description: "Visit local village and enjoy traditional lunch"
      },
      {
        time: "2:00 PM",
        activity: "River Exploration",
        description: "Explore riverside areas and natural pools"
      },
      {
        time: "3:30 PM",
        activity: "Return Trek",
        description: "Return journey with sunset views"
      }
    ],
    pricing: {
      individual: "NPR 3,800",
      group: "NPR 3,200 per person"
    },
    includes: [
      "Professional trekking guide",
      "Transportation to/from trek point",
      "Traditional village lunch",
      "Bottled water and snacks",
      "First aid kit",
      "Wildlife spotting guide"
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

export default NatureTreksDetail;
