
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PatternBackground from "@/components/PatternBackground";

const CustomExperiencesDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <PatternBackground pattern="fish" className="absolute inset-0 opacity-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Custom Experiences in Janakpurdham
            </h1>
            <p className="text-xl text-muted-foreground italic">
              "Your journey, your way – curated just for you."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* What is Custom Experience */}
        <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              🧭 What is a Custom Experience?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              A tailor-made itinerary crafted to match your unique interests, pace, and travel goals. Whether you're a pilgrim, artist, history enthusiast, spiritual seeker, couple, or family—we create your perfect Janakpur journey.
            </p>
          </CardContent>
        </Card>

        {/* Choose Your Focus */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">🎯 Choose Your Focus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Spiritual & Temple Trail */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🛕 Spiritual & Temple Trail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Prioritize temple visits such as Janaki Mandir, Ram Mandir, Dhanush Mandir, and Sankat Mochan Hanuman Temple</p>
                <p>• Participate in rituals like Mangal Aarti, Sandhya Aarti, and pujas</p>
                <p>• Receive personal blessings from priests</p>
                <p className="italic">• Optional: Guided chanting session or meditation</p>
              </CardContent>
            </Card>

            {/* Art & Culture Exploration */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🎨 Art & Culture Exploration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Visit the Janakpur Women's Development Center (JWDC) and Mithila Art galleries</p>
                <p>• Participate in a Mithila painting workshop</p>
                <p>• Dress in traditional Maithili attire and enjoy a cultural photoshoot</p>
                <p className="italic">• Optional: Attend or book a folk dance performance (Jhijhiya, Sama-Chakewa, etc.)</p>
              </CardContent>
            </Card>

            {/* Taste of Mithila */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🍲 Taste of Mithila – Culinary Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Enjoy local dishes like Mithila Thali, litti, taruwa, paan, fried fish, ghewar, and lassi</p>
                <p>• Join a cooking session with a Mithila family</p>
                <p>• Explore Janakpur's street food and sweets stalls</p>
                <p className="italic">• Optional: Food + Art fusion picnic near a pond</p>
              </CardContent>
            </Card>

            {/* Nature & Serenity */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🌿 Nature & Serenity Escape</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Visit sacred ponds: Ganga Sagar, Dhanush Sagar, Ratna Sagar, Bihar Kund</p>
                <p>• Take a peaceful walk to Nocha Pokhari or Mani Mandap</p>
                <p>• Birdwatching and riverside rest at Dudhmati River</p>
                <p className="italic">• Optional: Guided nature journaling or sketching</p>
              </CardContent>
            </Card>

            {/* Spiritual Honeymoon */}
            <Card className="h-full md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">💑 Spiritual Honeymoon & Couple's Blessing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p>• Couple's puja at Janaki Mandir</p>
                    <p>• Blessing ritual at Mani Mandap</p>
                    <p>• Visit Dulha-Dulhan Mandir and Ram-Janaki Bibaha Mandap</p>
                  </div>
                  <div>
                    <p>• Romantic Mithila dinner setup and cultural storytelling</p>
                    <p className="italic">• Optional: Private Ganga Aarti blessing ceremony</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Duration Options */}
        <Card className="bg-gradient-to-r from-secondary/10 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">🗓️ Flexible Durations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Badge variant="secondary" className="text-center py-2">Half Day (3–4 hours)</Badge>
              <Badge variant="secondary" className="text-center py-2">Full Day (7–8 hours)</Badge>
              <Badge variant="secondary" className="text-center py-2">Multi-Day (2–4 Days)</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Inclusions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💼 Inclusions (As Per Selection)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>• Personalized guide (English/Hindi/Maithili)</p>
                <p>• Entry fees, transportation (rickshaw/vehicle)</p>
                <p>• Custom meals or picnic setups</p>
              </div>
              <div className="space-y-2">
                <p>• Cultural kits (welcome tika, Mithila souvenir, prayer kits, etc.)</p>
                <p>• Professional photography (optional)</p>
                <p>• Support for spiritual rituals, donations, and blessings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="border-l-4 border-l-secondary">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💰 Starting Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Half Day</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 2,000</p>
                  <p className="text-sm text-muted-foreground">/person</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Full Day</h4>
                  <p className="text-2xl font-bold text-primary">Rs. 3,500</p>
                  <p className="text-sm text-muted-foreground">/person</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-primary">Multi-Day</h4>
                  <p className="text-lg font-bold text-primary">On Request</p>
                  <p className="text-sm text-muted-foreground">(Based on itinerary)</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground italic">
                Couple & family discounts available. Prices vary depending on customization.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Best For */}
        <Card className="bg-gradient-to-r from-primary/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">🗓️ Best For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Pilgrims", "Artists", "Honeymooners", "Spiritual Seekers", "Curious Travelers", "Small Groups"].map((type) => (
                <Badge key={type} variant="outline" className="text-primary border-primary">
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Book */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">📞 How to Book?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p>1. Fill a quick interest form (What do you want to see/feel/do?)</p>
              <p>2. Choose your timing and pace</p>
              <p>3. We design and confirm your dream Mithila itinerary</p>
            </div>
            <div className="text-center">
              <Button size="lg" className="mt-4">Book Your Custom Experience</Button>
            </div>
          </CardContent>
        </Card>

        {/* Sample Combo */}
        <Card className="border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-background">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Sample Custom Combo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-lg font-medium">
              🛕 Morning Temple Visit → 🎨 Mithila Painting Workshop → 🍲 Street Food Tasting → 🌅 Ganga Aarti
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CustomExperiencesDetail;
