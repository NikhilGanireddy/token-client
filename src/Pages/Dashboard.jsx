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
    <div
      className={`dashboard w-full min-h-0 rounded-2xl overflow-y-scroll flex flex-col sm:gap-2 md:gap-3 lg:gap-6 pr-2`}
    >
      <div className=" grid grid-rows-1">
        <div
          className={`grid sm:gap-2 md:gap-3 lg:gap-6  sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-3 md:grid-rows-1`}
        >
          <div
            className={`text-3xl sm:col-span-full md:col-span-4 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          ></div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            grid 2
          </div>
          <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            grid 3
          </div>
        </div>
      </div>
      <div className=" grid grid-rows-1">
        <div
          className={`grid  sm:gap-2 md:gap-3 lg:gap-6  sm:grid-cols-1 md:grid-cols-10 sm:grid-rows-2 md:grid-rows-1`}
        >
          <div
            className={`text-3xl sm:col-span-full md:col-span-6 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            grid 4
          </div>
          <div className={`text-3xl sm:col-span-full md:col-span-4`}>
            <div
              className={` grid grid-cols-1 grid-row-2  sm:gap-2 md:gap-3 lg:gap-6 `}
            >
              <div
                className={`rounded-2xl  backdrop-blur-sm min-h-[200px] ${changeBg()}`}
              >
                gri-5
              </div>
              <div
                className={` grid sm:grid-cols-1 md:grid-cols-2 min-h-[200px] sm:gap-2 md:gap-3 lg:gap-6 `}
              >
                <div
                  className={` backdrop-blur-sm rounded-2xl sm:min-h-[200px] md:min-h-max ${changeBg()}`}
                ></div>
                <div
                  className={` backdrop-blur-sm rounded-2xl sm:min-h-[200px] md:min-h-max ${changeBg()}`}
                ></div>
              </div>
            </div>
          </div>
          {/* <div
            className={`text-3xl sm:col-span-full md:col-span-3 rounded-2xl backdrop-blur-sm min-h-[350px]  ${changeBg()}`}
          >
            grid 6
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
