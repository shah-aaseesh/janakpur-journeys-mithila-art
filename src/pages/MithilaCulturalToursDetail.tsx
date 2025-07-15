
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MithilaCulturalToursDetail = () => {
  const serviceData = {
    title: "Mithila Cultural Tours",
    description: "Immerse yourself in the rich Mithila art, culture, and traditions of the region through hands-on experiences and cultural interactions.",
    longDescription: "Dive deep into the vibrant cultural heritage of the Mithila region through our comprehensive cultural tours. Experience the world-famous Mithila art (Madhubani painting) firsthand, participate in traditional crafts, witness cultural performances, and interact with local artists and craftspeople. This tour provides an authentic insight into the customs, traditions, and artistic legacy that make Mithila culture unique and globally recognized.",
    duration: "5-6 hours",
    groupSize: "1-6 people",
    highlights: [
      "Hands-on Mithila art workshop",
      "Visit to traditional artist homes",
      "Cultural performance experience",
      "Traditional craft demonstrations",
      "Local cuisine tasting",
      "Purchase authentic artworks"
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Cultural Introduction",
        description: "Meet your cultural guide and introduction to Mithila traditions and significance"
      },
      {
        time: "9:30 AM",
        activity: "Artist Home Visits",
        description: "Visit traditional Mithila artists in their homes and workshops"
      },
      {
        time: "11:00 AM",
        activity: "Art Workshop",
        description: "Hands-on Mithila painting workshop with expert guidance"
      },
      {
        time: "1:00 PM",
        activity: "Traditional Lunch",
        description: "Authentic Mithila cuisine prepared by local families"
      },
      {
        time: "2:30 PM",
        activity: "Cultural Performances",
        description: "Traditional music, dance, and storytelling performances"
      },
      {
        time: "3:30 PM",
        activity: "Craft Shopping",
        description: "Visit to authentic craft shops and artist cooperatives"
      }
    ],
    pricing: {
      individual: "NPR 4,500",
      group: "NPR 3,800 per person"
    },
    includes: [
      "Cultural expert guide",
      "Mithila art workshop materials",
      "Traditional lunch",
      "Artist home visits",
      "Cultural performance tickets",
      "Authentic artwork certificate"
    ],
    pattern: "flower" as const
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

export default MithilaCulturalToursDetail;
