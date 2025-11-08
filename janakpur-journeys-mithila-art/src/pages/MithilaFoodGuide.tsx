import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const MithilaFoodGuide = () => {
  return (
    <>
      <Helmet>
        <title>Traditional Mithila Food You Must Try in Janakpur - Travel Janakpur</title>
        <meta
          name="description"
          content="Discover the rich culinary heritage of Janakpur with our comprehensive guide to traditional Mithila cuisine, from the iconic Mithila Thali to street food favorites."
        />
        <meta
          name="keywords"
          content="Mithila food, Janakpur cuisine, Mithila thali, traditional food Janakpur, Mithila food guide"
        />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-6">Traditional Mithila Food You Must Try in Janakpur</h1>
          
          <p className="text-xl text-gray-600 mb-8">The Ultimate Food Guide by traveljanakpur.com</p>

          <img
            src="/Travel Janakpur 12.jpg"
            alt="Traditional Mithila Food"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="lead">
            Janakpur is not only a spiritual center; it is one of Nepal's richest culinary destinations. 
            Rooted in the ancient Mithila civilization, the food of Janakpur blends tradition, purity, 
            and vibrant flavors that reflect centuries-old customs. From temple offerings to festive dishes, 
            Mithila cuisine celebrates freshness, culture, and family.
          </p>

          <p>
            If you're planning your Janakpur travel itinerary, make sure to dedicate a full day just for 
            Mithila food exploration — because this cuisine is a world of its own.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Makes Mithila Cuisine Unique?</h2>

          <p>Mithila food reflects three pillars of the culture:</p>

          <h3 className="text-xl font-bold mt-6">1. Purity</h3>
          <p>Ingredients like makhana, curd, and rice are considered auspicious.</p>

          <h3 className="text-xl font-bold mt-6">2. Simplicity with Depth</h3>
          <p>Minimal spices, bold flavors.</p>

          <h3 className="text-xl font-bold mt-6">3. Cultural Symbolism</h3>
          <p>Foods are tied to rituals, seasons, and festivals like Chhath, Sama-Chakewa, and Bibaha Panchami.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Mithila Thali — The Complete Cultural Feast</h2>

          <p>A proper Mithila Thali includes:</p>
          <ul>
            <li>Plain rice</li>
            <li>Kadhi bari (chickpea dumplings in yogurt sauce)</li>
            <li>Alu chokha (mashed potato with mustard oil)</li>
            <li>Taruwa (vegetable fritters)</li>
            <li>Tilauri</li>
            <li>Fulauri</li>
            <li>Seasonal vegetables</li>
            <li>Dal</li>
            <li>Achar</li>
            <li>Ghee</li>
          </ul>

          <p>Each element represents balance, prosperity, and cultural identity.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Litti — A Crunchy Staple You Can't Miss</h2>

          <p>Litti is a fried or roasted dough ball stuffed with:</p>
          <ul>
            <li>Roasted gram flour</li>
            <li>Mustard oil</li>
            <li>Garlic</li>
            <li>Ajwain</li>
            <li>Spices</li>
          </ul>

          <p>Traditionally served with yogurt or chokha, it is one of the most popular street foods of Janakpur.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Ghevar — The Festival Sweet of Mithila</h2>

          <p>A honeycomb-style sweet made from:</p>
          <ul>
            <li>Flour</li>
            <li>Sugar syrup</li>
            <li>Ghee</li>
            <li>Khoya</li>
            <li>Dry fruits</li>
          </ul>

          <p>Ghevar is usually enjoyed during Teej, Holi, and weddings.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Makhana — The Soul of Mithila</h2>

          <p>Makhana (fox nuts) represents purity and is used in:</p>
          <ul>
            <li>Prasad</li>
            <li>Sweet dishes</li>
            <li>Makhana kheer</li>
            <li>Temple offerings</li>
          </ul>

          <p>
            It also symbolizes fertility and prosperity — making it a favourite among newlyweds.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Fried Fish — A Celebration Food</h2>

          <p>"Machh, Paan, Makhana" is the soul of Mithila food culture.</p>

          <p>
            Janakpur's ponds ensure a daily supply of fresh fish. Fried fish is served on:
          </p>
          <ul>
            <li>Weddings</li>
            <li>Festivals</li>
            <li>Honoring guests</li>
            <li>Ritual occasions</li>
          </ul>

          <p>
            You will find stalls around Ganga Sagar, Janaki Mandir, and Pidari Chowk selling fresh, 
            crispy fried fish.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Meetha Paan — The Cultural Token of Respect</h2>

          <p>
            In Mithila, offering paan is a gesture of love and hospitality.
          </p>

          <p>From simple paan to meetha paan loaded with:</p>
          <ul>
            <li>Sweet gulkand</li>
            <li>Fennel</li>
            <li>Tutti-frutti</li>
            <li>Coconut</li>
            <li>Cardamom</li>
          </ul>

          <p>It is a must-try cultural ritual.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Best Places to Try Mithila Food in Janakpur</h2>

          <ul>
            <li>Local eateries near Janaki Mandir</li>
            <li>Pidari Chowk street food lane</li>
            <li>Mithila Thali restaurants near Ramananda Chowk</li>
            <li>Food stalls around Ganga Sagar</li>
            <li>Traditional kitchens during festivals (if you're lucky!)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion: Taste Janakpur to Understand Mithila</h2>

          <p>
            To truly experience Janakpur's culture, you must taste its food. Each dish carries history, 
            stories, prayers, and tradition. Whether you're enjoying a crunchy litti, a warm Mithila thali, 
            or sweet ghevar, you're experiencing the heart of Mithila heritage.
          </p>
        </article>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default MithilaFoodGuide;