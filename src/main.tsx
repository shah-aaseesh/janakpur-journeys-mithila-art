import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker with force update
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Unregister old service workers and clear caches
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      
      // Clear all caches
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
      
      // Register fresh service worker
      const registration = await navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' });
      console.log('SW registered fresh: ', registration);
      
      // Force update check
      registration.update();
    } catch (error) {
      console.log('SW handling: ', error);
    }
  });
}
