
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-mithila-indigo text-white relative">
      {/* Top border with Mithila-inspired pattern */}
      <div className="h-4 bg-mithila-red"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold font-hind mb-4">Bikash Sah</h3>
            <p className="text-gray-300 mb-6">
              Professional tour guide based in Janakpur, Nepal. Offering personalized cultural experiences and immersive journeys.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Gallery", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-mithila-yellow transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
                      document.querySelector(`#${sectionId}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Available for bookings year-round
              <br />
              Best season to visit: October to March
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Bikash Sah. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 mt-4 md:mt-0 flex items-center">
            Made with
            <span className="text-mithila-red mx-1">❤️</span>
            in Janakpur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
