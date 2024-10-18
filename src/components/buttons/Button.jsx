import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Button = ({ children }) => {
  const { theme } = useTheme();
  return (
    <button
      className={`px-3 py-2 rounded ${
        theme === "light" ? "bg-dark-background text-dark-text" : "bg-light-background text-light-text"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
