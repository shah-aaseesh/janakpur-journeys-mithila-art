
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>Travel Janakpur - Premier Travel Agency in Janakpur, Nepal</title>
        <meta 
          name="description" 
          content="Discover Janakpur, Nepal with Travel Janakpur. Premium cultural tours, Mithila art experiences, and authentic heritage journeys with expert local guides. Book your spiritual and cultural adventure today." 
        />
        <meta name="keywords" content="Janakpur travel, Nepal tours, Mithila culture, Janaki Mandir, cultural tours, heritage walks, travel agency Nepal, Janakpur tourism, spiritual tours" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Credentials />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
