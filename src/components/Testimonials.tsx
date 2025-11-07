import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  origin: string;
  comment: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  // Testimonial data with images
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jean Paquet",
      origin: "Paris, France",
      comment: "3-day in Janakpur for the Chhath puja festival has been for us a fantastic experience. The perfect services of traveljanakpur, with Bikash as a great guide have made this moment a very special one that we will remember.",
      rating: 5,
      image: "/Travel Janakpur Customer.jpg",
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      origin: "India",
      comment: "As someone interested in the shared cultural heritage between India and Nepal, I found the team's insights fascinating. Their multilingual guides made communication effortless throughout our journey.",
      rating: 5,
      image: "/lovable-uploads/ede64044-592e-486b-b2e6-6631a97587aa.png",
    },
    {
      id: 3,
      name: "Emma Wilson",
      origin: "UK",
      comment: "Our day tour with Travel Janakpur was the highlight of our Nepal trip. They're professional, knowledgeable, and adapted the tour to match our interests. The Mithila art experience they arranged was unforgettable.",
      rating: 5,
      image: "/lovable-uploads/04510e57-4d7b-44fb-8118-bbbc88b69dee.png",
    },
    {
      id: 4,
      name: "Toshiro Yamamoto",
      origin: "Japan",
      comment: "Travel Janakpur is an excellent agency that understands the needs of international travelers. Their tours offer a perfect balance of historical information, cultural experiences, and beautiful sights.",
      rating: 4,
      image: "/lovable-uploads/7cbb66ce-ac24-4462-bf03-efb8b7a488ce.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel with continuous looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get the current visible testimonials (2 at a time)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title pb-4">What Travelers Say</h2>
        <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Hear from past visitors about their experiences exploring Janakpur with our expert guides.
        </p>

        {/* Testimonial Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-1/2 flex-none"
                >
                  <div className="bg-mithila-cream p-6 rounded-lg shadow-md border-l-4 border-mithila-red h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">{renderStars(testimonial.rating)}</div>
                    </div>
                    <p className="text-gray-700 mb-6 italic text-base leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-mithila-indigo rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name}'s experience with Travel Janakpur`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3 min-w-0 flex-1">
                        <p className="font-bold text-mithila-indigo text-base">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">from {testimonial.origin}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-mithila-red scale-125" : "bg-gray-300 hover:bg-mithila-red/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;