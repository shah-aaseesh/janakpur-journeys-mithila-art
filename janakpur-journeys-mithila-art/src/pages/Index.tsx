
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
        <meta property="og:title" content="Travel Janakpur - Premier Travel Agency in Janakpur, Nepal" />
        <meta property="og:description" content="Discover Janakpur, Nepal with Travel Janakpur. Premium cultural tours, Mithila art experiences, and authentic heritage journeys with expert local guides." />
        <meta property="og:image" content="/hero-image.jpg" />
        <meta property="og:url" content="https://traveljanakpur.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Janakpur - Premier Travel Agency in Janakpur, Nepal" />
        <meta name="twitter:description" content="Discover Janakpur, Nepal with Travel Janakpur. Premium cultural tours, Mithila art experiences, and authentic heritage journeys with expert local guides." />
        <meta name="twitter:image" content="/hero-image.jpg" />
        <link rel="canonical" href="https://traveljanakpur.com" />
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
