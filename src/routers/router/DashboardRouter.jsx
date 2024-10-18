import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default DashboardRouter;
