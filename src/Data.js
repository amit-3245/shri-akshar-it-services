import aiSolutions from "./Images/services/ai-solutions.png";
import apiIntegrations from "./Images/services/api-integrations.png";
import appDevelopment from "./Images/services/app-development.png";
import automation from "./Images/services/automation.png";
import cloudDeployment from "./Images/services/cloud-deployment.png";
import dataAnalytics from "./Images/services/data-analytics.png";
import softwareDevelopment from "./Images/services/software-development.png";
import uiUxDesign from "./Images/services/ui-ux-design.png";
import webDevelopment from "./Images/services/web-development.png";

import startupIT from "./Images/services/startup-it-digital-solutions.png";
import digitalMarketingCreative from "./Images/services/digital-marketing-creative-services.png";
import branding from "./Images/services/branding-brand-identity.png";
import videoEditing from "./Images/services/video-editing.png";
import websiteAdvertising from "./Images/services/website-advertising-adsense.png";
import seo from "./Images/services/seo-services.png";
import socialMediaManagement from "./Images/services/social-media-management.png";
import socialMediaCreatives from "./Images/services/social-media-creatives.png";
import digitalMarketing from "./Images/services/digital-marketing.png";
import graphicDesign from "./Images/services/graphic-design.png";
import contentCreation from "./Images/services/content-creation.png";


/* =========================================================
   COMPANY INFORMATION
========================================================= */
export const companyInfo = {
  name: "Shri Akshar Services Private Limited",
  displayName: "Shri Akshar IT Services",
  unit: "Unit of Shri Akshar Services Private Limited",

  phone: "8279910156",
  phoneSecondary: "9817028180",

  email: "shriaksharservices@gmail.com",
  emailSecondary: "as9898483@gmail.com",

  address:
    "442, Ganesh Nagar, Badaun Road, Bareilly, Uttar Pradesh - 243001",

  gstin: "09ABLCS1675G1ZY",
  cin: "U46497UP2023PTC184936",
};



/* =========================================================
   USEFUL LINKS
========================================================= */

export const usefulLinks = [
  {
    label: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    url: "/terms-and-conditions",
  },
  {
    label: "Refund Policy",
    url: "/refund-policy",
  },
  {
    label: "Disclaimer",
    url: "/disclaimer",
  },
];


/* =========================================================
   SOCIAL LINKS
========================================================= */

export const socialLinks = {
  linkedin: "#",
  instagram: "#",
  facebook: "#",
  youtube: "#",
};


/* =========================================================
   SERVICES
========================================================= */

export const serviceList = [

  /* ================= TECHNOLOGY ================= */

  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    category: "Technology",
    shortTitle: "Web Development",
    imageSrc: webDevelopment,

    description:
      "Modern, responsive and scalable websites designed to create strong digital experiences for businesses and organizations.",

    shortDescription:
      "Modern websites built for performance, usability and growth.",

    capabilities: [
      "Business Websites",
      "Corporate Websites",
      "Web Applications",
      "Responsive Development",
      "CMS Development",
      "Performance Optimization",
    ],
  },

  {
    id: 2,
    slug: "app-development",
    title: "App Development",
    category: "Technology",
    shortTitle: "App Development",
    imageSrc: appDevelopment,

    description:
      "User-focused mobile applications designed to help businesses deliver useful digital experiences across devices.",

    shortDescription:
      "Mobile applications designed around users and business goals.",

    capabilities: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "Business Applications",
      "API Integration",
      "App Maintenance",
    ],
  },

  {
    id: 3,
    slug: "software-development",
    title: "Software Development",
    category: "Technology",
    shortTitle: "Software Development",
    imageSrc: softwareDevelopment,

    description:
      "Custom software systems engineered around specific business workflows, operational requirements and future scalability.",

    shortDescription:
      "Custom software systems built around your business processes.",

    capabilities: [
      "Custom Business Software",
      "Management Systems",
      "Enterprise Applications",
      "Workflow Systems",
      "Database Applications",
      "Software Modernization",
    ],
  },

  {
    id: 4,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "Technology",
    shortTitle: "AI & Machine Learning",
    imageSrc: aiSolutions,

    description:
      "Practical AI and machine learning solutions that help businesses automate work, analyze information and improve decision-making.",

    shortDescription:
      "Practical AI solutions for automation, intelligence and business efficiency.",

    capabilities: [
      "AI Applications",
      "Machine Learning Solutions",
      "AI Automation",
      "Intelligent Assistants",
      "Data Intelligence",
      "AI Integration",
    ],
  },

  {
    id: 5,
    slug: "data-analytics",
    title: "Data Analytics",
    category: "Technology",
    shortTitle: "Data Analytics",
    imageSrc: dataAnalytics,

    description:
      "Data-driven systems that transform business information into useful insights, reports and actionable intelligence.",

    shortDescription:
      "Turn business data into useful insights and decisions.",

    capabilities: [
      "Business Analytics",
      "Data Processing",
      "Dashboards",
      "Reports",
      "Data Visualization",
      "Performance Analytics",
    ],
  },

  {
    id: 6,
    slug: "api-integrations",
    title: "API Integrations",
    category: "Technology",
    shortTitle: "API Integrations",
    imageSrc: apiIntegrations,

    description:
      "Secure integrations that connect applications, platforms and third-party services into a connected digital ecosystem.",

    shortDescription:
      "Connect your systems, applications and third-party platforms.",

    capabilities: [
      "REST APIs",
      "Third-Party Integrations",
      "Payment Integrations",
      "Communication APIs",
      "Data Synchronization",
      "System Integration",
    ],
  },

  {
    id: 7,
    slug: "automation",
    title: "Automation",
    category: "Technology",
    shortTitle: "Automation",
    imageSrc: automation,

    description:
      "Business process automation designed to reduce repetitive work, improve efficiency and create consistent workflows.",

    shortDescription:
      "Automate repetitive processes and improve operational efficiency.",

    capabilities: [
      "Business Process Automation",
      "Workflow Automation",
      "Notifications",
      "Task Automation",
      "Data Automation",
      "Integration Automation",
    ],
  },

  {
    id: 8,
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    category: "Technology",
    shortTitle: "Cloud Deployment",
    imageSrc: cloudDeployment,

    description:
      "Reliable cloud deployment and infrastructure solutions for modern applications, websites and software systems.",

    shortDescription:
      "Deploy and operate modern applications on reliable cloud infrastructure.",

    capabilities: [
      "Cloud Deployment",
      "Application Hosting",
      "Server Configuration",
      "Database Deployment",
      "Security Configuration",
      "Deployment Management",
    ],
  },

  {
    id: 9,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Technology",
    shortTitle: "UI/UX Design",
    imageSrc: uiUxDesign,

    description:
      "Clean and intuitive interfaces designed around users, usability, accessibility and business objectives.",

    shortDescription:
      "User-centered interfaces that make digital products easier to use.",

    capabilities: [
      "UI Design",
      "UX Research",
      "Wireframes",
      "Prototyping",
      "Design Systems",
      "Product Design",
    ],
  },


  /* ================= DIGITAL GROWTH ================= */

  {
    id: 10,
    slug: "startup-it-digital-solutions",
    title: "Startup IT & Digital Solutions",
    category: "Digital Growth",
    shortTitle: "Startup IT Solutions",
    imageSrc: startupIT,

    description:
      "Technology and digital solutions that help startups establish their digital foundation and move from idea to execution.",

    shortDescription:
      "Technology support for startups from idea to digital launch.",

    capabilities: [
      "MVP Development",
      "Startup Websites",
      "Product Development",
      "Technology Planning",
      "Digital Infrastructure",
      "Growth Support",
    ],
  },

  {
    id: 11,
    slug: "digital-marketing-creative-services",
    title: "Digital Marketing & Creative Services",
    category: "Digital Growth",
    shortTitle: "Digital Marketing",
    imageSrc: digitalMarketingCreative,

    description:
      "Integrated digital marketing and creative services designed to strengthen visibility, communication and online growth.",

    shortDescription:
      "Integrated marketing and creative solutions for digital growth.",

    capabilities: [
      "Digital Campaigns",
      "Creative Strategy",
      "Online Promotion",
      "Campaign Design",
      "Content Marketing",
      "Brand Communication",
    ],
  },

  {
    id: 12,
    slug: "branding-brand-identity",
    title: "Branding & Brand Identity",
    category: "Digital Growth",
    shortTitle: "Branding",
    imageSrc: branding,

    description:
      "Professional brand identity systems that create a consistent, recognizable and credible presence across digital channels.",

    shortDescription:
      "Build a consistent and memorable brand identity.",

    capabilities: [
      "Logo Design",
      "Brand Identity",
      "Visual Language",
      "Brand Guidelines",
      "Marketing Collateral",
      "Digital Branding",
    ],
  },

  {
    id: 13,
    slug: "video-editing",
    title: "Video Editing",
    category: "Digital Growth",
    shortTitle: "Video Editing",
    imageSrc: videoEditing,

    description:
      "Professional video editing for business communication, social media, marketing campaigns and digital content.",

    shortDescription:
      "Professional video content for marketing and digital communication.",

    capabilities: [
      "Short-Form Videos",
      "Social Media Videos",
      "Promotional Videos",
      "Business Videos",
      "Reels",
      "Video Optimization",
    ],
  },

  {
    id: 14,
    slug: "website-advertising-adsense",
    title: "Website Advertising & AdSense",
    category: "Digital Growth",
    shortTitle: "Website Advertising",
    imageSrc: websiteAdvertising,

    description:
      "Website advertising solutions focused on creating structured, user-friendly and monetization-ready digital properties.",

    shortDescription:
      "Build and optimize websites for responsible digital monetization.",

    capabilities: [
      "Ad Placement Strategy",
      "Website Monetization",
      "AdSense Preparation",
      "Performance Optimization",
      "Content Structure",
      "Analytics Setup",
    ],
  },

  {
    id: 15,
    slug: "seo-services",
    title: "SEO Services",
    category: "Digital Growth",
    shortTitle: "SEO Services",
    imageSrc: seo,

    description:
      "Search engine optimization focused on improving website visibility, technical health and organic discoverability.",

    shortDescription:
      "Improve search visibility and organic website discovery.",

    capabilities: [
      "Technical SEO",
      "On-Page SEO",
      "Keyword Strategy",
      "Content Optimization",
      "Local SEO",
      "SEO Audits",
    ],
  },

  {
    id: 16,
    slug: "social-media-management",
    title: "Social Media Management",
    category: "Digital Growth",
    shortTitle: "Social Media Management",
    imageSrc: socialMediaManagement,

    description:
      "Structured social media management that helps brands maintain consistent communication and meaningful audience engagement.",

    shortDescription:
      "Consistent social presence built around your brand and audience.",

    capabilities: [
      "Social Media Planning",
      "Content Scheduling",
      "Community Management",
      "Platform Management",
      "Content Calendars",
      "Performance Tracking",
    ],
  },

  {
    id: 17,
    slug: "social-media-creatives",
    title: "Social Media Creatives",
    category: "Digital Growth",
    shortTitle: "Social Media Creatives",
    imageSrc: socialMediaCreatives,

    description:
      "Creative visual content designed to communicate brand messages clearly across social media platforms.",

    shortDescription:
      "Platform-ready creative content for social media.",

    capabilities: [
      "Post Designs",
      "Carousel Designs",
      "Campaign Creatives",
      "Story Designs",
      "Promotional Creatives",
      "Brand Templates",
    ],
  },

  {
    id: 18,
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital Growth",
    shortTitle: "Digital Marketing",
    imageSrc: digitalMarketing,

    description:
      "Digital marketing strategies that combine technology, content, creative communication and measurable growth initiatives.",

    shortDescription:
      "Digital strategies designed to improve visibility and growth.",

    capabilities: [
      "Marketing Strategy",
      "Campaign Planning",
      "Online Promotion",
      "Lead Generation",
      "Content Strategy",
      "Performance Tracking",
    ],
  },

  {
    id: 19,
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Digital Growth",
    shortTitle: "Graphic Design",
    imageSrc: graphicDesign,

    description:
      "Professional graphic design for brands, marketing materials, digital campaigns and business communication.",

    shortDescription:
      "Professional visuals for brands, campaigns and communication.",

    capabilities: [
      "Marketing Graphics",
      "Business Materials",
      "Digital Designs",
      "Presentation Design",
      "Promotional Materials",
      "Visual Communication",
    ],
  },

  {
    id: 20,
    slug: "content-creation",
    title: "Content Creation",
    category: "Digital Growth",
    shortTitle: "Content Creation",
    imageSrc: contentCreation,

    description:
      "Useful and engaging digital content created to communicate ideas, educate audiences and support business growth.",

    shortDescription:
      "Purpose-driven content for brands and digital platforms.",

    capabilities: [
      "Website Content",
      "Social Media Content",
      "Marketing Copy",
      "Educational Content",
      "Campaign Content",
      "Content Strategy",
    ],
  },
];


/* =========================================================
   PORTFOLIO / CASE STUDIES
========================================================= */

export const portfolioList = [

  {
    id: 1,
    slug: "business-website",
    title: "Business Website",
    category: "Web Development",
    year: "2026",

    description:
      "A modern business website focused on clear communication, professional presentation and a strong digital presence.",

    imageSrc: webDevelopment,

    services: [
      "Web Development",
      "UI/UX Design",
      "Responsive Design",
      "Performance Optimization",
    ],

    challenge:
      "The business required a professional online presence that could communicate its services clearly while providing a consistent experience across desktop and mobile devices.",

    solution:
      "We structured the website around clear information architecture, responsive interfaces, focused calls-to-action and a scalable content structure.",

    outcome:
      "A professional digital foundation designed to improve credibility, communicate services and support future online growth.",
  },

  {
    id: 2,
    slug: "startup-digital-platform",
    title: "Startup Digital Platform",
    category: "Startup Solutions",
    year: "2026",

    description:
      "A scalable digital platform concept designed to provide a startup with a strong technology foundation for launch and future growth.",

    imageSrc: startupIT,

    services: [
      "Startup IT Solutions",
      "Software Development",
      "UI/UX Design",
      "Cloud Deployment",
    ],

    challenge:
      "The startup needed to convert its business concept into a structured digital product without creating unnecessary technical complexity.",

    solution:
      "We focused on a scalable product foundation, clear user flows and modular architecture that can evolve as the business grows.",

    outcome:
      "A practical technology foundation prepared for MVP execution, future features and business expansion.",
  },

  {
    id: 3,
    slug: "ai-business-solution",
    title: "AI Business Solution",
    category: "AI & Technology",
    year: "2026",

    description:
      "An AI-focused solution concept designed to improve business efficiency through intelligent workflows and data-driven operations.",

    imageSrc: aiSolutions,

    services: [
      "AI & Machine Learning",
      "Automation",
      "Data Analytics",
      "API Integrations",
    ],

    challenge:
      "The business needed a practical way to reduce repetitive work and make better use of its available information.",

    solution:
      "The solution combines intelligent processing, automation and connected systems to create a more efficient operational workflow.",

    outcome:
      "A technology approach focused on reducing manual effort, improving information flow and creating opportunities for intelligent automation.",
  },

  {
    id: 4,
    slug: "digital-brand-growth",
    title: "Digital Brand Growth",
    category: "Digital Growth",
    year: "2026",

    description:
      "A digital growth initiative combining branding, creative communication and online visibility to establish a stronger brand presence.",

    imageSrc: branding,

    services: [
      "Branding",
      "Digital Marketing",
      "SEO",
      "Graphic Design",
    ],

    challenge:
      "The brand needed a more consistent visual identity and a structured digital growth approach.",

    solution:
      "We aligned brand communication, visual design and digital marketing activities around a consistent identity.",

    outcome:
      "A stronger and more structured digital presence designed to support long-term brand recognition and growth.",
  },

  {
    id: 5,
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    year: "2026",

    description:
      "A structured social media campaign combining creative content, visual communication and digital marketing execution.",

    imageSrc: socialMediaCreatives,

    services: [
      "Social Media Creatives",
      "Social Media Management",
      "Digital Marketing",
      "Content Creation",
    ],

    challenge:
      "The campaign required consistent communication across multiple digital touchpoints while maintaining brand identity.",

    solution:
      "We created a structured content approach supported by platform-ready creatives and consistent messaging.",

    outcome:
      "A more organized digital communication system designed for consistent publishing and audience engagement.",
  },

  {
    id: 6,
    slug: "cloud-software-platform",
    title: "Cloud Software Platform",
    category: "Software & Cloud",
    year: "2026",

    description:
      "A software platform concept designed around scalable application architecture, cloud deployment and connected digital services.",

    imageSrc: cloudDeployment,

    services: [
      "Software Development",
      "Cloud Deployment",
      "API Integrations",
      "Automation",
    ],

    challenge:
      "The solution required a technology foundation capable of supporting growing users, connected systems and future functionality.",

    solution:
      "We approached the platform with modular application design, connected services and cloud-ready deployment in mind.",

    outcome:
      "A scalable technology foundation designed to support future product expansion and operational growth.",
  },
];


/* =========================================================
   BLOG
========================================================= */

export const blogList = [

  {
    id: 1,
    slug: "why-modern-businesses-need-a-digital-presence",
    title: "Why Modern Businesses Need a Digital Presence",
    category: "Business & Technology",
    date: "2026",
    readTime: "5 min read",
    featured: true,

    imageSrc: webDevelopment,

    excerpt:
      "A strong digital presence is no longer optional for modern businesses. It creates credibility, improves accessibility and opens new opportunities for growth.",

    content: [
      {
        heading: "Digital presence has become a business foundation",
        text:
          "Customers increasingly discover businesses, evaluate their credibility and explore their offerings through digital channels. A professional online presence helps a business communicate its value before the first direct conversation.",
      },
      {
        heading: "A website is more than an online brochure",
        text:
          "A well-designed website can act as a central business platform for communication, lead generation, customer education, service discovery and future digital integrations.",
      },
      {
        heading: "Consistency builds trust",
        text:
          "A consistent brand identity across websites, social media and other digital channels makes a business easier to recognize and helps create a more professional experience.",
      },
      {
        heading: "Technology creates room for growth",
        text:
          "Once the digital foundation is established, businesses can gradually introduce automation, analytics, AI, integrations and other technology capabilities.",
      },
    ],
  },

  {
    id: 2,
    slug: "how-ai-can-improve-business-operations",
    title: "How AI Can Improve Business Operations",
    category: "AI & Technology",
    date: "2026",
    readTime: "6 min read",
    featured: false,

    imageSrc: aiSolutions,

    excerpt:
      "AI can help businesses automate repetitive activities, process information faster and create more intelligent operational workflows.",

    content: [
      {
        heading: "AI should solve a real business problem",
        text:
          "The most useful AI implementations begin with a clear operational requirement rather than technology for its own sake.",
      },
      {
        heading: "Automation and intelligence can work together",
        text:
          "AI can support automated workflows by processing information, identifying patterns and assisting with repetitive decision-support tasks.",
      },
      {
        heading: "Start small and scale",
        text:
          "Businesses can begin with focused use cases and expand the technology as value becomes measurable.",
      },
    ],
  },

  {
    id: 3,
    slug: "website-performance-and-user-experience",
    title: "Website Performance and User Experience",
    category: "Web Development",
    date: "2026",
    readTime: "5 min read",
    featured: false,

    imageSrc: uiUxDesign,

    excerpt:
      "Good design and strong performance work together to create websites that are easier to use, faster to navigate and more effective.",

    content: [
      {
        heading: "Performance affects the complete experience",
        text:
          "Users expect websites to load quickly and respond smoothly across different devices and network conditions.",
      },
      {
        heading: "Design should support the user journey",
        text:
          "Clear navigation, readable content, focused calls-to-action and responsive layouts help users find information without unnecessary friction.",
      },
      {
        heading: "Optimization is ongoing",
        text:
          "Performance should be considered throughout the development lifecycle rather than treated as a final-stage task.",
      },
    ],
  },

  {
    id: 4,
    slug: "automation-for-growing-businesses",
    title: "Automation for Growing Businesses",
    category: "Automation",
    date: "2026",
    readTime: "5 min read",
    featured: false,

    imageSrc: automation,

    excerpt:
      "As businesses grow, repetitive manual processes can become expensive. Automation can help create more consistent and efficient workflows.",

    content: [
      {
        heading: "Growth creates operational complexity",
        text:
          "Processes that work for a small operation can become difficult to manage as customers, employees and transactions increase.",
      },
      {
        heading: "Identify repetitive work",
        text:
          "A useful first step is identifying recurring activities involving notifications, data entry, reporting or system-to-system communication.",
      },
      {
        heading: "Build automation around the workflow",
        text:
          "Effective automation improves the existing process instead of simply adding another layer of technology.",
      },
    ],
  },

  {
    id: 5,
    slug: "building-a-scalable-software-foundation",
    title: "Building a Scalable Software Foundation",
    category: "Software Development",
    date: "2026",
    readTime: "7 min read",
    featured: false,

    imageSrc: softwareDevelopment,

    excerpt:
      "Scalable software begins with thoughtful architecture, clean boundaries and a technology foundation that can evolve with the business.",

    content: [
      {
        heading: "Scalability starts with architecture",
        text:
          "A system should be structured so that future functionality can be introduced without repeatedly rebuilding its core.",
      },
      {
        heading: "Maintainability matters",
        text:
          "Readable code, modular components, proper documentation and clear responsibilities make software easier to operate and improve.",
      },
      {
        heading: "Plan for the future",
        text:
          "Technology choices should consider expected users, integrations, security requirements and future business capabilities.",
      },
    ],
  },

  {
    id: 6,
    slug: "digital-marketing-strategy-for-business-growth",
    title: "Digital Marketing Strategy for Business Growth",
    category: "Digital Marketing",
    date: "2026",
    readTime: "6 min read",
    featured: false,

    imageSrc: digitalMarketing,

    excerpt:
      "Effective digital marketing combines the right audience, clear communication, consistent content and measurable execution.",

    content: [
      {
        heading: "Start with the audience",
        text:
          "A marketing strategy becomes more useful when it is built around the needs, behavior and expectations of a clearly defined audience.",
      },
      {
        heading: "Consistency matters",
        text:
          "Regular communication across relevant channels helps businesses maintain visibility and reinforce their positioning.",
      },
      {
        heading: "Measure and improve",
        text:
          "Performance data can help identify what is working and where marketing activities should be adjusted.",
      },
    ],
  },

  {
    id: 7,
    slug: "why-ui-ux-matters-for-digital-products",
    title: "Why UI/UX Matters for Digital Products",
    category: "UI/UX Design",
    date: "2026",
    readTime: "5 min read",
    featured: false,

    imageSrc: uiUxDesign,

    excerpt:
      "Good UI/UX design helps users understand products faster, complete tasks more easily and develop confidence in digital experiences.",

    content: [
      {
        heading: "UX begins with understanding users",
        text:
          "Good experiences start by understanding what users need to accomplish and where they may face friction.",
      },
      {
        heading: "Visual design supports usability",
        text:
          "Typography, spacing, hierarchy, interaction patterns and visual consistency all contribute to an easier digital experience.",
      },
      {
        heading: "Design and technology should work together",
        text:
          "The best digital products balance user needs with technical feasibility and business objectives.",
      },
    ],
  },

  {
    id: 8,
    slug: "cloud-deployment-for-modern-applications",
    title: "Cloud Deployment for Modern Applications",
    category: "Cloud Technology",
    date: "2026",
    readTime: "6 min read",
    featured: false,

    imageSrc: cloudDeployment,

    excerpt:
      "Cloud deployment provides modern applications with flexible infrastructure and a foundation for reliable growth.",

    content: [
      {
        heading: "Cloud changes how applications are operated",
        text:
          "Modern cloud platforms provide businesses with flexible infrastructure for hosting applications, databases and connected services.",
      },
      {
        heading: "Deployment should be planned",
        text:
          "Security, configuration, backups, monitoring and application requirements should be considered before production deployment.",
      },
      {
        heading: "Cloud is part of the broader architecture",
        text:
          "The best deployment strategy connects infrastructure decisions with application architecture and long-term business requirements.",
      },
    ],
  },
];
