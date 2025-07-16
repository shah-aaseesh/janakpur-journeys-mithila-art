
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const HeritageWalksDetail = () => {
  const serviceData = {
    title: "Janakpur Heritage Walk – A Walking Tour Through the Sacred City",
    description: "Walk the path where Ram & Sita once walked.",
    longDescription: "Step back in time and discover the rich historical tapestry of Janakpur through our carefully curated heritage walks. This walk is not just a journey through Janakpur's temples and ponds—it's a spiritual dialogue with time.",
    duration: "Half Day: 3–4 hours / Full Day: 6–7 hours (Flexible timings: Morning or Evening)",
    groupSize: "1-10 people",
    highlights: [
      "📍 Start Point: Janaki Mandir Main Gate",
      "📍 End Point: Ganga Sagar Pond",
      "Walk through 12 sacred heritage sites",
      "Experience the evening Ganga Aarti",
      "Learn about Ram & Sita's divine story",
      "Explore Mithila kingdom history",
      "Traditional architecture and cultural insights"
    ],
    itinerary: [
      {
        time: "",
        activity: "🏰 Janaki Mandir",
        description: "Start your walk at this magnificent palace-like temple, the soul of Janakpur, built in 1911 AD. Admire its Baroque-Mughal architecture, and get a brief cultural orientation by your guide."
      },
      {
        time: "",
        activity: "🛕 Janak Mandir",
        description: "Visit the temple of King Janak – father of Sita – and learn about his philosophical legacy and his symbolic fragmented idol."
      },
      {
        time: "",
        activity: "🛕 Ram Mandir",
        description: "Explore the tiered pagoda-style Ram Mandir built by Amar Singh Thapa in 1782, home to idols discovered by Chaturbhuj Giri."
      },
      {
        time: "",
        activity: "🕉️ Ram Janaki Bibaha Mandap",
        description: "Stand in the symbolic venue of Ram and Sita's wedding, see the marble floors and the glass walls that narrate their epic union."
      },
      {
        time: "",
        activity: "🛕 Lakshman Mandir",
        description: "In the northeast corner of Janaki Temple, visit this small shrine devoted to Lakshman and Lavakush."
      },
      {
        time: "",
        activity: "🔱 Rajdevi Mandir",
        description: "Witness the temple of Janak's lineage deity, a powerful site of worship during Dashain."
      },
      {
        time: "",
        activity: "🧘 Barhabigha / Rangabhoomi",
        description: "Pass through the ceremonial ground where Ram-Sita's swayamvar is re-enacted every year during Bibaha Panchami."
      },
      {
        time: "",
        activity: "🐒 Sankat Mochan Hanuman Mandir",
        description: "Pause to offer prayers to Hanuman, protector of Janakpur, and view the Ramcharitmanas verses inscribed on the temple walls."
      },
      {
        time: "",
        activity: "💧 Ratna Sagar",
        description: "Visit the lake where legend says King Janak's treasure was hidden. Learn about Raghunath Das who named it the 'Sea of Jewels.'"
      },
      {
        time: "",
        activity: "🔥 Agni Kund",
        description: "See the yajna site of King Janak, now a sacred pond and temple."
      },
      {
        time: "",
        activity: "🪷 Mani Mandap (optional rickshaw ride)",
        description: "Located about 4 km from the city center in Ranibazar, this is the sacred site where Ram applied sindoor to Sita. Couples often visit for blessings."
      },
      {
        time: "",
        activity: "🌊 Ganga Sagar Pond & Evening Aarti",
        description: "End the walk at Janakpur's holiest pond, Ganga Sagar. Stay for the magical Sandhya Aarti—a blend of incense, chants, lamps, and devotion."
      }
    ],
    pricing: {
      individual: "Half Day Walk: NPR 1,500 per person",
      group: "Full Day Walk: NPR 2,500 per person (Group discounts available)"
    },
    includes: [
      "Certified local cultural guide (English/Hindi/Maithili)",
      "Mithila-style welcome tika and garland",
      "Entry fees to Janaki Mandir Museum & Bibaha Mandap",
      "Evening Ganga Aarti participation",
      "Digital photo souvenir of your tour"
    ],
    addOnServices: [
      "🎨 Mithila Painting Session (Rs. 500)",
      "📸 Mithila attire photoshoot",
      "🥗 Traditional Mithila Lunch Thali (Rs. 400)",
      "🛺 Return rickshaw ride to your hotel",
      "Bottled water and herbal tea break"
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
