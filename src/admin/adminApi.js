const API_URL = "http://127.0.0.1:8000";

const TOKEN_KEY = "shri_akshar_admin_token";

/* =========================================================
   TOKEN MANAGEMENT
========================================================= */

export const getAdminToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const saveAdminToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearAdminToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAdminLoggedIn = () => {
  return Boolean(getAdminToken());
};


/* =========================================================
   ADMIN LOGIN
========================================================= */

export const adminLogin = async (email, password) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Login failed.");
  }

  if (!data.access_token) {
    throw new Error("Access token was not received.");
  }

  saveAdminToken(data.access_token);

  return data;
};


/* =========================================================
   AUTHENTICATED REQUEST
========================================================= */

const authenticatedRequest = async (
  endpoint,
  options = {}
) => {
  const token = getAdminToken();

  if (!token) {
    throw new Error("Authentication required.");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    clearAdminToken();
    throw new Error("SESSION_EXPIRED");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Request failed.");
  }

  return data;
};


/* =========================================================
   ENQUIRY API
========================================================= */

export const getEnquiries = async (enquiryStatus = "") => {
  const query = enquiryStatus
    ? `?enquiry_status=${encodeURIComponent(enquiryStatus)}`
    : "";

  return authenticatedRequest(`/api/enquiries${query}`);
};

export const getEnquiry = async (enquiryId) => {
  return authenticatedRequest(`/api/enquiries/${enquiryId}`);
};

export const updateEnquiryStatus = async (
  enquiryId,
  status
) => {
  return authenticatedRequest(
    `/api/enquiries/${enquiryId}/status`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status,
      }),
    }
  );
};
