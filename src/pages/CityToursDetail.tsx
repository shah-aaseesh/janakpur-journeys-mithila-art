
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
    longDescription: "Discover the heart of Mithila culture and Hindu spirituality in Janakpur, the birthplace of Goddess Sita. Our expertly crafted tour packages offer you the opportunity to explore over 18 sacred sites, from the magnificent Janaki Mandir to hidden gems like Ratna Sagar and Mani Mandap. Whether you choose our Full Day City Tour or the comprehensive Heritage & Spiritual Trail, you'll experience authentic Mithila culture, traditional cuisine, and spiritual enlightenment guided by our knowledgeable local experts.",
    packageOptions: [
      {
        name: "Full Day City Tour",
        duration: "1 Day (7-9 hours)",
        coverage: "10 major sites",
        idealFor: "Pilgrims, cultural explorers, art lovers",
        price: "Starting from NPR 2,500 per person (for group of 4 or more)",
        itinerary: [
          {
            time: "9:00 AM",
            activity: "Janaki Mandir",
            description: "Grand temple dedicated to Goddess Sita - marvel at the architectural beauty and participate in morning prayers"
          },
          {
            time: "10:00 AM", 
            activity: "Ram Mandir",
            description: "Historic temple resembling Pashupatinath - experience the spiritual ambiance and ancient architecture"
          },
          {
            time: "10:30 AM",
            activity: "Janak Mandir",
            description: "Temple of King Janak - learn about the legendary king and his significance in Hindu mythology"
          },
          {
            time: "11:15 AM",
            activity: "Ram-Janaki Bibaha Mandap",
            description: "Celebrates the divine wedding - witness the exact spot where Lord Rama and Sita were married"
          },
          {
            time: "12:00 PM",
            activity: "Lakshman Mandir",
            description: "Inside Janaki complex - dedicated to Lord Rama's devoted brother"
          },
          {
            time: "12:30 PM",
            activity: "Traditional Mithila Thali Lunch",
            description: "Authentic local cuisine experience with traditional Mithila flavors"
          },
          {
            time: "2:00 PM",
            activity: "Rajdevi Mandir",
            description: "Lineage deity of King Janak - explore the royal heritage and family traditions"
          },
          {
            time: "2:45 PM",
            activity: "Sankat Mochan Hanuman Mandir",
            description: "Hanuman's shrine with Ramcharitmanas verses - spiritual chanting and prayers"
          },
          {
            time: "3:30 PM",
            activity: "Barhabigha/Rangabhoomi",
            description: "Site of annual Bibaha Panchami fair - learn about the grand celebration traditions"
          },
          {
            time: "4:30 PM",
            activity: "Ganga Sagar Pond",
            description: "Sacred site with daily Ganga Aarti - participate in the evening spiritual ceremony"
          },
          {
            time: "5:30 PM",
            activity: "Dhanush Sagar",
            description: "Linked to Shiva Dhanush legend - conclude with the mystical bow-breaking story"
          }
        ],
        includes: [
          "Mithila-style welcome ceremony",
          "Rickshaw ride around temple routes",
          "Traditional Mithila Thali Lunch",
          "Evening Ganga Aarti Experience",
          "English/Hindi/Maithili-speaking guide",
          "Entry tickets to all temples"
        ]
      },
      {
        name: "Heritage & Spiritual Trail",
        duration: "2 Days / 1 Night",
        coverage: "18+ spiritual and heritage sites",
        idealFor: "Cultural pilgrims, researchers, honeymooners",
        price: "Starting from NPR 7,500 per person (Includes stay, food, transport & guide - discounts for groups)",
        itinerary: [
          {
            time: "Day 1",
            activity: "Janakpur Highlights",
            description: "All 10 sites from Full Day Tour plus: Angarag Sar (Sita's pre-wedding bath site), Agni Kund (King Janak's yajna site), Ratna Sagar (legendary treasury pond), Mani Mandap (actual wedding ground), Evening Cultural Performance"
          },
          {
            time: "Evening",
            activity: "Cultural Village Stay",
            description: "Authentic village experience with dinner and local folklore session"
          },
          {
            time: "Day 2",
            activity: "Around Janakpur Exploration",
            description: "Nocha Pokhari, Kapileshwar Mahadev Mandir, Mithila Bihari Mandir, Dhanushadham & Dhanush Mandir, Parashuram Talau, Local souvenir shopping (Mithila paintings, paan, makhana)"
          }
        ],
        includes: [
          "Breakfast, Lunch and Dinner (Mithila Cuisine)",
          "A/C vehicle with local guide",
          "Entry tickets to temples & museum",
          "Cultural storytelling session",
          "Cultural village accommodation",
          "Traditional folklore evening"
        ]
      }
    ],
    addOnServices: [
      "Hotel upgrade to premium stay",
      "Cultural photoshoot in Mithila attire", 
      "Janakpur–Jayanagar Train Ride",
      "Mithila Painting Workshop",
      "Spiritual session with local Sadhu or priest",
      "Mithila souvenir collection"
    ],
    highlights: [
      "Visit 10-18+ sacred temples and heritage sites",
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
