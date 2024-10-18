import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`bg-gray-100 p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
