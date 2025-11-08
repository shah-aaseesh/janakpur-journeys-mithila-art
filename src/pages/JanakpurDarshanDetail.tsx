import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Gallery from "@/components/Gallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PatternBackground from "@/components/PatternBackground";

const JanakpurDarshanDetail = () => {
  useEffect(() => {
    // Ensure scroll to top on component mount with small delay
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    // Additional scroll to top after a small delay to ensure it works
    setTimeout(scrollToTop, 100);
  }, []);
  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>Janakpur Darshan - 3-Day Spiritual & Cultural Tour | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Experience the complete 3-day Janakpur Darshan tour. Visit Janaki Mandir, sacred ponds, Mithila art centers, and immerse in spiritual culture. Book your pilgrimage journey with expert guides." 
        />
        <meta name="keywords" content="Janakpur Darshan, Janaki Mandir tour, spiritual tours Nepal, pilgrimage tours, 3-day Janakpur tour, religious tourism, Mithila culture tour" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-8 overflow-hidden bg-white">
        {/* Mithila Art Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2256%22%20height%3D%2228%22%3E%3Cpath%20fill%3D%22%23F1C40F%22%20fill-opacity%3D%22.1%22%20d%3D%22M56%2026v2h-7.75c2.3-1.27%204.94-2%207.75-2zm-26%202a2%202%200%201%200-4%200h-4.09A25.98%2025.98%200%200%200%200%2016v-2c.67%200%201.34.02%202%20.07V14a2%202%200%200%200-2-2v-2a4%204%200%200%201%203.98%203.6%2028.09%2028.09%200%200%201%202.8-3.86A8%208%200%200%200%200%206V4a9.99%209.99%200%200%201%208.17%204.23c.94-.95%201.96-1.83%203.03-2.63A13.98%2013.98%200%200%200%200%200h7.75c2%201.1%203.73%202.63%205.1%204.45%201.12-.72%202.3-1.37%203.53-1.93A20.1%2020.1%200%200%200%2014.28%200h2.7c.45.56.88%201.14%201.29%201.74%201.3-.48%202.63-.87%204-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4%2028.4%200%200%201%204%200V0h4.09l-.37.59c1.38.28%202.72.67%204.01%201.15.4-.6.84-1.18%201.3-1.74h2.69a20.1%2020.1%200%200%200-2.1%202.52c1.23.56%202.41%201.2%203.54%201.93A16.08%2016.08%200%200%201%2048.25%200H56c-4.58%200-8.65%202.2-11.2%205.6%201.07.8%202.09%201.68%203.03%202.63A9.99%209.99%200%200%201%2056%204v2a8%208%200%200%200-6.77%203.74c1.03%201.2%201.97%202.5%202.79%203.86A4%204%200%200%201%2056%2010v2a2%202%200%200%200-2%202.07%2028.4%2028.4%200%200%201%202-.07v2c-9.2%200-17.3%204.78-21.91%2012H30zM7.75%2028H0v-2c2.81%200%205.46.73%207.75%202zM56%2020v2c-5.6%200-10.65%202.3-14.28%206h-2.7c4.04-4.89%2010.15-8%2016.98-8zm-39.03%208h-2.69C10.65%2024.3%205.6%2022%200%2022v-2c6.83%200%2012.94%203.11%2016.97%208zm15.01-.4a28.09%2028.09%200%200%201%202.8-3.86%208%208%200%200%200-13.55%200c1.03%201.2%201.97%202.5%202.79%203.86a4%204%200%200%201%207.96%200zm14.29-11.86c1.3-.48%202.63-.87%204-1.15a25.99%2025.99%200%200%200-44.55%200c1.38.28%202.72.67%204.01%201.15a21.98%2021.98%200%200%201%2036.54%200zm-5.43%202.71c1.13-.72%202.3-1.37%203.54-1.93a19.98%2019.98%200%200%200-32.76%200c1.23.56%202.41%201.2%203.54%201.93a15.98%2015.98%200%200%201%2025.68%200zm-4.67%203.78c.94-.95%201.96-1.83%203.03-2.63a13.98%2013.98%200%200%200-22.4%200c1.07.8%202.09%201.68%203.03%202.63a9.99%209.99%200%200%201%2016.34%200z%22%3E%3C/path%3E%3C/svg%3E')]">
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-hind mb-4 text-mithila-indigo">
              Janakpur Darshan – All-In-One Experience
            </h1>
            <p className="text-xl md:text-2xl text-mithila-black italic">
              "A complete spiritual, cultural, and scenic journey through the soul of Mithila."
            </p>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x bg-center" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23E63946' /%3E%3C/svg%3E')",
        }}></div>
      </section>

      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Duration */}
        <Card className="border-l-4 border-l-mithila-red bg-gradient-to-r from-mithila-cream to-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo flex items-center gap-2">
              📅 Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              2 Nights / 3 Days (Flexible to customize for 1–5 days)
            </p>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card className="shadow-lg bg-white border-2 border-mithila-cream">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo">🧭 Highlights</CardTitle>
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
          <h2 className="text-3xl font-bold text-mithila-indigo mb-8 text-center font-hind">🗓️ Day-by-Day Itinerary</h2>
          
          {/* Day 1 */}
          <Card className="mb-6 border-l-4 border-l-mithila-yellow shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-mithila-indigo">🗓️ Day 1: Janakpur Spiritual Trail</CardTitle>
              <p className="text-gray-600 font-medium">Theme: Divine beginnings</p>
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
          <Card className="mb-6 border-l-4 border-l-mithila-green shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-mithila-indigo">🗓️ Day 2: Mithila Culture & Nature Walk</CardTitle>
              <p className="text-gray-600 font-medium">Theme: Art, rituals & sacred landscapes</p>
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
          <Card className="mb-6 border-l-4 border-l-mithila-red shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-mithila-indigo">🗓️ Day 3: Sacred Outskirts Tour</CardTitle>
              <p className="text-gray-600 font-medium">Theme: Treta Yug legends & peaceful nature</p>
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
        <Card className="shadow-lg bg-white border-2 border-mithila-cream">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo">💼 Inclusions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>• Airport/train/bus pickup & drop (Janakpur)</p>
                <p>• Professional local guide (English/Hindi/Maithili)</p>
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
        <Card className="border-l-4 border-l-mithila-yellow shadow-lg bg-gradient-to-r from-mithila-cream to-white">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo">💰 Package Price (per person)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border-2 border-mithila-cream rounded-lg bg-white">
                  <h4 className="font-semibold text-mithila-indigo">Solo</h4>
                  <p className="text-2xl font-bold text-mithila-red">Rs. 12,000</p>
                </div>
                <div className="text-center p-4 border-2 border-mithila-cream rounded-lg bg-white">
                  <h4 className="font-semibold text-mithila-indigo">Couple</h4>
                  <p className="text-2xl font-bold text-mithila-red">Rs. 20,000</p>
                  <p className="text-sm text-gray-600">total</p>
                </div>
                <div className="text-center p-4 border-2 border-mithila-cream rounded-lg bg-white">
                  <h4 className="font-semibold text-mithila-indigo">Group of 4+</h4>
                  <p className="text-2xl font-bold text-mithila-red">Rs. 9,000</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>
              </div>
              <p className="text-center text-gray-600 italic">
                Customizations available for shorter or longer stays.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Perfect For */}
        <Card className="bg-gradient-to-r from-mithila-cream to-white shadow-lg border-2 border-mithila-yellow">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo">💡 Perfect For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Pilgrimage seekers", "Art & culture enthusiasts", "Spiritual couples", "Researchers & students", "Heritage lovers"].map((type) => (
                <Badge key={type} variant="outline" className="text-mithila-indigo border-mithila-red bg-white">
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Book Now */}
        <Card className="shadow-lg bg-white border-2 border-mithila-red">
          <CardHeader>
            <CardTitle className="text-2xl text-mithila-indigo">📞 Book Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="mb-4 text-gray-700">Ready for the complete Janakpur experience?</p>
              <a href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-4 bg-mithila-red hover:bg-mithila-indigo text-white">Book Janakpur Darshan Now</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JanakpurDarshanDetail;