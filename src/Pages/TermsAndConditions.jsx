import React from "react";
import { companyInfo } from "../Data";

const TermsAndConditions = () => {
  return (
    <main className="sa-legal-page">
      <section className="sa-inner-hero">
        <div className="sa-container">
          <span className="sa-section-label">LEGAL</span>
          <h1>Terms & Conditions</h1>
          <p>
            These terms govern the use of the Shri Akshar IT Services website
            and our engagement with clients.
          </p>
        </div>
      </section>

      <section className="sa-legal-content">
        <div className="sa-container">
          <div className="sa-legal-card">
            <p className="sa-legal-updated">
              Last Updated: September 2026
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging with Shri Akshar IT
              Services, you agree to these terms and conditions.
            </p>

            <h2>2. Our Services</h2>
            <p>
              Shri Akshar IT Services provides technology, software,
              digital-growth, creative, and related professional services.
              Specific deliverables, timelines, pricing, and responsibilities
              may be defined separately in project proposals, quotations,
              statements of work, or agreements.
            </p>

            <h2>3. Project Requirements</h2>
            <p>
              Clients are responsible for providing accurate requirements,
              content, credentials, approvals, and other materials reasonably
              required for project execution.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Ownership and licensing of project deliverables will depend on
              the applicable project agreement. Third-party software,
              libraries, fonts, assets, APIs, and services remain subject to
              their respective licenses.
            </p>

            <h2>5. Payments</h2>
            <p>
              Project fees, payment schedules, milestones, taxes, and other
              commercial terms will be communicated through the applicable
              quotation or agreement.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              Certain projects may depend on hosting providers, cloud
              platforms, APIs, payment gateways, advertising platforms, or
              other third-party services. Their availability and policies may
              be outside our direct control.
            </p>

            <h2>7. Website Content</h2>
            <p>
              We make reasonable efforts to keep website information accurate,
              but information may change without prior notice.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Shri Akshar IT
              Services shall not be liable for indirect, incidental, or
              consequential losses arising from use of the website or
              third-party services.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              These terms may be updated when necessary. Updated versions will
              be published on this page.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions regarding these terms, contact{" "}
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
