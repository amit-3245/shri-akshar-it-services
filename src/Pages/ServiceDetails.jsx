import React from "react";
import { Link, useParams } from "react-router-dom";
import { serviceList } from "../Data";

const serviceContent = {
  "web-development": {
    eyebrow: "WEB DEVELOPMENT",
    intro:
      "Professional websites designed to establish a strong digital presence and deliver a smooth experience across devices.",
    capabilities: [
      "Business & corporate websites",
      "Responsive web applications",
      "Landing pages & marketing websites",
      "Custom website development",
      "Performance optimization",
      "Website maintenance & improvements",
    ],
    benefits: [
      "Responsive across desktop, tablet and mobile",
      "Clear and conversion-focused user experience",
      "Performance-oriented implementation",
      "Scalable structure for future improvements",
    ],
    technologies: ["Frontend", "Backend", "APIs", "CMS", "Cloud"],
  },

  "app-development": {
    eyebrow: "APP DEVELOPMENT",
    intro:
      "User-focused mobile application solutions designed around business requirements, usability and future scalability.",
    capabilities: [
      "Business mobile applications",
      "Customer-facing applications",
      "Internal business apps",
      "Cross-platform application development",
      "API & backend integration",
      "Application maintenance",
    ],
    benefits: [
      "Mobile-first user experience",
      "Business-focused application flows",
      "Integration-ready architecture",
      "Scalable foundation for future features",
    ],
    technologies: ["Mobile", "APIs", "Backend", "Database", "Cloud"],
  },

  "software-development": {
    eyebrow: "SOFTWARE DEVELOPMENT",
    intro:
      "Custom software solutions built to solve specific business problems and support evolving operational requirements.",
    capabilities: [
      "Custom business software",
      "Internal management systems",
      "Workflow-based applications",
      "Database-driven systems",
      "API integrations",
      "Software modernization",
    ],
    benefits: [
      "Built around your actual workflow",
      "Modular and maintainable structure",
      "Integration-ready architecture",
      "Designed for long-term growth",
    ],
    technologies: ["Software", "Database", "APIs", "Backend", "Cloud"],
  },

  "ai-machine-learning": {
    eyebrow: "AI & MACHINE LEARNING",
    intro:
      "AI-oriented solutions that help businesses automate repetitive work, process information and support better decisions.",
    capabilities: [
      "AI solution strategy",
      "Intelligent automation",
      "Data-driven AI workflows",
      "AI-powered business features",
      "Machine learning concepts",
      "AI integration into existing systems",
    ],
    benefits: [
      "Reduce repetitive operational work",
      "Extract useful insights from data",
      "Improve decision-support capabilities",
      "Create smarter digital experiences",
    ],
    technologies: ["AI", "Machine Learning", "Data", "APIs", "Automation"],
  },

  "data-analytics": {
    eyebrow: "DATA ANALYTICS",
    intro:
      "Structured data and analytics solutions that help businesses understand information and turn it into useful insights.",
    capabilities: [
      "Business data analysis",
      "Data visualization",
      "Reporting solutions",
      "KPI dashboards",
      "Data processing",
      "Analytics workflows",
    ],
    benefits: [
      "Better visibility into business performance",
      "Structured reporting",
      "Data-supported decision making",
      "Improved understanding of business trends",
    ],
    technologies: ["Data", "Analytics", "Dashboards", "APIs", "Reporting"],
  },

  "api-integrations": {
    eyebrow: "API INTEGRATIONS",
    intro:
      "Reliable system integrations that connect applications, platforms and business workflows.",
    capabilities: [
      "Third-party API integration",
      "Application-to-application integration",
      "Payment integrations",
      "Business system integrations",
      "Data synchronization",
      "Integration troubleshooting",
    ],
    benefits: [
      "Connected business systems",
      "Reduced manual data movement",
      "Consistent information flow",
      "Flexible integration architecture",
    ],
    technologies: ["REST APIs", "Webhooks", "Backend", "JSON", "Cloud"],
  },

  automation: {
    eyebrow: "AUTOMATION",
    intro:
      "Business automation solutions that reduce repetitive tasks and improve operational consistency.",
    capabilities: [
      "Workflow automation",
      "Business process automation",
      "Automated notifications",
      "Data processing workflows",
      "System-triggered actions",
      "Operational automation",
    ],
    benefits: [
      "Less repetitive manual work",
      "Improved operational consistency",
      "Faster workflow execution",
      "Better use of team resources",
    ],
    technologies: ["Automation", "APIs", "Workflows", "Integrations", "Data"],
  },

  "cloud-deployment": {
    eyebrow: "CLOUD DEPLOYMENT",
    intro:
      "Cloud deployment solutions designed for reliable application operation, scalability and future infrastructure requirements.",
    capabilities: [
      "Application deployment",
      "Cloud environment setup",
      "Deployment workflows",
      "Infrastructure planning",
      "Performance optimization",
      "Deployment support",
    ],
    benefits: [
      "Flexible infrastructure",
      "Scalable deployment foundation",
      "Reliable application availability",
      "Better deployment processes",
    ],
    technologies: ["Cloud", "Deployment", "Infrastructure", "CI/CD", "Monitoring"],
  },

  "ui-ux-design": {
    eyebrow: "UI/UX DESIGN",
    intro:
      "User-focused interface and experience design that makes digital products clearer, easier and more enjoyable to use.",
    capabilities: [
      "User interface design",
      "User experience planning",
      "Website design",
      "Application interface design",
      "Design systems",
      "Responsive design",
    ],
    benefits: [
      "Clearer digital experiences",
      "Improved usability",
      "Consistent visual language",
      "Better user interaction",
    ],
    technologies: ["UX", "UI", "Wireframes", "Prototypes", "Design Systems"],
  },

  "startup-it-digital-solutions": {
    eyebrow: "STARTUP IT & DIGITAL SOLUTIONS",
    intro:
      "Practical technology solutions that help startups establish their digital foundation and prepare for growth.",
    capabilities: [
      "Startup technology planning",
      "MVP development",
      "Website & application development",
      "Digital infrastructure",
      "Technology roadmap",
      "Digital business setup",
    ],
    benefits: [
      "Practical technology decisions",
      "Faster digital launch",
      "Scalable foundation",
      "Technology aligned with business goals",
    ],
    technologies: ["MVP", "Web", "Software", "Cloud", "Digital"],
  },

  "digital-marketing-creative-services": {
    eyebrow: "DIGITAL MARKETING & CREATIVE SERVICES",
    intro:
      "Integrated marketing and creative services designed to strengthen digital visibility and audience communication.",
    capabilities: [
      "Digital campaign planning",
      "Creative content",
      "Social media campaigns",
      "Marketing strategy",
      "Brand communication",
      "Digital promotion",
    ],
    benefits: [
      "Consistent digital communication",
      "Better online visibility",
      "Stronger audience engagement",
      "Integrated creative direction",
    ],
    technologies: ["Marketing", "Creative", "Social", "Content", "Analytics"],
  },

  "branding-brand-identity": {
    eyebrow: "BRANDING & BRAND IDENTITY",
    intro:
      "Professional brand identity solutions that help businesses communicate a consistent and recognizable identity.",
    capabilities: [
      "Brand identity design",
      "Logo direction",
      "Visual identity",
      "Brand guidelines",
      "Marketing creatives",
      "Brand communication",
    ],
    benefits: [
      "Stronger brand recognition",
      "Consistent visual identity",
      "Professional brand presentation",
      "Clearer communication",
    ],
    technologies: ["Branding", "Identity", "Visual Design", "Guidelines"],
  },

  "video-editing": {
    eyebrow: "VIDEO EDITING",
    intro:
      "Professional video editing and creative post-production for business communication and digital platforms.",
    capabilities: [
      "Business videos",
      "Social media videos",
      "Promotional videos",
      "Short-form content",
      "Video enhancement",
      "Creative editing",
    ],
    benefits: [
      "Professional visual communication",
      "Platform-ready content",
      "Consistent creative direction",
      "Stronger audience engagement",
    ],
    technologies: ["Video", "Editing", "Motion", "Social Content"],
  },

  "website-advertising-adsense": {
    eyebrow: "WEBSITE ADVERTISING & ADSENSE",
    intro:
      "Website advertising solutions focused on structured ad placement, visibility and digital monetization opportunities.",
    capabilities: [
      "Website advertising setup",
      "Ad placement planning",
      "AdSense-oriented implementation",
      "Website optimization",
      "Ad visibility improvements",
      "Performance monitoring",
    ],
    benefits: [
      "Structured advertising placement",
      "Better website monetization potential",
      "User-friendly ad implementation",
      "Performance-oriented setup",
    ],
    technologies: ["Web", "Advertising", "AdSense", "Analytics"],
  },

  "seo-services": {
    eyebrow: "SEO SERVICES",
    intro:
      "Search engine optimization strategies designed to improve website visibility and help businesses reach relevant audiences.",
    capabilities: [
      "SEO strategy",
      "On-page optimization",
      "Technical SEO",
      "Content-focused SEO",
      "Website performance optimization",
      "SEO reporting",
    ],
    benefits: [
      "Improved search visibility",
      "Better website discoverability",
      "Structured optimization strategy",
      "Long-term organic growth foundation",
    ],
    technologies: ["SEO", "Search", "Analytics", "Content", "Web"],
  },

  "social-media-management": {
    eyebrow: "SOCIAL MEDIA MANAGEMENT",
    intro:
      "Structured social media management that keeps brand communication consistent, relevant and organized.",
    capabilities: [
      "Social media planning",
      "Content scheduling",
      "Audience communication",
      "Platform management",
      "Campaign coordination",
      "Performance review",
    ],
    benefits: [
      "Consistent online presence",
      "Organized content publishing",
      "Better audience communication",
      "Stronger brand consistency",
    ],
    technologies: ["Social Media", "Content", "Analytics", "Campaigns"],
  },

  "social-media-creatives": {
    eyebrow: "SOCIAL MEDIA CREATIVES",
    intro:
      "Platform-focused creative content designed to communicate brand messages clearly and consistently.",
    capabilities: [
      "Social media posts",
      "Campaign creatives",
      "Promotional graphics",
      "Platform-specific designs",
      "Creative templates",
      "Visual content systems",
    ],
    benefits: [
      "Consistent visual communication",
      "Stronger brand recognition",
      "Platform-ready content",
      "Faster creative production",
    ],
    technologies: ["Graphic Design", "Creative", "Social", "Branding"],
  },

  "digital-marketing": {
    eyebrow: "DIGITAL MARKETING",
    intro:
      "Focused digital marketing strategies that connect businesses with relevant audiences across digital channels.",
    capabilities: [
      "Digital marketing strategy",
      "Campaign planning",
      "Content marketing",
      "Search-focused marketing",
      "Social marketing",
      "Performance analysis",
    ],
    benefits: [
      "Better digital reach",
      "Focused audience targeting",
      "Consistent marketing communication",
      "Measurable campaign direction",
    ],
    technologies: ["Marketing", "SEO", "Social", "Content", "Analytics"],
  },

  "graphic-design": {
    eyebrow: "GRAPHIC DESIGN",
    intro:
      "Professional graphic design solutions for business communication, marketing and digital platforms.",
    capabilities: [
      "Business graphics",
      "Marketing creatives",
      "Social media designs",
      "Promotional materials",
      "Presentation graphics",
      "Visual communication",
    ],
    benefits: [
      "Professional brand presentation",
      "Consistent visual communication",
      "Platform-ready creative assets",
      "Clearer marketing messages",
    ],
    technologies: ["Graphic Design", "Branding", "Creative", "Digital"],
  },

  "content-creation": {
    eyebrow: "CONTENT CREATION",
    intro:
      "Purposeful content creation designed to communicate business ideas, educate audiences and support digital growth.",
    capabilities: [
      "Website content",
      "Social media content",
      "Marketing copy",
      "Business content",
      "Campaign content",
      "Content planning",
    ],
    benefits: [
      "Consistent brand communication",
      "Better audience engagement",
      "Clearer business messaging",
      "Content aligned with marketing goals",
    ],
    technologies: ["Content", "Copywriting", "Marketing", "Social"],
  },
};

const defaultContent = {
  eyebrow: "DIGITAL SOLUTIONS",
  intro:
    "Professional digital solutions designed around your business requirements.",
  capabilities: [
    "Requirement analysis",
    "Strategic planning",
    "Professional implementation",
    "Quality assurance",
    "Performance optimization",
    "Ongoing support",
  ],
  benefits: [
    "Business-focused approach",
    "Modern technology and practices",
    "Scalable implementation",
    "Performance-oriented solutions",
  ],
  technologies: ["Strategy", "Technology", "Design", "Digital"],
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = serviceList.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="sa-service-not-found">
        <div className="sa-container">
          <span>404</span>
          <h1>Service not found</h1>
          <p>
            The service you're looking for could not be found.
          </p>

          <Link to="/services">
            Back to Services →
          </Link>
        </div>
      </main>
    );
  }

  const content =
    serviceContent[service.slug] || defaultContent;

  return (
    <main className="sa-service-details-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="sa-sd-hero">
        <div className="sa-container">
          <div className="sa-sd-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <strong>{service.title}</strong>
          </div>

          <div className="sa-sd-hero-grid">
            <div className="sa-sd-hero-content">
              <span className="sa-sd-label">
                {content.eyebrow}
              </span>

              <div className="sa-sd-meta">
                <span>{service.category}</span>
                <span>Professional Service</span>
              </div>

              <h1>{service.title}</h1>

              <p>{content.intro}</p>

              <div className="sa-sd-actions">
                <Link
                  to="/contact-us"
                  className="sa-sd-primary-btn"
                >
                  Discuss Your Requirement
                  <span>↗</span>
                </Link>

                <Link
                  to="/services"
                  className="sa-sd-secondary-btn"
                >
                  All Services
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="sa-sd-hero-image">
              <img
                src={service.imageSrc}
                alt={service.title}
              />

              <div className="sa-sd-image-label">
                <span>SHRI AKSHAR</span>
                <strong>IT SERVICES</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section className="sa-sd-overview">
        <div className="sa-container">
          <div className="sa-sd-overview-grid">

            <div>
              <span className="sa-sd-label">
                SERVICE OVERVIEW
              </span>

              <h2>
                A solution designed around
                <span> your objectives.</span>
              </h2>
            </div>

            <div>
              <p>
                {service.description}
              </p>

              <p>
                We focus on understanding the requirement,
                defining the right approach and delivering a
                solution that is practical, maintainable and
                ready to evolve with your business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="sa-sd-capabilities">
        <div className="sa-container">

          <div className="sa-sd-section-heading">
            <span className="sa-sd-label">
              WHAT WE PROVIDE
            </span>

            <h2>
              Our {service.title}
              <span> capabilities.</span>
            </h2>
          </div>

          <div className="sa-sd-capability-grid">
            {content.capabilities.map(
              (capability, index) => (
                <div
                  className="sa-sd-capability"
                  key={capability}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{capability}</h3>

                  <p>
                    Professional implementation aligned with
                    the requirements of your business.
                  </p>
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="sa-sd-benefits">
        <div className="sa-container">
          <div className="sa-sd-benefits-grid">

            <div>
              <span className="sa-sd-label">
                WHY IT MATTERS
              </span>

              <h2>
                Built for
                <span> meaningful outcomes.</span>
              </h2>

              <p>
                The goal isn't simply to deliver a service. It is
                to create a solution that provides practical
                value to the business.
              </p>
            </div>

            <div className="sa-sd-benefits-list">
              {content.benefits.map(
                (benefit, index) => (
                  <div
                    className="sa-sd-benefit"
                    key={benefit}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{benefit}</strong>
                  </div>
                )
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}
      <section className="sa-sd-technology">
        <div className="sa-container">

          <div className="sa-sd-technology-header">
            <div>
              <span className="sa-sd-label">
                SOLUTION FOCUS
              </span>

              <h2>
                Technology that supports
                <span> the solution.</span>
              </h2>
            </div>

            <p>
              We select implementation approaches based on the
              requirements of the project rather than forcing a
              fixed technology stack.
            </p>
          </div>

          <div className="sa-sd-tech-list">
            {content.technologies.map(
              (technology, index) => (
                <div key={technology}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{technology}</strong>
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="sa-sd-process">
        <div className="sa-container">

          <div className="sa-sd-section-heading">
            <span className="sa-sd-label">
              OUR PROCESS
            </span>

            <h2>
              From requirement
              <span> to solution.</span>
            </h2>
          </div>

          <div className="sa-sd-process-grid">

            <div>
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand your business, users and technical
                requirements.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Plan</h3>
              <p>
                Define scope, solution approach, technology and
                implementation strategy.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Execute the project with structured development,
                design and quality checks.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Launch &amp; Support</h3>
              <p>
                Deliver the solution and support future
                improvements as required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="sa-sd-cta">
        <div className="sa-container">
          <div className="sa-sd-cta-inner">

            <div>
              <span className="sa-sd-label">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Ready to discuss your
                <span> {service.title} requirement?</span>
              </h2>

              <p>
                Tell us what you need and let's explore the right
                solution for your business.
              </p>
            </div>

            <div className="sa-sd-cta-actions">
              <Link
                to="/contact-us"
                className="sa-sd-primary-btn"
              >
                Start a Project
                <span>↗</span>
              </Link>

              <Link
                to="/services"
                className="sa-sd-secondary-btn"
              >
                Explore More Services
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ServiceDetails;
