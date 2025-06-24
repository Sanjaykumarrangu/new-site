'use client';

import { Leaf, Lightbulb, ShieldCheck, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Go Green',
    icon: Leaf,
  },
  {
    title: 'Smart Ideas',
    icon: Lightbulb,
  },
  {
    title: 'We Care',
    icon: Handshake,
  },
  {
    title: 'We’re Reliable',
    icon: ShieldCheck,
  },
];

const WhoWeAreSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-16 px-4 md:px-20"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Get to Know Us
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed text-sm">
            We’re a team that believes in clean, solar energy. Our goal is simple:
            to help people use the power of the sun to save money and protect the planet.
            We work with honesty, smart ideas, and a promise to do things right.
            Every project we take on is about more than just installing solar panels — it’s about
            creating long-term value for our customers and the environment. Whether you are a homeowner,
            a business, or a community organization, we’re here to guide you step-by-step with solutions
            that are easy to understand and built to last.
          </p>
        </div>

        {/* Right Side - Value Cards */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
          {values.map(({ title, icon: Icon }, i) => (
            <div
              key={i}
              className="bg-green-100 rounded-xl p-6 text-center text-green-900 font-semibold shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center justify-center">
                <Icon className="h-8 w-8 mb-3 text-green-700" />
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhoWeAreSection;
