import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa6";

const AdminSidebar = () => {
  const { theme } = useTheme();

  // Reusable Menu component
  const Menu = ({ title, to, icon }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `py-3 px-5 block h-45 rounded-lg flex items-center gap-2 transition-colors duration-200 ${
            theme === "light" ? "text-light-text" : "text-dark-text"
          } ${isActive ?  theme === "light" ? 'bg-light-background text-black' : 'bg-dark-background_dark' : ""}`
        }
      >
        {icon}{title}
      </NavLink>
    );
  };

  return (
    <div className="ml-5 w-[100%]">
      <Menu title="Dashboard" to="/" icon={<LuLayoutDashboard />}/>
      <Menu title="Companies" to="/companies" icon={<FaBuilding />} />
      {/* Add more menu items as needed */}
    </div>
  );
};

export default AdminSidebar;
