import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  adminLogin,
  isAdminLoggedIn,
} from "./adminApi";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@shriaksharservices.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Admin Login | Shri Akshar IT Services";
  }, []);

  if (isAdminLoggedIn()) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await adminLogin(email.trim(), password);
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Backend server is not running. Please start the FastAPI server."
          : err.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="sa-admin-login-page">
      <div className="sa-admin-login-background">
        <div className="sa-admin-login-glow sa-admin-login-glow-one" />
        <div className="sa-admin-login-glow sa-admin-login-glow-two" />
      </div>

      <div className="sa-admin-login-shell">

        {/* BRAND */}
        <div className="sa-admin-login-brand">
          <div className="sa-admin-login-logo">
            SA
          </div>

          <div>
            <strong>SHRI AKSHAR</strong>
            <span>IT SERVICES</span>
          </div>
        </div>

        {/* CARD */}
        <section className="sa-admin-login-card">

          <div className="sa-admin-login-heading">
            <span>ADMIN PORTAL</span>

            <h1>
              Welcome <em>back.</em>
            </h1>

            <p>
              Sign in to securely manage project enquiries
              and business communications.
            </p>
          </div>

          {error && (
            <div className="sa-admin-login-error">
              <span>!</span>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="sa-admin-login-field">
              <label htmlFor="admin-email">
                ADMIN EMAIL
              </label>

              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@shriaksharservices.com"
                autoComplete="username"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="sa-admin-login-field">
              <label htmlFor="admin-password">
                PASSWORD
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="sa-admin-login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="sa-admin-spinner" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in to Dashboard
                  <span>↗</span>
                </>
              )}
            </button>

          </form>

          <div className="sa-admin-login-security">
            <span className="sa-admin-security-dot" />
            Secure administrator access
          </div>

        </section>

        {/* FOOTER */}
        <div className="sa-admin-login-footer">
          © {new Date().getFullYear()} Shri Akshar Services Private Limited
        </div>

      </div>
    </main>
  );
};

export default AdminLogin;
