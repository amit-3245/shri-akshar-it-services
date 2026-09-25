import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { serviceList } from "../Data";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(serviceList.map((service) => service.category))];
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? serviceList
      : serviceList.filter(
          (service) => service.category === activeCategory
        );

  const technologyServices = serviceList.slice(0, 9);
  const growthServices = serviceList.slice(9);

  return (
    <main className="sa-services-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="sa-services-hero">
        <div className="sa-container">
          <div className="sa-services-hero-inner">
            <div className="sa-services-hero-content">
              <span className="sa-services-label">
                OUR SERVICES
              </span>

              <h1>
                Technology and digital solutions
                <span> for modern businesses.</span>
              </h1>

              <p>
                From websites and software to AI, automation,
                branding and digital marketing, we provide the
                capabilities businesses need to build and grow
                digitally.
              </p>

              <div className="sa-services-hero-actions">
                <Link
                  to="/contact-us"
                  className="sa-services-primary-btn"
                >
                  Start a Project
                  <span>↗</span>
                </Link>

                <a
                  href="#all-services"
                  className="sa-services-secondary-btn"
                >
                  Explore Services
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className="sa-services-hero-stat">
              <strong>20</strong>
              <span>
                Technology &amp;
                <br />
                Digital Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}
      <section className="sa-services-filter-section">
        <div className="sa-container">
          <div className="sa-services-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category === "All"
                  ? "All Services"
                  : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SERVICES
      ===================================================== */}
      <section
        id="all-services"
        className="sa-services-main"
      >
        <div className="sa-container">

          {/* Technology */}
          {activeCategory === "All" && (
            <div className="sa-services-group">
              <div className="sa-services-group-header">
                <div>
                  <span>01</span>
                  <h2>Technology Solutions</h2>
                </div>

                <p>
                  Digital products, infrastructure and technology
                  capabilities for modern business requirements.
                </p>
              </div>

              <div className="sa-services-grid">
                {technologyServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Digital Growth */}
          {activeCategory === "All" && (
            <div className="sa-services-group">
              <div className="sa-services-group-header">
                <div>
                  <span>02</span>
                  <h2>Startup &amp; Digital Growth</h2>
                </div>

                <p>
                  Creative, marketing and business-growth
                  solutions for startups and established brands.
                </p>
              </div>

              <div className="sa-services-grid">
                {growthServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index + 10}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Filtered Results */}
          {activeCategory !== "All" && (
            <div className="sa-services-filtered">
              <div className="sa-services-filtered-header">
                <span>
                  {filteredServices.length}{" "}
                  {filteredServices.length === 1
                    ? "SERVICE"
                    : "SERVICES"}
                </span>

                <h2>{activeCategory}</h2>
              </div>

              <div className="sa-services-grid">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="sa-services-process">
        <div className="sa-container">
          <div className="sa-services-section-heading">
            <span className="sa-services-label">
              OUR APPROACH
            </span>

            <h2>
              The right solution starts with
              <span> the right process.</span>
            </h2>

            <p>
              We follow a structured approach to understand the
              requirement, plan the solution and deliver it with
              scalability and quality in mind.
            </p>
          </div>

          <div className="sa-services-process-grid">
            <div>
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand your business, goals, users and
                technical requirements.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Plan</h3>
              <p>
                Define the technology, design, scope and
                implementation strategy.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop, design and integrate the solution with
                quality-focused execution.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Launch &amp; Grow</h3>
              <p>
                Deploy the solution and continue improving it as
                your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="sa-services-cta">
        <div className="sa-container">
          <div className="sa-services-cta-inner">
            <div>
              <span className="sa-services-label">
                NEED A SOLUTION?
              </span>

              <h2>
                Let's build something
                <span> that moves your business forward.</span>
              </h2>

              <p>
                Share your requirement with us and we'll help
                identify the right technology or digital solution.
              </p>
            </div>

            <div className="sa-services-cta-actions">
              <Link
                to="/contact-us"
                className="sa-services-primary-btn"
              >
                Start a Project
                <span>↗</span>
              </Link>

              <Link
                to="/portfolio"
                className="sa-services-secondary-btn"
              >
                View Our Work
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================================================
   SERVICE CARD
   ========================================================= */

const ServiceCard = ({ service, index }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="sa-service-page-card"
    >
      <div className="sa-service-page-card-image">
        <img
          src={service.imageSrc}
          alt={service.title}
          loading="lazy"
        />

        <span className="sa-service-page-number">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="sa-service-page-card-body">
        <span className="sa-service-page-category">
          {service.category}
        </span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <div className="sa-service-page-card-footer">
          <span>View Service</span>
          <b>↗</b>
        </div>
      </div>
    </Link>
  );
};

export default Services;
