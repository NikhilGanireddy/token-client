import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { UilMultiply } from "@iconscout/react-unicons";
import SidebarComponent from "./SidebarComponent";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const {
    user,
    darkMode,
    menu,
    setUser,
    setDarkMode,
    setReady,
    changeMainBg,
    changeBg,
    showSideBar,
    BtnBg,
    changeBgMenu,
  } = useContext(UserContext);
  return (
    <div className={`relative`}>
      <div
        className={` w-max sm:hidden md:flex h-full rounded-2xl flex-col gap-12  backdrop-blur-sm p-4 p ${changeBg()} `}
      >
        <div className="font-semibold text-3xl">
          <Link to={"/"} className="mt-2 text-center rudramadevi md:hidden xl:flex px-4">
            Rudramadevi
          </Link>
        </div>
        <SidebarComponent />
      </div>
      <div
        className={`${
          menu
            ? ` absolute w-max left-3 top-0 z-50 flex-col h-full rounded-2xl px-6 gap-2 py-4 backdrop-blur-none  sm:flex md:hidden ${changeBgMenu()}`
            : "hidden"
        } `}
      >
        <div className="font-semibold text-2xl px-2 gap-10 mb-8 flex items-center justify-between">
          <Link to={"/"} className="px-4 py-2 text-center rudramadevi">Rudramadevi</Link>
          <div
            className=" p-1 border rounded-full cursor-pointer"
            onClick={showSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <SidebarComponent />
      </div>
    </div>
  );
};

export default Sidebar;
