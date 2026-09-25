import React from "react";
import { Link, useParams } from "react-router-dom";
import { portfolioList } from "../Data";

const PortfolioDetails = () => {
  const { slug } = useParams();

  const project = portfolioList.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="sa-not-found">
        <div className="sa-container">
          <span>404</span>
          <h1>Project Not Found</h1>
          <p>
            The case study you're looking for could not be found.
          </p>
          <Link to="/portfolio" className="sa-btn sa-btn-primary">
            Back to Portfolio
            <span>←</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="sa-case-study">

      {/* HERO */}
      <section className="sa-case-study-hero">
        <div className="sa-container">

          <div className="sa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          <div className="sa-case-study-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

        </div>
      </section>


      {/* IMAGE */}
      <section className="sa-case-study-image-section">
        <div className="sa-container">

          <div className="sa-case-study-image">
            <img
              src={project.imageSrc}
              alt={project.title}
            />
          </div>

        </div>
      </section>


      {/* PROJECT INFO */}
      <section className="sa-case-study-content">
        <div className="sa-container">

          <div className="sa-case-study-layout">

            <aside className="sa-case-study-sidebar">

              <div className="sa-case-study-info">
                <span>PROJECT TYPE</span>
                <strong>{project.category}</strong>
              </div>

              <div className="sa-case-study-info">
                <span>YEAR</span>
                <strong>{project.year}</strong>
              </div>

              {project.services?.length > 0 && (
                <div className="sa-case-study-info">
                  <span>SERVICES</span>

                  <div className="sa-case-study-service-list">
                    {project.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              )}

            </aside>


            <div className="sa-case-study-main">

              {project.challenge && (
                <section>
                  <div className="sa-case-study-section-label">
                    01 / CHALLENGE
                  </div>

                  <h2>
                    Understanding the
                    <span> problem.</span>
                  </h2>

                  <p>{project.challenge}</p>
                </section>
              )}


              {project.solution && (
                <section>
                  <div className="sa-case-study-section-label">
                    02 / SOLUTION
                  </div>

                  <h2>
                    Building the right
                    <span> solution.</span>
                  </h2>

                  <p>{project.solution}</p>
                </section>
              )}


              {project.outcome && (
                <section>
                  <div className="sa-case-study-section-label">
                    03 / OUTCOME
                  </div>

                  <h2>
                    Designed for
                    <span> meaningful outcomes.</span>
                  </h2>

                  <p>{project.outcome}</p>
                </section>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* NEXT CTA */}
      <section className="sa-case-study-cta">
        <div className="sa-container">

          <div className="sa-case-study-cta-box">

            <div>
              <span>HAVE A SIMILAR REQUIREMENT?</span>

              <h2>
                Let's build your
                <span> next digital solution.</span>
              </h2>
            </div>

            <Link
              to="/contact-us"
              className="sa-btn sa-btn-primary"
            >
              Start a Project
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default PortfolioDetails;
