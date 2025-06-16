// src/components/AboutContent.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../styles/about.css'; // Adjust the path if needed

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className={`about-section w-full ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Main About Section */}
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            At Vortex Powerline Solutions, we believe solar power should be simple, clean, and accessible to everyone.
            Our mission is to help homes, businesses, and communities switch to solar energy and save money while protecting the environment.
          </p>
          <p className="about-description">
            We don’t just install panels — we guide you through every step, making solar energy easy to understand and reliable for the long run.
          </p>
        </div>
        <div className="about-image">
          <Image src="/about.png" alt="Solar Team at Work" width={320} height={320} />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="about-extra">
        <h3 className="about-subtitle">Why Choose Us?</h3>
        <ul className="about-list">
          <li>✅ Easy-to-understand solar solutions</li>
          <li>✅ Expert team with professional support</li>
          <li>✅ Affordable and long-lasting systems</li>
          <li>✅ Support for rural and urban installations</li>
          <li>✅ Backed by real results and satisfied customers</li>
        </ul>
      </div>

      {/* PM Surya Ghar Yojana Section */}
      <div className="about-container pm-surya-section">
        <div className="about-image">
          <Image src="/modi.png" alt="PM Surya Ghar Yojana" width={320} height={330} />
        </div>
        <div className="about-text">
          <h3 className="about-subtitle">PM Surya Ghar Yojana</h3>
          <p className="about-description">
            We proudly support the <strong>PM Surya Ghar Muft Bijli Yojana</strong>, a government scheme that offers
            free electricity up to 300 units for households using rooftop solar panels.
          </p>
          <p className="about-description">
            Through this initiative, we help people in both cities and villages take advantage of subsidies and
            financial support to switch to solar — making energy independence a reality for every Indian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
