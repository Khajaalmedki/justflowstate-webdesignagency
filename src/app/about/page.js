import { AboutHero } from '@/components/sections/about/AboutHero';
import { generateSEO } from '@/lib/seo';
import { AboutMission } from '@/components/sections/about/AboutMission';
import { AboutPrinciples } from '@/components/sections/about/AboutPrinciples';
import { AboutTimeline } from '@/components/sections/about/AboutTimeline';

export const metadata = generateSEO({
  title: 'About',
  description: 'Learn about JustFlowState - our mission, principles, and the team behind the luxury digital experiences.',
  pathname: '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutPrinciples />
      <AboutTimeline />
    </>
  );
}