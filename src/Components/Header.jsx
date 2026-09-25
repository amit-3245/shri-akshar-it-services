import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { companyInfo, serviceList } from "../Data";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      label: "Company",
      path: "/company",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact-us",
    },
  ];

  const technologyServices = serviceList.filter(
    (service) => service.category === "Technology"
  );

  const digitalGrowthServices = serviceList.filter(
    (service) => service.category === "Digital Growth"
  );

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`sa-header ${
          scrolled ? "sa-header-scrolled" : ""
        }`}
      >
        <div className="sa-container sa-header-inner">

          {/* LOGO */}
          <Link to="/" className="sa-logo" aria-label="Shri Akshar IT Services">
            <div className="sa-logo-mark">
              <span>SA</span>
            </div>

            <div className="sa-logo-text">
              <strong>SHRI AKSHAR</strong>
              <span>IT SERVICES</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="sa-header-nav">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `sa-header-link ${
                    isActive ? "sa-header-link-active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

          {/* DESKTOP CTA */}
          <Link
  to="/contact-us"
  className="sa-header-project-btn"
  aria-label="Start a Project"
>
  <span>Start a Project</span>
  <span className="sa-header-project-arrow">↗</span>
</Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`sa-mobile-menu-btn ${
              sidebarOpen ? "sa-mobile-menu-active" : ""
            }`}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>


      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="sa-sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>


      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="sa-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >

            {/* SIDEBAR HEADER */}
            <div className="sa-sidebar-header">

              <Link
                to="/"
                className="sa-logo"
                onClick={closeSidebar}
              >
                <div className="sa-logo-mark">
                  <span>SA</span>
                </div>

                <div className="sa-logo-text">
                  <strong>SHRI AKSHAR</strong>
                  <span>IT SERVICES</span>
                </div>
              </Link>

              <button
                type="button"
                className="sa-sidebar-close"
                onClick={closeSidebar}
                aria-label="Close navigation menu"
              >
                ×
              </button>

            </div>


            {/* SIDEBAR NAV */}
            <div className="sa-sidebar-content">

              <nav className="sa-sidebar-nav">

                {/* HOME */}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `sa-sidebar-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>Home</span>
                  <span>→</span>
                </NavLink>


                {/* ABOUT */}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `sa-sidebar-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>About Us</span>
                  <span>→</span>
                </NavLink>


                {/* SERVICES */}
                <div className="sa-sidebar-services">

                  <button
                    type="button"
                    className={`sa-sidebar-link sa-sidebar-services-toggle ${
                      location.pathname.startsWith("/services")
                        ? "sa-sidebar-link-active"
                        : ""
                    }`}
                    onClick={() =>
                      setServicesOpen((prev) => !prev)
                    }
                  >
                    <span>Our Services</span>

                    <span
                      className={`sa-sidebar-arrow ${
                        servicesOpen ? "sa-sidebar-arrow-open" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>


                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="sa-sidebar-service-list"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >

                        {/* TECHNOLOGY */}
                        <div className="sa-sidebar-service-category">
                          <span>
                            Technology Solutions
                          </span>
                        </div>

                        {technologyServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="sa-sidebar-service-link"
                            onClick={closeSidebar}
                          >
                            {service.title}
                          </Link>
                        ))}


                        {/* DIGITAL GROWTH */}
                        <div className="sa-sidebar-service-category">
                          <span>
                            Digital Growth
                          </span>
                        </div>

                        {digitalGrowthServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="sa-sidebar-service-link"
                            onClick={closeSidebar}
                          >
                            {service.title}
                          </Link>
                        ))}

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>


                {/* PORTFOLIO */}
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `sa-sidebar-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>Portfolio</span>
                  <span>→</span>
                </NavLink>


                {/* COMPANY */}
                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    `sa-sidebar-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>Company</span>
                  <span>→</span>
                </NavLink>


                {/* BLOG */}
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `sa-sidebar-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>Blog</span>
                  <span>→</span>
                </NavLink>


                {/* CONTACT */}
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `sa-sidebar-link sa-sidebar-contact-link ${
                      isActive ? "sa-sidebar-link-active" : ""
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span>Contact Us</span>
                  <span>→</span>
                </NavLink>

              </nav>


              {/* SIDEBAR CTA */}
              <div className="sa-sidebar-cta">

                <span className="sa-section-label">
                  HAVE A PROJECT?
                </span>

                <h3>
                  Let's build something
                  <br />
                  valuable together.
                </h3>

                <Link
  to="/contact-us"
  className="sa-header-project-btn"
  aria-label="Start a Project"
>
  <span>Start a Project</span>
  <span className="sa-header-project-arrow">↗</span>
</Link>

              </div>


              {/* SIDEBAR CONTACT */}
              <div className="sa-sidebar-contact">

                <a href={`tel:+91${companyInfo.phone}`}>
                  <span>Call</span>
                  <strong>
                    +91 {companyInfo.phone}
                  </strong>
                </a>

                <a href={`mailto:${companyInfo.email}`}>
                  <span>Email</span>
                  <strong>
                    {companyInfo.email}
                  </strong>
                </a>

              </div>

            </div>

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
