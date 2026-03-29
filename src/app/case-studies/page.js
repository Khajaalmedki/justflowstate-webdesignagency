import { CaseStudiesHero } from '@/components/sections/case-studies/CaseStudiesHero';
import { generateSEO } from '@/lib/seo';
import { CaseStudiesGrid } from '@/components/sections/case-studies/CaseStudiesGrid';

export const metadata = generateSEO({
  title: 'Case Studies',
  description: 'View our portfolio of award-winning digital projects for premium brands.',
  pathname: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </>
  );
}