'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-green-100 py-6 text-center text-gray-700 text-sm">
      <p>📧 Email: vortexpowerlinesolutions@gmail.com</p>
      <p>📞 Phone: 9618797744</p>

      <div className="mt-4">
        <Link href="/contact">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300 shadow">
            Get a Free Quote
          </button>
        </Link>
      </div>

      <p className="mt-4 text-gray-500">
        © {new Date().getFullYear()} Vortex Powerline Solutions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
