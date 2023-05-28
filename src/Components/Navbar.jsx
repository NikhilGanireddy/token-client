import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { UilApps, UilSun, UilMoon } from "@iconscout/react-unicons";

const Navbar = () => {
  const {
    user,
    ready,
    setUser,
    setReady,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    showSideBar,
    BtnBg,
    hoverBgChange,
  } = useContext(UserContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={` w-full p-4 rounded-2xl flex justify-between items-center backdrop-blur-sm ${changeBg()}`}
    >
      <div className="sm:text-lg md:text-2xl font-semibold capitalize">
        Hello {user?.name}
      </div>
      <div className=" flex justify-center items-center gap-3 cursor-pointer">
        <div
          className={` p-2 rounded-full border border-gray-600 duration-200 transition-all ease-in-out ${hoverBgChange()}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <UilSun /> : <UilMoon />}
        </div>
        <div
          className=" p-2 rounded-full border cursor-pointer sm:flex md:hidden"
          onClick={showSideBar}
        >
          <UilApps />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
