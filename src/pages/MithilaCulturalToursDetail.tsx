
import React from "react";
import ServiceDetail from "@/components/ServiceDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MithilaCulturalToursDetail = () => {
  const serviceData = {
    title: "Mithila Cultural Tour Package",
    description: "Immerse yourself in the vibrant colors, rituals and soul of Mithila.",
    longDescription: "Experience the authentic heritage of Mithila through our comprehensive cultural packages. Ideal for art lovers, cultural tourists, students & researchers, documentary makers, and curious travelers. Choose from half-day glimpses to multi-day cultural retreats and immerse yourself in the soul of Mithila.",
    highlights: [
      "🌸 Janaki Mandir Visit & Mithila Welcome with tika, mala, and folk music",
      "🧵 Janakpur Women Development Center (JWDC) hands-on workshop",
      "🖼️ Mithila Art Gallery hopping including Sunaina Mithila Art Gallery",
      "🛕 Cultural Temples Exploration including Rajdevi Mandir and Ram-Janaki Bibaha Mandap",
      "🪘 Folk Music, Dance & Storytelling with Jhijhiya, Lokasankirtan, Jhari Jhari",
      "🍲 Traditional Mithila Food Experience with authentic thali",
      "🛍️ Souvenir Stop at Pethiya Bazaar and local markets",
      "🧘 Ganga Aarti at Ganga Sagar Pond for spiritual conclusion"
    ],
    packageOptions: [
      {
        name: "Half Day Glimpse",
        duration: "4 hrs",
        coverage: "Essential Mithila highlights",
        idealFor: "Quick cultural overview",
        price: "NPR 2,000 per person",
        itinerary: [
          { time: "", activity: "🌸 Janaki Mandir Visit & Mithila Welcome", description: "Start the tour with a visit to Janaki Mandir – the heart of Mithila heritage. Receive a Mithila-style welcome with tika, mala, and folk music." },
          { time: "", activity: "🧵 Janakpur Women Development Center (JWDC)", description: "A living art center where local women create Mithila paintings, pottery, ceramics, and textiles. Participate in a hands-on workshop and learn to paint in the traditional style. 📍 Location: Kuwa, Janakpur" },
          { time: "", activity: "🖼️ Mithila Art Gallery Hopping", description: "Visit local art galleries: Sunaina Mithila Art Gallery, Mithila Art Center (Parshuram Marg), Mithilani Ghar (Janaki Mandir Marg). Meet the artists and learn about the stories, symbols, and rituals behind each motif." },
          { time: "", activity: "🍲 Traditional Mithila Food Experience", description: "Enjoy an authentic Mithila Thali, including: Bhaat, kadhi bari, taruwa, makhana, tilauri, alu chokha, Lassi, Ghewar, Paan, Fried Fish" }
        ],
        includes: [
          "Guide",
          "Workshop materials",
          "Entry fees", 
          "Welcome kit",
          "Food tasting"
        ]
      },
      {
        name: "Full Day Immersion",
        duration: "8 hrs", 
        coverage: "Complete Mithila experience",
        idealFor: "Art lovers, cultural enthusiasts",
        price: "NPR 3,500 per person",
        itinerary: [
          { time: "", activity: "🌸 Janaki Mandir Visit & Mithila Welcome", description: "Start the tour with a visit to Janaki Mandir – the heart of Mithila heritage. Receive a Mithila-style welcome with tika, mala, and folk music." },
          { time: "", activity: "🧵 Janakpur Women Development Center (JWDC)", description: "A living art center where local women create Mithila paintings, pottery, ceramics, and textiles. Participate in a hands-on workshop and learn to paint in the traditional style. 📍 Location: Kuwa, Janakpur" },
          { time: "", activity: "🖼️ Mithila Art Gallery Hopping", description: "Visit local art galleries: Sunaina Mithila Art Gallery, Mithila Art Center (Parshuram Marg), Mithilani Ghar (Janaki Mandir Marg). Meet the artists and learn about the stories, symbols, and rituals behind each motif." },
          { time: "", activity: "🛕 Cultural Temples Exploration", description: "Visit culturally significant temples such as: Rajdevi Mandir – site of Dashain rituals, Ram-Janaki Bibaha Mandap – depicting the royal wedding, Dulha Dulhan Mandir – a tribute to divine love, Rangabhoomi (Barhabigha) – where annual reenactments of Ram-Sita's swayamvar take place" },
          { time: "", activity: "🪘 Folk Music, Dance & Storytelling Session", description: "Enjoy an interactive evening of Jhijhiya, Lokasankirtan, Jhari Jhari and Sama-Chakewa. Learn how music and dance embody Mithila's emotions, devotion, and social traditions. Optional: Dress in traditional Maithili attire for cultural photos." },
          { time: "", activity: "🍲 Traditional Mithila Food Experience", description: "Enjoy an authentic Mithila Thali, including: Bhaat, kadhi bari, taruwa, makhana, tilauri, alu chokha, Lassi, Ghewar, Paan, Fried Fish. Optional cooking demo with a local Mithila family." },
          { time: "", activity: "🛍️ Souvenir Stop & Local Bazaars", description: "Visit Pethiya Bazaar and surrounding markets for handmade souvenirs, Maithili jewelry, paintings, and fabrics." },
          { time: "", activity: "🧘 End with Ganga Aarti at Ganga Sagar Pond", description: "Complete your immersive journey with the mesmerizing Sandhya Aarti, a soulful experience of harmony, devotion, and sound at the holy pond." }
        ],
        includes: [
          "Guide",
          "Workshop",
          "Aarti",
          "Entry fees",
          "Welcome kit",
          "Full meals",
          "Cultural performance"
        ]
      },
      {
        name: "2 Days / 1 Night",
        duration: "2D/1N",
        coverage: "Deep cultural immersion",
        idealFor: "Students, researchers, documentary makers",
        price: "NPR 7,000 per person (with meals & stay)",
        itinerary: [
          { time: "", activity: "Day 1: Complete Cultural Immersion", description: "Full day program including all activities from the 8-hour package with extended time for workshops and cultural interactions." },
          { time: "", activity: "🌸 Janaki Mandir Visit & Mithila Welcome", description: "Traditional welcome ceremony with tika, mala, and folk music at the heart of Mithila heritage." },
          { time: "", activity: "🧵 Extended JWDC Workshop", description: "Extended hands-on workshop at Janakpur Women Development Center with detailed learning of traditional techniques." },
          { time: "", activity: "🖼️ Complete Art Gallery Tour", description: "Comprehensive tour of all major galleries with artist interactions and technique demonstrations." },
          { time: "", activity: "🛕 Cultural Temples Exploration", description: "Visit all culturally significant temples with detailed historical and religious context." },
          { time: "", activity: "🪘 Evening Folk Performance", description: "Extended folk music, dance & storytelling session with traditional attire experience." },
          { time: "", activity: "Day 2: Advanced Cultural Experience", description: "Cooking demonstrations, advanced art workshops, and additional cultural sites exploration." },
          { time: "", activity: "🧘 Multiple Aarti Experiences", description: "Participate in both sunrise and sunset aarti ceremonies for complete spiritual immersion." }
        ],
        includes: [
          "Guide",
          "Workshop", 
          "Aarti",
          "Entry fees",
          "Welcome kit",
          "All meals",
          "Accommodation",
          "Cultural performances",
          "Extended activities"
        ]
      }
    ],
    addOnServices: [
      "Art souvenir package",
      "Cultural performance arrangement", 
      "Traditional attire rental"
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
