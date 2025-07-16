
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Gallery from "@/components/Gallery";

const CityToursDetail = () => {
  const serviceData = {
    title: "Janakpurdham City Tour Package",
    description: "Explore the sacred city of Janakpur with comprehensive tour packages covering major spiritual and heritage sites.",
    longDescription: "Discover the heart of Mithila culture and Hindu spirituality in Janakpur, the birthplace of Goddess Sita. Our expertly crafted tour packages offer you the opportunity to explore sacred sites, experience authentic Mithila culture, traditional cuisine, and spiritual enlightenment guided by our knowledgeable local experts.",
    packageOptions: [
      {
        name: "Full Day City Tour",
        duration: "7–9 hours",
        coverage: "10 major sites",
        idealFor: "Pilgrims, cultural explorers, art lovers",
        price: "Starting from NPR 2,500 per person (for group of 4 or more)",
        itinerary: [
          {
            time: "",
            activity: "Janaki Mandir",
            description: "Grand temple dedicated to Goddess Sita"
          },
          {
            time: "",
            activity: "Ram Mandir",
            description: "Historic temple resembling Pashupatinath"
          },
          {
            time: "",
            activity: "Janak Mandir",
            description: "Temple of King Janak"
          },
          {
            time: "",
            activity: "Ram-Janaki Bibaha Mandap",
            description: "Celebrates the divine wedding"
          },
          {
            time: "",
            activity: "Lakshman Mandir",
            description: "Inside Janaki complex"
          },
          {
            time: "",
            activity: "Rajdevi Mandir",
            description: "Lineage deity of King Janak"
          },
          {
            time: "",
            activity: "Sankat Mochan Hanuman Mandir",
            description: "Hanuman's shrine with Ramcharitmanas verses"
          },
          {
            time: "",
            activity: "Barhabigha/Rangabhoomi",
            description: "Site of annual Bibaha Panchami fair"
          },
          {
            time: "",
            activity: "Ganga Sagar Pond",
            description: "Sacred site with daily Ganga Aarti"
          },
          {
            time: "",
            activity: "Dhanush Sagar",
            description: "Linked to Shiva Dhanush legend"
          }
        ],
        includes: [
          "Mithila-style welcome",
          "Rickshaw ride around temple routes",
          "Traditional Mithila Thali Lunch",
          "Evening Ganga Aarti Experience",
          "English/Hindi/Maithili-speaking guide"
        ]
      },
      {
        name: "Heritage & Spiritual Trail",
        duration: "2 Days / 1 Night",
        coverage: "18+ spiritual and heritage sites",
        idealFor: "Cultural pilgrims, researchers, honeymooners",
        price: "Starting from NPR 7,500 per person (Includes stay, food, transport & guide – discounts for groups)",
        itinerary: [
          {
            time: "",
            activity: "Day 1: Janakpur Highlights",
            description: ""
          },
          {
            time: "",
            activity: "All 10 sites from the Full Day Tour",
            description: ""
          },
          {
            time: "",
            activity: "Angarag Sar",
            description: "Sita's pre-wedding bath site"
          },
          {
            time: "",
            activity: "Agni Kund",
            description: "Site of King Janak's yajna"
          },
          {
            time: "",
            activity: "Ratna Sagar",
            description: "Legendary treasury pond"
          },
          {
            time: "",
            activity: "Mani Mandap",
            description: "Actual wedding ground of Ram & Sita"
          },
          {
            time: "",
            activity: "Evening Cultural Performance (Optional)",
            description: ""
          },
          {
            time: "",
            activity: "Stay: Cultural Village with dinner & local folklore session",
            description: ""
          },
          {
            time: "",
            activity: "Day 2: Around Janakpur",
            description: ""
          },
          {
            time: "",
            activity: "Nocha Pokhari",
            description: "Historic pond in Rampur"
          },
          {
            time: "",
            activity: "Kapileshwar Mahadev Mandir",
            description: "Sage Kapil's shrine"
          },
          {
            time: "",
            activity: "Mithila Bihari Mandir",
            description: "Start of Parikrama tradition"
          },
          {
            time: "",
            activity: "Dhanushadham & Dhanush Mandir",
            description: "Shiva bow legend"
          },
          {
            time: "",
            activity: "Parashuram Talau",
            description: "Penance site of Rishi Parashuram"
          },
          {
            time: "",
            activity: "Local souvenir shopping (Mithila paintings, paan, makhana)",
            description: ""
          }
        ],
        includes: [
          "Breakfast, Lunch and Dinner (Mithila Cuisine)",
          "A/C vehicle with local guide",
          "Entry tickets to temples & museum",
          "Cultural storytelling session"
        ]
      }
    ],
    addOnServices: [
      "🛏️ Hotel upgrade to premium stay",
      "📸 Cultural photoshoot in Mithila attire", 
      "🚂 Janakpur–Jayanagar Train Ride",
      "🎨 Mithila Painting Workshop",
      "🧘‍♂️ Spiritual session with local Sadhu or priest",
      "Mithila souvenir"
    ],
    highlights: [
      "Visit major temples and heritage sites",
      "Experience authentic Mithila culture and traditions",
      "Participate in daily Ganga Aarti ceremony",
      "Traditional Mithila Thali and local cuisine",
      "Expert guidance in English/Hindi/Maithili",
      "Cultural performances and folklore sessions",
      "Rickshaw rides through temple routes",
      "Photography at scenic and spiritual locations"
    ],
    pattern: "peacock" as const
  };

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <ServiceDetail {...serviceData} />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CityToursDetail;
