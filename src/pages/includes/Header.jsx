import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AvatarImage } from "../../assets/images/dummy";
import { MdOutlineZoomInMap } from "react-icons/md";

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      // Exit fullscreen mode
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };
  return (
    <div className="bg-white fixed top-0 left-0 w-[100%] h-[100px] flex items-center px-[100px] justify-between">
      <Link to={"#"}>
        <h1 className="text-3xl font-bold">LOGO</h1>
      </Link>
      <div className="flex gap-[20px] items-center">
        <FaSearch
          size={25}
          color={"#1F51FF"}
          className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
        />
        <IoDocumentText
          size={25}
          color={"#1F51FF"}
          className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
        />
        <MdDashboard
          size={25}
          color={"#1F51FF"}
          className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
        />
        {isFullscreen ? (
          <MdOutlineZoomInMap
            size={25}
            color={"#1F51FF"}
            className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
            onClick={() => handleFullscreen()}
          />
        ) : (
          <MdOutlineZoomOutMap
            size={25}
            color={"#1F51FF"}
            className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
            onClick={() => handleFullscreen()}
          />
        )}
        <div className="w-[45px] h-[40px] rounded-xl overflow-hidden">
          <img src={AvatarImage} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
