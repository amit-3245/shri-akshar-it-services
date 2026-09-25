import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../Data";

const About = () => {
  return (
    <main className="sa-about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="sa-about-hero">
        <div className="sa-container">
          <div className="sa-about-hero-grid">

            <div className="sa-about-hero-content">
              <span className="sa-about-label">
                ABOUT SHRI AKSHAR
              </span>

              <h1>
                Technology built around
                <span> real business needs.</span>
              </h1>

              <p>
                Shri Akshar IT Services helps businesses, startups
                and growing brands build meaningful digital
                experiences through technology, design and digital
                solutions.
              </p>

              <div className="sa-about-hero-actions">
                <Link
                  to="/services"
                  className="sa-about-primary-btn"
                >
                  Explore Our Services
                  <span>↗</span>
                </Link>

                <Link
                  to="/contact-us"
                  className="sa-about-secondary-btn"
                >
                  Talk to Us
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="sa-about-hero-card">
              <div className="sa-about-hero-card-top">
                <span>SHRI AKSHAR</span>
                <span>01</span>
              </div>

              <div className="sa-about-hero-symbol">
                SA
              </div>

              <h3>
                IT & Digital
                <br />
                Services
              </h3>

              <p>
                Technology, creativity and digital growth
                under one professional ecosystem.
              </p>

              <div className="sa-about-hero-line" />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="sa-about-who">
        <div className="sa-container">
          <div className="sa-about-two-column">

            <div>
              <span className="sa-about-label">
                WHO WE ARE
              </span>

              <h2>
                A technology partner focused on
                <span> practical outcomes.</span>
              </h2>
            </div>

            <div className="sa-about-copy">
              <p>
                Shri Akshar IT Services is the IT services unit of
                Shri Akshar Services Private Limited. We provide
                technology and digital services designed around
                the evolving needs of modern businesses.
              </p>

              <p>
                Our approach brings development, design,
                automation, analytics, cloud, AI and digital
                growth together so that businesses can work with
                one integrated technology partner.
              </p>

              <p>
                Whether the requirement is a new digital presence,
                a software product, an automation workflow or a
                complete digital growth strategy, our focus is on
                creating solutions that are useful, scalable and
                maintainable.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="sa-about-capabilities">
        <div className="sa-container">

          <div className="sa-about-section-heading">
            <span className="sa-about-label">
              OUR CAPABILITIES
            </span>

            <h2>
              One ecosystem.
              <span> Multiple capabilities.</span>
            </h2>

            <p>
              Our service ecosystem covers the key technology
              and digital capabilities businesses need to build,
              operate and grow.
            </p>
          </div>

          <div className="sa-about-capability-grid">

            <div className="sa-about-capability">
              <span>01</span>
              <h3>Technology</h3>
              <p>
                Web, application and software development,
                APIs, cloud, AI, automation and analytics.
              </p>
            </div>

            <div className="sa-about-capability">
              <span>02</span>
              <h3>Design</h3>
              <p>
                User-focused UI/UX, graphic design, branding
                and creative digital experiences.
              </p>
            </div>

            <div className="sa-about-capability">
              <span>03</span>
              <h3>Digital Growth</h3>
              <p>
                SEO, digital marketing, social media,
                advertising and content creation.
              </p>
            </div>

            <div className="sa-about-capability">
              <span>04</span>
              <h3>Business Solutions</h3>
              <p>
                Startup IT solutions and technology strategies
                designed around practical business requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY APPROACH
      ===================================================== */}
      <section className="sa-about-technology">
        <div className="sa-container">

          <div className="sa-about-technology-grid">

            <div className="sa-about-tech-panel">
              <span className="sa-about-label">
                OUR TECHNOLOGY APPROACH
              </span>

              <div className="sa-about-tech-visual">
                <div className="sa-about-tech-center">
                  SA
                </div>

                <div className="sa-about-tech-node node-one">
                  WEB
                </div>

                <div className="sa-about-tech-node node-two">
                  AI
                </div>

                <div className="sa-about-tech-node node-three">
                  CLOUD
                </div>

                <div className="sa-about-tech-node node-four">
                  DATA
                </div>
              </div>
            </div>

            <div className="sa-about-tech-content">
              <h2>
                Modern technology,
                <span> purposeful implementation.</span>
              </h2>

              <p>
                Technology is most valuable when it solves a
                genuine business problem. We therefore focus on
                understanding the requirement before selecting
                the appropriate technology and implementation
                approach.
              </p>

              <div className="sa-about-tech-points">
                <div>
                  <span>01</span>
                  <strong>Requirement-driven</strong>
                  <p>
                    Solutions begin with business requirements,
                    not technology for technology's sake.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Scalable foundation</strong>
                  <p>
                    Architecture and implementation are planned
                    with future growth in mind.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Maintainable execution</strong>
                  <p>
                    Clean structure and practical development
                    practices support long-term maintainability.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}
      <section className="sa-about-mission">
        <div className="sa-container">

          <div className="sa-about-mission-grid">

            <div className="sa-about-mission-card">
              <span>OUR MISSION</span>

              <h2>
                Make professional technology
                <span> accessible and useful.</span>
              </h2>

              <p>
                Our mission is to help businesses use technology
                effectively through practical digital solutions,
                thoughtful design and dependable execution.
              </p>
            </div>

            <div className="sa-about-mission-card">
              <span>OUR VISION</span>

              <h2>
                Build technology that creates
                <span> lasting value.</span>
              </h2>

              <p>
                We aim to build a professional technology
                ecosystem that supports businesses throughout
                their digital journey — from initial idea to
                continuous growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="sa-about-values">
        <div className="sa-container">

          <div className="sa-about-section-heading">
            <span className="sa-about-label">
              OUR VALUES
            </span>

            <h2>
              Principles behind
              <span> our work.</span>
            </h2>
          </div>

          <div className="sa-about-values-list">

            <div className="sa-about-value">
              <span>01</span>
              <div>
                <h3>Clarity</h3>
                <p>
                  Clear communication, clear requirements and
                  clear execution.
                </p>
              </div>
            </div>

            <div className="sa-about-value">
              <span>02</span>
              <div>
                <h3>Quality</h3>
                <p>
                  Professional standards across technology,
                  design and delivery.
                </p>
              </div>
            </div>

            <div className="sa-about-value">
              <span>03</span>
              <div>
                <h3>Innovation</h3>
                <p>
                  Using modern technology where it creates
                  meaningful business value.
                </p>
              </div>
            </div>

            <div className="sa-about-value">
              <span>04</span>
              <div>
                <h3>Long-term thinking</h3>
                <p>
                  Building solutions that can evolve with
                  changing business requirements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CORPORATE INFORMATION
      ===================================================== */}
      <section className="sa-about-corporate">
        <div className="sa-container">

          <div className="sa-about-corporate-header">
            <div>
              <span className="sa-about-label">
                CORPORATE INFORMATION
              </span>

              <h2>
                Shri Akshar IT Services
              </h2>
            </div>

            <p>
              An IT services unit operating under
              {` ${companyInfo.name}`}.
            </p>
          </div>

          <div className="sa-about-corporate-grid">

            <div>
              <span>LEGAL ENTITY</span>
              <strong>{companyInfo.name}</strong>
            </div>

            <div>
              <span>IT UNIT</span>
              <strong>{companyInfo.displayName}</strong>
            </div>

            <div>
              <span>CIN</span>
              <strong>{companyInfo.cin}</strong>
            </div>

            <div>
              <span>GSTIN</span>
              <strong>{companyInfo.gstin}</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>{companyInfo.email}</strong>
            </div>

            <div>
              <span>PHONE</span>
              <strong>+91 {companyInfo.phone}</strong>
            </div>

            <div className="sa-about-corporate-address">
              <span>REGISTERED ADDRESS</span>
              <strong>{companyInfo.address}</strong>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="sa-about-cta">
        <div className="sa-container">
          <div className="sa-about-cta-inner">

            <div>
              <span className="sa-about-label">
                WORK WITH US
              </span>

              <h2>
                Have a business challenge?
                <span> Let's solve it with technology.</span>
              </h2>

              <p>
                Tell us about your requirement and let's explore
                the right digital solution for your business.
              </p>
            </div>

            <div className="sa-about-cta-actions">
              <Link
                to="/contact-us"
                className="sa-about-primary-btn"
              >
                Start a Project
                <span>↗</span>
              </Link>

              <Link
                to="/services"
                className="sa-about-secondary-btn"
              >
                View Services
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
