import React from "react";
import Card from "../../components/cards/Card";
import CustomLineChart from "../../components/graph/CustomLineChart";
import { LuSun } from "react-icons/lu";
import Divider from "../../components/utils/Divider";
import { PiCalendarDotsFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <div className="py-[80px]">
        <h3 className="text-4xl text-[#3f4e62]">
          WELCOME <b>PETER</b>
        </h3>
      </div>
      <div className="w-full flex justify-between gap-3">
        <Card className="p-10 flex items-center gap-10 w-2/3 justify-between">
          <div>
            <h2 className="text-4xl font-bold">LOGO</h2>
          </div>
          <div className="">
            <div className="mb-4">
              <h4 className="text-light-text font-semibold text-[20px]">
                F2C Software LLC
              </h4>
              <h6 className="text-light-text font-thin text-[16px]">
                Dubai, United Arab Emirates
              </h6>
            </div>
            <div className="mb-4">
              <h4 className="text-light-text font-semibold text-[20px]">
                9876543456789
              </h4>
              <h6 className="text-light-text font-thin text-[16px]">
                Tax registration number
              </h6>
            </div>
            <div>
              <h4 className="text-light-text font-semibold text-[20px]">
                01 Apr 2023 to 31 Mar 2024
              </h4>
              <h6 className="text-light-text font-thin text-[16px]">
                Period of current financial year
              </h6>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className="w-[100%]">
              <CustomLineChart />
              <div className="float-right">
                <select className="py-2 px-3">
                    <option>AED</option>
                    <option>IND</option>
                    <option>AUS</option>
                </select>
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-1/2 p-10">
            <div>
                <div className="flex items-center gap-8 pb-10">
                    <LuSun size={90} color="#fcc341"/>
                    <div className="w-[50%]">
                        <h4 className="text-light-text font-bold text-[18px]">Dubai City</h4>
                        <h5 className="text-[#f6874a]">Sunny</h5>
                        <h4 className="text-bold text-light-text">Precipitation: 50%</h4>
                    </div>
                    <div>
                        <h4 className="text-[38px] text-[#02afe4] text-center font-bold">31°</h4>
                        <h5 className="text-[20px] font-semibold">32°/25°</h5>
                    </div>
                </div>
                <Divider/>
                <div className="py-8 flex justify-between">
                    <div className="flex items-center">
                        <PiCalendarDotsFill size={60} color="#02afe4"/>
                        <div>
                            <h4 className="text-light-text text-[20px] font-bold">10 Jan 2024</h4>
                            <h4 className="text-light-text text-[14px]">Thursday</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaRegClock size={60} color="#02afe4"/>
                        <div>
                            <h4 className="text-light-text text-[20px] font-bold">02:22:00 pm</h4>
                            <h4 className="text-light-text text-[14px]">GMT</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
      </div>
      <div className="mt-3 flex gap-3 flex-wrap">
        <Card className="w-[32.8%] p-5 h-[230px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <h4 className="text-3xl font-medium text-light-text">Customer</h4>
                <span className="linear-bg py-1 px-2 rounded-xl text-white">300</span>
            </div>
            <div>
                <h4 className="text-[18px] text-light-text ">AED <span className="text-[36px] font-medium">15,540</span></h4>
                <div className="flex items-center gap-2">
                    <div className="linear-bg w-5 h-5"/>
                    <h5 className="text-light-text">Total Due</h5>
                    <h5 className="text-orange-400">60.20%</h5>
                </div>
            </div>
        </Card>
        <Card className="w-[32.8%] p-5 h-[230px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <h4 className="text-3xl font-medium text-light-text">Customer</h4>
                <span className="linear-bg py-1 px-2 rounded-xl text-white">300</span>
            </div>
            <div>
                <h4 className="text-[18px] text-light-text ">AED <span className="text-[36px] font-medium">15,540</span></h4>
                <div className="flex items-center gap-2">
                    <div className="linear-bg w-5 h-5"/>
                    <h5 className="text-light-text">Total Due</h5>
                    <h5 className="text-orange-400">60.20%</h5>
                </div>
            </div>
        </Card>
        <Card className="w-[32.8%] p-5 h-[230px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <h4 className="text-3xl font-medium text-light-text">Customer</h4>
                <span className="linear-bg py-1 px-2 rounded-xl text-white">300</span>
            </div>
            <div>
                <h4 className="text-[18px] text-light-text ">AED <span className="text-[36px] font-medium">15,540</span></h4>
                <div className="flex items-center gap-2">
                    <div className="linear-bg w-5 h-5"/>
                    <h5 className="text-light-text">Total Due</h5>
                    <h5 className="text-orange-400">60.20%</h5>
                </div>
            </div>
        </Card>
        <Card className="w-[32.8%] p-5 h-[230px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <h4 className="text-3xl font-medium text-light-text">Customer</h4>
                <span className="linear-bg py-1 px-2 rounded-xl text-white">300</span>
            </div>
            <div>
                <h4 className="text-[18px] text-light-text ">AED <span className="text-[36px] font-medium">15,540</span></h4>
                <div className="flex items-center gap-2">
                    <div className="linear-bg w-5 h-5"/>
                    <h5 className="text-light-text">Total Due</h5>
                    <h5 className="text-orange-400">60.20%</h5>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
