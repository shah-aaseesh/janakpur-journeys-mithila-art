
import React from "react";
import { ArrowLeft, Clock, Users, MapPin, Star, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PatternBackground from "./PatternBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 pb-6 sm:pb-8 overflow-hidden bg-white">
        {/* Mithila Art Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2256%22%20height%3D%2228%22%3E%3Cpath%20fill%3D%22%23F1C40F%22%20fill-opacity%3D%22.1%22%20d%3D%22M56%2026v2h-7.75c2.3-1.27%204.94-2%207.75-2zm-26%202a2%202%200%201%200-4%200h-4.09A25.98%2025.98%200%200%200%200%2016v-2c.67%200%201.34.02%202%20.07V14a2%202%200%200%200-2-2v-2a4%204%200%200%201%203.98%203.6%2028.09%2028.09%200%200%201%202.8-3.86A8%208%200%200%200%200%206V4a9.99%209.99%200%200%201%208.17%204.23c.94-.95%201.96-1.83%203.03-2.63A13.98%2013.98%200%200%200%200%200h7.75c2%201.1%203.73%202.63%205.1%204.45%201.12-.72%202.3-1.37%203.53-1.93A20.1%2020.1%200%200%200%2014.28%200h2.7c.45.56.88%201.14%201.29%201.74%201.3-.48%202.63-.87%204-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4%2028.4%200%200%201%204%200V0h4.09l-.37.59c1.38.28%202.72.67%204.01%201.15.4-.6.84-1.18%201.3-1.74h2.69a20.1%2020.1%200%200%200-2.1%202.52c1.23.56%202.41%201.2%203.54%201.93A16.08%2016.08%200%200%201%2048.25%200H56c-4.58%200-8.65%202.2-11.2%205.6%201.07.8%202.09%201.68%203.03%202.63A9.99%209.99%200%200%201%2056%204v2a8%208%200%200%200-6.77%203.74c1.03%201.2%201.97%202.5%202.79%203.86A4%204%200%200%201%2056%2010v2a2%202%200%200%200-2%202.07%2028.4%2028.4%200%200%201%202-.07v2c-9.2%200-17.3%204.78-21.91%2012H30zM7.75%2028H0v-2c2.81%200%205.46.73%207.75%202zM56%2020v2c-5.6%200-10.65%202.3-14.28%206h-2.7c4.04-4.89%2010.15-8%2016.98-8zm-39.03%208h-2.69C10.65%2024.3%205.6%2022%200%2022v-2c6.83%200%2012.94%203.11%2016.97%208zm15.01-.4a28.09%2028.09%200%200%201%202.8-3.86%208%208%200%200%200-13.55%200c1.03%201.2%201.97%202.5%202.79%203.86a4%204%200%200%201%207.96%200zm14.29-11.86c1.3-.48%202.63-.87%204-1.15a25.99%2025.99%200%200%200-44.55%200c1.38.28%202.72.67%204.01%201.15a21.98%2021.98%200%200%201%2036.54%200zm-5.43%202.71c1.13-.72%202.3-1.37%203.54-1.93a19.98%2019.98%200%200%200-32.76%200c1.23.56%202.41%201.2%203.54%201.93a15.98%2015.98%200%200%201%2025.68%200zm-4.67%203.78c.94-.95%201.96-1.83%203.03-2.63a13.98%2013.98%200%200%200-22.4%200c1.07.8%202.09%201.68%203.03%202.63a9.99%209.99%200%200%201%2016.34%200z%22%3E%3C/path%3E%3C/svg%3E')]">
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/#services" className="inline-flex items-center text-mithila-red hover:text-mithila-indigo mb-4 sm:mb-6 transition-colors touch-manipulation">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-hind mb-3 sm:mb-4 text-mithila-indigo leading-tight break-words">{title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-mithila-black mb-4 sm:mb-6 px-2 break-words">{description}</p>
            
            {duration && groupSize && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center items-center">
                <div className="flex items-center bg-mithila-cream rounded-lg px-3 sm:px-4 py-2 border-2 border-mithila-yellow">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mithila-red" />
                  <span className="text-mithila-indigo font-medium text-sm sm:text-base">{duration}</span>
                </div>
                <div className="flex items-center bg-mithila-cream rounded-lg px-3 sm:px-4 py-2 border-2 border-mithila-yellow">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mithila-red" />
                  <span className="text-mithila-indigo font-medium text-sm sm:text-base">{groupSize}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x bg-center" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23E63946' /%3E%3C/svg%3E')",
        }}></div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-6 sm:space-y-8">
              {/* About */}
              <Card className="bg-white border-2 border-mithila-cream shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-mithila-indigo text-lg sm:text-xl">About This Experience</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">{longDescription}</p>
                </CardContent>
              </Card>

              {/* Package Options */}
              {packageOptions && packageOptions.length > 0 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-mithila-indigo mb-3 sm:mb-4 font-hind">📅 Package Options</h2>
                  {packageOptions.map((pkg, index) => (
                    <Card key={index} className="bg-white border-2 border-mithila-cream shadow-lg">
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-mithila-indigo flex items-center text-lg sm:text-xl">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-mithila-red" />
                          {String.fromCharCode(65 + index)}. {pkg.name}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          <span><strong>Duration:</strong> {pkg.duration}</span>
                          <span><strong>Coverage:</strong> {pkg.coverage}</span>
                          <span><strong>Ideal For:</strong> {pkg.idealFor}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                        {/* Itinerary */}
                        <div>
                          <h4 className="font-semibold text-mithila-indigo mb-3 text-sm sm:text-base">🗺️ Itinerary:</h4>
                          <div className="space-y-3 sm:space-y-4">
                            {pkg.itinerary.map((item, idx) => (
                              <div key={idx}>
                                {item.activity.startsWith('Day') ? (
                                  <h5 className="font-bold text-mithila-indigo text-base sm:text-lg mb-2 mt-3 sm:mt-4">{item.activity}</h5>
                                ) : (
                                  <div className="flex items-start mb-2">
                                    <div className="w-2 h-2 bg-mithila-red rounded-full mt-1.5 sm:mt-2 mr-3 flex-shrink-0"></div>
                                    <div className="text-sm sm:text-base min-w-0 flex-1">
                                      <span className="font-semibold text-mithila-indigo break-words">{item.activity}</span>
                                      {item.description && <span className="text-gray-700 break-words"> – {item.description}</span>}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Inclusions */}
                        <div>
                          <h4 className="font-semibold text-mithila-indigo mb-3 text-sm sm:text-base">🍽️ Inclusions:</h4>
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {pkg.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start text-xs sm:text-sm">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-mithila-green mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 break-words">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing */}
                        <div className="bg-mithila-cream rounded-lg p-3 sm:p-4">
                          <h4 className="font-semibold text-mithila-indigo mb-2 text-sm sm:text-base">💰 Price:</h4>
                          <div className="text-xl sm:text-2xl font-bold text-mithila-red">{pkg.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <Card className="bg-white border-2 border-mithila-cream shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-mithila-indigo text-lg sm:text-xl">🌟 Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-mithila-yellow mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base break-words">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Traditional Itinerary (for non-package services) */}
              {itinerary && !packageOptions && (
                <Card className="bg-white border-2 border-mithila-cream shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-mithila-indigo">Detailed Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {itinerary.map((item, index) => (
                        <div key={index} className="border-l-4 border-mithila-red pl-6 pb-4">
                          {item.time && (
                            <div className="flex items-center mb-2">
                              <Badge variant="outline" className="bg-mithila-cream text-mithila-red border-mithila-red">
                                {item.time}
                              </Badge>
                            </div>
                          )}
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
                <Card className="bg-white border-2 border-mithila-cream shadow-lg">
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
              <Card className="bg-white border-2 border-mithila-cream shadow-lg sticky top-6">
                <CardHeader>
                  <CardTitle className="text-mithila-indigo">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricing && !packageOptions && (
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

                  {packageOptions && packageOptions.length > 0 && (
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
                    <a href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-mithila-red hover:bg-mithila-red/90 text-white">
                        Book This Tour
                      </Button>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
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
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
