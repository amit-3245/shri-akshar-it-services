import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="sa-not-found-page">
      <section className="sa-container">
        <div className="sa-not-found-box">
          <span className="sa-not-found-code">404</span>

          <span className="sa-section-label">PAGE NOT FOUND</span>

          <h1>Looks like this page moved.</h1>

          <p>
            The page you're looking for doesn't exist or may have been moved
            to another location.
          </p>

          <div className="sa-not-found-actions">
            <Link to="/" className="sa-btn sa-btn-primary">
              Back to Home
            </Link>

            <Link to="/services" className="sa-btn sa-btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
