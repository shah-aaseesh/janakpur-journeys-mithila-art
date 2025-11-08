module.exports = {
  // The base URL of your app
  baseUrl: 'http://localhost:8080',
  // The port for the server
  port: 8080,
  // Paths to crawl
  crawl: true,
  // Routes to prerender
  routes: [
    '/',
    '/about',
    '/gallery',
    '/services',
    '/blog',
    '/contact',
    '/mithila-food-guide'
  ],
  // Output directory for prerendered files
  publicPath: '/dist',
  // Minimum time to wait before taking a snapshot
  waitFor: 2000,
  // User agent for crawling
  userAgent: 'ReactSnap',
  // Remove scripts from prerendered HTML
  removeScriptTags: false,
  // Skip third party requests
  skipThirdPartyRequests: true,
  // Inline critical CSS
  inlineCss: false,
  // Save prerendered files as .html
  saveAs: 'html',
  // Ignore HTTPs errors
  ignoreHTTPSErrors: true,
  // Headless browser options
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
};
