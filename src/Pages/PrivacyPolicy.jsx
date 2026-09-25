import React from "react";
import { companyInfo } from "../Data";

const PrivacyPolicy = () => {
  return (
    <main className="sa-legal-page">
      <section className="sa-inner-hero">
        <div className="sa-container">
          <span className="sa-section-label">LEGAL</span>
          <h1>Privacy Policy</h1>
          <p>
            Your privacy matters to us. This policy explains how Shri Akshar IT
            Services collects, uses, and protects information shared through
            our website and services.
          </p>
        </div>
      </section>

      <section className="sa-legal-content">
        <div className="sa-container">
          <div className="sa-legal-card">
            <p className="sa-legal-updated">
              Last Updated: September 2026
            </p>

            <h2>1. Introduction</h2>
            <p>
              Shri Akshar IT Services, a unit of Shri Akshar Services Private
              Limited, respects your privacy and is committed to protecting
              information provided by visitors, clients, and prospective
              customers.
            </p>

            <h2>2. Information We May Collect</h2>
            <p>When you contact us or submit an enquiry, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Service requirements</li>
              <li>Project and budget information</li>
              <li>Any information voluntarily included in your message</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>Your information may be used to:</p>
            <ul>
              <li>Respond to enquiries and project requests</li>
              <li>Understand your business requirements</li>
              <li>Provide requested services or information</li>
              <li>Communicate regarding projects and services</li>
              <li>Improve our website and service experience</li>
            </ul>

            <h2>4. Information Protection</h2>
            <p>
              We take reasonable technical and organizational measures to
              protect information against unauthorized access, misuse,
              alteration, or disclosure.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              Our website may use third-party technologies, hosting providers,
              analytics services, communication platforms, or external links.
              Their respective privacy policies may apply to information
              processed through their platforms.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Our website may use cookies or similar technologies where
              required for functionality, analytics, security, or improving
              user experience.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              Information may be retained for as long as reasonably necessary
              to fulfil the purpose for which it was collected, meet business
              requirements, or comply with applicable legal obligations.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              You may contact us regarding questions, corrections, or requests
              concerning information you have voluntarily provided.
            </p>

            <h2>9. Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
