'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`hero-section ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="hero-image-wrapper">
        <Image
          src="/bg3.png"
          alt="Solar Panels Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Power Your Future with Solar Energy
        </h1>
        <p className="hero-subtitle">
          Save money & go green with our reliable solar solutions.
        </p>
        <a href="/contact" className="hero-button">
          Get a Quote
        </a>

        <div className="scroll-arrow">
          <a href="/about" aria-label="Scroll to about section" title="Scroll to about section">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
