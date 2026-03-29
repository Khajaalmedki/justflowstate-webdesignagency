import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FramerMotionProvider } from '@/components/layout/FramerMotionProvider';
import { GSAPProvider } from '@/components/layout/GSAPProvider';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'JustFlowState | Luxury Digital Agency',
  description: 'We craft cinematic digital experiences that move people. Strategy, design, and engineering for premium brands.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B0B0C] text-white overflow-x-hidden">
        <GSAPProvider>
          <FramerMotionProvider>
            <SmoothScrollProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </FramerMotionProvider>
        </GSAPProvider>
      </body>
    </html>
  );
}