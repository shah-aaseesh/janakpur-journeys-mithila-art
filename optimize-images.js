import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Function to optimize and convert images to webp
async function optimizeImages() {
  console.log('Optimizing images...');
  
  // Large images in root directory
  const rootImages = [
    { src: 'Blog 2.png', dest: 'public/blog-optimized.webp' },
    { src: 'Janaki mandir.png', dest: 'public/janaki-mandir-optimized.webp' },
    { src: 'hero-image.jpg', dest: 'public/hero-image-optimized.webp' }
  ];
  
  // Gallery images
  const galleryDir = 'public/gallery';
  const galleryImages = fs.readdirSync(galleryDir)
    .filter(file => /\.(jpe?g|png|gif)$/i.test(file))
    .map(file => ({
      src: path.join(galleryDir, file),
      dest: path.join(galleryDir, file.replace(/\.(jpe?g|png|gif)$/i, '.webp'))
    }));
  
  // Process root images
  for (const image of rootImages) {
    if (fs.existsSync(image.src)) {
      try {
        await sharp(image.src)
          .resize(1200, 800, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .webp({ quality: 80 })
          .toFile(image.dest);
        console.log(`Optimized: ${image.src} -> ${image.dest}`);
      } catch (error) {
        console.error(`Error optimizing ${image.src}:`, error.message);
      }
    }
  }
  
  // Process gallery images
  for (const image of galleryImages) {
    if (fs.existsSync(image.src)) {
      try {
        await sharp(image.src)
          .resize(800, 600, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .webp({ quality: 80 })
          .toFile(image.dest);
        console.log(`Optimized: ${image.src} -> ${image.dest}`);
      } catch (error) {
        console.error(`Error optimizing ${image.src}:`, error.message);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);