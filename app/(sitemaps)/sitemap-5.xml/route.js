import { allRoutes, chunkArray } from "../sitemap.xml/route";

export const dynamic = 'force-static'; // Ensure it's statically generated

// Import all the routes and the base URL
const baseUrl = 'http://localhost:3000';  // change base url along with http

// Chunk the routes as you did in the main sitemap
const chunkedRoutes = chunkArray(allRoutes, 40000);

export async function GET() {
  // Get the second chunk of URLs for sitemap-5.xml
  const selectedRoutes = chunkedRoutes[4];

  // Return the sitemap with those URLs
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${selectedRoutes
        .map(
          (route) => `
         <url>
           <loc>${route.url}</loc>
         </url>`
        )
        .join('')}
     </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
