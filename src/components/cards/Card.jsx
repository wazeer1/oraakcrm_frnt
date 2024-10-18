import React from "react";

const Card = ({ className = "", children }) => {
  return <div className={`bg-white rounded-xl ${className}`}>{children}</div>;
};

export default Card;
