import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import UserSidebarComponent from "../Components/UserSidebarComponent.jsx";
import Attendance from "./Attendance.jsx";
import Food from "./Food.jsx";
import Profile from "./Profile.jsx";
import Room from "./Room.jsx";
import Ms from "./Ms.jsx";
import Complaints from "./Complaints.jsx";
import Feedback from "./Feedback.jsx";

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
    <div
      className={`scrollbar w-full min-h-0 rounded-2xl overflow-y-scroll flex flex-col sm:gap-2 md:gap-3 lg:gap-6 pr-2`}
    >
      <div className="grid grid-rows-1 ">
        <div
          className={`grid sm:gap-2 md:gap-3 lg:gap-6  sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-3 md:grid-rows-1`}
        >
          <div
            className={` p-4 sm:col-span-full md:col-span-4 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            <Attendance />
          </div>
          <div
            className={` p-4 sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            <Food />
          </div>
          <div
            className={` p-4 sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            Profile
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 ">
        <div
          className={`grid  sm:gap-2 md:gap-3 lg:gap-6  sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-2 md:grid-rows-1`}
        >
          <div
            className={` p-4 sm:col-span-full md:col-span-6 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            Room
          </div>
          <div className={` sm:col-span-full md:col-span-4`}>
            <div
              className={` grid grid-cols-1 grid-row-2  sm:gap-2 md:gap-3 lg:gap-6 `}
            >
              <div
                className={`rounded-2xl p-4 backdrop-blur-sm min-h-[200px] ${changeBg()}`}
              >
                <Ms />
              </div>
              <div
                className={` grid sm:grid-cols-1 md:grid-cols-2 min-h-[200px] sm:gap-2 md:gap-3 lg:gap-6 `}
              >
                <div
                  className={`p-4 backdrop-blur-sm rounded-2xl sm:min-h-[200px] md:min-h-max ${changeBg()}`}
                >
                  Complaints
                </div>
                <div
                  className={`p-4 backdrop-blur-sm rounded-2xl sm:min-h-[200px] md:min-h-max ${changeBg()}`}
                >
                  <Feedback />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={` p-4 sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            grid 6
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
