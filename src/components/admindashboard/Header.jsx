// Header.js
import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-md p-5 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hello, Oraak</h1>
      <div className="flex items-center">
        <span className="mr-4">🔔 Announcements</span>
        <span className="mr-4">🔔 Recent Updates</span>
      </div>
    </div>
  );
};

export default Header;
