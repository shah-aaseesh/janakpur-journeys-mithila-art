
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title pb-4">About Travel Janakpur</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 animate-fade-in flex items-center justify-center">
            <div className="relative">
              {/* Image with Mithila-inspired border */}
              <div className="border-4 sm:border-8 border-mithila-cream p-2 rounded-lg shadow-lg">
                <div className="h-64 sm:h-80 overflow-hidden rounded">
                  <img 
                    src="/about-image.webp" 
                    alt="Travel Janakpur team member" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-20 sm:w-40 sm:h-24 bg-mithila-yellow bg-opacity-20 -z-10 rounded-br-3xl"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-mithila-green bg-opacity-20 -z-10 rounded-tl-3xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-mithila-indigo mb-4 sm:mb-6 font-hind break-words">Leading Travel & Tourism Company</h3>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              <p className="break-words">
                Founded in 2021, Travel Janakpur is Nepal's leading travel agency for authentic Mithila cultural experiences. With a team of certified guides and tourism experts, we deliver safe, reliable, and memorable journeys backed by official licensing and full insurance coverage.
              </p>
              <p className="break-words">
                Our multilingual team (English, Hindi, Nepali, Maithili) serves global travelers with cultural sensitivity and professionalism. As specialists in Mithila heritage tourism, we partner with local artisans, cultural centers, and heritage sites to preserve and promote Janakpur's rich traditions.
              </p>
              <p className="break-words">
                Serving 1,000+ happy clients each year, we create customized tours blending spiritual travel, cultural immersion, and adventure tourism—offering truly transformative experiences in Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
