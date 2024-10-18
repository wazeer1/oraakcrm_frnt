// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectVerifiedStatus } from "../../store/account/accountsSelectors";

const AppRoutes = ({ children }) => {
  const verified = useSelector(selectVerifiedStatus);

  if (!verified) {
    // Redirect to login if not authenticated
    return <Navigate to="/auth" />;
  }

  return children;
};

export default AppRoutes;
