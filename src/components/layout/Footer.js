'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socials';
import { navLinks } from '@/data/navigation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FadeIn } from '@/components/animations/FadeIn';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0C] border-t border-[#1A1A1B] pt-24 pb-12">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FadeIn className="lg:col-span-2">
            <h3 className="text-h3-medium font-serif text-white mb-6">
              Let's create something<br />
              <span className="text-[#7D5CFA]">extraordinary</span>
            </h3>
            <p className="text-[#A6A7AB] mb-8 max-w-md">
              Ready to transform your digital presence? We're here to help you craft experiences that captivate and convert.
            </p>
            <MagneticButton href="/contact" variant="gold">
              Start a Conversation
            </MagneticButton>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#3A80F6] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A6A7AB] mb-6">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#3A80F6] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="border-t border-[#1A1A1B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5B5C5F] text-sm">
            © {currentYear} JustFlowState. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#5B5C5F]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}