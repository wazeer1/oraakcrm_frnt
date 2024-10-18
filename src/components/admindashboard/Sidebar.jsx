import React, { useState } from "react";

const Sidebar = ({ menuItems }) => {
  const [openSubMenus, setOpenSubMenus] = useState({});

  // Toggles the submenu visibility for a particular item
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // toggle the open state
    }));
  };

  return (
    <div className="w-64 bg-blue-800 h-screen p-5 text-white">
      <h2 className="text-lg font-bold mb-5">Dashboard</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-3">
            <div
              className="cursor-pointer hover:bg-blue-700 p-2 rounded flex justify-between items-center"
              onClick={() => toggleSubMenu(index)}
            >
              <span>{item.name}</span>
              {item.subMenu && (
                <span>{openSubMenus[index] ? "▲" : "▼"}</span>
              )}
            </div>
            {item.subMenu && openSubMenus[index] && (
              <ul className="ml-4 mt-2">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="mb-2 hover:bg-blue-600 p-2 rounded"
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
