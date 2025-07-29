
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PatternBackground from "@/components/PatternBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MithilaCulturalToursDetail = () => {
  return (
    <div className="min-h-screen font-poppins bg-mithila-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-mithila-indigo to-mithila-red text-white">
        <PatternBackground pattern="flower" className="opacity-10" />
        <div className="container mx-auto relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-hind">Mithila Cultural Tour Package</h1>
            <p className="text-xl text-mithila-cream italic">
              "Immerse yourself in the vibrant colors, rituals and soul of Mithila."
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Duration Options */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🗓️ Duration Options:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="text-lg font-semibold text-mithila-indigo">Half Day Cultural Glimpse – 4 hours</p>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="text-lg font-semibold text-mithila-indigo">Full Day Cultural Immersion – 8 hours</p>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="text-lg font-semibold text-mithila-indigo">2 Days / 1 Night Cultural Retreat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ideal For */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🎯 Ideal For:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">Art Lovers | Cultural Tourists | Students & Researchers | Documentary Makers | Curious Travelers</p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🧭 Highlights of the Tour
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🌸 1. Janaki Mandir Visit & Mithila Welcome</h3>
                    <p className="text-gray-700">Start the tour with a visit to Janaki Mandir – the heart of Mithila heritage. Receive a Mithila-style welcome with tika, mala, and folk music.</p>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🧵 2. Janakpur Women Development Center (JWDC)</h3>
                    <p className="text-gray-700 mb-2">A living art center where local women create Mithila paintings, pottery, ceramics, and textiles. Participate in a hands-on workshop and learn to paint in the traditional style.</p>
                    <Badge variant="outline" className="bg-mithila-cream text-mithila-indigo">📍 Location: Kuwa, Janakpur</Badge>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🖼️ 3. Mithila Art Gallery Hopping</h3>
                    <p className="text-gray-700 mb-3">Visit local art galleries:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Sunaina Mithila Art Gallery</li>
                      <li>Mithila Art Center, Parshuram Marg</li>
                      <li>Mithilani Ghar, Janaki Mandir Marg</li>
                    </ul>
                    <p className="mt-3 text-gray-700">Meet the artists and learn about the stories, symbols, and rituals behind each motif.</p>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🛕 4. Cultural Temples Exploration</h3>
                    <p className="text-gray-700 mb-3">Visit culturally significant temples such as:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Rajdevi Mandir – site of Dashain rituals</li>
                      <li>Ram-Janaki Bibaha Mandap – depicting the royal wedding</li>
                      <li>Dulha Dulhan Mandir – a tribute to divine love</li>
                      <li>Rangabhoomi (Barhabigha) – where annual reenactments of Ram-Sita's swayamvar take place</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🪘 5. Folk Music, Dance & Storytelling Session</h3>
                    <p className="text-gray-700 mb-2">Enjoy an interactive evening of Jhijhiya, Lokasankirtan, Jhari Jhari and Sama-Chakewa. Learn how music and dance embody Mithila's emotions, devotion, and social traditions.</p>
                    <p className="text-gray-700">Optional: Dress in traditional Maithili attire for cultural photos.</p>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🍲 6. Traditional Mithila Food Experience</h3>
                    <p className="text-gray-700 mb-3">Enjoy an authentic Mithila Thali, including:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Bhaat, kadhi bari, taruwa, makhana, tilauri, alu chokha</li>
                      <li>Lassi, Ghewar, Paan, Fried Fish</li>
                    </ul>
                    <p className="mt-3 text-gray-700">Optional cooking demo with a local Mithila family.</p>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🛍️ 7. Souvenir Stop & Local Bazaars</h3>
                    <p className="text-gray-700">Visit Pethiya Bazaar and surrounding markets for handmade souvenirs, Maithili jewelry, paintings, and fabrics.</p>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🧘 8. End with Ganga Aarti at Ganga Sagar Pond</h3>
                    <p className="text-gray-700">Complete your immersive journey with the mesmerizing Sandhya Aarti, a soulful experience of harmony, devotion, and sound at the holy pond.</p>
                  </div>

                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    💰 Pricing:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-mithila-cream">
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Package</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Duration</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Price (NPR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">Half Day Glimpse</td>
                          <td className="border border-gray-300 p-4 text-gray-700">4 hrs</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">2,000 per person</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">Full Day Immersion</td>
                          <td className="border border-gray-300 p-4 text-gray-700">8 hrs</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">3,500 per person</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">2 Days / 1 Night</td>
                          <td className="border border-gray-300 p-4 text-gray-700">2D/1N</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">7,000 per person (with meals & stay)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="font-semibold text-mithila-indigo mb-2">Includes:</p>
                      <p className="text-gray-700">Guide, Workshop, Aarti, Entry fees, Welcome kit</p>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="font-semibold text-mithila-indigo mb-2">Add-ons:</p>
                      <p className="text-gray-700">Art souvenir, Cultural performance, Attire rental</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Best Time to Book */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🗓️ Best Time to Book:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">November–December during Bibaha Panchami</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">March–April for Holi and Mithila Madhya Parikrama</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">October for Dashain and Chhath celebrations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Book Now */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    📞 Book Now:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">For reservations, customized group tours, and Nepali/English speaking guides, contact your local operator or tourism desk.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/9779815835343" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-mithila-red hover:bg-mithila-red/90 text-white">
                        Book This Tour
                      </Button>
                    </a>
                    <a href="https://wa.me/9779815835343" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-mithila-indigo text-mithila-indigo hover:bg-mithila-indigo hover:text-white">
                        Ask Questions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white border-mithila-cream shadow-lg sticky top-6">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Half Day Glimpse</div>
                      <div className="text-lg font-bold text-mithila-red">NPR 2,000 per person</div>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Full Day Immersion</div>
                      <div className="text-lg font-bold text-mithila-red">NPR 3,500 per person</div>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">2 Days / 1 Night</div>
                      <div className="text-lg font-bold text-mithila-red">NPR 7,000 per person</div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a href="https://wa.me/9779815835343" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-mithila-red hover:bg-mithila-red/90 text-white">
                        Book This Tour
                      </Button>
                    </a>
                    <a href="https://wa.me/9779815835343" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-mithila-indigo text-mithila-indigo hover:bg-mithila-indigo hover:text-white">
                        Ask Questions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MithilaCulturalToursDetail;
