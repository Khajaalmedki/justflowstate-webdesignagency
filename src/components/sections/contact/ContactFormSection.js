'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FadeIn } from '@/components/animations/FadeIn';
import { isValidEmail } from '@/utils/validators';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', company: '', budget: '', message: '' });
  };

  if (isSuccess) {
    return (
      <section className="py-32 bg-[#0B0B0C]">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="w-20 h-20 rounded-full bg-[#4BBF6B]/20 flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#4BBF6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">Message Sent!</h2>
            <p className="text-[#A6A7AB]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0B0B0C]">
      <div className="max-w-[680px] mx-auto px-6">
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="John Doe"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="john@company.com"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
              />
              <Input
                label="Budget Range (Optional)"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="$50k - $100k"
              />
            </div>

            <TextArea
              label="Project Details"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell us about your project, goals, and timeline..."
              rows={6}
            />

            <div className="pt-4">
              <MagneticButton
                type="submit"
                variant="primary"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </MagneticButton>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}