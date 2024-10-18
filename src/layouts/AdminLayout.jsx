// App.js
import React from "react";
import Sidebar from "../components/admindashboard/Sidebar";
import Header from "../components/admindashboard/Header";
import { LuLayoutDashboard } from "react-icons/lu";

// Mock sidebar menu items
const menuItems = [
  { name: "Dashboard", subMenu: null , icon:<LuLayoutDashboard/> },
  { name: "Sales", icon: , subMenu: [{ name: "Invoices" }, { name: "Estimates" }] },
  { name: "Purchases", subMenu: [{ name: "Bills" }, { name: "Expenses" }] },
  // Add more menu items as needed
];

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuItems={adminDashboardMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-5 bg-gray-100">
          {/* <Dashboard /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
