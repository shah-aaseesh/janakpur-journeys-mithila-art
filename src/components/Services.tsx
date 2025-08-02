
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Palette, Mountain, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PatternBackground from "./PatternBackground";

const Services: React.FC = () => {
  const services = [
    {
      icon: Star,
      title: "Janakpur Darshan",
      description: "Complete 3-day spiritual, cultural, and scenic journey through the soul of Mithila.",
      slug: "janakpur-darshan",
      pattern: "flower"
    },
    {
      icon: MapPin,
      title: "City Tours",
      description: "Guided tours of Janakpur's vibrant streets, markets, and modern attractions.",
      slug: "city-tours",
      pattern: "peacock"
    },
    {
      icon: Building,
      title: "Heritage Walks",
      description: "Explore ancient temples and historical sites with expert commentary.",
      slug: "heritage-walks",
      pattern: "fish"
    },
    {
      icon: Palette,
      title: "Mithila Cultural Tours",
      description: "Immerse in the rich Mithila art, culture, and traditions of the region.",
      slug: "mithila-cultural-tours",
      pattern: "flower"
    },
    {
      icon: Mountain,
      title: "Nature Treks",
      description: "Hiking adventures through the beautiful landscapes surrounding Janakpur.",
      slug: "nature-treks",
      pattern: "peacock"
    },
    {
      icon: Sparkles,
      title: "Custom Experiences",
      description: "Personalized itineraries tailored to your interests and schedule.",
      slug: "custom-experiences",
      pattern: "fish"
    }
  ];

  return (
    <section id="services" className="py-16 px-6 relative overflow-hidden bg-white">
      <PatternBackground pattern="flower" className="opacity-5" />
      <div className="container mx-auto relative z-10">
        <h2 className="section-title pb-4 mb-12">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-mithila-cream hover:border-mithila-yellow bg-white">
                <CardHeader className="relative bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-mithila-cream">
                      <IconComponent className="w-6 h-6 text-mithila-red" />
                    </div>
                    <CardTitle className="text-xl font-bold text-mithila-indigo group-hover:text-mithila-red transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="bg-white">
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/hire-guide">
                    <Button 
                      variant="outline" 
                      className="w-full border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white transition-colors duration-300"
                    >
                      Hire a Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/9779815835343"
            className="px-6 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Tour Now
          </a>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-repeat-x" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23E63946' /%3E%3C/svg%3E')",
      }}></div>
    </section>
  );
};

export default Services;
