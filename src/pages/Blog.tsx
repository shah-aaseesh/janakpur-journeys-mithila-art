import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

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

const Blog = () => {
  // Sample blog posts - you can replace these with real content later
  const blogPosts: BlogPost[] = [
    {
      id: "how-to-visit-janakpur-nepal-2025",
      title: "How to Visit Janakpur, Nepal? (Complete Travel Guide 2025)",
      excerpt: "Planning a trip to Janakpur, Nepal? Learn how to reach Janakpur by air, road, and train, the best time to visit, and the must-see attractions in this spiritual city.",
      content: "",
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
      content: "",
      author: "Travel Janakpur Team",
      publishDate: "2024-03-20",
      readTime: "8 min read",
      category: "Travel Guide",
      tags: ["Janakpur", "Travel Guide", "Temples", "Culture", "Pilgrimage"],
      imageUrl: "/janaki-mandir-optimized.webp"
    }
  ];

  const categories = ["All", "Travel Guide", "Culture", "Art", "Travel Tips", "Festivals", "Food"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen font-poppins bg-mithila-cream">
      <Helmet>
        <title>Travel Blog - Janakpur Travel Guide & Stories | Travel Janakpur</title>
        <meta 
          name="description" 
          content="Explore our travel blog featuring comprehensive guides to Janakpur, Nepal. Discover what makes Janakpur famous, how to visit, cultural attractions, festivals, and insider travel tips from local experts." 
        />
        <meta name="keywords" content="Janakpur blog, Nepal travel blog, Janakpur travel guide, Mithila culture blog, Janaki Mandir guide, travel tips Nepal, Janakpur attractions" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 pb-8 overflow-hidden bg-white">
        {/* Mithila Art Pattern Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2256%22%20height%3D%2228%22%3E%3Cpath%20fill%3D%22%23F1C40F%22%20fill-opacity%3D%22.1%22%20d%3D%22M56%2026v2h-7.75c2.3-1.27%204.94-2%207.75-2zm-26%202a2%202%200%201%200-4%200h-4.09A25.98%2025.98%200%200%200%200%2016v-2c.67%200%201.34.02%202%20.07V14a2%202%200%200%200-2-2v-2a4%204%200%200%201%203.98%203.6%2028.09%2028.09%200%200%201%202.8-3.86A8%208%200%200%200%200%206V4a9.99%209.99%200%200%201%208.17%204.23c.94-.95%201.96-1.83%203.03-2.63A13.98%2013.98%200%200%200%200%200h7.75c2%201.1%203.73%202.63%205.1%204.45%201.12-.72%202.3-1.37%203.53-1.93A20.1%2020.1%200%200%200%2014.28%200h2.7c.45.56.88%201.14%201.29%201.74%201.3-.48%202.63-.87%204-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4%2028.4%200%200%201%204%200V0h4.09l-.37.59c1.38.28%202.72.67%204.01%201.15.4-.6.84-1.18%201.3-1.74h2.69a20.1%2020.1%200%200%200-2.1%202.52c1.23.56%202.41%201.2%203.54%201.93A16.08%2016.08%200%200%201%2048.25%200H56c-4.58%200-8.65%202.2-11.2%205.6%201.07.8%202.09%201.68%203.03%202.63A9.99%209.99%200%200%201%2056%204v2a8%208%200%200%200-6.77%203.74c1.03%201.2%201.97%202.5%202.79%203.86A4%204%200%200%201%2056%2010v2a2%202%200%200%200-2%202.07%2028.4%2028.4%200%200%201%202-.07v2c-9.2%200-17.3%204.78-21.91%2012H30zM7.75%2028H0v-2c2.81%200%205.46.73%207.75%202zM56%2020v2c-5.6%200-10.65%202.3-14.28%206h-2.7c4.04-4.89%2010.15-8%2016.98-8zm-39.03%208h-2.69C10.65%2024.3%205.6%2022%200%2022v-2c6.83%200%2012.94%203.11%2016.97%208zm15.01-.4a28.09%2028.09%200%200%201%202.8-3.86%208%208%200%200%200-13.55%200c1.03%201.2%201.97%202.5%202.79%203.86a4%204%200%200%201%207.96%200zm14.29-11.86c1.3-.48%202.63-.87%204-1.15a25.99%2025.99%200%200%200-44.55%200c1.38.28%202.72.67%204.01%201.15a21.98%2021.98%200%200%201%2036.54%200zm-5.43%202.71c1.13-.72%202.3-1.37%203.54-1.93a19.98%2019.98%200%200%200-32.76%200c1.23.56%202.41%201.2%203.54%201.93a15.98%2015.98%200%200%201%2025.68%200zm-4.67%203.78c.94-.95%201.96-1.83%203.03-2.63a13.98%2013.98%200%200%200-22.4%200c1.07.8%202.09%201.68%203.03%202.63a9.99%209.99%200%200%201%2016.34%200z%22%3E%3C/path%3E%3C/svg%3E')]">
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-hind mb-4 text-mithila-indigo leading-tight">
            Travel Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-mithila-black mb-6 px-2">
            Stories, insights, and guides from the heart of Mithila
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-mithila-red hover:bg-mithila-red/90 text-white"
                    : "border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white border-2 border-mithila-cream shadow-lg hover:shadow-xl transition-shadow group">
                {post.imageUrl && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.imageUrl}
                      alt={`Featured image for ${post.title} - ${post.category} article`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-mithila-yellow text-mithila-indigo">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg sm:text-xl font-bold text-mithila-indigo group-hover:text-mithila-red transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} aria-label={`Read full article: ${post.title}`}>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-mithila-red text-mithila-red hover:bg-mithila-red hover:text-white group/btn"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-mithila-indigo mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                No articles available in the selected category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;