import { fileURLToPath } from 'url';
import path from 'path';

// Définit __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true, // Ajoute un / à la fin des URLs
  images: {
    loader: 'custom',
    path: '/',
  },
};

export default nextConfig;
