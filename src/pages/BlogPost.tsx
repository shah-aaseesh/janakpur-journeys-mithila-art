import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Ensure scroll to top on component mount
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    setTimeout(scrollToTop, 100);
  }, []);

  // Sample blog posts data - replace with actual data fetching
  const blogPosts: BlogPost[] = [
    {
      id: "folk-dances-music-mithila-janakpur",
      title: "Folk Dances & Music of Mithila — The Cultural Pulse of Janakpur",
      excerpt: "Discover the vibrant folk dances, devotional songs, and dramatic performances of Mithila region, from the iconic Jhi-Jhiya dance to soulful Lok Sankeertan traditions.",
      content: `
        <div class="mb-12">
          <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed">
              Janakpur is not just temples and mythology; it is a city that breathes rhythm and movement. 
              The ancient Mithila region has preserved some of South Asia's oldest folk dances, devotional songs, 
              and dramatic performances — many dating back to the Treta Yuga.
            </p>
            
            <p class="text-lg leading-relaxed mt-4">
              If you're traveling to Janakpur, these folk traditions will give you the most authentic window into Maithili life.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">Why Mithila Dance & Music Matter</h2>
          
          <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">They preserve ancient oral histories</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">They carry stories from Ramayana</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">They celebrate love, devotion, festivals, and womanhood</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">They reflect community values</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">
            Mithila's cultural performances are more than entertainment — they are rituals that keep heritage alive.
          </p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">1. Jhi-Jhiya Dance — The Fire Dance of Womanhood</h2>
          
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">One of Mithila's most iconic dances, performed:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">During Dashain</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">At night</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">By young girls</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Balancing earthen pots with fire lamps on their heads</span>
              </li>
            </ul>
            
            <p class="text-lg leading-relaxed mt-4">
              It symbolizes strength, devotion, and protection against evil.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">2. Jat-Jatin — The Dance of Love & Reunion</h2>
          
          <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">Performed post-monsoon, this is a duet representing:</p>
            
            <ul class="grid md:grid-cols-2 gap-4 mb-6">
              <div class="bg-white border-l-4 border-rose-400 p-4 rounded-lg">
                <span class="text-lg">Shiva (male)</span>
              </div>
              <div class="bg-white border-l-4 border-rose-400 p-4 rounded-lg">
                <span class="text-lg">Parvati (female)</span>
              </div>
            </ul>

            <p class="text-lg leading-relaxed mb-4">Themes include:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-rose-500 mr-3">•</span>
                <span class="text-lg">Separation</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-500 mr-3">•</span>
                <span class="text-lg">Longing</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-500 mr-3">•</span>
                <span class="text-lg">Reunion</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-500 mr-3">•</span>
                <span class="text-lg">Fulfillment</span>
              </li>
            </ul>
            
            <p class="text-lg leading-relaxed mt-4">
              It is visually poetic and deeply emotional.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">3. Sama Chakewa — A Sisterhood Ritual Dance</h2>
          
          <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">Performed during the Kartik month, this dance celebrates:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Bond between brothers and sisters</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Devotion</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Purity</span>
              </li>
            </ul>
            
            <p class="text-lg leading-relaxed mt-4">
              Women hold baskets with dolls, sing Maithili songs, and perform circle dances until midnight.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">4. Jharri Dance — The Warrior Rhythm</h2>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">Performed by men during:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Hanuman Jhand (Hanuman's flag celebration)</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Tajiya (Muslim ritual festival)</span>
              </li>
            </ul>
            
            <p class="text-lg leading-relaxed mt-4">
              Men hold sticks and perform energetic rhythmic steps — a symbol of unity and valour.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">5. Lok Sankeertan — Mithila's Devotional Music Tradition</h2>
          
          <div class="grid gap-6 mb-8">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <p class="text-lg leading-relaxed mb-4">Performed with:</p>
              <ul class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded-lg text-center">
                  <span class="text-lg">Harmonium</span>
                </div>
                <div class="bg-white p-3 rounded-lg text-center">
                  <span class="text-lg">Dholak</span>
                </div>
                <div class="bg-white p-3 rounded-lg text-center">
                  <span class="text-lg">Jhal</span>
                </div>
                <div class="bg-white p-3 rounded-lg text-center">
                  <span class="text-lg">Gumti</span>
                </div>
                <div class="bg-white p-3 rounded-lg text-center">
                  <span class="text-lg">Bamboo instruments</span>
                </div>
              </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <p class="text-lg leading-relaxed mb-4">Four types exist:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-mithila-yellow text-xl mr-3">•</span>
                  <span class="text-lg">General Sankeertan</span>
                </li>
                <li class="flex items-start">
                  <span class="text-mithila-yellow text-xl mr-3">•</span>
                  <span class="text-lg">Jhanki Sankeertan</span>
                </li>
                <li class="flex items-start">
                  <span class="text-mithila-yellow text-xl mr-3">•</span>
                  <span class="text-lg">Bishaya Sankeertan</span>
                </li>
                <li class="flex items-start">
                  <span class="text-mithila-yellow text-xl mr-3">•</span>
                  <span class="text-lg">Jhanki Vivah Sankeertan (covers Ram–Sita wedding scenes)</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="text-lg leading-relaxed mb-8">
            These songs are spiritual, calming, and central to Janakpur's temple culture.
          </p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">6. Leela Performances — Ramayana Comes Alive</h2>
          
          <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">The most famous is:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Ram Leela — performed for almost a month</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Tells entire Ramayana story</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Performed by local community groups</span>
              </li>
            </ul>
            
            <p class="text-lg leading-relaxed mt-4">
              This is one of Janakpur's largest cultural attractions.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">Where to Experience These in Janakpur</h2>
          
          <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">Janaki Mandir courtyard</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">Barhabigha ground</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">During Bibaha Panchami</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">Chhath Puja celebrations</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">Community cultural centers</span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-500 mr-3">•</span>
                <span class="text-lg">Villages around Janakpur (during festivals)</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-r from-mithila-cream to-orange-50 p-6 rounded-lg mb-8">
            <h2 class="text-3xl font-bold text-mithila-indigo mb-4">Conclusion: Mithila's Rhythm Lives in Janakpur</h2>
            
            <p class="text-lg leading-relaxed mb-4">
              From fiery Jhi-Jhiya dances to the soulful melodies of Lok Sankeertan, Janakpur's cultural 
              performances reveal the heartbeat of Mithila. If mythology is its soul, then music and dance 
              are its breath.
            </p>
            
            <p class="text-lg leading-relaxed">
              A trip to Janakpur is incomplete without experiencing this living cultural heritage.
            </p>
          </div>
        </div>
      `,
      author: "Travel Janakpur Team",
      publishDate: "2025-11-08",
      readTime: "10 min read",
      category: "Culture",
      tags: ["Culture", "Art", "Festivals", "Folk Dance", "Music", "Traditions"],
      imageUrl: "/Traveljanakpurb4.jpg"
    },
    {
      id: "traditional-mithila-food-janakpur",
      title: "Traditional Mithila Food You Must Try in Janakpur",
      excerpt: "Discover the rich culinary heritage of Janakpur with our comprehensive guide to traditional Mithila cuisine, from the iconic Mithila Thali to street food favorites.",
      content: `
        <div class="mb-12">
          <p class="text-xl text-gray-600 mb-8">The Ultimate Food Guide by traveljanakpur.com</p>

          <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed">
              Janakpur is not only a spiritual center; it is one of Nepal's richest culinary destinations. 
              Rooted in the ancient Mithila civilization, the food of Janakpur blends tradition, purity, 
              and vibrant flavors that reflect centuries-old customs. From temple offerings to festive dishes, 
              Mithila cuisine celebrates freshness, culture, and family.
            </p>
          </div>

          <p class="text-lg leading-relaxed mb-8">
            If you're planning your Janakpur travel itinerary, make sure to dedicate a full day just for 
            Mithila food exploration — because this cuisine is a world of its own.
          </p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">What Makes Mithila Cuisine Unique?</h2>

          <p class="text-lg leading-relaxed mb-6">Mithila food reflects three pillars of the culture:</p>

          <div class="grid gap-4 mb-8">
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-xl mb-2">1. Purity</h4>
              <p class="text-gray-700">Ingredients like makhana, curd, and rice are considered auspicious.</p>
            </div>

            <div class="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-xl mb-2">2. Simplicity with Depth</h4>
              <p class="text-gray-700">Minimal spices, bold flavors.</p>
            </div>

            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-xl mb-2">3. Cultural Symbolism</h4>
              <p class="text-gray-700">Foods are tied to rituals, seasons, and festivals like Chhath, Sama-Chakewa, and Bibaha Panchami.</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">1. Mithila Thali — The Complete Cultural Feast</h2>

          <p class="text-lg leading-relaxed mb-6">A proper Mithila Thali includes:</p>
          
          <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Plain rice</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Kadhi bari (chickpea dumplings in yogurt sauce)</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Alu chokha (mashed potato with mustard oil)</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Taruwa (vegetable fritters)</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Tilauri</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Fulauri</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Seasonal vegetables</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Dal</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Achar</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Ghee</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">Each element represents balance, prosperity, and cultural identity.</p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">2. Litti — A Crunchy Staple You Can't Miss</h2>

          <p class="text-lg leading-relaxed mb-6">Litti is a fried or roasted dough ball stuffed with:</p>
          
          <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Roasted gram flour</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Mustard oil</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Garlic</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Ajwain</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">•</span>
                <span class="text-lg">Spices</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">Traditionally served with yogurt or chokha, it is one of the most popular street foods of Janakpur.</p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">3. Ghevar — The Festival Sweet of Mithila</h2>

          <p class="text-lg leading-relaxed mb-6">A honeycomb-style sweet made from:</p>
          
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Flour</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Sugar syrup</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Ghee</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Khoya</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-3">•</span>
                <span class="text-lg">Dry fruits</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">Ghevar is usually enjoyed during Teej, Holi, and weddings.</p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">4. Makhana — The Soul of Mithila</h2>

          <p class="text-lg leading-relaxed mb-6">Makhana (fox nuts) represents purity and is used in:</p>
          
          <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Prasad</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Sweet dishes</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Makhana kheer</span>
              </li>
              <li class="flex items-start">
                <span class="text-mithila-yellow text-xl mr-3">•</span>
                <span class="text-lg">Temple offerings</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">
            It also symbolizes fertility and prosperity — making it a favourite among newlyweds.
          </p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">5. Fried Fish — A Celebration Food</h2>

          <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">"Machh, Paan, Makhana" is the soul of Mithila food culture.</p>

            <p class="text-lg leading-relaxed mb-4">
              Janakpur's ponds ensure a daily supply of fresh fish. Fried fish is served on:
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Weddings</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Festivals</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Honoring guests</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-3">•</span>
                <span class="text-lg">Ritual occasions</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">
            You will find stalls around Ganga Sagar, Janaki Mandir, and Pidari Chowk selling fresh, 
            crispy fried fish.
          </p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">6. Meetha Paan — The Cultural Token of Respect</h2>

          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-8">
            <p class="text-lg leading-relaxed mb-4">
              In Mithila, offering paan is a gesture of love and hospitality.
            </p>

            <p class="text-lg leading-relaxed mb-4">From simple paan to meetha paan loaded with:</p>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-emerald-500 mr-3">•</span>
                <span class="text-lg">Sweet gulkand</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-500 mr-3">•</span>
                <span class="text-lg">Fennel</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-500 mr-3">•</span>
                <span class="text-lg">Tutti-frutti</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-500 mr-3">•</span>
                <span class="text-lg">Coconut</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-500 mr-3">•</span>
                <span class="text-lg">Cardamom</span>
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed mb-8">It is a must-try cultural ritual.</p>

          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">Best Places to Try Mithila Food in Janakpur</h2>

          <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Local eateries near Janaki Mandir</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Pidari Chowk street food lane</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Mithila Thali restaurants near Ramananda Chowk</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Food stalls around Ganga Sagar</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-3">•</span>
                <span class="text-lg">Traditional kitchens during festivals (if you're lucky!)</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-r from-mithila-cream to-orange-50 p-6 rounded-lg mb-8">
            <h2 class="text-3xl font-bold text-mithila-indigo mb-4">Conclusion: Taste Janakpur to Understand Mithila</h2>

            <p class="text-lg leading-relaxed">
              To truly experience Janakpur's culture, you must taste its food. Each dish carries history, 
              stories, prayers, and tradition. Whether you're enjoying a crunchy litti, a warm Mithila thali, 
              or sweet ghevar, you're experiencing the heart of Mithila heritage.
            </p>
          </div>
        </div>
      `,
      author: "Travel Janakpur Team",
      publishDate: "2025-11-08",
      readTime: "12 min read",
      category: "Food & Culture",
      tags: ["Food Guide", "Mithila Cuisine", "Culture", "Local Food", "Traditions"],
      imageUrl: "/Travel Janakpur 12.jpg"
    },
    {
      id: "how-to-visit-janakpur-nepal-2025",
      title: "How to Visit Janakpur, Nepal? (Complete Travel Guide 2025)",
      excerpt: "Planning a trip to Janakpur, Nepal? Learn how to reach Janakpur by air, road, and train, the best time to visit, and the must-see attractions in this spiritual city.",
      content: `
        <div class="mb-8">
          <p class="text-xl leading-relaxed mb-6">Janakpur, the cultural capital of Mithila and birthplace of Goddess Sita, is one of the most visited pilgrimage cities in Nepal. Famous for its Janaki Mandir, sacred ponds, and colorful festivals, the city attracts both religious pilgrims and cultural travelers from Nepal, India, and beyond.</p>
          
          <p class="text-lg leading-relaxed mb-8"><strong>If you're planning a trip, here's a complete travel guide on how to visit Janakpur, including transport options, the best season to travel, and must-see places.</strong></p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            How to Get to Janakpur
          </h2>
          
          <div class="space-y-8">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">By Air (Fastest & Easiest)</h3>
              <ul class="space-y-3 mb-4">
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg">Daily 30-minute flights operate between Kathmandu and Janakpur</span></li>
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Airlines:</strong> Buddha Air, Shree Airlines, Yeti Airlines</span></li>
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Flight times:</strong> Between 7:30 AM and 5:30 PM</span></li>
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Cost:</strong> NPR 4,000–6,000 (approx. $30–45)</span></li>
              </ul>
              <p class="text-lg font-medium text-blue-700">Best choice if you want to save time.</p>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-2xl font-bold text-green-600 mb-4">By Road (Budget-Friendly)</h3>
              <ul class="space-y-3 mb-4">
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg"><strong>Distance from Kathmandu:</strong> 223 km</span></li>
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg">Buses run every 1–2 hours from Kathmandu in the morning and evening</span></li>
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg">Tickets can be booked via eSewa or bought at bus stations</span></li>
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg">Cross-border travelers can use the Jaleswar–Janakpur route via Matihani or the Pipraun–Nagarain–Janakpur route</span></li>
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg"><strong>Bus Fare:</strong> NPR 1,200–1,800 depending on class</span></li>
                <li class="flex items-start"><span class="text-green-500 mr-3">•</span> <span class="text-lg"><strong>Travel Time:</strong> 6–8 hours</span></li>
              </ul>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg">
              <h3 class="text-2xl font-bold text-yellow-600 mb-4">By Train (Unique Experience)</h3>
              <ul class="space-y-3 mb-4">
                <li class="flex items-start"><span class="text-yellow-500 mr-3">•</span> <span class="text-lg">Janakpur is connected to Jayanagar (India) by a 52 km train line</span></li>
                <li class="flex items-start"><span class="text-yellow-500 mr-3">•</span> <span class="text-lg">It is Nepal's first cross-border passenger railway</span></li>
                <li class="flex items-start"><span class="text-yellow-500 mr-3">•</span> <span class="text-lg">Perfect for Indian pilgrims coming from Bihar, Varanasi, or Ayodhya</span></li>
                <li class="flex items-start"><span class="text-yellow-500 mr-3">•</span> <span class="text-lg"><strong>Cost:</strong> NPR 150–300 (INR 100–200)</span></li>
              </ul>
              <p class="text-lg font-medium text-yellow-700">Note: There is no direct train to Kathmandu, only to Jayanagar.</p>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Best Time to Visit Janakpur
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Janakpur can be visited year-round, but the experience varies:</p>
          
          <div class="grid gap-4 mb-6">
            <div class="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-lg">
              <h4 class="font-bold text-orange-600 text-lg mb-2">October–December</h4>
              <p class="text-gray-700">Pleasant weather after monsoon. Also the time for Bibaha Panchami, the grand Ram–Sita wedding festival.</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg">
              <h4 class="font-bold text-green-600 text-lg mb-2">February–April</h4>
              <p class="text-gray-700">Comfortable warm days, great for sightseeing.</p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg">
              <h4 class="font-bold text-yellow-600 text-lg mb-2">April–June</h4>
              <p class="text-gray-700">Hot season, but less crowded.</p>
            </div>
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg">
              <h4 class="font-bold text-blue-600 text-lg mb-2">July–September</h4>
              <p class="text-gray-700">Rainy season, not ideal for outdoor exploration.</p>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Top Attractions in Janakpur
          </h2>
          
          <div class="space-y-6">
            <div class="bg-white border-l-4 border-mithila-red p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-bold text-mithila-red mb-3">1. Janaki Mandir</h4>
              <p class="text-lg text-gray-700">The grand temple dedicated to Sita, also known as the Nau Lakha Mandir, is the heart of Janakpur. Learn more about <a href="/blog/what-is-janakpur-famous-for" class="text-mithila-red hover:text-mithila-indigo font-medium underline" aria-label="Learn about Janaki Mandir and other famous attractions in Janakpur">what makes Janakpur famous</a> in our comprehensive guide.</p>
            </div>
            
            <div class="bg-white border-l-4 border-mithila-yellow p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-bold text-yellow-600 mb-3">2. Ram-Janaki Vivaha Mandap</h4>
              <p class="text-lg text-gray-700">Depicts the wedding of Ram and Sita with life-like statues.</p>
            </div>
            
            <div class="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-bold text-blue-600 mb-3">3. Sacred Ponds</h4>
              <ul class="space-y-2 mt-3">
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Ganga Sagar</strong> – Famous for evening Aarti</span></li>
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Dhanush Sagar</strong> – Associated with Shiva's bow</span></li>
                <li class="flex items-start"><span class="text-blue-500 mr-3">•</span> <span class="text-lg"><strong>Angarag Sar</strong> – Sita's bathing pond</span></li>
              </ul>
            </div>
            
            <div class="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-bold text-green-600 mb-3">4. Dhanushadham (20 km away)</h4>
              <p class="text-lg text-gray-700">The site where a piece of Shiva's bow fell after Ram broke it.</p>
            </div>
            
            <div class="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-sm">
              <h4 class="text-xl font-bold text-purple-600 mb-3">5. Mithila Art Centers</h4>
              <p class="text-lg text-gray-700">Visit Janakpur Women's Development Center (JWDC) to witness traditional Mithila paintings.</p>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Local Experiences Not to Miss
          </h2>
          
          <div class="bg-gradient-to-r from-mithila-cream to-mithila-yellow/20 p-6 rounded-lg">
            <ul class="space-y-4">
              <li class="flex items-start"><span class="text-mithila-red text-xl mr-3">•</span> <span class="text-lg">Take a rickshaw ride through Janakpur's colorful bazaars</span></li>
              <li class="flex items-start"><span class="text-mithila-red text-xl mr-3">•</span> <span class="text-lg">Taste Mithila Thaali, fried fish, litti, ghevar, and meetha paan</span></li>
              <li class="flex items-start"><span class="text-mithila-red text-xl mr-3">•</span> <span class="text-lg">Join the Ganga Aarti at Ganga Sagar pond every evening</span></li>
              <li class="flex items-start"><span class="text-mithila-red text-xl mr-3">•</span> <span class="text-lg">Visit during festivals like Bibaha Panchami, Chhath, or Holi for a vibrant cultural experience</span></li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-mithila-cream to-mithila-yellow/20 p-8 rounded-lg mb-8">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Related Articles
          </h2>
          
          <div class="bg-white p-6 rounded-lg border border-mithila-cream shadow-sm">
            <h3 class="text-xl font-bold text-mithila-indigo mb-3">
              <a href="/blog/what-is-janakpur-famous-for" class="hover:text-mithila-red transition-colors" aria-label="Read comprehensive guide about what Janakpur Nepal is famous for">
                What is Janakpur Famous For? A Complete Travel Guide
              </a>
            </h3>
            <p class="text-gray-700 mb-4">
              Discover the rich cultural heritage of Janakpur, from the magnificent Janaki Mandir to vibrant festivals, sacred ponds, and traditional Mithila art.
            </p>
            <a href="/blog/what-is-janakpur-famous-for" class="text-mithila-red hover:text-mithila-indigo font-medium text-sm" aria-label="Explore detailed guide about Janakpur's famous attractions and culture">Explore Janakpur's famous attractions →</a>
          </div>
        </div>

        <div class="bg-gradient-to-r from-mithila-cream to-mithila-yellow/20 p-8 rounded-lg">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Conclusion
          </h2>
          
          <p class="text-xl leading-relaxed mb-6">Visiting Janakpur is not just about seeing temples—it's about living the stories of Ram and Sita, experiencing Mithila art and food, and immersing yourself in spiritual culture.</p>
          
          <p class="text-lg leading-relaxed mb-4">With easy access by flight, bus, and train, plus year-round festivals, Janakpur is a destination that blends devotion, history, and cultural charm.</p>
          
          <p class="text-lg leading-relaxed font-medium text-mithila-red">Whether you are a pilgrim or a traveler seeking authentic Nepali culture, Janakpur should be on your 2025 travel list. To learn more about the city's famous attractions and cultural significance, check out our detailed guide on <a href="/blog/what-is-janakpur-famous-for" class="text-mithila-red hover:text-mithila-indigo font-medium underline" aria-label="Discover what makes Janakpur famous including temples, festivals, and cultural heritage">what Janakpur is famous for</a>.</p>
        </div>
      `,
      author: "Travel Janakpur Team",
      publishDate: "2024-03-25",
      readTime: "10 min read",
      category: "Travel Guide",
      tags: ["Travel Guide", "Transportation", "Planning", "2025", "Logistics"],
      imageUrl: "/blog-optimized.webp"
    },
    {
      id: "what-is-janakpur-famous-for",
      title: "What is Janakpur Famous For? A Complete Travel Guide",
      excerpt: "Discover what makes Janakpur, Nepal famous – from the grand Janaki Mandir and sacred ponds to Mithila art, food, and festivals. A complete guide for travelers and pilgrims.",
      content: `
        <div class="mb-8">
          <p class="text-xl leading-relaxed mb-6">Janakpur, also known as Janakpurdham, is one of the most sacred and culturally rich cities in Nepal. Located in the heart of Madhesh Province, it is celebrated as the birthplace of Goddess Sita and the site of her marriage with Lord Ram.</p>
          
          <p class="text-lg leading-relaxed mb-6">For Hindus across South Asia, Janakpur is more than a city—it is a living pilgrimage, filled with temples, ponds, festivals, and the colorful traditions of the Mithila region.</p>

          <p class="text-lg leading-relaxed mb-8"><strong>So, what exactly is Janakpur famous for? Let's dive in.</strong></p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Janaki Mandir – The Symbol of Janakpur
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">The Janaki Mandir is the most iconic landmark of Janakpur and a top reason why people visit the city. Built in 1911 AD by Queen Vrishabhanu Kumari of Tikamgarh, India, this palace-like temple is dedicated to Goddess Sita.</p>
          
          <div class="bg-mithila-cream p-6 rounded-lg mb-6">
            <h3 class="text-xl font-semibold text-mithila-indigo mb-4">Key Features:</h3>
            <ul class="space-y-3">
              <li class="flex items-start"><span class="text-mithila-red mr-2">•</span> Known as the Nau Lakha Mandir, because it was built with nine hundred thousand gold coins</li>
              <li class="flex items-start"><span class="text-mithila-red mr-2">•</span> Stunning Baroque Mughal-style architecture with domes, verandas, and 60 rooms</li>
              <li class="flex items-start"><span class="text-mithila-red mr-2">•</span> The temple houses idols of Sita and Ram in its central sanctum</li>
              <li class="flex items-start"><span class="text-mithila-red mr-2">•</span> Daily Mangal Aarti (morning) and Sandhya Aarti (evening) make it a deeply spiritual experience</li>
            </ul>
          </div>
          
          <p class="text-lg leading-relaxed text-mithila-red font-medium">This temple alone makes Janakpur a must-visit for pilgrims and culture lovers.</p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Ram-Janaki Vivaha Mandap – The Wedding Pavilion
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Janakpur is celebrated as the place where Ram and Sita were married. The Vivaha Mandap, located near Janaki Mandir, beautifully depicts this event:</p>
          
          <ul class="space-y-4 mb-6">
            <li class="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span class="text-mithila-yellow text-xl mr-3">•</span>
              <span class="text-lg">Marble-floored, pagoda-style temple built in 1969</span>
            </li>
            <li class="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span class="text-mithila-yellow text-xl mr-3">•</span>
              <span class="text-lg">Statues of Ram, Sita, and relatives recreate the legendary wedding scene</span>
            </li>
            <li class="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span class="text-mithila-yellow text-xl mr-3">•</span>
              <span class="text-lg">Pilgrims visit especially during Bibaha Panchami festival (Nov–Dec), when a symbolic wedding procession from Ayodhya arrives in Janakpur</span>
            </li>
          </ul>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Sacred Ponds (Kunds) – The Soul of Janakpur
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Janakpur is often called the city of 72 kunds (sacred ponds), each with mythological importance. Among them:</p>
          
          <div class="grid gap-4 mb-6">
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-lg mb-2">Ganga Sagar</h4>
              <p class="text-gray-700">The holiest pond, famous for evening Ganga Aarti with music, lights, and incense</p>
            </div>
            <div class="bg-gradient-to-r from-teal-50 to-teal-100 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-lg mb-2">Dhanush Sagar</h4>
              <p class="text-gray-700">Believed to have formed when Ram broke Lord Shiva's bow during Sita's swayamvar</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-lg mb-2">Angarag Sar</h4>
              <p class="text-gray-700">Where Sita used to bathe daily</p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg">
              <h4 class="font-bold text-mithila-indigo text-lg mb-2">Ratna Sagar</h4>
              <p class="text-gray-700">Said to have once held King Janak's treasure</p>
            </div>
          </div>
          
          <p class="text-lg leading-relaxed">These ponds are not just sacred—they're cultural gathering spots, where festivals and rituals come alive.</p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Mithila Art – A Living Heritage
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Janakpur is also famous for its Mithila art (or Madhubani art), an ancient tradition of vibrant wall paintings and symbolic motifs.</p>
          
          <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-6">
            <ul class="space-y-3">
              <li class="flex items-start"><span class="text-orange-500 mr-3">•</span> <span class="text-lg">Originated during Ram and Sita's wedding, when King Janak asked women to decorate the city</span></li>
              <li class="flex items-start"><span class="text-orange-500 mr-3">•</span> <span class="text-lg">Today, Mithila art is seen on walls, temples, and sold as paintings, textiles, and crafts</span></li>
              <li class="flex items-start"><span class="text-orange-500 mr-3">•</span> <span class="text-lg">Visit the Janakpur Women's Development Center (JWDC) to see women artists creating authentic pieces</span></li>
            </ul>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Mithila Food – A Treat for the Senses
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">No trip to Janakpur is complete without tasting its unique cuisine:</p>
          
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-white border-l-4 border-mithila-red p-5 rounded-lg shadow-sm">
              <h4 class="font-bold text-mithila-indigo mb-2">Fried Fish</h4>
              <p class="text-gray-700">A festival favorite, symbol of good fortune</p>
            </div>
            <div class="bg-white border-l-4 border-mithila-yellow p-5 rounded-lg shadow-sm">
              <h4 class="font-bold text-mithila-indigo mb-2">Mithila Thaali</h4>
              <p class="text-gray-700">A wholesome plate with rice, lentils, vegetables, and fried delicacies</p>
            </div>
            <div class="bg-white border-l-4 border-mithila-green p-5 rounded-lg shadow-sm">
              <h4 class="font-bold text-mithila-indigo mb-2">Litti with Chutney</h4>
              <p class="text-gray-700">A popular street food with yogurt and chutney</p>
            </div>
            <div class="bg-white border-l-4 border-purple-500 p-5 rounded-lg shadow-sm">
              <h4 class="font-bold text-mithila-indigo mb-2">Sweets & Makhana</h4>
              <p class="text-gray-700">Ghevar and lotus seeds offered at temples and festivals</p>
            </div>
          </div>
          
          <p class="text-lg leading-relaxed bg-mithila-cream p-4 rounded-lg"><strong>Meetha Paan</strong> – A cultural tradition after meals</p>
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Festivals – Living the Ramayana
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Janakpur comes alive during its many colorful festivals:</p>
          
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
              <h4 class="text-xl font-bold text-mithila-red mb-3">Bibaha Panchami (Nov–Dec)</h4>
              <p class="text-lg text-gray-700">Re-enacts the marriage of Ram and Sita. Thousands of devotees from Nepal and India join the celebration</p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h4 class="text-xl font-bold text-orange-600 mb-3">Janaki Nawami (April–May)</h4>
              <p class="text-lg text-gray-700">Celebrates the birth of Goddess Sita</p>
            </div>
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h4 class="text-xl font-bold text-blue-600 mb-3">Chhath Festival (Oct–Nov)</h4>
              <p class="text-lg text-gray-700">Devotees worship the Sun god at ponds like Ganga Sagar</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
              <h4 class="text-xl font-bold text-green-600 mb-3">Holi (March)</h4>
              <p class="text-lg text-gray-700">Concludes the 15-day Mithila Parikrama with colors and joy</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-mithila-cream to-mithila-yellow/20 p-8 rounded-lg mb-8">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Related Articles
          </h2>
          
          <div class="bg-white p-6 rounded-lg border border-mithila-cream shadow-sm">
            <h3 class="text-xl font-bold text-mithila-indigo mb-3">
              <a href="/blog/how-to-visit-janakpur-nepal-2025" class="hover:text-mithila-red transition-colors" aria-label="Read complete travel guide on how to visit Janakpur Nepal in 2025">
                How to Visit Janakpur, Nepal? (Complete Travel Guide 2025)
              </a>
            </h3>
            <p class="text-gray-700 mb-4">
              Planning your trip to this sacred city? Get all the details on transportation options, best travel times, and practical tips for visiting Janakpur.
            </p>
            <a href="/blog/how-to-visit-janakpur-nepal-2025" class="text-mithila-red hover:text-mithila-indigo font-medium text-sm" aria-label="Navigate to complete travel guide for visiting Janakpur">Read the complete travel guide →</a>
          </div>
        </div>

        <div class="bg-gradient-to-r from-mithila-cream to-mithila-yellow/20 p-8 rounded-lg">
          <h2 class="text-3xl font-bold text-mithila-indigo mb-6">
            Conclusion
          </h2>
          
          <p class="text-xl leading-relaxed mb-6">Janakpur is famous not only for its mythological importance but also for its cultural richness. With its majestic temples, sacred ponds, colorful Mithila art, unique cuisine, and vibrant festivals, Janakpur offers an unforgettable journey for both pilgrims and travelers.</p>
          
          <p class="text-lg leading-relaxed font-medium text-mithila-red">If you're planning to explore Nepal beyond Kathmandu and Pokhara, Janakpur should be at the top of your list. For practical travel information, read our comprehensive <a href="/blog/how-to-visit-janakpur-nepal-2025" class="text-mithila-red hover:text-mithila-indigo font-medium underline" aria-label="Read detailed travel guide with transportation and planning information for Janakpur">guide on how to visit Janakpur</a>, including transportation options and the best time to visit.</p>
        </div>
      `,
      author: "Travel Janakpur Team",
      publishDate: "2024-03-20",
      readTime: "8 min read",
      category: "Travel Guide",
      tags: ["Janakpur", "Travel Guide", "Temples", "Culture", "Pilgrimage"],
      imageUrl: "/janaki-mandir-optimized.webp"
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen font-poppins bg-mithila-cream">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-mithila-indigo mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" aria-label="Return to main blog page">
            <Button className="bg-mithila-red hover:bg-mithila-red/90 text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins bg-white">
      <Helmet>
        <title>{post.title} | Travel Janakpur Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.imageUrl && <meta property="og:image" content={`${window.location.origin}${post.imageUrl}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 pb-8 overflow-hidden">
        {post.imageUrl && (
          <div className="absolute inset-0 z-0">
            <img
              src={post.imageUrl}
              alt={`Hero image for ${post.title} showing ${post.id === 'how-to-visit-janakpur-nepal-2025' ? 'transportation and travel scenes in Janakpur' : 'Janaki Mandir temple architecture'}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white hover:text-mithila-yellow mb-6 transition-colors"
            aria-label="Go back to blog archive page"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <Badge className="bg-mithila-yellow text-mithila-indigo mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-hind mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                {/* Social Share */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-mithila-red text-mithila-red">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      }
                    }}
                    aria-label={`Share this article: ${post.title}`}
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none 
                    prose-headings:text-mithila-indigo prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                    prose-h2:text-2xl prose-h2:border-b prose-h2:border-mithila-cream prose-h2:pb-2
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-ul:my-6 prose-li:mb-3 prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
                    prose-strong:text-mithila-indigo prose-strong:font-semibold
                    prose-em:text-mithila-red prose-em:not-italic
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link to="/blog" aria-label="Return to blog archive to read more travel articles">
                <Button className="bg-mithila-red hover:bg-mithila-red/90 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                  Back to All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;