import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyInfo, serviceList } from "../Data";

// const API_URL = "http://127.0.0.1:8000";
const API_URL = "https://shri-akshar-backend.onrender.com";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        let message = "Unable to submit your enquiry.";

        if (data?.detail) {
          if (Array.isArray(data.detail)) {
            message = data.detail
              .map((item) => item.msg)
              .join(", ");
          } else {
            message = data.detail;
          }
        }

        throw new Error(message);
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Enquiry submission error:", err);

      setError(
        err.message ||
          "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="sa-contact-page">

      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

      <section className="sa-inner-hero sa-contact-hero">
        <div className="sa-container">

          <div className="sa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className="sa-contact-hero-content">

            <div className="sa-section-label">
              START A CONVERSATION
            </div>

            <h1>
              Let's build something{" "}
              <span>that matters.</span>
            </h1>

            <p>
              Tell us what you're trying to build, improve or grow.
              Our team will help you identify the right technology
              and digital solution.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className="sa-contact-main">
        <div className="sa-container">

          <div className="sa-contact-grid">

            {/* =================================================
                LEFT — CONTACT INFORMATION
            ================================================= */}

            <div className="sa-contact-info">

              <div className="sa-contact-info-heading">

                <span className="sa-section-label">
                  GET IN TOUCH
                </span>

                <h2>
                  We'd love to hear
                  <span> from you.</span>
                </h2>

                <p>
                  Whether you are starting something new, improving
                  an existing system or looking for digital growth,
                  we'd love to hear about it.
                </p>

              </div>


              <div className="sa-contact-details">

                {/* PHONE */}

                <a
                  href={`tel:+91${companyInfo.phone}`}
                  className="sa-contact-detail"
                >
                  <div className="sa-contact-icon">
                    TEL
                  </div>

                  <div className="sa-contact-detail-content">
                    <span>CALL US</span>

                    <strong>
                      +91 {companyInfo.phone}
                    </strong>
                  </div>

                  <div className="sa-contact-arrow">
                    ↗
                  </div>
                </a>


                {/* SECOND PHONE */}

                <a
                  href={`tel:+91${companyInfo.phoneSecondary}`}
                  className="sa-contact-detail"
                >
                  <div className="sa-contact-icon">
                    TEL
                  </div>

                  <div className="sa-contact-detail-content">
                    <span>CALL US</span>

                    <strong>
                      +91 {companyInfo.phoneSecondary}
                    </strong>
                  </div>

                  <div className="sa-contact-arrow">
                    ↗
                  </div>
                </a>


              {/* EMAIL */}

<a
  href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(companyInfo.email)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="sa-contact-detail"
>
  <div className="sa-contact-icon">
    @
  </div>

  <div className="sa-contact-detail-content">
    <span>EMAIL US</span>

    <strong>
      {companyInfo.email}
    </strong>
  </div>

  <div className="sa-contact-arrow">
    ↗
  </div>
</a>


{/* SECOND EMAIL */}

<a
  href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(companyInfo.emailSecondary)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="sa-contact-detail"
>
  <div className="sa-contact-icon">
    @
  </div>

  <div className="sa-contact-detail-content">
    <span>ALTERNATE EMAIL</span>

    <strong>
      {companyInfo.emailSecondary}
    </strong>
  </div>

  <div className="sa-contact-arrow">
    ↗
  </div>
</a>

                {/* WHATSAPP — PRIMARY */}

                <a
                  href={`https://wa.me/91${companyInfo.phone}?text=Hello%20Shri%20Akshar%20IT%20Services,%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="sa-contact-detail"
                >
                  <div className="sa-contact-icon">
                    WA
                  </div>

                  <div className="sa-contact-detail-content">
                    <span>WHATSAPP</span>

                    <strong>
                      Chat with our team
                    </strong>
                  </div>

                  <div className="sa-contact-arrow">
                    ↗
                  </div>
                </a>


                {/* ADDRESS */}

                <div className="sa-contact-detail">
                  <div className="sa-contact-icon">
                    PIN
                  </div>

                  <div className="sa-contact-detail-content">
                    <span>VISIT US</span>

                    <strong>
                      {companyInfo.address}
                    </strong>
                  </div>
                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — PROJECT FORM
            ================================================= */}

            <div className="sa-contact-form-card">

              <div className="sa-contact-form-heading">

                <span className="sa-section-label">
                  PROJECT ENQUIRY
                </span>

                <h2>
                  Tell us about your{" "}
                  <span>project.</span>
                </h2>

                <p>
                  Share a few details and we'll understand the
                  requirement before getting in touch.
                </p>

              </div>


              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="sa-contact-success">
                  <strong>
                    Thank you!
                  </strong>

                  <span>
                    Your enquiry has been received successfully.
                    Our team will get in touch with you soon.
                  </span>
                </div>
              )}


              {/* ERROR MESSAGE */}

              {error && (
                <div className="sa-contact-error">
                  <strong>
                    Submission failed
                  </strong>

                  <span>
                    {error}
                  </span>
                </div>
              )}


              <form
                className="sa-contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME */}

                <div className="sa-contact-field">

                  <label htmlFor="name">

                    YOUR NAME *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={120}
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="sa-contact-field">

                  <label htmlFor="email">
                    EMAIL *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* PHONE */}

                <div className="sa-contact-field">

                  <label htmlFor="phone">
                    PHONE *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    minLength={7}
                    maxLength={30}
                    required
                  />

                </div>


                {/* COMPANY */}

                <div className="sa-contact-field">

                  <label htmlFor="company">
                    COMPANY
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={200}
                  />

                </div>


                {/* SERVICE */}

                <div className="sa-contact-field">

                  <label htmlFor="service">
                    REQUIRED SERVICE *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    {serviceList.map((service) => (
                      <option
                        key={service.id}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}

                  </select>

                </div>


                {/* BUDGET */}

                <div className="sa-contact-field">

                  <label htmlFor="budget">
                    PROJECT BUDGET
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select budget
                    </option>

                    <option value="₹8,000 – ₹10,000">
                      ₹8,000 – ₹10,000
                    </option>

                    <option value="₹10,000 – ₹20,000">
                      ₹10,000 – ₹20,000
                    </option>

                    <option value="₹20,000 – ₹30,000">
                      ₹20,000 – ₹30,000
                    </option>

                    <option value="₹30,000 – ₹50,000">
                      ₹30,000 – ₹50,000
                    </option>

                    <option value="₹50,000 – ₹1 Lakh">
                      ₹50,000 – ₹1 Lakh
                    </option>

                    <option value="₹1 Lakh – ₹3 Lakh">
                      ₹1 Lakh – ₹3 Lakh
                    </option>

                    <option value="₹3 Lakh – ₹5 Lakh">
                      ₹3 Lakh – ₹5 Lakh
                    </option>

                    <option value="₹5 Lakh+">
                      ₹5 Lakh+
                    </option>

                    <option value="Other / Not Decided">
                      Other / Not Decided
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <div className="sa-contact-field sa-contact-field-full">

                  <label htmlFor="message">
                    PROJECT DETAILS *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell us about your requirement..."
                    value={formData.message}
                    onChange={handleChange}
                    minLength={10}
                    maxLength={5000}
                    required
                  />

                </div>


                {/* SUBMIT */}

                <div className="sa-contact-submit">

                  <button
                    type="submit"
                    className="sa-btn sa-btn-primary"
                    disabled={submitting}
                  >

                    <span>
                      {submitting
                        ? "Sending Enquiry..."
                        : "Send Project Enquiry"}
                    </span>

                    <span>
                      {submitting ? "..." : "↗"}
                    </span>

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES STRIP
      ===================================================== */}

      <section className="sa-contact-services">

        <div className="sa-container">

          <div className="sa-contact-services-heading">

            <span className="sa-section-label">
              WHAT WE CAN HELP WITH
            </span>

            <h2>
              One partner for your
              <span> digital needs.</span>
            </h2>

          </div>


          <div className="sa-contact-services-grid">

            {serviceList.slice(0, 6).map((service) => (

              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="sa-contact-service-card"
              >

                <span>
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

                <div>
                  Explore <span>↗</span>
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFICE LOCATION
      ===================================================== */}

      <section className="sa-contact-location">

        <div className="sa-container">

          <div className="sa-contact-location-header">

            <div>

              <span className="sa-section-label">
                OUR OFFICE
              </span>

              <h2>
                Visit us in
                <span> Bareilly.</span>
              </h2>

            </div>

            <div className="sa-contact-location-address">

              <span>
                OFFICE ADDRESS
              </span>

              <strong>
                442, Ganesh Nagar, Badaun Road,
                Bareilly, Uttar Pradesh - 243001
              </strong>

            </div>

          </div>


          <div className="sa-contact-map-wrapper">

            <iframe
              title="Shri Akshar IT Services Office Location"
              src="https://www.google.com/maps?q=442%2C%20Ganesh%20Nagar%2C%20Badaun%20Road%2C%20Bareilly%2C%20Uttar%20Pradesh%20-%20243001&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <a
              href="https://www.google.com/maps/search/?api=1&query=442%2C%20Ganesh%20Nagar%2C%20Badaun%20Road%2C%20Bareilly%2C%20Uttar%20Pradesh%20-%20243001"
              target="_blank"
              rel="noreferrer"
              className="sa-contact-map-button"
            >
              <span>
                Open in Google Maps
              </span>

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="sa-inner-cta">

        <div className="sa-container">

          <div className="sa-inner-cta-content">

            <span className="sa-section-label">
              READY TO START?
            </span>

            <h2>
              Let's turn your idea into
              <span> something real.</span>
            </h2>

            <p>
              Have a project in mind? Start the conversation with
              Shri Akshar IT Services.
            </p>

            <div className="sa-inner-cta-actions">

              <a
                href={`tel:+91${companyInfo.phone}`}
                className="sa-btn sa-btn-primary"
              >
                Call Us
                <span>↗</span>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="sa-btn sa-btn-secondary"
              >
                Email Us
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;
