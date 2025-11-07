import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Star, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PatternBackground from "@/components/PatternBackground";

const HireGuide: React.FC = () => {
  const guideServices = [
    {
      category: "Well-Trained Guide",
      subtitle: "(English Spoken with Guaranteed Service)",
      icon: Star,
      color: "text-mithila-red",
      bgColor: "bg-mithila-red/10",
      packages: [
        {
          name: "Full Day",
          price: "Rs. 3000",
          duration: "7–9 hours",
          coverage: "Up to 10 sites"
        },
        {
          name: "Half Day",
          price: "Rs. 2000",
          duration: "3–5 hours",
          coverage: "Up to 6 sites"
        }
      ]
    },
    {
      category: "Average Guide",
      subtitle: "(Hindi Spoken)",
      icon: Users,
      color: "text-mithila-indigo",
      bgColor: "bg-mithila-indigo/10",
      packages: [
        {
          name: "Full Day",
          price: "Rs. 2000",
          duration: "7–9 hours",
          coverage: "Up to 10 sites"
        },
        {
          name: "Half Day",
          price: "Rs. 1500",
          duration: "3–5 hours",
          coverage: "Up to 6 sites"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Helmet>
        <title>Hire Local Guide in Janakpur - Expert Tour Guides | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Hire experienced local guides in Janakpur for personalized tours. Expert knowledge of temples, culture, and hidden gems. Flexible packages from half-day to multi-day tours." 
        />
        <meta name="keywords" content="hire guide Janakpur, local tour guide, Janakpur guide service, personal guide Nepal, expert guide hire, cultural guide Janakpur" />
      </Helmet>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-mithila-indigo hover:text-mithila-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-mithila-cream to-white overflow-hidden">
        <PatternBackground pattern="flower" className="opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold font-hind text-mithila-indigo mb-4">
                Hire a Guide
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Get personalized tours with experienced local guides who know Janakpur inside out.
              </p>
              <div className="w-32 h-1 bg-mithila-red rounded"></div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1f2f9d97-75d4-4110-9fbb-370f46d44c5a.png" 
                  alt="Bikash Sah - Your Local Guide" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mithila-yellow rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-mithila-green rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Service Rates */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-hind text-mithila-indigo mb-4">
              Guide Service Rates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our experienced guides based on your preferences and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guideServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`${service.bgColor} pb-6`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-white ${service.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className={`text-xl font-bold ${service.color}`}>
                          🔹 {service.category}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{service.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {service.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="border-l-4 border-mithila-yellow pl-4">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold text-mithila-indigo">
                              {pkg.name}
                            </h3>
                            <Badge variant="outline" className="text-mithila-red border-mithila-red">
                              {pkg.price}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4 text-mithila-green" />
                              <span className="text-sm">⏱️ Duration: {pkg.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4 text-mithila-green" />
                              <span className="text-sm">📍 Coverage: {pkg.coverage}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-mithila-cream px-6 py-3 rounded-lg">
              <span className="text-2xl">📌</span>
              <p className="text-mithila-indigo font-medium">
                Note: All services are customizable based on your itinerary and interest.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-mithila-indigo mb-4">
              Ready to Explore Janakpur?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact me to book your personalized guide service and discover the hidden gems of Janakpur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0"
                className="px-8 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/#contact"
                className="px-8 py-3 border-2 border-mithila-indigo text-mithila-indigo rounded-md font-medium hover:bg-mithila-indigo hover:text-white transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireGuide;