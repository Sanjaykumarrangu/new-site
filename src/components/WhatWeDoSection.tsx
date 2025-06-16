'use client';

import { Wrench, Compass, Globe2, Sun, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Solar Panel Setup',
    description: 'We install solar panels for homes and businesses.',
    icon: Sun,
    href: '/services/solar-installation',
  },
  {
    title: 'System Maintenance',
    description: 'Keep your solar system running smoothly and efficiently.',
    icon: Wrench,
    href: '/services/maintenance',
  },
  {
    title: 'Expert Advice',
    description: 'Get simple guidance on the best solar options for you.',
    icon: Compass,
    href: '/services/consulting',
  },
  {
    title: 'Off-Grid Systems',
    description: 'Live independently with solar power in remote areas.',
    icon: Globe2,
    href: '/services/off-grid',
  },
  {
    title: 'On-Grid Systems',
    description: 'Connect your solar to the public grid for shared energy use.',
    icon: Grid,
    href: '/services/on-grid',
  },
];

const WhatWeDoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-green-50 py-16 px-4 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
        What We Do
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, icon: Icon, href }, i) => (
          <Link href={href} key={i}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center cursor-pointer"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatWeDoSection;
