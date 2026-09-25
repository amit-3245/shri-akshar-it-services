import React from "react";
import { companyInfo } from "../Data";

const Disclaimer = () => {
  return (
    <main className="sa-legal-page">
      <section className="sa-inner-hero">
        <div className="sa-container">
          <span className="sa-section-label">LEGAL</span>
          <h1>Disclaimer</h1>
          <p>
            Important information regarding the content, services, and
            third-party resources available through our website.
          </p>
        </div>
      </section>

      <section className="sa-legal-content">
        <div className="sa-container">
          <div className="sa-legal-card">
            <p className="sa-legal-updated">
              Last Updated: September 2026
            </p>

            <h2>1. General Information</h2>
            <p>
              The information published on this website is provided for
              general informational and business purposes. It should not be
              considered a guarantee of a particular business, technical,
              marketing, financial, or other outcome.
            </p>

            <h2>2. Service Information</h2>
            <p>
              Service descriptions, technologies, capabilities, examples, and
              other information may be updated as our offerings evolve.
              Specific project scope is determined through individual client
              discussions and agreements.
            </p>

            <h2>3. Results</h2>
            <p>
              Project outcomes may vary depending on business requirements,
              implementation, market conditions, client participation,
              technology dependencies, and other factors.
            </p>

            <h2>4. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites and
              services. We do not control or guarantee the availability,
              accuracy, security, or policies of external websites.
            </p>

            <h2>5. Technology & Security</h2>
            <p>
              While reasonable measures may be taken to build secure and
              reliable solutions, no internet-connected system can be
              guaranteed to be completely secure or continuously available.
            </p>

            <h2>6. Changes</h2>
            <p>
              We reserve the right to update website content and this
              disclaimer when required.
            </p>

            <h2>7. Contact</h2>
            <p>
              Questions regarding this disclaimer can be sent to{" "}
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Disclaimer;
