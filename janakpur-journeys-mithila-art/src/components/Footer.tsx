import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, section?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      // If we're navigating to a section on the home page, scroll to it after navigation
      if (path === "/" && section) {
        setTimeout(() => {
          const element = document.querySelector(`#${section}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else if (section) {
      // If we're already on the home page, just scroll to the section
      const element = document.querySelector(`#${section}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-mithila-indigo text-white relative">
      {/* Top border with Mithila-inspired pattern */}
      <div className="h-4 bg-mithila-red"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold font-hind mb-4">Travel Janakpur</h3>
            <p className="text-gray-300 mb-6">
              Nepal's premier travel agency specializing in authentic Mithila cultural experiences. Licensed, insured, and trusted by thousands of travelers worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation("/", "hero")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/", "about")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/", "services")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/", "gallery")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/blog")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/", "testimonials")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/", "contact")}
                  className="text-gray-300 hover:text-mithila-yellow transition-colors text-left w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61571409603730" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/traveljanakpur/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@traveljanakpur1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-mithila-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">
              EST. 2021 | Licensed Travel Agency
              <br />
              Serving 1000+ satisfied customers annually
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Travel Janakpur. All rights reserved.
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