
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CustomExperiencesDetail = () => {
  const serviceData = {
    title: "Custom Experiences",
    description: "Personalized itineraries tailored to your interests and schedule, creating unique experiences based on your preferences.",
    longDescription: "Every traveler is unique, and so should their experience be. Our custom experiences are designed specifically around your interests, time availability, and preferences. Whether you're interested in spiritual journeys, photography tours, culinary experiences, or family-friendly activities, we create personalized itineraries that match your vision. Work directly with our experienced guides to craft your perfect Janakpur adventure.",
    duration: "Flexible",
    groupSize: "1-12 people",
    highlights: [
      "Completely personalized itinerary",
      "Flexible timing and duration",
      "Specialized interest focus",
      "Private guide dedication",
      "Customized activity selection",
      "Tailored cultural experiences"
    ],
    itinerary: [
      {
        time: "Planning Phase",
        activity: "Consultation",
        description: "Detailed discussion about your interests, preferences, and expectations"
      },
      {
        time: "Design Phase",
        activity: "Itinerary Creation",
        description: "Custom itinerary designed based on your requirements"
      },
      {
        time: "Confirmation",
        activity: "Final Planning",
        description: "Review and finalize all details, timings, and special arrangements"
      },
      {
        time: "Experience Day",
        activity: "Your Custom Tour",
        description: "Execute your personalized experience with dedicated guide"
      },
      {
        time: "Follow-up",
        activity: "Feedback",
        description: "Post-tour discussion and recommendations for future visits"
      }
    ],
    pricing: {
      individual: "Starting NPR 5,000",
      group: "Starting NPR 4,000 per person"
    },
    includes: [
      "Personal consultation session",
      "Custom itinerary planning",
      "Dedicated private guide",
      "Flexible timing arrangements",
      "Specialized activity coordination",
      "24/7 tour support"
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

export default CustomExperiencesDetail;
