import React from "react";
import Header from "../pages/includes/Header";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCalendarNumber } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import DashboardRouter from "../routers/router/DashboardRouter";
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../store/handle/handleSlice";
import { selectDashboardMenu } from "../store/handle/handleSelector";
import { FaChevronUp } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BiCartDownload } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { IoManSharp } from "react-icons/io5";
import { LuMonitorSpeaker } from "react-icons/lu";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const menu = useSelector(selectDashboardMenu);
  console.log(menu, "_____");
  const MenuIcon = () => {
    return (
      <div
        onClick={() => {
          dispatch(handleMenu());
        }}
        className="fixed top-[120px] linear-bg p-2 rounded-tr-xl rounded-br-xl transform transition-transform duration-200 hover:scale-125 cursor-pointer"
      >
        <TbLayoutDashboard size={50} color="#fff" />
      </div>
    );
  };
  const SideBar = () => {
    return (
      <div
        // onClick={() => {
        //   dispatch(handleMenu());
        // }}
        className="fixed top-[120px]  bg-white p-2 rounded-tr-xl rounded-br-xl shadow-md transform transition-transform duration-200"
      >
        <div
          onClick={() => {
            dispatch(handleMenu());
          }}
          className="flex justify-center items-center border-b pb-2 cursor-pointer"
        >
          <FaChevronUp
            color="#ccc"
            className="transform transition-transform duration-200 hover:scale-125"
          />
        </div>
        <div className="py-2 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="linear-bg w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <IoIosCart size={35} color="#fff" />
            </div>
            <h4
              className="transform text-[12px] rotate-[360deg]"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              Finance
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#ebe7e7] to-[#d5d0d0] w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <BiCartDownload size={35} color="#fff" />
            </div>
            <h4
              className="transform text-[12px] rotate-[360deg]"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              Procurement
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-red-300 to-red-800 w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <CgFileDocument size={35} color="#fff" />
            </div>
            <h4
              className="transform text-[12px] rotate-[360deg]"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              Project
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-orange-300 to-orange-800 w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <IoManSharp size={35} color="#fff" />
            </div>
            <h4
              className="transform text-[12px] rotate-[360deg]"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              HR Management
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#ebe7e7] to-[#d5d0d0] w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <LuMonitorSpeaker size={35} color="#fff" />
            </div>
            <h4
              className="transform text-[12px] rotate-[360deg]"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              CRM
            </h4>
          </div>
        </div>
      </div>
    );
  };
  const CalendarIcon = () => {
    return (
      <div className="fixed top-[120px] right-0 bg-white p-2 rounded-tl-xl rounded-bl-xl cursor-pointer transform transition-transform duration-200 hover:scale-125">
        <IoCalendarNumber size={50} color="#00A1F2" />
      </div>
    );
  };

  const SettingsSection = () => {
    const settingsOptions = [
      { id: 1, label: "Settings" },
      { id: 2, label: "Help" },
      { id: 3, label: "Preference" },
    ];

    return (
      <div className="fixed top-[40%] right-0 flex flex-col items-center space-y-4">
        {settingsOptions.map((option) => (
          <div
            key={option.id}
            className="bg-white p-2 flex flex-col items-center justify-center rounded-tl-xl rounded-bl-xl shadow-md cursor-pointer transform transition-transform duration-200 hover:scale-110"
          >
            <MdSettings size={20} className="text-gray-500" />
            <span
              className="text-gray-800"
              style={{
                writingMode: "vertical-rl", // Vertical text orientation
                transform: "rotate(360deg)", // To make it readable top to bottom
              }}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#edf3fc] relative">
      <Header />
      {!menu && <MenuIcon />}
      <CalendarIcon />
      <SettingsSection />
      {menu && <SideBar />}
      <div className="pt-[100px] px-[90px] overflow-y-scroll w-full">
        <DashboardRouter />
      </div>
    </div>
  );
};

export default Layout;
