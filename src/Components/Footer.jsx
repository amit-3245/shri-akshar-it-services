import React from "react";
import { Link } from "react-router-dom";
import {
  companyInfo,
  usefulLinks,
  serviceList,
  socialLinks,
} from "../Data";

const Footer = () => {
  const technologyServices = serviceList
    .filter((service) => service.category === "Technology")
    .slice(0, 6);

  const growthServices = serviceList
    .filter((service) => service.category === "Digital Growth")
    .slice(0, 6);

  return (
    <footer className="sa-footer">

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <section className="sa-footer-cta">

        <div className="sa-container">

          <div className="sa-footer-cta-inner">

            <div className="sa-footer-cta-copy">

              <span className="sa-footer-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <p>
                Tell us what you are trying to build, improve or grow.
                We will help you find the right digital direction.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="sa-footer-cta-button"
              aria-label="Discuss Your Project"
            >
              <span>Discuss Your Project</span>
              <span className="sa-footer-cta-arrow">↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="sa-footer-main">

        <div className="sa-container">

          <div className="sa-footer-grid">


            {/* BRAND */}
            <div className="sa-footer-brand">

              <Link
                to="/"
                className="sa-footer-logo"
                aria-label="Shri Akshar IT Services"
              >

                <span className="sa-footer-logo-mark">
                  SA
                </span>

                <span className="sa-footer-logo-text">
                  <strong>SHRI AKSHAR</strong>
                  <small>IT SERVICES</small>
                </span>

              </Link>


              <p className="sa-footer-description">
                Technology and digital solutions designed to help
                businesses build stronger foundations, improve
                operations and move forward with confidence.
              </p>


              <Link
                to="/contact-us"
                className="sa-footer-brand-link"
              >
                Start a Project
                <span>↗</span>
              </Link>

            </div>


            {/* COMPANY */}
            <div className="sa-footer-column">

              <h3>Company</h3>

              <nav>

                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/company">Company</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact-us">Contact</Link>

              </nav>

            </div>


            {/* TECHNOLOGY */}
            <div className="sa-footer-column">

              <h3>Technology</h3>

              <nav>

                {technologyServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                ))}

                <Link
                  to="/services"
                  className="sa-footer-view-all"
                >
                  View All Services
                  <span>→</span>
                </Link>

              </nav>

            </div>


            {/* DIGITAL GROWTH */}
            <div className="sa-footer-column">

              <h3>Digital Growth</h3>

              <nav>

                {growthServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                ))}

                <Link
                  to="/services"
                  className="sa-footer-view-all"
                >
                  Explore Services
                  <span>→</span>
                </Link>

              </nav>

            </div>

          </div>


          {/* =================================================
              CONTACT STRIP
          ================================================= */}

          <div className="sa-footer-contact-strip">

            <a
              href={`tel:+91${companyInfo.phone}`}
              className="sa-footer-contact-item"
            >
              <span className="sa-footer-contact-label">
                CALL US
              </span>

              <strong>
                +91 {companyInfo.phone}
              </strong>
            </a>


            <a
              href={`mailto:${companyInfo.email}`}
              className="sa-footer-contact-item"
            >
              <span className="sa-footer-contact-label">
                EMAIL
              </span>

              <strong>
                {companyInfo.email}
              </strong>
            </a>


            <div className="sa-footer-contact-item sa-footer-address">

              <span className="sa-footer-contact-label">
                VISIT US
              </span>

              <strong>
                {companyInfo.address}
              </strong>

            </div>

          </div>


          {/* =================================================
              CORPORATE INFORMATION
          ================================================= */}

          <div className="sa-footer-corporate">

            <div>
              <span>LEGAL ENTITY</span>
              <strong>{companyInfo.name}</strong>
            </div>

            <div>
              <span>CIN</span>
              <strong>{companyInfo.cin}</strong>
            </div>

            <div>
              <span>GSTIN</span>
              <strong>{companyInfo.gstin}</strong>
            </div>

          </div>


          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div className="sa-footer-bottom">

            <p>
              © {new Date().getFullYear()}{" "}
              {companyInfo.name}. All rights reserved.
            </p>


            <nav className="sa-footer-legal">

              {usefulLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.url}
                >
                  {item.label}
                </Link>
              ))}

            </nav>


            <div className="sa-footer-social">

              {socialLinks.linkedin !== "#" && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              )}

              {socialLinks.instagram !== "#" && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  ig
                </a>
              )}

              {socialLinks.facebook !== "#" && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}

              {socialLinks.youtube !== "#" && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  yt
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
