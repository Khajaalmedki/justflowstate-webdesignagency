import { generateSEO } from '@/lib/seo';
import { ServicesBento } from '@/components/sections/services/ServicesBento';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { ServicesBreakdown } from '@/components/sections/services/ServicesBreakdown';

export const metadata = generateSEO({
  title: 'Services',
  description: 'Explore our comprehensive digital services: strategy, design, development, and motion.',
  pathname: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesBento />
      <ServicesBreakdown />
    </>
  );
}