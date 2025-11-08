
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDetailPage = location.pathname.startsWith('/services/');
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

  const handleMenuClick = (href: string) => {
    if (href === "/") {
      // Navigate to home and scroll to top
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);
    } else if (href === "/blog") {
      // Navigate to blog
      navigate(href);
    } else if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      
      if (isDetailPage || isBlogPage) {
        // If on detail page or blog page, navigate to home first, then scroll to section
        navigate("/");
        // Use setTimeout to ensure navigation completes before scrolling
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      } else {
        // If on home page, scroll to section
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-white shadow-md">
      {/* Mithila Art Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2256%22%20height%3D%2228%22%3E%3Cpath%20fill%3D%22%23F1C40F%22%20fill-opacity%3D%22.1%22%20d%3D%22M56%2026v2h-7.75c2.3-1.27%204.94-2%207.75-2zm-26%202a2%202%200%201%200-4%200h-4.09A25.98%2025.98%200%200%200%200%2016v-2c.67%200%201.34.02%202%20.07V14a2%202%200%200%200-2-2v-2a4%204%200%200%201%203.98%203.6%2028.09%2028.09%200%200%201%202.8-3.86A8%208%200%200%200%200%206V4a9.99%209.99%200%200%201%208.17%204.23c.94-.95%201.96-1.83%203.03-2.63A13.98%2013.98%200%200%200%200%200h7.75c2%201.1%203.73%202.63%205.1%204.45%201.12-.72%202.3-1.37%203.53-1.93A20.1%2020.1%200%200%200%2014.28%200h2.7c.45.56.88%201.14%201.29%201.74%201.3-.48%202.63-.87%204-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4%2028.4%200%200%201%204%200V0h4.09l-.37.59c1.38.28%202.72.67%204.01%201.15.4-.6.84-1.18%201.3-1.74h2.69a20.1%2020.1%200%200%200-2.1%202.52c1.23.56%202.41%201.2%203.54%201.93A16.08%2016.08%200%200%201%2048.25%200H56c-4.58%200-8.65%202.2-11.2%205.6%201.07.8%202.09%201.68%203.03%202.63A9.99%209.99%200%200%201%2056%204v2a8%208%200%200%200-6.77%203.74c1.03%201.2%201.97%202.5%202.79%203.86A4%204%200%200%201%2056%2010v2a2%202%200%200%200-2%202.07%2028.4%2028.4%200%200%201%202-.07v2c-9.2%200-17.3%204.78-21.91%2012H30zM7.75%2028H0v-2c2.81%200%205.46.73%207.75%202zM56%2020v2c-5.6%200-10.65%202.3-14.28%206h-2.7c4.04-4.89%2010.15-8%2016.98-8zm-39.03%208h-2.69C10.65%2024.3%205.6%2022%200%2022v-2c6.83%200%2012.94%203.11%2016.97%208zm15.01-.4a28.09%2028.09%200%200%201%202.8-3.86%208%208%200%200%200-13.55%200c1.03%201.2%201.97%202.5%202.79%203.86a4%204%200%200%201%207.96%200zm14.29-11.86c1.3-.48%202.63-.87%204-1.15a25.99%2025.99%200%200%200-44.55%200c1.38.28%202.72.67%204.01%201.15a21.98%2021.98%200%200%201%2036.54%200zm-5.43%202.71c1.13-.72%202.3-1.37%203.54-1.93a19.98%2019.98%200%200%200-32.76%200c1.23.56%202.41%201.2%203.54%201.93a15.98%2015.98%200%200%201%2025.68%200zm-4.67%203.78c.94-.95%201.96-1.83%203.03-2.63a13.98%2013.98%200%200%200-22.4%200c1.07.8%202.09%201.68%203.03%202.63a9.99%209.99%200%200%201%2016.34%200z%22%3E%3C/path%3E%3C/svg%3E')]">
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <Link 
          to="/" 
          className="text-xl font-bold transition-colors text-mithila-red hover:text-mithila-indigo break-words"
        >
          Travel Janakpur
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-medium transition-colors text-mithila-indigo hover:text-mithila-red cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-mithila-cream transition-colors touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-mithila-red"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white p-4 z-40 animate-fade-in shadow-lg">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-3 px-4 text-center font-medium text-mithila-indigo hover:text-mithila-red transition-colors rounded-md hover:bg-mithila-cream touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      handleMenuClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile WhatsApp Button */}
            <div className="mt-6 pt-6 border-t border-mithila-cream">
              <a
                href="https://api.whatsapp.com/send/?phone=9779766115966&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-mithila-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
