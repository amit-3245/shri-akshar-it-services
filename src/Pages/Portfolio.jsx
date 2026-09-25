import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioList } from "../Data";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = portfolioList.map((project) => project.category);
    return ["All", ...new Set(unique)];
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioList
      : portfolioList.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="sa-portfolio-page">

      {/* HERO */}
      <section className="sa-inner-hero">
        <div className="sa-container">

          <div className="sa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </div>

          <div className="sa-inner-hero-content">
            <div className="sa-section-label">
              <span>WORK</span>
              OUR PORTFOLIO
            </div>

            <h1>
              Digital work built for
              <span> real-world outcomes.</span>
            </h1>

            <p>
              Explore selected digital projects, technology solutions and
              growth initiatives delivered by Shri Akshar IT Services.
            </p>
          </div>

        </div>
      </section>


      {/* FILTER */}
      <section className="sa-portfolio-work">
        <div className="sa-container">

          <div className="sa-portfolio-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>


          {/* PROJECT GRID */}
          <motion.div
            layout
            className="sa-portfolio-grid"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                className={`sa-portfolio-card ${
                  index === 0 ? "sa-portfolio-card-featured" : ""
                }`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >

                <Link
                  to={`/portfolio/${project.slug}`}
                  className="sa-portfolio-image"
                >
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    loading="lazy"
                  />

                  <span className="sa-portfolio-image-arrow">
                    ↗
                  </span>
                </Link>


                <div className="sa-portfolio-card-body">

                  <div className="sa-portfolio-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>


                  {project.services?.length > 0 && (
                    <div className="sa-portfolio-tags">
                      {project.services.slice(0, 4).map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                  )}


                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="sa-portfolio-link"
                  >
                    View Case Study
                    <span>↗</span>
                  </Link>

                </div>

              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>


      {/* CAPABILITY STRIP */}
      <section className="sa-portfolio-capabilities">
        <div className="sa-container">

          <div className="sa-portfolio-capability-grid">

            <div>
              <span>01</span>
              <strong>Technology</strong>
              <p>Web, app, software, AI and cloud solutions.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Digital Growth</strong>
              <p>Marketing, SEO, branding and social media.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Design</strong>
              <p>Interfaces and visual experiences built around users.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Long-Term Support</strong>
              <p>Solutions designed to evolve with your business.</p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="sa-inner-cta">
        <div className="sa-container">

          <div className="sa-inner-cta-box">

            <div>
              <div className="sa-section-label">
                <span>START</span>
                YOUR PROJECT
              </div>

              <h2>
                Your next project could
                <span> be our next case study.</span>
              </h2>

              <p>
                Have an idea, business requirement or digital challenge?
                Let's discuss how we can turn it into a practical solution.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="sa-btn sa-btn-primary"
            >
              Discuss Your Project
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Portfolio;
