import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const ContactUs: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9779815835343?text=Hello! I'm interested in your travel services.", "_blank");
  };

  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>Contact Us | Travel Janakpur - Get in Touch</title>
        <meta name="description" content="Contact Travel Janakpur for tour bookings, inquiries, and travel assistance. Reach us via WhatsApp, email, or visit our office in Janakpur, Nepal." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold font-hind text-mithila-red mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <p className="text-lg text-foreground/80">
                We'd love to hear from you! Whether you're planning a trip to Janakpur, have questions about our services, or need travel assistance, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mithila-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-mithila-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp (Preferred)</h3>
                    <p className="text-foreground/70">+977 9815835343</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for quick responses</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mithila-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-mithila-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70">+977 9815835343</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM (Nepal Time)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mithila-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-mithila-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">info@traveljanakpur.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mithila-indigo/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-mithila-indigo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-foreground/70">Janakpur, Dhanusha</p>
                    <p className="text-foreground/70">Province 2, Nepal</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            
            {/* Map or Additional Info */}
            <div className="bg-mithila-red/5 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Quick Booking</h2>
              <p className="text-foreground/70">
                For the fastest response and instant booking assistance, we recommend reaching out via WhatsApp. Simply click the button below and start a conversation with our travel experts.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-foreground/70">Monday - Friday:</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  <span className="text-foreground/70">Saturday:</span>
                  <span className="text-foreground">9:00 AM - 4:00 PM</span>
                  <span className="text-foreground/70">Sunday:</span>
                  <span className="text-foreground">Closed (WhatsApp Available)</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571409603730" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-mithila-indigo rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/traveljanakpur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@traveljanakpur1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default ContactUs;
