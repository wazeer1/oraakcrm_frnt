import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../../pages/auth/LoginScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"login"} />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default AuthRouter;
