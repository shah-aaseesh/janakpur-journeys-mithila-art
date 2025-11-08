import React, { useState, useEffect } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  // Gallery data with all the new images from janakpur images folder
  const images: GalleryImage[] = [
    { id: 1, src: "/gallery/IMG-20250514-WA0059.jpg", alt: "Beautiful Janakpur temple architecture" },
    { id: 2, src: "/gallery/IMG-20250514-WA0060.jpg", alt: "Traditional Mithila art and culture" },
    { id: 3, src: "/gallery/IMG-20250514-WA0063.jpg", alt: "Sacred rituals at Janaki Temple" },
    { id: 4, src: "/gallery/IMG-20250514-WA0064.jpg", alt: "Pilgrims visiting Janakpur heritage sites" },
    { id: 5, src: "/gallery/IMG-20250514-WA0068.jpg", alt: "Cultural celebration in Janakpur" },
    { id: 6, src: "/gallery/IMG-20250514-WA0069.jpg", alt: "Local Mithila artisan at work" },
    { id: 7, src: "/gallery/IMG-20250514-WA0070.jpg", alt: "Scenic view of Janakpur city" },
    { id: 8, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.56_3ea0f126.jpg", alt: "Traditional festival in Janakpur" },
    { id: 9, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.56_5b0ea715.jpg", alt: "Group tour at heritage site" },
    { id: 10, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.56_fee5fc37.jpg", alt: "Mithila painting workshop" },
    { id: 11, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.57_c5afb367.jpg", alt: "Sacred pond and temple grounds" },
    { id: 12, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.57_e872a22f.jpg", alt: "Cultural heritage tour experience" },
    { id: 13, src: "/gallery/WhatsApp Image 2025-06-24 at 15.48.00_c20da5cb.jpg", alt: "Tourists exploring Janakpur" },
    { id: 14, src: "/gallery/WhatsApp Image 2025-06-24 at 15.49.02_64607464.jpg", alt: "Local guide with visitors" },
    { id: 15, src: "/gallery/WhatsApp Image 2025-06-24 at 15.49.03_7592727e.jpg", alt: "Traditional architecture and design" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);

  // Auto-play carousel with continuous looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // Don't go before the first image
      return newIndex < 0 ? images.length - 3 : newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // Don't go past the last set of images
      return newIndex > images.length - 3 ? 0 : newIndex;
    });
  };

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const lightboxPrevious = () => {
    if (!currentImage) return;
    const currentImageIndex = images.findIndex((img) => img.id === currentImage.id);
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  const lightboxNext = () => {
    if (!currentImage) return;
    const currentImageIndex = images.findIndex((img) => img.id === currentImage.id);
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-mithila-cream">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">Photo Gallery</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore highlights from recent tours around Janakpur. Each image represents unique experiences and cultural treasures waiting to be discovered.
        </p>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-xl shadow-xl bg-white p-2 sm:p-4">
            <div className="flex space-x-4">
              {/* Visible slides */}
              <div className="flex w-full" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 500ms ease-in-out' }}>
                {images.map((image, idx) => (
                  <div 
                    key={image.id}
                    className="w-1/3 flex-shrink-0 px-2"
                >
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative pt-[75%]">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        loading={idx < 4 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-2 sm:p-3 font-medium text-xs sm:text-sm leading-tight">{image.alt}</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-mithila-red text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2 overflow-x-auto pb-2">
            {images.slice(0, images.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 touch-manipulation ${
                  currentIndex === index
                    ? "bg-mithila-red scale-125"
                    : "bg-gray-300 hover:bg-mithila-red/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex flex-col">
              {/* Header with close button */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                <button
                  className="text-white hover:text-mithila-red bg-black/50 rounded-full p-2 sm:p-3 touch-manipulation"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation buttons */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-2 sm:p-3 touch-manipulation"
                onClick={lightboxPrevious}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Main image container */}
              <div className="flex-1 flex justify-center items-center p-4 sm:p-8">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
              
              <button
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-2 sm:p-3 touch-manipulation"
                onClick={lightboxNext}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Caption and counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white text-center bg-black/50 p-3 sm:p-4 rounded-lg">
                <p className="text-sm sm:text-lg font-medium">{currentImage.alt}</p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {images.findIndex(img => img.id === currentImage.id) + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;