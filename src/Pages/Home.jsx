import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const stats = [
    {
      value: "20+",
      label: "Digital Capabilities",
    },
    {
      value: "360°",
      label: "Business Approach",
    },
    {
      value: "01",
      label: "Technology Partner",
    },
    {
      value: "∞",
      label: "Room to Scale",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Understand",
      text: "We start by understanding the business, its challenges and the outcome that matters.",
    },
    {
      number: "02",
      title: "Design",
      text: "We turn requirements into clear digital experiences, systems and execution plans.",
    },
    {
      number: "03",
      title: "Build",
      text: "We develop practical solutions with quality, reliability and future growth in mind.",
    },
    {
      number: "04",
      title: "Scale",
      text: "We help create a foundation that can evolve as the business grows.",
    },
  ];

  return (
    <main className="sa-home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="sa-home-hero">

        <div className="sa-home-hero-glow sa-home-hero-glow-one"></div>
        <div className="sa-home-hero-glow sa-home-hero-glow-two"></div>

        <div className="sa-container">

          <div className="sa-home-hero-grid">

            {/* LEFT */}
            <motion.div
              className="sa-home-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="sa-home-eyebrow">
                <span className="sa-home-eyebrow-dot"></span>
                SHRI AKSHAR IT SERVICES
              </div>

              <h1>
                Technology that
                <br />
                <span>moves business</span>
                <br />
                forward.
              </h1>

              <p>
                We help businesses turn ideas, challenges and opportunities
                into dependable digital solutions built for today and ready
                for tomorrow.
              </p>

              <div className="sa-home-hero-actions">

                <Link
                  to="/contact-us"
                  className="sa-btn sa-btn-primary sa-home-main-btn"
                >
                  Start a Project
                  <span>↗</span>
                </Link>

                <Link
                  to="/about"
                  className="sa-home-text-btn"
                >
                  Discover Shri Akshar
                  <span>→</span>
                </Link>

              </div>

              <div className="sa-home-trust-line">
                <span>Built around</span>
                <strong>clarity</strong>
                <span>•</span>
                <strong>technology</strong>
                <span>•</span>
                <strong>growth</strong>
              </div>

            </motion.div>


            {/* RIGHT VISUAL */}
            <motion.div
              className="sa-home-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >

              <div className="sa-home-orbit sa-home-orbit-one"></div>
              <div className="sa-home-orbit sa-home-orbit-two"></div>

              <div className="sa-home-visual-card">

                <div className="sa-home-visual-top">
                  <span>SA</span>

                  <div>
                    <small>DIGITAL</small>
                    <strong>TRANSFORMATION</strong>
                  </div>
                </div>

                <div className="sa-home-visual-center">
                  <div className="sa-home-core">
                    <span>SA</span>
                  </div>
                </div>

                <div className="sa-home-visual-bottom">

                  <div>
                    <span>01</span>
                    <small>IDEA</small>
                  </div>

                  <div>
                    <span>02</span>
                    <small>BUILD</small>
                  </div>

                  <div>
                    <span>03</span>
                    <small>GROW</small>
                  </div>

                </div>

              </div>

              <div className="sa-home-floating-card sa-home-floating-one">
                <span className="sa-home-floating-icon">✦</span>
                <div>
                  <small>APPROACH</small>
                  <strong>Business First</strong>
                </div>
              </div>

              <div className="sa-home-floating-card sa-home-floating-two">
                <span className="sa-home-floating-icon">↗</span>
                <div>
                  <small>FOCUS</small>
                  <strong>Built to Scale</strong>
                </div>
              </div>

            </motion.div>

          </div>

        </div>


        {/* SCROLL INDICATOR */}
        <div className="sa-home-scroll-indicator">
          <span></span>
          Scroll to explore
        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="sa-home-stats">

        <div className="sa-container">

          <div className="sa-home-stats-grid">

            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="sa-home-stat"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOME PHILOSOPHY
      ===================================================== */}

      <section className="sa-home-philosophy">

        <div className="sa-container">

          <div className="sa-home-philosophy-grid">

            <motion.div
              className="sa-home-philosophy-intro"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="sa-section-label">
                THE WAY WE THINK
              </span>

              <h2>
                Technology should
                <br />
                <span>solve problems.</span>
              </h2>

            </motion.div>


            <motion.div
              className="sa-home-philosophy-copy"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="sa-home-philosophy-lead">
                Good technology is not about adding complexity. It is about
                making the right things simpler, faster and more effective.
              </p>

              <p>
                We approach every engagement from the business objective
                first. The technology comes next — selected, designed and
                implemented around what the business actually needs.
              </p>

              <Link
                to="/about"
                className="sa-home-inline-link"
              >
                Learn about our approach
                <span>→</span>
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="sa-home-process">

        <div className="sa-container">

          <div className="sa-home-section-heading">

            <div>
              <span className="sa-section-label">
                HOW WE WORK
              </span>

              <h2>
                From first conversation
                <br />
                to <span>real progress.</span>
              </h2>
            </div>

            <p>
              A structured approach keeps every project focused, transparent
              and aligned with the result we are trying to achieve.
            </p>

          </div>


          <div className="sa-home-process-grid">

            {principles.map((item) => (
              <motion.div
                key={item.number}
                className="sa-home-process-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
              >

                <span className="sa-home-process-number">
                  {item.number}
                </span>

                <div className="sa-home-process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIFFERENCE
      ===================================================== */}

      <section className="sa-home-difference">

        <div className="sa-container">

          <div className="sa-home-difference-box">

            <div className="sa-home-difference-main">

              <span className="sa-section-label">
                WHY IT MATTERS
              </span>

              <h2>
                One clear direction.
                <br />
                <span>Better digital decisions.</span>
              </h2>

              <p>
                Businesses often work with different people for different
                digital requirements. Our approach is designed to bring the
                thinking, execution and long-term direction closer together.
              </p>

            </div>


            <div className="sa-home-difference-points">

              <div>
                <span>01</span>
                <strong>Clarity before execution</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Practical technology choices</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Designed for long-term growth</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Direct and transparent communication</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="sa-home-final-cta">

        <div className="sa-home-final-glow"></div>

        <div className="sa-container">

          <motion.div
            className="sa-home-final-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="sa-section-label">
              HAVE SOMETHING IN MIND?
            </span>

            <h2>
              Let's build what
              <br />
              <span>comes next.</span>
            </h2>

            <p>
              Tell us where you are today and where you want to go.
            </p>

            <Link
              to="/contact-us"
              className="sa-btn sa-btn-primary sa-home-final-btn"
            >
              Start a Conversation
              <span>↗</span>
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Home;
