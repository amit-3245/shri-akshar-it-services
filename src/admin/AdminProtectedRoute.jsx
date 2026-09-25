import { Navigate, Outlet } from "react-router-dom";

import { isAdminLoggedIn } from "./adminApi";


const AdminProtectedRoute = () => {
  if (!isAdminLoggedIn()) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <Outlet />;
};


export default AdminProtectedRoute;
