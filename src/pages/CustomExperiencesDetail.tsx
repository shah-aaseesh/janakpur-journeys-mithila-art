
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ServiceDetail from "@/components/ServiceDetail";

const CustomExperiencesDetail = () => {
  const serviceData = {
    title: "Custom Experiences",
    description: "Tailored experiences designed around your specific interests and needs.",
    longDescription: "Create your perfect Janakpur experience with our fully customizable tours. Whether you're interested in specific aspects of local culture, want to visit particular sites, or have unique requirements, our expert team will design a personalized itinerary just for you.",
    packageOptions: [
      {
        name: "Fully Customized Tour",
        duration: "Flexible (1-5 days)",
        coverage: "As per your interests",
        idealFor: "Special interests, private groups, unique requirements",
        price: "Custom Pricing",
        itinerary: [
          { time: "Flexible", activity: "Personalized planning", description: "Based on your interests" },
          { time: "Flexible", activity: "Expert consultation", description: "Tour design session" },
          { time: "Flexible", activity: "Tailored experiences", description: "Unique activities" },
          { time: "Flexible", activity: "Special arrangements", description: "Custom requirements" }
        ],
        includes: ["Personalized itinerary", "Dedicated tour manager", "Custom arrangements", "Flexible scheduling", "Special requests handling"]
      }
    ],
    highlights: ["Fully personalized", "Flexible scheduling", "Special arrangements", "Private experiences"],
    pattern: "flower" as const
  };

  return (
    <>
      <Helmet>
        <title>Custom Experiences Janakpur - Personalized Tours | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Create your perfect Janakpur experience with fully customizable tours. Personalized itineraries designed around your specific interests, whether cultural, spiritual, or adventure-focused." 
        />
        <meta name="keywords" content="custom tours Janakpur, personalized travel, private tours, tailored experiences, bespoke travel, customized itineraries" />
      </Helmet>
      <ServiceDetail {...serviceData} />
    </>
  );
};

export default CustomExperiencesDetail;
