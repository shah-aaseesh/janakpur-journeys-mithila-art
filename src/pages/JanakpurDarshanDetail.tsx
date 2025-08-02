import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PatternBackground from "@/components/PatternBackground";

const JanakpurDarshanDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <PatternBackground pattern="flower" className="absolute inset-0 opacity-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Janakpur Darshan – All-In-One Experience
            </h1>
            <p className="text-xl text-muted-foreground italic">
              "A complete spiritual, cultural, and scenic journey through the soul of Mithila."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Duration */}
        <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              📅 Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              2 Nights / 3 Days (Flexible to customize for 1–5 days)
            </p>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">🧭 Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>• 18+ Heritage and Spiritual Sites</p>
                <p>• Mithila Art Workshop</p>
                <p>• Sacred Ponds & Nature Walks</p>
                <p>• Traditional Cuisine & Folklore</p>
              </div>
              <div className="space-y-2">
                <p>• Ram-Sita Wedding Trail & Blessing</p>
                <p>• Evening Ganga Aarti</p>
                <p>• Optional: Cultural Show / Local Family Visit</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Day-by-Day Itinerary */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">🗓️ Day-by-Day Itinerary</h2>
          
          {/* Day 1 */}
          <Card className="mb-6 border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-xl text-primary">🗓️ Day 1: Janakpur Spiritual Trail</CardTitle>
              <p className="text-muted-foreground font-medium">Theme: Divine beginnings</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>• Welcome with Mithila tika & garland</p>
              <div>
                <p className="font-semibold mb-2">Visit:</p>
                <div className="ml-4 space-y-1">
                  <p>✅ Janaki Mandir</p>
                  <p>✅ Ram Mandir</p>
                  <p>✅ Janak Mandir</p>
                  <p>✅ Lakshman Mandir</p>
                  <p>✅ Ram-Janaki Bibaha Mandap</p>
                </div>
              </div>
              <p>• Lunch: Mithila Thali at a heritage restaurant</p>
              <p>• Evening: Ganga Sagar Darshan & Sandhya Aarti</p>
              <p>• Optional: Spiritual storytelling session</p>
              <p>• Stay: Traditional guest house/hotel near Janaki Mandir</p>
            </CardContent>
          </Card>

          {/* Day 2 */}
          <Card className="mb-6 border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-xl text-primary">🗓️ Day 2: Mithila Culture & Nature Walk</CardTitle>
              <p className="text-muted-foreground font-medium">Theme: Art, rituals & sacred landscapes</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p>• Morning: Visit JWDC (Janakpur Women Development Center)</p>
                <p className="ml-4">🎨 Participate in a Mithila Art Workshop</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Visit:</p>
                <div className="ml-4 space-y-1">
                  <p>✅ Rajdevi Mandir (Lineage deity)</p>
                  <p>✅ Sankat Mochan Hanuman Mandir</p>
                  <p>✅ Barhabigha – Wedding ground</p>
                  <p>✅ Ratna Sagar, Agni Kund, Bihar Kund</p>
                </div>
              </div>
              <p>• Afternoon: Ride to Mani Mandap (optional rickshaw)</p>
              <p>• Cultural evening: Folk dance or dress in Mithila attire for a photoshoot</p>
              <p>• Dinner: Mithila food tasting (includes paan, ghewar, fried fish)</p>
            </CardContent>
          </Card>

          {/* Day 3 */}
          <Card className="mb-6 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-xl text-primary">🗓️ Day 3: Sacred Outskirts Tour</CardTitle>
              <p className="text-muted-foreground font-medium">Theme: Treta Yug legends & peaceful nature</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Visit to:</p>
                <div className="ml-4 space-y-1">
                  <p>✅ Mithila Bihari Mandir (Kachuridham)</p>
                  <p>✅ Dhanush Mandir & Dhanush Sagar</p>
                  <p>✅ Parashuram Talau</p>
                  <p>✅ Nocha Pokhari & Dudhmati River</p>
                </div>
              </div>
              <p>• Optional: Blessing ceremony for couples at Dulha-Dulhan Mandir</p>
              <p>• Shopping for Mithila souvenirs, art & sweets</p>
              <p>• Departure</p>
            </CardContent>
          </Card>
        </div>

        {/* Inclusions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💼 Inclusions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>• Airport/train/bus pickup & drop (Janakpur)</p>
                <p>• Local guide (English/Hindi/Maithili)</p>
                <p>• A/C vehicle or rickshaw ride (based on route)</p>
                <p>• All temple entry fees & workshop charges</p>
              </div>
              <div className="space-y-2">
                <p>• 2 nights' accommodation with breakfast</p>
                <p>• 3 meals per day (Mithila-style)</p>
                <p>• Cultural kit: Welcome tika, Mithila diary, and art souvenir</p>
                <p>• Photography support</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="border-l-4 border-l-secondary">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💰 Package Price (per person)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Solo</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 12,000</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Couple</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 20,000</p>
                  <p className="text-sm text-muted-foreground">total</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Group of 4+</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 9,000</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground italic">
                Customizations available for shorter or longer stays.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Perfect For */}
        <Card className="bg-gradient-to-r from-primary/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Perfect For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Pilgrimage seekers", "Art & culture enthusiasts", "Spiritual couples", "Researchers & students", "Heritage lovers"].map((type) => (
                <Badge key={type} variant="outline" className="text-primary border-primary">
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Book Now */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">📞 Book Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">Ready for the complete Janakpur experience?</p>
              <Button size="lg" className="mt-4">Book Janakpur Darshan Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JanakpurDarshanDetail;