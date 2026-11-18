import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_PRELOADS = {
  'index.html': [
    '<link rel="preload" as="image" href="images/hero_video/hero-v2-poster-portrait.webp" media="(max-aspect-ratio: 3/4)" fetchpriority="high">',
    '<link rel="preload" as="image" href="images/hero_video/hero-v2-poster-landscape.webp" media="(min-aspect-ratio: 3001/4000)" fetchpriority="high">'
  ],
  'contact.html': [
    '<link rel="preload" as="image" href="images/project/sculpted-cave-cottages-ferrocement.webp" imagesrcset="images/project/sculpted-cave-cottages-ferrocement-800w.webp 800w, images/project/sculpted-cave-cottages-ferrocement.webp 1586w" imagesizes="100vw" fetchpriority="high">'
  ],
  'project-kakkadampoyil.html': [
    '<link rel="preload" as="image" href="images/kakkadampoyil/earth-sheltered-retreat.webp" fetchpriority="high">'
  ],
  'project-pulpally.html': [
    '<link rel="preload" as="image" href="images/pulpally/domes-aerial.webp" imagesrcset="images/pulpally/domes-aerial-800w.webp 800w, images/pulpally/domes-aerial.webp 1600w" imagesizes="100vw" fetchpriority="high">'
  ],
  'projects.html': [
    '<link rel="preload" as="image" href="images/project/stilt-cottages-ferrocement-pods.webp" imagesrcset="images/project/stilt-cottages-ferrocement-pods-800w.webp 800w, images/project/stilt-cottages-ferrocement-pods.webp 1672w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-eco-friendly-huts.html': [
    '<link rel="preload" as="image" href="images/hero1.webp" imagesrcset="images/hero1-800w.webp 800w, images/hero1.webp 1448w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-farm-stay-buildings.html': [
    '<link rel="preload" as="image" href="images/farm/cow-house-left.webp" imagesrcset="images/farm/cow-house-left-800w.webp 800w, images/farm/cow-house-left.webp 1400w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-resort-cottages.html': [
    '<link rel="preload" as="image" href="images/cottages/hillside-eco-cabins.webp" imagesrcset="images/cottages/hillside-eco-cabins-800w.webp 800w, images/cottages/hillside-eco-cabins.webp 1400w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-swimming-pools.html': [
    '<link rel="preload" as="image" href="images/pools/infinity-pool-retreat.webp" imagesrcset="images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-underground-houses.html': [
    '<link rel="preload" as="image" href="images/project/ferrocement-underground-cave-entrance.webp" imagesrcset="images/project/ferrocement-underground-cave-entrance-800w.webp 800w, images/project/ferrocement-underground-cave-entrance.webp 1448w" imagesizes="100vw" fetchpriority="high">'
  ],
  'service-water-features.html': [
    '<link rel="preload" as="image" href="images/grotto/carved-stone-grotto.webp" imagesrcset="images/grotto/carved-stone-grotto-800w.webp 800w, images/grotto/carved-stone-grotto.webp 1400w" imagesizes="100vw" fetchpriority="high">'
  ],
  'services.html': [
    '<link rel="preload" as="image" href="images/pools/infinity-pool-retreat.webp" imagesrcset="images/pools/infinity-pool-retreat-800w.webp 800w, images/pools/infinity-pool-retreat.webp 1400w" imagesizes="100vw" fetchpriority="high">'
  ]
};

async function prerender() {
  const distDir = path.resolve(__dirname, 'dist');
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Did client build run?`);
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  // Import the SSR bundle
  const ssrPath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');
  if (!fs.existsSync(ssrPath)) {
    throw new Error(`SSR bundle not found at ${ssrPath}. Did ssr build run?`);
  }
  const { render, ROUTES } = await import(pathToFileURL(ssrPath).href);

  console.log(`Prerendering ${ROUTES.length} routes...`);

  for (const route of ROUTES) {
    const { appHtml } = render(route.path);
    const seo = route.seo;

    let html = template;

    // Replace title
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${seo.description}">`
    );

    // Replace canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${seo.canonical}">`
    );

    // Replace OG tags
    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${seo.ogTitle || seo.title}">`
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${seo.ogDescription || seo.description}">`
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${seo.canonical}">`
    );
    if (seo.ogImage) {
      html = html.replace(
        /<meta property="og:image" content="[^"]*">/,
        `<meta property="og:image" content="${seo.ogImage}">`
      );
    }
    if (seo.ogType) {
      html = html.replace(
        /<meta property="og:type" content="[^"]*">/,
        `<meta property="og:type" content="${seo.ogType}">`
      );
    }

    // Replace Twitter tags
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      `<meta name="twitter:title" content="${seo.twitterTitle || seo.title}">`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      `<meta name="twitter:description" content="${seo.twitterDescription || seo.description}">`
    );
    if (seo.twitterImage) {
      html = html.replace(
        /<meta name="twitter:image" content="[^"]*">/,
        `<meta name="twitter:image" content="${seo.twitterImage}">`
      );
    }

    // Replace Robots
    if (seo.robots) {
      html = html.replace(
        /<meta name="robots" content="[^"]*">/,
        `<meta name="robots" content="${seo.robots}">`
      );
    }

    // Replace Geo Tags
    if (seo.geoRegion) {
      html = html.replace(
        /<meta name="geo\.region" content="[^"]*">/,
        `<meta name="geo.region" content="${seo.geoRegion}">`
      );
    }
    if (seo.geoPlacename) {
      html = html.replace(
        /<meta name="geo\.placename" content="[^"]*">/,
        `<meta name="geo.placename" content="${seo.geoPlacename}">`
      );
    }
    if (seo.geoPosition) {
      html = html.replace(
        /<meta name="geo\.position" content="[^"]*">/,
        `<meta name="geo.position" content="${seo.geoPosition}">`
      );
    }
    if (seo.icbm) {
      html = html.replace(
        /<meta name="ICBM" content="[^"]*">/,
        `<meta name="ICBM" content="${seo.icbm}">`
      );
    }

    // Inject Preloads
    if (ROUTE_PRELOADS[route.file]) {
      const preloadsHtml = '\n  ' + ROUTE_PRELOADS[route.file].join('\n  ');
      html = html.replace('</head>', `${preloadsHtml}\n</head>`);
    }

    // Inject JSON-LD
    if (seo.jsonLd) {
      const jsonLdScript = `\n  <script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`;
      html = html.replace('</head>', `${jsonLdScript}\n</head>`);
    }

    // Replace body class
    const bodyClass = seo.bodyClass || '';
    if (html.includes('<body class="')) {
      html = html.replace(/<body class="[^"]*"/, `<body class="${bodyClass}"`);
    } else {
      html = html.replace('<body', `<body class="${bodyClass}"`);
    }

    // Replace root content
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Output file path
    const outFilePath = path.resolve(distDir, route.file);
    fs.writeFileSync(outFilePath, html, 'utf8');
    console.log(`✓ Generated ${route.file} (${(html.length / 1024).toFixed(1)} KB)`);
  }

  // Cleanup dist-ssr
  const distSsrDir = path.resolve(__dirname, 'dist-ssr');
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log('✓ Cleaned up temporary SSR build directory');
  }

  console.log('✅ SSG Prerendering complete! All 19 routes generated with full HTML & SEO metadata.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
