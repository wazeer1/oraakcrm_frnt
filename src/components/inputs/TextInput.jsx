// src/components/TextInput.jsx
import React from "react";
import { useField } from "formik";
import { IconContext } from "react-icons";
import { useTheme } from "../../context/ThemeContext";

const TextInput = ({ label, icon: Icon, ...props }) => {
  const [field, meta] = useField(props);
  const { theme } = useTheme();

  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium ${
          theme === "light" ? "text-light-text" : "text-dark-text"
        } mb-1`}
      >
        {label}
      </label>
      <div
        className={`flex items-center border border-gray-300 rounded-md p-2 ${
          theme === "light" ? "bg-transparent" : "bg-light-background"
        }`}
      >
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
          className={`ml-2 p-2 w-full text-sm border-none outline-none ${
            meta.touched && meta.error ? "border-red-500" : ""
          }`}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
