
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PatternBackground from "./PatternBackground";
import { Landmark, Mountain, Compass, Customize, Palette } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Landmark className="h-6 w-6 text-mithila-red" />,
      title: "City Tours",
      description: "Guided tours of Janakpur's vibrant streets, markets, and modern attractions.",
      pattern: "peacock"
    },
    {
      icon: <Compass className="h-6 w-6 text-mithila-red" />,
      title: "Heritage Walks",
      description: "Explore ancient temples and historical sites with expert commentary.",
      pattern: "fish"
    },
    {
      icon: <Palette className="h-6 w-6 text-mithila-red" />,
      title: "Mithila Cultural Tours",
      description: "Immerse in the rich Mithila art, culture, and traditions of the region.",
      pattern: "flower"
    },
    {
      icon: <Mountain className="h-6 w-6 text-mithila-red" />,
      title: "Nature Treks",
      description: "Hiking adventures through the beautiful landscapes surrounding Janakpur.",
      pattern: "peacock"
    },
    {
      icon: <Customize className="h-6 w-6 text-mithila-red" />,
      title: "Custom Experiences",
      description: "Personalized itineraries tailored to your interests and schedule.",
      pattern: "fish"
    }
  ];

  return (
    <section id="services" className="py-16 px-6 relative overflow-hidden bg-white">
      <PatternBackground pattern="flower" className="opacity-5" />
      <div className="container mx-auto relative z-10">
        <h2 className="section-title pb-4 mb-12">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-mithila-yellow"
            >
              <CardHeader className="relative pb-2">
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <CardTitle className="text-xl font-bold text-mithila-indigo group-hover:text-mithila-red transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/9779815835343"
            className="px-6 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-md"
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
