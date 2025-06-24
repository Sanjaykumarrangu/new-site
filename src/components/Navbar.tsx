'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Why Choose Us', href: '/why-choose-vortex' },

  ];

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome && !isScrolled ? 'bg-transparent' : 'bg-white shadow'
  }`;

  if (!mounted) return null;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-3 text-green-700">
          <Image
            src="/logofinal.jpg"
            alt="Vortex Logo"
            width={60}
            height={40}
            priority
            className="rounded-md"
          />
          <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text">
              <span className="from-green-400 to-pink-600 bg-gradient-to-l bg-clip-text text-transparent">Vortex </span>
              <span className="from-green-400 to-pink-600 bg-gradient-to-l bg-clip-text text-transparent">Powerline Solutions</span>
            </h1>
            <p className="text-sm md:text-base italic bg-gradient-to-r from-gray-600 to-green-500 text-transparent bg-clip-text">
              <span className="from-red-500 to-green-300 bg-gradient-to-l bg-clip-text text-transparent">We power </span>
              <span className="from-green-500 to-yellow-300 bg-gradient-to-l bg-clip-text text-transparent">with the sun</span>
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-green-600 ${
                  pathname === href ? 'text-green-700 font-semibold underline' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3" style={{color:"green"}}>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 " >
          <ul className="flex flex-col gap-4 text-gray-700 font-medium " style={{color:"red",}}>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    pathname === href ? 'text-green-700 font-semibold underline' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
