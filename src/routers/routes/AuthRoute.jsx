// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectVerifiedStatus } from "../../store/account/accountsSelectors";

const AuthRoutes = ({ children }) => {
  const verified = useSelector(selectVerifiedStatus);
  console.log(verified, '_______verifiew');
  if (verified) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthRoutes;
