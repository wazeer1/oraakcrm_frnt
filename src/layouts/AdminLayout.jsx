// App.js
import React from "react";
import Sidebar from "../components/admindashboard/Sidebar";
import Header from "../components/admindashboard/Header";
import { adminMenuItem } from "../utils/constants/adminDashboardMenus";
import Modals from "../components/modals/Modals";

function AdminLayout({ children }) {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar menuItems={adminMenuItem} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-5 bg-gray-100">
            {/* <Dashboard /> */}
            {children}
          </div>
        </div>
      </div>
      <Modals />
    </>
  );
}

export default AdminLayout;
