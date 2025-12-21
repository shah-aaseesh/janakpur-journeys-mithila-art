import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker with auto-update
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' });
      
      // Check for updates immediately and every 30 seconds
      registration.update();
      setInterval(() => registration.update(), 30000);
      
      // Listen for new service worker and reload when ready
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
              window.location.reload();
            }
          });
        }
      });
      
      // Handle controller change (new SW took over)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    } catch (error) {
      console.log('SW error: ', error);
    }
  });
}
