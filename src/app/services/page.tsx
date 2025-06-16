'use client';

import Image from 'next/image';
import '../../styles/services.css';

const ServicesPage = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-intro">
          We offer comprehensive solar energy services designed to give you peace of mind and maximum efficiency — from installation to long-term support.
        </p>

        {/* Best Service Section */}
        <div className="service-card">
          <div className="service-text">
            <h2>Best in Class Installation</h2>
            <p>
              Our expert team ensures seamless installation with high-quality equipment and clean aesthetics. Every project is customized to your needs.
            </p>
            <ul>
              <li>✔️ 5 Years Free Maintenance</li>
              <li>🔧 Fast response for service calls</li>
            </ul>
          </div>
          <div className="service-image">
            <Image src="/installation.png" alt="Installation Service" width={400} height={300} />
          </div>
        </div>

        {/* AMC Section */}
        <div className="service-card reverse">
          <div className="service-image">
            <Image src="/amc.png" alt="AMC Support" width={400} height={300} />
          </div>
          <div className="service-text">
            <h2>AMC Support After 5 Years</h2>
            <p>
              After the initial 5-year free service, we offer affordable AMC packages to keep your system running at peak performance.
            </p>
            <ul>
              <li>🧰 Annual checkups & cleaning</li>
              <li>🔋 Inverter and battery inspection</li>
              <li>📊 Performance optimization</li>
            </ul>
          </div>
        </div>

        {/* Battery Maintenance */}
        <div className="service-card">
          <div className="service-text">
            <h2>Battery Maintenance</h2>
            <p>
              We provide regular battery health checks, fluid refills (for lead-acid), and optimization tips for longer battery life.
            </p>
            <ul>
              <li>🔋 Lithium & Lead-Acid support</li>
              <li>✅ Capacity testing</li>
              <li>⚠️ Safety inspections</li>
            </ul>
          </div>
          <div className="service-image">
            <Image src="/battery.png" alt="Battery Maintenance" width={400} height={300} />
          </div>
        </div>

        {/* Products */}
        <h2 className="services-subtitle">Our Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <Image src="/products/water-heater.png" alt="Solar Water Heater" width={200} height={150} />
            <h4>Solar Water Heaters</h4>
            <p>High-efficiency models with long durability.</p>
          </div>
          <div className="product-card">
            <Image src="/products/solar-blinker.png" alt="Solar Blinker" width={200} height={150} />
            <h4>Solar Blinkers</h4>
            <p>Efficient traffic & pathway signaling with solar.</p>
          </div>
          <div className="product-card">
            <Image src="/products/street-light.png" alt="Solar Street Light" width={200} height={150} />
            <h4>Solar Street Lights</h4>
            <p>Smart, long-life lighting with motion sensors.</p>
          </div>
          <div className="product-card">
            <Image src="/products/solar-fencing.png" alt="Solar Fencing" width={200} height={150} />
            <h4>Solar Fencing</h4>
            <p>Secure boundaries using solar-powered fencing systems.</p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h2 className="services-subtitle">Additional Services</h2>
          <ul>
            <li>🧼 Panel Cleaning & Efficiency Boosting</li>
            <li>📶 System Performance Monitoring</li>
            <li>🔌 Grid Integration Support</li>
            <li>💡 Energy Usage Consultation</li>
            <li>🏠 Home & Business System Upgrades</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
