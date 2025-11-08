import React, { useState, useEffect, useCallback, useMemo } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { id: 1, src: "/gallery/DSC_7589.jpg", alt: "Janaki Temple grand architecture" },
    { id: 2, src: "/gallery/DSC_7552.jpg", alt: "Temple details and craftsmanship" },
    { id: 3, src: "/gallery/DSC_7501.jpg", alt: "Sacred temple grounds" },
    { id: 4, src: "/gallery/DSC_7455.jpg", alt: "Temple architectural beauty" },
    { id: 5, src: "/gallery/DSC_4986.jpg", alt: "Cultural heritage site" },
    { id: 6, src: "/gallery/DSC_2077.jpg", alt: "Traditional temple structures" },
    { id: 7, src: "/gallery/DSC2249.jpg", alt: "Temple courtyard view" },
    { id: 8, src: "/gallery/DSC2093.jpg", alt: "Sacred architecture details" },
    { id: 9, src: "/gallery/DSC03453_copy.jpg", alt: "Temple rituals and ceremonies" },
    { id: 10, src: "/gallery/DSC03444_copy.jpg", alt: "Cultural celebrations" },
    { id: 11, src: "/gallery/DSC03379_copy.jpg", alt: "Temple interior details" },
    { id: 12, src: "/gallery/DSC03369_copy.jpg", alt: "Sacred spaces and rituals" },
    { id: 13, src: "/gallery/DSC03366_copy.jpg", alt: "Traditional temple design" },
    { id: 14, src: "/gallery/DSC03364_copy.jpg", alt: "Temple artwork and decorations" },
    { id: 15, src: "/gallery/DSC02383.jpg", alt: "Sacred temple architecture" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= images.length - 2 ? 0 : nextIndex;
        });
      }
    }, 7000); // Increased interval to reduce layout shifts and improve performance
    return () => clearInterval(interval);
  }, [images.length, isTransitioning]);

  // Handle transition start/end
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // Match this with the CSS transition duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isTransitioning) {
      const swipeThreshold = 50; // minimum distance for swipe
      const swipeDistance = touchStart - touchEnd;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToPrevious = useCallback(() => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        return newIndex < 0 ? images.length - 3 : newIndex;
      });
    }
  }, [isTransitioning, images.length]);

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex > images.length - 3 ? 0 : newIndex;
      });
    }
  }, [isTransitioning, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-xl shadow-xl bg-white p-4 scroll-smooth"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Visible slides container */}
            <div 
              className="flex gap-4 transition-all duration-700 ease-in-out will-change-transform"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            >
              {images.map((image) => (
                <div key={image.id} className="w-1/3 flex-none">
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer will-change-transform"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative pt-[75%]">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out will-change-transform"
                        width={400}
                        height={300}
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

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-mithila-indigo p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.slice(0, images.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-mithila-red scale-125" : "bg-gray-300 hover:bg-mithila-red/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col">
              <button
                className="absolute top-4 right-4 text-white hover:text-mithila-red bg-black/50 rounded-full p-3"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-3"
                onClick={lightboxPrevious}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 flex justify-center items-center p-8">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-20 bg-black/50 rounded-full p-3"
                onClick={lightboxNext}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/50 p-4 rounded-lg">
                <p className="text-lg font-medium">{currentImage.alt}</p>
                <p className="text-sm text-gray-300 mt-1">
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