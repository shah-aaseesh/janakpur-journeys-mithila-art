
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
    <div className="min-h-screen font-poppins">
      <Header />
      <PatternBackground pattern="peacock" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nature Treks – Hiking Adventures Around Janakpur
          </h1>
          <p className="text-xl md:text-2xl font-light italic">
            "Where sacred stories meet serene landscapes."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Duration Options */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    📅 Duration Options:
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Half Day Nature Walk – 4 hours</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Full Day Spiritual-Nature Trek – 7–8 hours</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terrain Type */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-secondary/10">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    🌍 Terrain Type:
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p><strong>Easy – Flat, spiritual trails</strong></p>
                    <p className="text-muted-foreground">Perfect for families, students, senior citizens & first-time trekkers</p>
                  </div>
                </CardContent>
              </Card>

              {/* Trail Highlights */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-accent/10">
                  <CardTitle className="text-2xl">
                    🧭 Trail Highlights (Based on the book's recommendations)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  
                  {/* Trail 1 */}
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-bold text-lg mb-3">🌳 1. Mani Mandap Spiritual Walk</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Distance:</strong> ~4 km from Janaki Mandir (30 min rickshaw + walk)</p>
                      <p><strong>Route:</strong> Janaki Mandir → Agni Kund → Ratna Sagar → Mani Mandap</p>
                      <p><strong>What to see:</strong> Sacred lakes, calm surroundings, symbolic site of Ram-Sita wedding, serene temples</p>
                      <p><strong>Activity:</strong> Guided storytelling on Ram-Sita, lakeside meditation, offerings</p>
                    </div>
                  </div>

                  {/* Trail 2 */}
                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="font-bold text-lg mb-3">🌊 2. Pond Trail (Themed: "Sacred Waters of Mithila")</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Route:</strong></p>
                      <p className="ml-4">Janaki Mandir → Angarag Sar → Ratna Sagar → Agni Kund → Bihar Kund → Ganga Sagar</p>
                      <p><strong>What to see:</strong> Ponds connected to Sita's daily rituals, Janak's yajna, Ram's treasury</p>
                      <p><strong>Activity:</strong> Nature photography, rituals, water blessing ceremonies, birdwatching around ponds</p>
                    </div>
                  </div>

                  {/* Trail 3 */}
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-bold text-lg mb-3">🛕 3. Dhanushadham Exploration Trek</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Distance:</strong> 20 km north of Janakpur</p>
                      <p><strong>Route:</strong> Janakpur → Mithila Bihari Mandir → Dhanush Mandir → Dhanush Sagar → Parashuram Talau</p>
                      <p><strong>Trek Type:</strong> Combination of short drives and 2–3 km walks</p>
                      <p><strong>What to see:</strong> Sacred site of Shiva Dhanush's fallen piece, ponds, Parashuram's meditation spot</p>
                      <p><strong>Activity:</strong> Trekking on rural paths, peepal tree worship, explore Parashuram's penance trail</p>
                    </div>
                  </div>

                  {/* Trail 4 */}
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-bold text-lg mb-3">🪷 4. Natural Serenity Walk to Nocha Pokhari & Dudhmati River</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Distance:</strong> ~5 km south of Janakpur</p>
                      <p><strong>Route:</strong> Janakpur → Rampur (Nocha Pokhari) → Dudhmati River</p>
                      <p><strong>What to see:</strong> Lush green forests, heritage pond, birds, local flora, and river believed to be created from Sita's divine nourishment</p>
                      <p><strong>Activity:</strong> Forest bathing, folklore sharing, riverside rest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Included Experiences */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-2xl">🧘 Included Experiences:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li>• Guided mindfulness break</li>
                    <li>• Herbal tea at temple garden or lakeside</li>
                    <li>• Cultural storytelling sessions at scenic spots</li>
                    <li>• Photography support and digital album</li>
                    <li>• Interaction with local sadhus or villagers</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Inclusions */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-secondary/10">
                  <CardTitle className="text-2xl">🍱 Inclusions:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li>• Local nature guide (English/Hindi/Maithili)</li>
                    <li>• Refreshments and lunch box (for full day)</li>
                    <li>• Entry tickets to key ponds or temples</li>
                    <li>• Transportation (rickshaw/vehicle where needed)</li>
                    <li>• Poncho/umbrella in case of sun or rain</li>
                    <li>• Souvenir: Mithila leaf bookmark or clay diya</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Best Time to Trek */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-accent/10">
                  <CardTitle className="text-2xl">🗓️ Best Time to Trek:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li>• October to December (post-monsoon, clear skies)</li>
                    <li>• February to April (pleasant mornings and blooming landscapes)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Bonus Tip */}
              <Card className="overflow-hidden border-2 border-primary">
                <CardHeader className="bg-primary/20">
                  <CardTitle className="text-2xl">🌼 Bonus Tip:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>Join during Janaki Nawami, Bibaha Panchami, or Holi to experience nature, festivity, and faith together!</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Pricing Card */}
              <Card className="sticky top-4 overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-xl">💵 Pricing:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Half Day Nature Walk</h4>
                      <p className="text-sm text-muted-foreground">4 hrs</p>
                      <p className="text-lg font-bold text-primary">Rs. 1,800 per person</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Full Day Nature Trek</h4>
                      <p className="text-sm text-muted-foreground">7–8 hrs</p>
                      <p className="text-lg font-bold text-primary">Rs. 3,500 per person</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-accent/10">
                      <h4 className="font-semibold">Add-on: Dhanushadham Excursion</h4>
                      <p className="text-sm text-muted-foreground">+4 hrs</p>
                      <p className="text-lg font-bold text-primary">Rs. 1,200 extra</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Group discounts available. All packages are eco-conscious and support local communities.
                  </p>
                </CardContent>
              </Card>

              {/* Book Now Card */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-secondary text-secondary-foreground">
                  <CardTitle className="text-xl">📞 Book Now:</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-sm">
                    For reservations, customized group tours, and Nepali/English speaking guides, contact your local operator or tourism desk.
                  </p>
                  <Button className="w-full" size="lg">
                    Contact for Booking
                  </Button>
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
