import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WalkieTalkie',
    short_name: 'WalkieTalkie',
    description: 'A simple walkie talkie app created by Mikolaj Pecak',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/icons/wt-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/wt-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
