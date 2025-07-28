// scripts/generate-sitemap.js
const fs = require('fs');

const BASE_URL = 'https://synapseb2b.com';
const today = new Date().toISOString().split('T')[0];

// Lista de todas as páginas do seu site
const pages = [
  { path: '/', changeFreq: 'weekly', priority: '1.0' },
  { path: '/metodologia', changeFreq: 'monthly', priority: '0.8' },
  { path: '/casos-de-uso', changeFreq: 'monthly', priority: '0.8' },
  { path: '/contato', changeFreq: 'yearly', priority: '0.7' },
  { path: '/termos-de-uso', changeFreq: 'yearly', priority: '0.3' },
  { path: '/politica-de-privacidade', changeFreq: 'yearly', priority: '0.3' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(page => {
      return `
        <url>
            <loc>${`${BASE_URL}${page.path}`}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>${page.changeFreq}</changefreq>
            <priority>${page.priority}</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

// O script irá criar o arquivo sitemap.xml dentro da pasta 'public'
fs.writeFileSync('public/sitemap.xml', sitemap);

console.log('sitemap.xml gerado com sucesso!');