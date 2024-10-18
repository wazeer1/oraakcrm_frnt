import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <span className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FaSun size={30} color={`${theme === "light" ? "#000" : "#fff"}`} />
      ) : (
        <FaMoon size={30} color={`${theme === "light" ? "#000" : "#fff"}`} />
      )}
    </span>
  );
};

export default ThemeSwitcher;
