import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PatternBackground from "@/components/PatternBackground";
import { Card } from "@/components/ui/card";

const MithilaCulturalToursDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      
      <div className="relative">
        <PatternBackground pattern="flower" />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <Card className="max-w-4xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-xl">
            
            {/* Title and Description */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Mithila Cultural Tour Package</h1>
              <p className="text-xl text-muted-foreground italic">
                "Immerse yourself in the vibrant colors, rituals and soul of Mithila."
              </p>
            </div>

            {/* Duration Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                🗓️ Duration Options:
              </h2>
              <div className="space-y-2 text-lg">
                <p><strong>Half Day Cultural Glimpse – 4 hours</strong></p>
                <p><strong>Full Day Cultural Immersion – 8 hours</strong></p>
                <p><strong>2 Days / 1 Night Cultural Retreat</strong></p>
              </div>
            </div>

            {/* Ideal For */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                🎯 Ideal For:
              </h2>
              <p className="text-lg">Art Lovers | Cultural Tourists | Students & Researchers | Documentary Makers | Curious Travelers</p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                🧭 Highlights of the Tour
              </h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">🌸 1. Janaki Mandir Visit & Mithila Welcome</h3>
                  <p>Start the tour with a visit to Janaki Mandir – the heart of Mithila heritage. Receive a Mithila-style welcome with tika, mala, and folk music.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🧵 2. Janakpur Women Development Center (JWDC)</h3>
                  <p>A living art center where local women create Mithila paintings, pottery, ceramics, and textiles. Participate in a hands-on workshop and learn to paint in the traditional style.</p>
                  <p className="text-sm text-muted-foreground mt-1">📍 Location: Kuwa, Janakpur</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🖼️ 3. Mithila Art Gallery Hopping</h3>
                  <p className="mb-2">Visit local art galleries:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sunaina Mithila Art Gallery</li>
                    <li>Mithila Art Center, Parshuram Marg</li>
                    <li>Mithilani Ghar, Janaki Mandir Marg</li>
                  </ul>
                  <p className="mt-2">Meet the artists and learn about the stories, symbols, and rituals behind each motif.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🛕 4. Cultural Temples Exploration</h3>
                  <p className="mb-2">Visit culturally significant temples such as:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Rajdevi Mandir – site of Dashain rituals</li>
                    <li>Ram-Janaki Bibaha Mandap – depicting the royal wedding</li>
                    <li>Dulha Dulhan Mandir – a tribute to divine love</li>
                    <li>Rangabhoomi (Barhabigha) – where annual reenactments of Ram-Sita's swayamvar take place</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🪘 5. Folk Music, Dance & Storytelling Session</h3>
                  <p>Enjoy an interactive evening of Jhijhiya, Lokasankirtan, Jhari Jhari and Sama-Chakewa. Learn how music and dance embody Mithila's emotions, devotion, and social traditions.</p>
                  <p className="mt-1">Optional: Dress in traditional Maithili attire for cultural photos.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🍲 6. Traditional Mithila Food Experience</h3>
                  <p className="mb-2">Enjoy an authentic Mithila Thali, including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bhaat, kadhi bari, taruwa, makhana, tilauri, alu chokha</li>
                    <li>Lassi, Ghewar, Paan, Fried Fish</li>
                  </ul>
                  <p className="mt-2">Optional cooking demo with a local Mithila family.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🛍️ 7. Souvenir Stop & Local Bazaars</h3>
                  <p>Visit Pethiya Bazaar and surrounding markets for handmade souvenirs, Maithili jewelry, paintings, and fabrics.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🧘 8. End with Ganga Aarti at Ganga Sagar Pond</h3>
                  <p>Complete your immersive journey with the mesmerizing Sandhya Aarti, a soulful experience of harmony, devotion, and sound at the holy pond.</p>
                </div>

              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                💰 Pricing:
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Package</th>
                      <th className="border border-gray-300 p-3 text-left">Duration</th>
                      <th className="border border-gray-300 p-3 text-left">Price (NPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Half Day Glimpse</td>
                      <td className="border border-gray-300 p-3">4 hrs</td>
                      <td className="border border-gray-300 p-3">2,000 per person</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Full Day Immersion</td>
                      <td className="border border-gray-300 p-3">8 hrs</td>
                      <td className="border border-gray-300 p-3">3,500 per person</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">2 Days / 1 Night</td>
                      <td className="border border-gray-300 p-3">2D/1N</td>
                      <td className="border border-gray-300 p-3">7,000 per person (with meals & stay)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 space-y-2">
                <p><strong>Includes:</strong> Guide, Workshop, Aarti, Entry fees, Welcome kit</p>
                <p><strong>Add-ons:</strong> Art souvenir, Cultural performance, Attire rental</p>
              </div>
            </div>

            {/* Best Time to Book */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                🗓️ Best Time to Book:
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>November–December during Bibaha Panchami</li>
                <li>March–April for Holi and Mithila Madhya Parikrama</li>
                <li>October for Dashain and Chhath celebrations</li>
              </ul>
            </div>

            {/* Book Now */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
                📞 Book Now:
              </h2>
              <p className="text-lg">For reservations, customized group tours, and Nepali/English speaking guides, contact your local operator or tourism desk.</p>
            </div>

          </Card>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MithilaCulturalToursDetail;