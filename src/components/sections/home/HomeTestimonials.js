'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FadeIn } from '@/components/animations/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "JustFlowState transformed our digital presence completely. Their attention to detail and cinematic approach set them apart from any agency we've worked with.",
    author: "Sarah Chen",
    role: "CEO, Aura Finance",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "The team doesn't just build websites—they craft experiences. Our conversion rates increased by 340% after the redesign.",
    author: "Marcus Johnson",
    role: "Founder, Nomad Collective",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "Working with JustFlowState felt like having an elite in-house team. They understood our vision and elevated it beyond expectations.",
    author: "Elena Rodriguez",
    role: "CMO, Prisma Health",
    image: "/images/testimonial-3.jpg"
  }
];

export function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle 
            title="What our partners say"
            subtitle="Testimonials"
            align="center"
            light
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-4xl font-serif text-white leading-tight mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2A2B2E] overflow-hidden">
                  {/* Avatar placeholder */}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-[#A6A7AB] text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-[#3A80F6]' : 'bg-[#2A2B2E] hover:bg-[#3B3C3F]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}