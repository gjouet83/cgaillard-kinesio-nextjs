// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.PRODUCTION_WEBSITE_URL || 'https://www.votresite.com', // Remplacez par votre URL
  generateRobotsTxt: true, // Générer le fichier robots.txt
  generateIndexSitemap: false,
  sitemapSize: 5000, // Limite du nombre d'URL par fichier sitemap

  // Fonction transform pour configurer les priorités
  transform: async (config, path) => {
    // Définir la priorité
    let priority = 0.8; // Priorité par défaut

    // Vérifier si la page est la page d'accueil
    if (path === '/') {
      priority = 1.0; // Priorité plus élevée pour la page d'accueil
    }

    return {
      loc: path, // L'URL de la page
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined, // Date de dernière modification
      priority: priority, // Définir la priorité basée sur l'URL
      changefreq: undefined, // Ne pas inclure `changefreq`
    };
  },
};
