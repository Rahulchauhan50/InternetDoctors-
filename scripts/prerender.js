import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');

const routes = [
  '/',
  '/about',
  '/services',
  '/digital-marketing',
  '/erp-solutions',
  '/mobile-apps',
  '/saas-lead-gen',
  '/game-development',
  '/case-studies',
  '/faq',
  '/contact',
  '/careers'
];

async function runPrerender() {
  const app = express();
  
  // Serve static files from 'dist'
  app.use(express.static(distPath));
  
  // Fallback for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Starting prerender process on ${baseUrl}...`);

    const browser = await puppeteer.launch({ headless: 'new' });

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();
      
      // Navigate and wait for main content to load
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
      // wait for root to be populated by React
      await page.waitForSelector('#root nav'); 
      
      const html = await page.content();
      
      // Determine file path
      let routePath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
      const fullPath = path.join(distPath, routePath);
      
      // Ensure directory exists
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, html);
      
      await page.close();
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

runPrerender().catch(err => {
  console.error(err);
  process.exit(1);
});
