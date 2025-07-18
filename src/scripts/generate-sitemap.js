// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';

// Your website base URL
const baseUrl = 'https://bozecoin.com';

// List all your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more routes as needed
];

async function generateSitemap() {
  try {
    // Set up the stream
    const sitemap = new SitemapStream({ hostname: baseUrl });

    // Create a write stream
    const writeStream = createWriteStream(resolve('./dist/sitemap.xml'));

    // Pipe the sitemap to the write stream
    sitemap.pipe(writeStream);

    // Add routes to the sitemap
    routes.forEach(route => {
      sitemap.write(route);
    });

    // End the stream
    sitemap.end();

    // Wait for the stream to finish
    await streamToPromise(sitemap);

    console.log('Sitemap generated successfully!');
  } catch (e) {
    console.error('Error generating sitemap:', e);
  }
}

await generateSitemap();