
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
