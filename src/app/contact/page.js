import { generateSEO } from '@/lib/seo';
import { ContactIntro } from '@/components/sections/contact/ContactIntro';
import { ContactDetails } from '@/components/sections/contact/ContactDetails';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';

export const metadata = generateSEO({
  title: 'Contact',
  description: 'Get in touch with JustFlowState. Start your luxury digital project today.',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactFormSection />
      <ContactDetails />
    </>
  );
}