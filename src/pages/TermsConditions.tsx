import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>Terms & Conditions | Travel Janakpur</title>
        <meta name="description" content="Terms and Conditions for using Travel Janakpur website and services. Read our policies on bookings, cancellations, and user responsibilities." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold font-hind text-mithila-red mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Travel Janakpur website (traveljanakpur.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or unlawful content</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Booking and Reservations</h2>
              <p>
                All tour bookings are subject to availability and confirmation. When you make a booking inquiry via WhatsApp or other channels:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>Bookings are confirmed only after receiving written confirmation from Travel Janakpur</li>
                <li>Prices are subject to change until booking confirmation</li>
                <li>Payment terms will be communicated at the time of booking</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cancellation and Refund Policy</h2>
              <p>Our cancellation policy is as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>7+ days before tour:</strong> Full refund minus processing fees</li>
                <li><strong>3-6 days before tour:</strong> 50% refund</li>
                <li><strong>Less than 3 days:</strong> No refund</li>
                <li><strong>No-show:</strong> No refund</li>
              </ul>
              <p>
                Travel Janakpur reserves the right to cancel or modify tours due to unforeseen circumstances such as weather conditions, safety concerns, or insufficient participants. In such cases, a full refund or alternative arrangements will be offered.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Liability and Disclaimers</h2>
              <p>
                While we strive to ensure the safety and satisfaction of all our guests:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Participation in tours is at your own risk</li>
                <li>Travel Janakpur is not liable for personal injury, loss, or damage to property</li>
                <li>We recommend purchasing travel insurance for all trips</li>
                <li>We are not responsible for delays caused by third parties or force majeure events</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and graphics, is the property of Travel Janakpur and is protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these external sites. Visiting these links is at your own discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. User Conduct</h2>
              <p>During tours and when using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respect local customs, traditions, and religious sites</li>
                <li>Follow instructions from tour guides</li>
                <li>Behave responsibly and courteously</li>
                <li>Not engage in illegal activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Privacy</h2>
              <p>
                Your use of this website is also governed by our <a href="/privacy-policy" className="text-mithila-red hover:underline">Privacy Policy</a>. Please review it to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to Terms</h2>
              <p>
                Travel Janakpur reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of Nepal. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Nepal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, please contact us via WhatsApp at <a href="https://wa.me/9779815835343" className="text-mithila-red hover:underline">+977 9815835343</a>.
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

export default TermsConditions;
