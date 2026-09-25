import './App.css';
import './MediaQueries.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';

import Services from './Pages/Services';
import ServiceDetails from './Pages/ServiceDetails';

import Portfolio from './Pages/Portfolio';
import PortfolioDetails from './Pages/PortfolioDetails';

import Company from './Pages/Company';

import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';

import Contact from './Pages/Contact';


import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import RefundPolicy from './Pages/RefundPolicy';
import Disclaimer from './Pages/Disclaimer';

import NotFound from './Pages/NotFound';
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>

        {/* =========================
            MAIN PAGES
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        {/* =========================
            SERVICES
        ========================= */}

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        {/* =========================
            PORTFOLIO
        ========================= */}

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/portfolio/:slug"
          element={<PortfolioDetails />}
        />

        {/* =========================
            COMPANY
        ========================= */}

        <Route
          path="/company"
          element={<Company />}
        />

        {/* =========================
            BLOG
        ========================= */}

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact-us"
          element={<Contact />}
        />
{/* ==================================================
    ADMIN ROUTES
================================================== */}

<Route
  path="/admin/login"
  element={<AdminLogin />}
/>

<Route element={<AdminProtectedRoute />}>
  <Route
    path="/admin/dashboard"
    element={<AdminDashboard />}
  />
</Route>
        {/* =========================
            LEGAL PAGES
        ========================= */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

        {/* =========================


            404
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
