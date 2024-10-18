import React from "react";
import { useSelector } from "react-redux";
import {
  selectUserRole,
  selectUserType,
} from "../../store/account/accountsSelectors";
import Layout from "../../layouts/Layout";
import AdminDashboard from "./AdminDashboard";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {
  const role = useSelector(selectUserRole);
  const user_type = useSelector(selectUserType);

  console.log(user_type, "_____");
  return user_type === "admin" ? <AdminDashboard /> : <DashboardRouter />;
};

export default AppRouter;
