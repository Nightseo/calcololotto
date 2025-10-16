import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Calcolo Vincite Lotto',
    short_name: 'Calcolo Lotto',
    description: 'Calcolatrice professionale per il calcolo delle vincite del Lotto italiano',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FF6B35',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon?size=192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'it-IT',
    dir: 'ltr',
    categories: ['finance', 'utilities'],
  };
}
