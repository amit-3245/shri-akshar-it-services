import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  clearAdminToken,
  getEnquiries,
  updateEnquiryStatus,
} from "./adminApi";


const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "IN_DISCUSSION",
  "PROPOSAL_SENT",
  "CONVERTED",
  "CLOSED",
];


const statusLabel = (status) => {
  return status
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
};


const AdminDashboard = () => {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  const [updatingId, setUpdatingId] =
    useState(null);

  const [selectedEnquiry, setSelectedEnquiry] =
    useState(null);


  const loadEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const data =
        await getEnquiries();

      setEnquiries(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (err) {
      if (
        err.message ===
        "SESSION_EXPIRED"
      ) {
        navigate(
          "/admin/login",
          { replace: true }
        );
        return;
      }

      setError(
        err.message ||
          "Unable to load enquiries."
      );
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadEnquiries();
  }, []);


  const handleLogout = () => {
    clearAdminToken();

    navigate(
      "/admin/login",
      { replace: true }
    );
  };


  const handleStatusChange = async (
    enquiryId,
    newStatus
  ) => {
    try {
      setUpdatingId(enquiryId);

      const updated =
        await updateEnquiryStatus(
          enquiryId,
          newStatus
        );

      setEnquiries((current) =>
        current.map((item) =>
          item.id === enquiryId
            ? updated
            : item
        )
      );

      if (
        selectedEnquiry?.id ===
        enquiryId
      ) {
        setSelectedEnquiry(updated);
      }

    } catch (err) {
      if (
        err.message ===
        "SESSION_EXPIRED"
      ) {
        navigate(
          "/admin/login",
          { replace: true }
        );
        return;
      }

      alert(
        err.message ||
          "Unable to update status."
      );
    } finally {
      setUpdatingId(null);
    }
  };


  const stats = useMemo(() => {
    const count = (status) =>
      enquiries.filter(
        (item) =>
          item.status === status
      ).length;

    return {
      total: enquiries.length,
      newCount: count("NEW"),
      contacted: count("CONTACTED"),
      discussion: count(
        "IN_DISCUSSION"
      ),
      proposals: count(
        "PROPOSAL_SENT"
      ),
      converted: count(
        "CONVERTED"
      ),
    };
  }, [enquiries]);


  const filteredEnquiries =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return enquiries.filter(
        (item) => {
          const matchesStatus =
            statusFilter === "ALL" ||
            item.status ===
              statusFilter;

          const matchesSearch =
            !query ||
            item.name
              ?.toLowerCase()
              .includes(query) ||
            item.email
              ?.toLowerCase()
              .includes(query) ||
            item.phone
              ?.toLowerCase()
              .includes(query) ||
            item.company
              ?.toLowerCase()
              .includes(query) ||
            item.service
              ?.toLowerCase()
              .includes(query);

          return (
            matchesStatus &&
            matchesSearch
          );
        }
      );
    }, [
      enquiries,
      search,
      statusFilter,
    ]);


  return (
    <main className="sa-admin-page">

      {/* ==================================================
          TOP BAR
      ================================================== */}

      <header className="sa-admin-topbar">

        <div className="sa-admin-topbar-brand">

          <div className="sa-admin-logo-mark">
            SA
          </div>

          <div>
            <strong>
              SHRI AKSHAR
            </strong>

            <span>
              IT SERVICES
            </span>
          </div>

        </div>


        <div className="sa-admin-topbar-actions">

          <span className="sa-admin-secure-label">
            ADMIN PANEL
          </span>

          <button
            type="button"
            onClick={handleLogout}
            className="sa-admin-logout"
          >
            Logout
          </button>

        </div>

      </header>


      <div className="sa-admin-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <section className="sa-admin-heading">

          <div>

            <span className="sa-admin-kicker">
              SHRI AKSHAR SERVICES
            </span>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Manage project enquiries,
              customer conversations and
              lead progress from one place.
            </p>

          </div>


          <button
            type="button"
            className="sa-admin-refresh"
            onClick={loadEnquiries}
            disabled={loading}
          >
            {loading
              ? "Refreshing..."
              : "↻ Refresh"}
          </button>

        </section>


        {/* ==================================================
            ERROR
        ================================================== */}

        {error && (
          <div className="sa-admin-error">
            {error}
          </div>
        )}


        {/* ==================================================
            STATISTICS
        ================================================== */}

        <section className="sa-admin-stats">

          <div className="sa-admin-stat-card">

            <span>Total Enquiries</span>

            <strong>
              {stats.total}
            </strong>

            <small>
              All received projects
            </small>

          </div>


          <div className="sa-admin-stat-card">

            <span>New</span>

            <strong>
              {stats.newCount}
            </strong>

            <small>
              Need attention
            </small>

          </div>


          <div className="sa-admin-stat-card">

            <span>Contacted</span>

            <strong>
              {stats.contacted}
            </strong>

            <small>
              Customer contacted
            </small>

          </div>


          <div className="sa-admin-stat-card">

            <span>In Discussion</span>

            <strong>
              {stats.discussion}
            </strong>

            <small>
              Active conversations
            </small>

          </div>


          <div className="sa-admin-stat-card">

            <span>Proposal Sent</span>

            <strong>
              {stats.proposals}
            </strong>

            <small>
              Awaiting decision
            </small>

          </div>


          <div className="sa-admin-stat-card sa-admin-stat-highlight">

            <span>Converted</span>

            <strong>
              {stats.converted}
            </strong>

            <small>
              Won projects
            </small>

          </div>

        </section>


        {/* ==================================================
            ENQUIRIES
        ================================================== */}

        <section className="sa-admin-enquiries">

          <div className="sa-admin-section-header">

            <div>

              <span className="sa-admin-kicker">
                LEAD MANAGEMENT
              </span>

              <h2>
                Project Enquiries
              </h2>

            </div>

            <span className="sa-admin-result-count">
              {filteredEnquiries.length} results
            </span>

          </div>


          {/* Filters */}

          <div className="sa-admin-filters">

            <div className="sa-admin-search">

              <span>
                ⌕
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search name, email, phone, company..."
              />

            </div>


            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value
                )
              }
            >

              <option value="ALL">
                All Statuses
              </option>

              {STATUS_OPTIONS.map(
                (status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {statusLabel(status)}
                  </option>
                )
              )}

            </select>

          </div>


          {/* Loading */}

          {loading && (
            <div className="sa-admin-empty">
              <div className="sa-admin-loader" />
              <p>
                Loading enquiries...
              </p>
            </div>
          )}


          {/* Empty */}

          {!loading &&
            filteredEnquiries.length ===
              0 && (
              <div className="sa-admin-empty">

                <div className="sa-admin-empty-icon">
                  ✓
                </div>

                <h3>
                  No enquiries found
                </h3>

                <p>
                  New website enquiries
                  will appear here.
                </p>

              </div>
            )}


          {/* Table */}

          {!loading &&
            filteredEnquiries.length >
              0 && (
              <div className="sa-admin-table-wrap">

                <table className="sa-admin-table">

                  <thead>

                    <tr>

                      <th>
                        Customer
                      </th>

                      <th>
                        Service
                      </th>

                      <th>
                        Budget
                      </th>

                      <th>
                        Submitted
                      </th>

                      <th>
                        Status
                      </th>

                      <th>
                        Action
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredEnquiries.map(
                      (enquiry) => (
                        <tr
                          key={
                            enquiry.id
                          }
                        >

                          <td>

                            <div className="sa-admin-customer">

                              <strong>
                                {enquiry.name}
                              </strong>

                              <span>
                                {enquiry.email}
                              </span>

                              <span>
                                {enquiry.phone}
                              </span>

                            </div>

                          </td>


                          <td>

                            <span className="sa-admin-service">
                              {enquiry.service}
                            </span>

                            {enquiry.company && (
                              <small>
                                {enquiry.company}
                              </small>
                            )}

                          </td>


                          <td>
                            {enquiry.budget ||
                              "Not specified"}
                          </td>


                          <td>
                            {enquiry.created_at
                              ? new Date(
                                  enquiry.created_at
                                ).toLocaleDateString(
                                  "en-IN"
                                )
                              : "-"}
                          </td>


                          <td>

                            <select
                              className={`sa-admin-status-select status-${enquiry.status.toLowerCase()}`}
                              value={
                                enquiry.status
                              }
                              disabled={
                                updatingId ===
                                enquiry.id
                              }
                              onChange={(
                                event
                              ) =>
                                handleStatusChange(
                                  enquiry.id,
                                  event.target.value
                                )
                              }
                            >

                              {STATUS_OPTIONS.map(
                                (
                                  status
                                ) => (
                                  <option
                                    key={
                                      status
                                    }
                                    value={
                                      status
                                    }
                                  >
                                    {statusLabel(
                                      status
                                    )}
                                  </option>
                                )
                              )}

                            </select>

                          </td>


                          <td>

                            <button
                              type="button"
                              className="sa-admin-view-button"
                              onClick={() =>
                                setSelectedEnquiry(
                                  enquiry
                                )
                              }
                            >
                              View
                            </button>

                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>
            )}

        </section>

      </div>


      {/* ==================================================
          ENQUIRY DETAILS MODAL
      ================================================== */}

      {selectedEnquiry && (
        <div
          className="sa-admin-modal-backdrop"
          onClick={() =>
            setSelectedEnquiry(null)
          }
        >

          <div
            className="sa-admin-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="sa-admin-modal-header">

              <div>

                <span className="sa-admin-kicker">
                  ENQUIRY #{selectedEnquiry.id}
                </span>

                <h2>
                  {selectedEnquiry.name}
                </h2>

              </div>

              <button
                type="button"
                className="sa-admin-modal-close"
                onClick={() =>
                  setSelectedEnquiry(null)
                }
              >
                ×
              </button>

            </div>


            <div className="sa-admin-modal-grid">

              <div>
                <span>
                  Email
                </span>

                <strong>
                  {selectedEnquiry.email}
                </strong>
              </div>


              <div>
                <span>
                  Phone
                </span>

                <strong>
                  {selectedEnquiry.phone}
                </strong>
              </div>


              <div>
                <span>
                  Company
                </span>

                <strong>
                  {selectedEnquiry.company ||
                    "Not provided"}
                </strong>
              </div>


              <div>
                <span>
                  Service
                </span>

                <strong>
                  {selectedEnquiry.service}
                </strong>
              </div>


              <div>
                <span>
                  Budget
                </span>

                <strong>
                  {selectedEnquiry.budget ||
                    "Not specified"}
                </strong>
              </div>


              <div>
                <span>
                  Status
                </span>

                <strong>
                  {statusLabel(
                    selectedEnquiry.status
                  )}
                </strong>
              </div>

            </div>


            <div className="sa-admin-message">

              <span>
                Project Details
              </span>

              <p>
                {selectedEnquiry.message}
              </p>

            </div>


            <div className="sa-admin-modal-actions">

              <a
                href={`mailto:${selectedEnquiry.email}`}
                className="sa-admin-action-button"
              >
                Email Customer
              </a>

              <a
                href={`tel:${selectedEnquiry.phone}`}
                className="sa-admin-action-button secondary"
              >
                Call Customer
              </a>

              <button
                type="button"
                className="sa-admin-action-button secondary"
                onClick={() =>
                  setSelectedEnquiry(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
};


export default AdminDashboard;
