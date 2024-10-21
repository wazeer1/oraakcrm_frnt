import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";

const adminMenuItem = [
    { name: "Dashboard",icon:<LuLayoutDashboard/>, subMenu: null },
    { name: "Sales", icon: <FaUserTie/>, subMenu: [{ name: "Invoices" }, { name: "Estimates" }] },
    { name: "Purchases", icon: <BiSolidPurchaseTag/>, subMenu: [{ name: "Bills" }, { name: "Expenses" }] },
    // Add more menu items as needed
  ];


  export {adminMenuItem}