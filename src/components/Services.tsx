
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
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden bg-white">
      <PatternBackground pattern="flower" className="opacity-5" />
      <div className="container mx-auto relative z-10">
        <h2 className="section-title pb-4 mb-8 sm:mb-12">Professional Tour Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-mithila-cream hover:border-mithila-yellow bg-white">
                <CardHeader className="relative bg-white p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-mithila-cream flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-mithila-red" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-mithila-indigo group-hover:text-mithila-red transition-colors duration-300 leading-tight break-words">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="bg-white p-4 sm:p-6 pt-0">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base break-words">{service.description}</p>
                  <Link to={`/services/${service.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white transition-colors duration-300 text-sm sm:text-base py-2 sm:py-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <a
            href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0"
            className="px-4 sm:px-6 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Consultation
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
