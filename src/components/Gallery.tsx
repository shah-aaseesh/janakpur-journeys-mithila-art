
import React, { useState } from "react";

interface GalleryImage {
  id: number;
  src: string; // Using placeholder for now
  alt: string;
}

const Gallery: React.FC = () => {
  // Sample gallery data - would normally be loaded from a CMS or API
  const images: GalleryImage[] = [
    { id: 1, src: "https://source.unsplash.com/random/600x400?temple", alt: "Janaki Temple" },
    { id: 2, src: "https://source.unsplash.com/random/600x400?nepal", alt: "Local Festival" },
    { id: 3, src: "https://source.unsplash.com/random/600x400?art", alt: "Mithila Art" },
    { id: 4, src: "https://source.unsplash.com/random/600x400?culture", alt: "Cultural Performance" },
    { id: 5, src: "https://source.unsplash.com/random/600x400?food", alt: "Local Cuisine" },
    { id: 6, src: "https://source.unsplash.com/random/600x400?market", alt: "Local Market" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const goToPrevious = () => {
    if (!currentImage) return;
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  const goToNext = () => {
    if (!currentImage) return;
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-mithila-cream">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">Photo Gallery</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore highlights from recent tours around Janakpur. Each image represents unique experiences and cultural treasures waiting to be discovered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fade-in"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-4xl p-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-mithila-red z-10"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-10"
                onClick={goToPrevious}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex justify-center items-center h-full">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-mithila-red z-10"
                onClick={goToNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <p className="absolute bottom-4 left-0 right-0 text-white text-center text-lg">{currentImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
