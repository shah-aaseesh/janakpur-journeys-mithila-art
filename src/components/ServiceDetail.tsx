
import React from "react";
import { ArrowLeft, Clock, Users, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PatternBackground from "./PatternBackground";

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  groupSize: string;
  highlights: string[];
  itinerary: Array<{
    time: string;
    activity: string;
    description: string;
  }>;
  pricing: {
    individual: string;
    group: string;
  };
  includes: string[];
  pattern: "peacock" | "fish" | "flower";
  imageUrl?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  longDescription,
  duration,
  groupSize,
  highlights,
  itinerary,
  pricing,
  includes,
  pattern,
  imageUrl
}) => {
  return (
    <div className="min-h-screen bg-mithila-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-mithila-indigo to-mithila-red text-white">
        <PatternBackground pattern={pattern} className="opacity-10" />
        <div className="container mx-auto relative z-10">
          <Link to="/#services" className="inline-flex items-center text-mithila-cream hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-hind">{title}</h1>
            <p className="text-xl text-mithila-cream mb-6">{description}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>{groupSize}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="bg-white border-mithila-cream">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">About This Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{longDescription}</p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="bg-white border-mithila-cream">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-mithila-yellow mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card className="bg-white border-mithila-cream">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Detailed Itinerary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {itinerary.map((item, index) => (
                      <div key={index} className="border-l-4 border-mithila-red pl-6 pb-4">
                        <div className="flex items-center mb-2">
                          <Badge variant="outline" className="bg-mithila-cream text-mithila-red border-mithila-red">
                            {item.time}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-mithila-indigo mb-2">{item.activity}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="bg-white border-mithila-cream sticky top-6">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-mithila-cream rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Individual</div>
                    <div className="text-2xl font-bold text-mithila-red">{pricing.individual}</div>
                  </div>
                  <div className="p-4 bg-mithila-cream rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Group (4+ people)</div>
                    <div className="text-2xl font-bold text-mithila-red">{pricing.group}</div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-mithila-indigo mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {includes.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-mithila-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
    </div>
  );
};

export default ServiceDetail;
