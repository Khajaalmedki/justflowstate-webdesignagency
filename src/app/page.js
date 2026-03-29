import { HomeCaseStudies } from "@/components/sections/home/HomeCaseStudies";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeServicesPreview } from "@/components/sections/home/HomeServicesPreview";
import { HomeProcess } from "@/components/sections/home/HomeProcess";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { HomeTestimonials } from "@/components/sections/home/HomeTestimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServicesPreview />
      <HomeCaseStudies />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}