import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../Data";

const Company = () => {
  const values = [
    {
      number: "01",
      title: "Client First",
      text: "We begin with understanding the business problem, not simply the technology requirement.",
    },
    {
      number: "02",
      title: "Quality Driven",
      text: "We focus on reliable, maintainable and professional digital solutions.",
    },
    {
      number: "03",
      title: "Long-Term Thinking",
      text: "Our solutions are designed with future growth, scalability and maintainability in mind.",
    },
    {
      number: "04",
      title: "Transparent Execution",
      text: "Clear communication, structured execution and measurable outcomes guide our projects.",
    },
  ];

  return (
    <main className="sa-company-page">

      {/* HERO */}
      <section className="sa-inner-hero">
        <div className="sa-container">

          <span className="sa-section-label">
            OUR COMPANY
          </span>

          <h1>
            Technology built around
            <br />
            <span>real business needs.</span>
          </h1>

          <p>
            Shri Akshar IT Services is the technology-focused unit of Shri
            Akshar Services Private Limited, delivering modern IT, software,
            automation and digital-growth solutions for businesses.
          </p>

        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="sa-company-section">
        <div className="sa-container">

          <div className="sa-company-grid">

            <div>
              <span className="sa-section-label">
                WHO WE ARE
              </span>

              <h2>
                A technology partner for
                <span> ambitious businesses.</span>
              </h2>
            </div>

            <div className="sa-company-copy">

              <p>
                Shri Akshar IT Services helps businesses build, improve and
                scale their digital operations through technology.
              </p>

              <p>
                From websites and mobile applications to software systems,
                AI, automation, cloud deployment, data analytics and digital
                growth, we bring multiple capabilities together under one
                technology partner.
              </p>

              <p>
                Our approach combines practical business understanding,
                modern technology and structured execution to create solutions
                that are useful today and ready for tomorrow.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CAPABILITIES */}
      <section className="sa-company-section sa-company-light">
        <div className="sa-container">

          <div className="sa-company-heading">
            <span className="sa-section-label">
              OUR CAPABILITIES
            </span>

            <h2>
              From digital foundation
              <br />
              to <span>business growth.</span>
            </h2>
          </div>


          <div className="sa-company-capabilities">

            <div className="sa-company-capability">
              <strong>01</strong>
              <h3>Technology</h3>
              <p>
                Web, app and software development, AI, analytics, APIs,
                automation, cloud and UI/UX.
              </p>
            </div>

            <div className="sa-company-capability">
              <strong>02</strong>
              <h3>Digital Growth</h3>
              <p>
                SEO, digital marketing, social media, advertising and
                performance-focused digital solutions.
              </p>
            </div>

            <div className="sa-company-capability">
              <strong>03</strong>
              <h3>Creative</h3>
              <p>
                Branding, graphic design, social creatives, content creation
                and professional video editing.
              </p>
            </div>

            <div className="sa-company-capability">
              <strong>04</strong>
              <h3>Business Solutions</h3>
              <p>
                Startup technology solutions and integrated digital systems
                designed around business objectives.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* MISSION / VISION */}
      <section className="sa-company-section">
        <div className="sa-container">

          <div className="sa-company-mission-grid">

            <div className="sa-company-mission-card">

              <span className="sa-section-label">
                OUR MISSION
              </span>

              <h3>
                Make technology
                <br />
                <span>useful and accessible.</span>
              </h3>

              <p>
                Our mission is to help businesses use technology as a practical
                tool for efficiency, growth, innovation and better customer
                experiences.
              </p>

            </div>


            <div className="sa-company-mission-card">

              <span className="sa-section-label">
                OUR VISION
              </span>

              <h3>
                Build technology
                <br />
                <span>that moves businesses forward.</span>
              </h3>

              <p>
                We aim to become a trusted technology partner for businesses
                looking for dependable digital products, systems and growth
                solutions.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* VALUES */}
      <section className="sa-company-section sa-company-light">
        <div className="sa-container">

          <div className="sa-company-heading">

            <span className="sa-section-label">
              OUR VALUES
            </span>

            <h2>
              Principles behind
              <br />
              <span>our work.</span>
            </h2>

          </div>


          <div className="sa-company-values">

            {values.map((value) => (
              <div
                className="sa-company-value"
                key={value.number}
              >
                <span>{value.number}</span>

                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CORPORATE INFORMATION */}
      <section className="sa-company-section">
        <div className="sa-container">

          <div className="sa-company-corporate">

            <div>
              <span className="sa-section-label">
                CORPORATE INFORMATION
              </span>

              <h2>
                Shri Akshar Services
                <br />
                <span>Private Limited</span>
              </h2>
            </div>


            <div className="sa-company-corporate-details">

              <div>
                <span>Business Unit</span>
                <strong>
                  {companyInfo.displayName}
                </strong>
              </div>

              <div>
                <span>Legal Entity</span>
                <strong>
                  {companyInfo.name}
                </strong>
              </div>

              <div>
                <span>CIN</span>
                <strong>
                  {companyInfo.cin}
                </strong>
              </div>

              <div>
                <span>GSTIN</span>
                <strong>
                  {companyInfo.gstin}
                </strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {companyInfo.phone}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {companyInfo.email}
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="sa-inner-cta">
        <div className="sa-container">

          <div className="sa-inner-cta-content">

            <span className="sa-section-label">
              START YOUR PROJECT
            </span>

            <h2>
              Have a business idea
              <br />
              <span>worth building?</span>
            </h2>

            <p>
              Tell us what you want to build, improve or grow.
            </p>

            <Link
              to="/contact-us"
              className="sa-btn sa-btn-primary"
            >
              Talk to Our Team
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Company;
