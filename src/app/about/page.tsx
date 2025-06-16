// src/app/about/page.tsx

import AboutContent from '../about/AboutContent'; // ✅ Import your component

export const metadata = {
  title: 'About | Vortex Powerline Solutions',
  description: 'Learn more about Vortex Powerline Solutions – our mission, team, and values.',
};

export default function AboutPage() {
  return (
    <main >
      <AboutContent /> {/* ✅ Render it here */}
    </main>
  );
}
