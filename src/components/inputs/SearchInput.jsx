// src/components/SearchInput.jsx
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useTheme } from "../../context/ThemeContext";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchInput = ({ label, icon: Icon = FaSearch, clearable = true, ...props }) => {
  const [searchValue, setSearchValue] = useState(""); // Manage input state here
  const { theme } = useTheme();

  const handleClear = () => {
    setSearchValue(""); // Clear the input when "clear" icon is clicked
  };

  return (
    <div className="mb-4">
      {/* {label && (
        <label className={`block text-sm font-medium ${theme === "light" ? 'text-light-text' : 'text-dark-text'} mb-1`}>
          {label}
        </label>
      )} */}
      <div className={`flex items-center border border-gray-300 rounded-md p-2 ${theme === "light" ? 'bg-transparent' : 'bg-light-background'}`}>
        {Icon && (
          <IconContext.Provider
            value={{
              size: "1.5em",
              className: theme === "light" ? "text-slate-600" : "text-gray-500",
            }}
          >
            <Icon />
          </IconContext.Provider>
        )}
        <input
          className="ml-2 p-2 w-full text-sm border-none outline-none"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Handle input changes
          {...props}
        />
        {clearable && searchValue && (
          <FaTimes
            className="cursor-pointer ml-2 text-gray-500"
            onClick={handleClear}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
