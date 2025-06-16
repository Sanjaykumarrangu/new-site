'use client';

import Image from 'next/image';
import '../styles/services.css'; // Create this CSS file for styles

const ServicesPage = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-intro">
          We offer comprehensive solar energy services designed to give you peace of mind and maximum efficiency, from installation to long-term support.
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
              <li>📱 App-based monitoring support</li>
            </ul>
          </div>
          <Image src="/install-team.png" alt="Installation Service" width={400} height={300} className="service-img" />
        </div>

        {/* AMC Service */}
        <div className="service-card reverse">
          <Image src="/amc.png" alt="AMC Support" width={400} height={300} className="service-img" />
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
          <Image src="/battery.png" alt="Battery Maintenance" width={400} height={300} className="service-img" />
        </div>

        {/* Solar Products */}
        <h2 className="services-subtitle">Our Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <Image src="/solar-panel.png" alt="Solar Panel" width={200} height={150} />
            <h4>Mono Perc Solar Panels</h4>
            <p>High-efficiency panels with 25-year warranty</p>
          </div>
          <div className="product-card">
            <Image src="/inverter.png" alt="Solar Inverter" width={200} height={150} />
            <h4>Smart Inverters</h4>
            <p>Wi-Fi monitoring & grid backup options</p>
          </div>
          <div className="product-card">
            <Image src="/lithium-battery.png" alt="Lithium Battery" width={200} height={150} />
            <h4>Lithium Batteries</h4>
            <p>Fast charging, long life, compact size</p>
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
