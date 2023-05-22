import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import SidebarComponent from "../Components/SidebarComponent";

const Dashboard = () => {
  const {
    user,
    ready,
    setUser,
    setReady,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);

  const [tempUser, setTempUser] = useState(null);

  return (
    <div className={`dashboard w-full min-h-0 rounded-2xl overflow-y-scroll flex flex-col gap-6 `}>
      <div className=" grid grid-rows-1">
        <div
          className={`grid gap-6 sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-3 md:grid-rows-1`}
        >
          <div
            className={`text-3xl sm:col-span-full md:col-span-4 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 1
          </div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 2
          </div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 3
          </div>
        </div>
      </div>
      <div className=" grid grid-rows-1">
        <div
          className={`grid gap-6 sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-3 md:grid-rows-1`}
        >
          <div
            className={`text-3xl sm:col-span-full md:col-span-4 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 1
          </div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 2
          </div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[500px]  ${changeBg()}`}
          >
            grid 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
