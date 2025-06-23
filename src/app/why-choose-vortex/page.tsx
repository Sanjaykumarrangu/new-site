import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Vortex Powerline | Solar Company in Telangana',
  description:
    'Vortex Powerline offers affordable and reliable solar panel installation and services across Telangana. Discover why we are your trusted solar energy partner.',
  keywords: [
    'solar company Telangana',
    'solar installation Hyderabad',
    'solar energy India',
    'vortex powerline',
    'clean energy telangana',
    'solar panels warangal',
  ],
  openGraph: {
    title: 'Why Choose Vortex Powerline | Solar Experts in Telangana',
    description:
      'Looking for solar power solutions in Telangana? Vortex Powerline delivers high-quality solar panel installation and energy consulting services.',
    url: 'https://www.vortexpowerline.com/why-choose-vortex',
    siteName: 'Vortex Powerline Solutions',
    images: [
      {
        url: 'https://www.vortexpowerline.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vortex solar panels and clean energy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function WhyChooseVortex() {
  return (
    <main className=" mx-auto px-4 py-12 text-gray-800 bg-white"  >
      <h1 className="text-3xl font-bold mb-4">
        Why Choose Vortex Powerline Solutions?
      </h1>
      <p className="mb-6 text-lg">
        At <strong>Vortex Powerline Solutions</strong>, we bring clean, affordable, and
        efficient <strong>solar energy solutions</strong> to homes, businesses, and
        industries across <strong>Telangana</strong>. With years of experience and a
        dedicated local team, we ensure your solar investment delivers long-term value.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Core Offerings:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>🔋 Customized Solar Panel Installation</li>
        <li>⚡ Energy Distribution and Electrical Maintenance</li>
        <li>📊 End-to-End Project Management</li>
        <li>🏢 Residential, Commercial & Industrial Services</li>
        <li>🌞 Sustainable and Cost-Effective Solutions</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Service Locations:</h2>
      <p>
        We proudly serve all major cities and towns in Telangana including:
        <br />
        Hyderabad, Warangal, Karimnagar,Mancherial, Nizamabad, Khammam, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
      <p>
        📞 Phone: +91-9618797744
        <br />
        📩 Email: vortexpowerlinesolutions@gmail.com
      </p>

      <p className="mt-6 font-medium">
        ✅ Let’s power Telangana with the sun — one rooftop at a time.
      </p>
    </main>
  );
}
