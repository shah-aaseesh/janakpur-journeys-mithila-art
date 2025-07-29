
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PatternBackground from "@/components/PatternBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NatureTreksDetail = () => {
  return (
    <div className="min-h-screen font-poppins bg-mithila-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-mithila-indigo to-mithila-green text-white">
        <PatternBackground pattern="peacock" className="opacity-10" />
        <div className="container mx-auto relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-hind">Nature Treks – Hiking Adventures Around Janakpur</h1>
            <p className="text-xl text-mithila-cream italic">
              "Where sacred stories meet serene landscapes."
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
                    📅 Duration Options:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="text-lg font-semibold text-mithila-indigo">Half Day Nature Walk – 4 hours</p>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <p className="text-lg font-semibold text-mithila-indigo">Full Day Spiritual-Nature Trek – 7–8 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terrain Type */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🌍 Terrain Type:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-mithila-indigo">Easy – Flat, spiritual trails</p>
                    <p className="text-gray-700">Perfect for families, students, senior citizens & first-time trekkers</p>
                  </div>
                </CardContent>
              </Card>

              {/* Trail Highlights */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🧭 Trail Highlights (Based on the book's recommendations)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🌳 1. Mani Mandap Spiritual Walk</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Distance:</strong> ~4 km from Janaki Mandir (30 min rickshaw + walk)</p>
                      <p><strong>Route:</strong> Janaki Mandir → Agni Kund → Ratna Sagar → Mani Mandap</p>
                      <p><strong>What to see:</strong> Sacred lakes, calm surroundings, symbolic site of Ram-Sita wedding, serene temples</p>
                      <p><strong>Activity:</strong> Guided storytelling on Ram-Sita, lakeside meditation, offerings</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🌊 2. Pond Trail (Themed: "Sacred Waters of Mithila")</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Route:</strong></p>
                      <p className="ml-4">Janaki Mandir → Angarag Sar → Ratna Sagar → Agni Kund → Bihar Kund → Ganga Sagar</p>
                      <p><strong>What to see:</strong> Ponds connected to Sita's daily rituals, Janak's yajna, Ram's treasury</p>
                      <p><strong>Activity:</strong> Nature photography, rituals, water blessing ceremonies, birdwatching around ponds</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🛕 3. Dhanushadham Exploration Trek</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Distance:</strong> 20 km north of Janakpur</p>
                      <p><strong>Route:</strong> Janakpur → Mithila Bihari Mandir → Dhanush Mandir → Dhanush Sagar → Parashuram Talau</p>
                      <p><strong>Trek Type:</strong> Combination of short drives and 2–3 km walks</p>
                      <p><strong>What to see:</strong> Sacred site of Shiva Dhanush's fallen piece, ponds, Parashuram's meditation spot</p>
                      <p><strong>Activity:</strong> Trekking on rural paths, peepal tree worship, explore Parashuram's penance trail</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-mithila-red pl-6">
                    <h3 className="text-lg font-semibold mb-2 text-mithila-indigo">🪷 4. Natural Serenity Walk to Nocha Pokhari & Dudhmati River</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Distance:</strong> ~5 km south of Janakpur</p>
                      <p><strong>Route:</strong> Janakpur → Rampur (Nocha Pokhari) → Dudhmati River</p>
                      <p><strong>What to see:</strong> Lush green forests, heritage pond, birds, local flora, and river believed to be created from Sita's divine nourishment</p>
                      <p><strong>Activity:</strong> Forest bathing, folklore sharing, riverside rest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Included Experiences */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🧘 Included Experiences:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Guided mindfulness break</li>
                    <li>• Herbal tea at temple garden or lakeside</li>
                    <li>• Cultural storytelling sessions at scenic spots</li>
                    <li>• Photography support and digital album</li>
                    <li>• Interaction with local sadhus or villagers</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Inclusions */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🍱 Inclusions:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Local nature guide (English/Hindi/Maithili)</li>
                    <li>• Refreshments and lunch box (for full day)</li>
                    <li>• Entry tickets to key ponds or temples</li>
                    <li>• Transportation (rickshaw/vehicle where needed)</li>
                    <li>• Poncho/umbrella in case of sun or rain</li>
                    <li>• Souvenir: Mithila leaf bookmark or clay diya</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    💵 Pricing:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-mithila-cream">
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Package Type</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Duration</th>
                          <th className="border border-gray-300 p-4 text-left font-semibold text-mithila-indigo">Price (NPR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">Half Day Nature Walk</td>
                          <td className="border border-gray-300 p-4 text-gray-700">4 hrs</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">Rs. 1,800 per person</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">Full Day Nature Trek</td>
                          <td className="border border-gray-300 p-4 text-gray-700">7–8 hrs</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">Rs. 3,500 per person</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 text-gray-700">Add-on: Dhanushadham Excursion</td>
                          <td className="border border-gray-300 p-4 text-gray-700">+4 hrs</td>
                          <td className="border border-gray-300 p-4 text-mithila-red font-semibold">Rs. 1,200 extra</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-gray-700 mt-4">
                    Group discounts available. All packages are eco-conscious and support local communities.
                  </p>
                </CardContent>
              </Card>

              {/* Best Time to Trek */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🗓️ Best Time to Trek:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">October to December (post-monsoon, clear skies)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">February to April (pleasant mornings and blooming landscapes)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Bonus Tip */}
              <Card className="bg-white border-mithila-cream shadow-lg">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo flex items-center">
                    🌼 Bonus Tip:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Join during Janaki Nawami, Bibaha Panchami, or Holi to experience nature, festivity, and faith together!</p>
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
                      <div className="text-sm text-gray-600 mb-1">Half Day Nature Walk</div>
                      <div className="text-lg font-bold text-mithila-red">Rs. 1,800 per person</div>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Full Day Nature Trek</div>
                      <div className="text-lg font-bold text-mithila-red">Rs. 3,500 per person</div>
                    </div>
                    <div className="p-4 bg-mithila-cream rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Add-on: Dhanushadham Excursion</div>
                      <div className="text-lg font-bold text-mithila-red">Rs. 1,200 extra</div>
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

export default NatureTreksDetail;
