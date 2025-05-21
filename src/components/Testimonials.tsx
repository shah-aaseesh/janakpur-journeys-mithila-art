import React from "react";

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
      name: "Sarah Johnson",
      origin: "USA",
      comment: "Bikash made our trip to Janakpur truly special. His knowledge of local history and culture is impressive, and he took us to places we would never have found on our own. Highly recommended!",
      rating: 5,
      image: "/lovable-uploads/e05bc06e-806d-45e2-9af9-9b36309ca9fa.png",
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      origin: "India",
      comment: "As someone interested in the shared cultural heritage between India and Nepal, I found Bikash's insights fascinating. His fluency in multiple languages made communication effortless.",
      rating: 5,
      image: "/lovable-uploads/ede64044-592e-486b-b2e6-6631a97587aa.png",
    },
    {
      id: 3,
      name: "Emma Wilson",
      origin: "UK",
      comment: "Our day tour with Bikash was the highlight of our Nepal trip. He's friendly, knowledgeable, and adapted the tour to match our interests. The Mithila art experience he arranged was unforgettable.",
      rating: 5,
      image: "/lovable-uploads/04510e57-4d7b-44fb-8118-bbbc88b69dee.png",
    },
    {
      id: 4,
      name: "Toshiro Yamamoto",
      origin: "Japan",
      comment: "Bikash is an excellent guide who understands the needs of international travelers. His tours offer a perfect balance of historical information, cultural experiences, and beautiful sights.",
      rating: 4,
      image: "/lovable-uploads/7cbb66ce-ac24-4462-bf03-efb8b7a488ce.png",
    },
  ];

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

  const handleBookTourClick = () => {
    window.open("https://wa.me/9779815835343", "_blank");
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">What Travelers Say</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Hear from past visitors about their experiences exploring Janakpur with my guided tours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-mithila-cream p-6 rounded-lg shadow-md border-l-4 border-mithila-red animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mithila-indigo rounded-full flex items-center justify-center text-white font-bold overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s experience with Bikash Sah`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-mithila-indigo">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">from {testimonial.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            className="inline-block px-6 py-3 bg-mithila-green text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            onClick={handleBookTourClick}
          >
            Book Your Tour Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
