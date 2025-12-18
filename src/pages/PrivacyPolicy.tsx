import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>Privacy Policy | Travel Janakpur</title>
        <meta name="description" content="Privacy Policy for Travel Janakpur. Learn how we collect, use, and protect your personal information when you use our travel services." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold font-hind text-mithila-red mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p>
                Welcome to Travel Janakpur. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our travel services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details when you inquire about our services via WhatsApp or other channels.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, device type, and operating system.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Use of Cookies</h2>
              <p>
                Our website uses cookies to improve your experience. Cookies help us understand how visitors use our site, remember your preferences, and provide personalized content.
              </p>
              <p><strong>Types of cookies we use:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior and improve our services.</li>
                <li><strong>Advertising Cookies:</strong> Used by third-party advertisers to serve relevant ads.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-Party Advertising (Google AdSense)</h2>
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-mithila-red hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-mithila-red hover:underline">www.aboutads.info</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our travel services</li>
                <li>Respond to your inquiries and booking requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us via WhatsApp at <a href="https://wa.me/9779815835343" className="text-mithila-red hover:underline">+977 9815835343</a>.
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

export default PrivacyPolicy;
