import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import PatternBackground from "@/components/PatternBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Users } from "lucide-react";

const HireGuide = () => {
  const guideServices = [
    {
      type: "Well-Trained Guide",
      subtitle: "English Spoken with Guaranteed Service",
      services: [
        {
          duration: "Full Day",
          price: "Rs. 3,000",
          time: "7–9 hours",
          coverage: "Up to 10 sites"
        },
        {
          duration: "Half Day", 
          price: "Rs. 2,000",
          time: "3–5 hours",
          coverage: "Up to 6 sites"
        }
      ],
      featured: true
    },
    {
      type: "Average Guide",
      subtitle: "Hindi Spoken",
      services: [
        {
          duration: "Full Day",
          price: "Rs. 2,000", 
          time: "7–9 hours",
          coverage: "Up to 10 sites"
        },
        {
          duration: "Half Day",
          price: "Rs. 1,500",
          time: "3–5 hours", 
          coverage: "Up to 6 sites"
        }
      ],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden bg-gradient-to-br from-mithila-cream to-white">
        <PatternBackground pattern="flower" className="opacity-10" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <img 
                src="/lovable-uploads/2bd07615-8e9f-42c6-8a39-97d1cc1acd51.png"
                alt="Bikash Sah - Your local guide" 
                className="w-20 h-20 rounded-full object-cover border-4 border-mithila-yellow shadow-lg"
              />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-mithila-red">Namaste!</h1>
                <p className="text-lg text-mithila-indigo">I'm Bikash Sah</p>
                <p className="text-sm text-gray-600">Your local guide in Janakpur</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Experience the rich cultural heritage and hidden gems of Janakpur with personalized 
              tours tailored to your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Guide Service Rates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our professional guide services designed to give you the best experience in Janakpur
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guideServices.map((guide, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${guide.featured ? 'border-mithila-red shadow-lg' : 'border-gray-200'}`}
              >
                {guide.featured && (
                  <div className="absolute top-0 right-0 bg-mithila-red text-white px-4 py-1 text-sm font-medium">
                    <Star className="inline w-4 h-4 mr-1" />
                    Recommended
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-mithila-indigo mb-2">
                    {guide.type}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {guide.subtitle}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {guide.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="p-4 bg-mithila-cream/20 rounded-lg border border-mithila-cream"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-mithila-indigo text-lg">
                            {service.duration}
                          </h4>
                          <span className="text-2xl font-bold text-mithila-red">
                            {service.price}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-mithila-red" />
                            <span>Duration: {service.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-mithila-red" />
                            <span>Coverage: {service.coverage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 p-4 bg-mithila-yellow/10 rounded-lg border border-mithila-yellow/30">
              <Users className="w-5 h-5 text-mithila-red" />
              <p className="text-gray-700 font-medium">
                📌 Note: All services are customizable based on your itinerary and interest.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-mithila-indigo mb-4">
                Ready to Explore Janakpur?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/9779815835343"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-mithila-red hover:bg-mithila-red/90 text-white px-8">
                    Book a Tour
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default HireGuide;