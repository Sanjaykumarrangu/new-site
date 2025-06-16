import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import MissionVisionTabs from '@/components/MissionVisionTabs';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Empowering homes with solar energy. Discover our mission, vision, and services.',
};

export default function Home() {
  return (
    <main className="pt-20 space-y-0.4 bg-white">
      <Hero />
      <MissionVisionTabs />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <Footer />
    </main>
  );
}
