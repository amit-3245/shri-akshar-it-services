import React from "react";
import { companyInfo } from "../Data";

const RefundPolicy = () => {
  return (
    <main className="sa-legal-page">
      <section className="sa-inner-hero">
        <div className="sa-container">
          <span className="sa-section-label">LEGAL</span>
          <h1>Refund Policy</h1>
          <p>
            Our refund approach is based on the nature of professional,
            project-based technology and digital services.
          </p>
        </div>
      </section>

      <section className="sa-legal-content">
        <div className="sa-container">
          <div className="sa-legal-card">
            <p className="sa-legal-updated">
              Last Updated: September 2026
            </p>

            <h2>1. General Policy</h2>
            <p>
              Shri Akshar IT Services provides customized professional
              services. Refund eligibility may therefore depend on the project
              stage, work completed, and terms agreed with the client.
            </p>

            <h2>2. Advance Payments</h2>
            <p>
              Where an advance payment has been made for a project, work may
              begin after confirmation of the engagement. Refunds of advance
              payments are subject to the applicable project agreement.
            </p>

            <h2>3. Work Already Completed</h2>
            <p>
              Amounts corresponding to services already delivered, completed
              milestones, resources committed, or work already performed may
              not be refundable.
            </p>

            <h2>4. Cancellation</h2>
            <p>
              A client requesting cancellation should contact us as soon as
              possible. Any applicable refund or outstanding payment will be
              determined according to the agreed project terms.
            </p>

            <h2>5. Third-Party Expenses</h2>
            <p>
              Payments made to third-party providers on behalf of a project,
              such as hosting, domains, software licenses, advertising
              platforms, or external services, may be non-refundable according
              to the provider's policy.
            </p>

            <h2>6. Refund Requests</h2>
            <p>
              Refund-related requests should include the client's name,
              project details, payment information, and reason for the request.
            </p>

            <h2>7. Contact</h2>
            <p>
              Contact us at{" "}
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>{" "}
              for refund-related enquiries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefundPolicy;
