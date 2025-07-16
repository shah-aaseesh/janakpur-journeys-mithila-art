
import React from "react";
import { ArrowLeft, Clock, Users, MapPin, Star, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PatternBackground from "./PatternBackground";

interface PackageOption {
  name: string;
  duration: string;
  coverage: string;
  idealFor: string;
  price: string;
  itinerary: Array<{
    time: string;
    activity: string;
    description: string;
  }>;
  includes: string[];
}

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription: string;
  duration?: string;
  groupSize?: string;
  highlights: string[];
  itinerary?: Array<{
    time: string;
    activity: string;
    description: string;
  }>;
  pricing?: {
    individual: string;
    group: string;
  };
  includes?: string[];
  packageOptions?: PackageOption[];
  addOnServices?: string[];
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
  packageOptions,
  addOnServices,
  pattern,
  imageUrl
}) => {
  return (
    <div className="min-h-screen bg-mithila-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-mithila-indigo to-mithila-red text-white">
        <PatternBackground pattern={pattern} className="opacity-10" />
        <div className="container mx-auto relative z-10 pt-16">
          <Link to="/#services" className="inline-flex items-center text-mithila-cream hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-hind">{title}</h1>
            <p className="text-xl text-mithila-cream mb-6">{description}</p>
            
            {duration && groupSize && (
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
            )}
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

              {/* Package Options */}
              {packageOptions && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-mithila-indigo mb-4">📅 Package Options</h2>
                  {packageOptions.map((pkg, index) => (
                    <Card key={index} className="bg-white border-mithila-cream">
                      <CardHeader>
                        <CardTitle className="text-mithila-indigo flex items-center">
                          <Calendar className="w-5 h-5 mr-2" />
                          {String.fromCharCode(65 + index)}. {pkg.name}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span><strong>Duration:</strong> {pkg.duration}</span>
                          <span><strong>Coverage:</strong> {pkg.coverage}</span>
                          <span><strong>Ideal For:</strong> {pkg.idealFor}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Itinerary */}
                        <div>
                          <h4 className="font-semibold text-mithila-indigo mb-3">🗺️ Itinerary:</h4>
                          <div className="space-y-4">
                            {pkg.itinerary.map((item, idx) => (
                              <div key={idx}>
                                {item.activity.startsWith('Day') ? (
                                  <h5 className="font-bold text-mithila-indigo text-lg mb-2 mt-4">{item.activity}</h5>
                                ) : (
                                  <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-mithila-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                      <span className="font-semibold text-mithila-indigo">{item.activity}</span>
                                      {item.description && <span className="text-gray-700"> – {item.description}</span>}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Inclusions */}
                        <div>
                          <h4 className="font-semibold text-mithila-indigo mb-3">🍽️ Inclusions:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pkg.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="w-4 h-4 text-mithila-green mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing */}
                        <div className="bg-mithila-cream rounded-lg p-4">
                          <h4 className="font-semibold text-mithila-indigo mb-2">💰 Price:</h4>
                          <div className="text-2xl font-bold text-mithila-red">{pkg.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <Card className="bg-white border-mithila-cream">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">🌟 Tour Highlights</CardTitle>
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

              {/* Traditional Itinerary (for non-package services) */}
              {itinerary && !packageOptions && (
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
              )}

              {/* Add-On Services */}
              {addOnServices && (
                <Card className="bg-white border-mithila-cream">
                  <CardHeader>
                    <CardTitle className="text-mithila-indigo">🔖 Add-On Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {addOnServices.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-mithila-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="bg-white border-mithila-cream sticky top-6">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricing && (
                    <>
                      <div className="p-4 bg-mithila-cream rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Individual</div>
                        <div className="text-2xl font-bold text-mithila-red">{pricing.individual}</div>
                      </div>
                      <div className="p-4 bg-mithila-cream rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Group (4+ people)</div>
                        <div className="text-2xl font-bold text-mithila-red">{pricing.group}</div>
                      </div>
                    </>
                  )}

                  {packageOptions && (
                    <div className="space-y-3">
                      {packageOptions.map((pkg, index) => (
                        <div key={index} className="p-4 bg-mithila-cream rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">{pkg.name}</div>
                          <div className="text-lg font-bold text-mithila-red">{pkg.price}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {includes && (
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
                  )}

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
