
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MithilaCulturalToursDetail = () => {
  const serviceData = {
    title: "Mithila Cultural Tour Package",
    description: "Immerse yourself in the vibrant colors, rituals and soul of Mithila.",
    longDescription: "Experience the authentic heritage of Mithila through our comprehensive cultural packages. From half-day glimpses to multi-day immersions, discover the art, traditions, temples, and soul of this ancient region. Perfect for art lovers, cultural tourists, students, researchers, documentary makers, and curious travelers seeking an authentic Mithila experience.",
    highlights: [
      "🌸 Janaki Mandir Visit & Mithila Welcome with tika, mala, and folk music",
      "🧵 Hands-on workshop at Janakpur Women Development Center (JWDC)",
      "🖼️ Art gallery hopping including Sunaina Mithila Art Gallery and Mithila Art Center",
      "🛕 Cultural temples exploration including Rajdevi Mandir and Ram-Janaki Bibaha Mandap",
      "🪘 Folk music, dance & storytelling session with traditional Maithili attire",
      "🍲 Traditional Mithila food experience with authentic thali",
      "🛍️ Souvenir shopping at Pethiya Bazaar and local markets",
      "🧘 Ganga Aarti at Ganga Sagar Pond for a spiritual conclusion"
    ],
    packageOptions: [
      {
        name: "Half Day Cultural Glimpse",
        duration: "4 hours",
        coverage: "Essential Mithila highlights",
        idealFor: "Quick cultural overview, first-time visitors",
        price: "NPR 2,000 per person",
        itinerary: [
          { time: "", activity: "🌸 Janaki Mandir Visit & Mithila Welcome", description: "Start with a visit to Janaki Mandir – the heart of Mithila heritage. Receive a Mithila-style welcome with tika, mala, and folk music." },
          { time: "", activity: "🧵 Janakpur Women Development Center (JWDC)", description: "Visit the living art center where local women create Mithila paintings, pottery, ceramics, and textiles. Participate in a hands-on workshop." },
          { time: "", activity: "🖼️ Mithila Art Gallery Visit", description: "Visit Sunaina Mithila Art Gallery and meet artists to learn about stories, symbols, and rituals behind each motif." },
          { time: "", activity: "🍲 Traditional Mithila Food Tasting", description: "Enjoy selected items from authentic Mithila cuisine including bhaat, kadhi bari, and lassi." }
        ],
        includes: [
          "Cultural expert guide",
          "Welcome kit with tika and mala",
          "JWDC workshop materials",
          "Gallery entry fees",
          "Traditional food tasting",
          "Basic souvenir"
        ]
      },
      {
        name: "Full Day Cultural Immersion",
        duration: "8 hours",
        coverage: "Comprehensive Mithila experience",
        idealFor: "Art lovers, cultural enthusiasts, detailed exploration",
        price: "NPR 3,500 per person",
        itinerary: [
          { time: "", activity: "🌸 Janaki Mandir Visit & Mithila Welcome", description: "Traditional welcome with tika, mala, and folk music at the heart of Mithila heritage." },
          { time: "", activity: "🧵 Janakpur Women Development Center (JWDC)", description: "Extended workshop session at Kuwa, Janakpur. Learn traditional painting, pottery, and textile techniques." },
          { time: "", activity: "🖼️ Complete Art Gallery Tour", description: "Visit Sunaina Mithila Art Gallery, Mithila Art Center (Parshuram Marg), and Mithilani Ghar (Janaki Mandir Marg)." },
          { time: "", activity: "🛕 Cultural Temples Exploration", description: "Visit Rajdevi Mandir, Ram-Janaki Bibaha Mandap, Dulha Dulhan Mandir, and Rangabhoomi (Barhabigha)." },
          { time: "", activity: "🪘 Folk Music, Dance & Storytelling", description: "Interactive session with Jhijhiya, Lokasankirtan, Jhari Jhari and Sama-Chakewa. Optional traditional attire." },
          { time: "", activity: "🍲 Complete Mithila Thali Experience", description: "Full authentic meal with bhaat, kadhi bari, taruwa, makhana, tilauri, alu chokha, lassi, ghewar, paan, and fried fish." },
          { time: "", activity: "🛍️ Souvenir Shopping", description: "Guided tour of Pethiya Bazaar for handmade souvenirs, Maithili jewelry, paintings, and fabrics." },
          { time: "", activity: "🧘 Ganga Aarti at Ganga Sagar Pond", description: "Conclude with mesmerizing Sandhya Aarti for a soulful experience of harmony and devotion." }
        ],
        includes: [
          "Professional cultural guide",
          "All workshop materials and sessions",
          "Complete Mithila thali meal",
          "All temple and gallery entry fees",
          "Folk performance experience",
          "Traditional attire for photos",
          "Aarti participation",
          "Comprehensive welcome kit"
        ]
      },
      {
        name: "2 Days / 1 Night Cultural Retreat",
        duration: "2 Days / 1 Night",
        coverage: "Deep cultural immersion with accommodation",
        idealFor: "Researchers, documentary makers, extended cultural study",
        price: "NPR 7,000 per person (with meals & stay)",
        itinerary: [
          { time: "", activity: "Day 1: Complete Cultural Immersion", description: "Full day program including all activities from the 8-hour package with extended time for workshops and interactions." },
          { time: "", activity: "Evening Cultural Program", description: "Extended folk music and dance session with local families, traditional dinner, and cultural storytelling." },
          { time: "", activity: "Day 2: Advanced Cultural Exploration", description: "Visit additional cultural sites, advanced art workshops, cooking demonstrations with local families." },
          { time: "", activity: "🧘 Sunrise and Sunset Aarti", description: "Participate in both morning and evening aarti ceremonies for complete spiritual experience." },
          { time: "", activity: "Cultural Documentation Time", description: "Dedicated time for photography, interviews, and detailed cultural documentation." }
        ],
        includes: [
          "2 days cultural guide",
          "1 night accommodation",
          "All meals (breakfast, lunch, dinner)",
          "Extended workshop sessions",
          "Multiple aarti experiences",
          "Advanced art materials",
          "Cultural documentation support",
          "Complete souvenir package",
          "Traditional costume rental"
        ]
      }
    ],
    addOnServices: [
      "Art souvenir package (authentic Mithila paintings)",
      "Private cultural performance arrangement",
      "Traditional Maithili attire rental for full day",
      "Professional photography session in traditional dress",
      "Cooking class with local Mithila family",
      "Extended temple tour with priest guidance"
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
