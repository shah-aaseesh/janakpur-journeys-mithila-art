
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
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

  const handleMenuClick = (href: string) => {
    if (href === "/") {
      // Navigate to home
      return;
    } else if (href.startsWith("/#")) {
      if (isDetailPage) {
        // If on detail page, navigate to home with hash
        window.location.href = href;
      } else {
        // If on home page, scroll to section
        const sectionId = href.substring(2);
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        (isScrolled || isDetailPage)
          ? "bg-white shadow-md"
          : isHomePage 
            ? "bg-black/20 backdrop-blur-sm"
            : "bg-white shadow-md"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className={cn(
            "text-xl font-bold transition-colors",
            (isScrolled || isDetailPage || !isHomePage)
              ? "text-mithila-indigo hover:text-mithila-red"
              : "text-white hover:text-mithila-cream"
          )}
        >
          Bikash Sah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.href === "/" ? (
                  <Link
                    to={item.href}
                    className={cn(
                      "font-medium transition-colors",
                      (isScrolled || isDetailPage || !isHomePage)
                        ? "text-mithila-indigo hover:text-mithila-red"
                        : "text-white hover:text-mithila-cream"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors cursor-pointer",
                      (isScrolled || isDetailPage || !isHomePage)
                        ? "text-mithila-indigo hover:text-mithila-red"
                        : "text-white hover:text-mithila-cream"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn(
              "w-6 h-6",
              (isScrolled || isDetailPage || !isHomePage) 
                ? "text-mithila-indigo" 
                : "text-white"
            )}
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
          <div className="md:hidden fixed inset-0 top-16 bg-white p-4 z-40 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.href === "/" ? (
                    <Link
                      to={item.href}
                      className="block py-2 text-center font-medium text-mithila-indigo hover:text-mithila-red transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-center font-medium text-mithila-indigo hover:text-mithila-red transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(item.href);
                      }}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
