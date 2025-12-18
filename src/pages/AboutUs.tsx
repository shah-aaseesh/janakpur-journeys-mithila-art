import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>About Us | Travel Janakpur - Your Trusted Mithila Travel Partner</title>
        <meta name="description" content="Learn about Travel Janakpur, Nepal's premier travel agency specializing in authentic Mithila cultural experiences since 2021. Meet our team and discover our mission." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold font-hind text-mithila-red mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Who We Are</h2>
              <p>
                <strong>Travel Janakpur</strong> is Nepal's premier travel agency, founded in 2021 with a passion for showcasing the rich cultural heritage of the Mithila region. Based in the sacred city of Janakpur, we are a team of local experts, certified guides, and travel enthusiasts dedicated to providing authentic and immersive travel experiences.
              </p>
              <p>
                As a licensed and insured travel agency, we have proudly served over 1,000 satisfied customers from around the world, helping them discover the spiritual significance and artistic beauty of Janakpur and the surrounding Mithila region.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
              <p>
                Our mission is to promote sustainable tourism while preserving and celebrating the unique Mithila culture. We aim to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide authentic cultural experiences that connect travelers with local traditions</li>
                <li>Support local artisans, guides, and communities through responsible tourism</li>
                <li>Showcase the spiritual and historical significance of Janakpur to the world</li>
                <li>Offer personalized, high-quality tour services at affordable prices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">What We Offer</h2>
              <p>
                We specialize in a variety of travel experiences tailored to different interests and budgets:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Janakpur Darshan:</strong> Complete pilgrimage packages covering all major temples and sacred sites</li>
                <li><strong>City Tours:</strong> Explore Janakpur's heritage with expert local guides</li>
                <li><strong>Heritage Walks:</strong> Walk through ancient lanes and discover hidden gems</li>
                <li><strong>Mithila Cultural Tours:</strong> Immerse yourself in traditional art, music, and cuisine</li>
                <li><strong>Nature Treks:</strong> Explore the natural beauty surrounding Janakpur</li>
                <li><strong>Custom Experiences:</strong> Tailor-made itineraries for groups, families, and special occasions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Why Choose Us</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local Expertise:</strong> Our guides are born and raised in Janakpur with deep knowledge of local culture</li>
                <li><strong>Licensed & Insured:</strong> We operate as a fully registered travel agency in Nepal</li>
                <li><strong>Trusted by Thousands:</strong> Serving 1000+ customers annually with excellent reviews</li>
                <li><strong>Personalized Service:</strong> Every tour is customized to meet your preferences</li>
                <li><strong>Affordable Pricing:</strong> Competitive rates without compromising quality</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our Audience</h2>
              <p>
                We welcome all travelers, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spiritual seekers and pilgrims visiting sacred Hindu sites</li>
                <li>Culture enthusiasts interested in Mithila art and traditions</li>
                <li>History buffs exploring ancient heritage</li>
                <li>Adventure travelers seeking off-the-beaten-path experiences</li>
                <li>Families and groups looking for memorable vacations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p>
                Ready to explore Janakpur? Get in touch with us via WhatsApp at <a href="https://wa.me/9779815835343" className="text-mithila-red hover:underline">+977 9815835343</a> to start planning your journey.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
