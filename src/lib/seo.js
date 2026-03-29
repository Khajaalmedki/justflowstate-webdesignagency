export const defaultSEO = {
  title: 'JustFlowState | Luxury Digital Agency',
  description: 'We craft cinematic digital experiences that move people. A luxury digital agency specializing in strategy, design, and engineering.',
  keywords: 'digital agency, web design, luxury branding, motion design, UI/UX, development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justflowstate.com',
    site_name: 'JustFlowState',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JustFlowState',
      },
    ],
  },
  twitter: {
    handle: '@justflowstate',
    site: '@justflowstate',
    cardType: 'summary_large_image',
  },
};

export function generateSEO({ title, description, pathname = '' }) {
  return {
    title: title ? `${title} | JustFlowState` : defaultSEO.title,
    description: description || defaultSEO.description,
    openGraph: {
      ...defaultSEO.openGraph,
      url: `${defaultSEO.openGraph.url}${pathname}`,
    },
  };
}