'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { contactInfo, socialLinks } from '@/data/socials';

export function ContactDetails() {
  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-4">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-xl text-white hover:text-[#3A80F6] transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-4">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-xl text-white hover:text-[#3A80F6] transition-colors">
                {contactInfo.phone}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-4">Office Hours</h3>
              <p className="text-xl text-white">{contactInfo.hours}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-20">
          <div className="p-8 md:p-12 rounded-3xl bg-[#1A1A1B] border border-[#2A2B2E]">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#3A80F6] transition-colors text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}