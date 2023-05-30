import React, { useContext } from "react";
import UserSidebar from "./Components/UserSidebar.jsx";
import UserNavbar from "./Components/UserNavbar.jsx";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "./UserContext.jsx";

import { UilMoon, UilSun, UilUserCircle } from "@iconscout/react-unicons";
import { ImSpinner9 } from "react-icons/all.js";
import UserLogout from "./Pages/UserLogout.jsx";

const UserLayout = () => {
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

  if (user == null && ready) {
    return <Navigate to={"/login"} />;
  }

  if (!user) {
    return (
      <div
        className={` w-screen h-screen min-h-[590px] ${changeBg()} flex justify-center items-center`}
      >
        <div className="text-8xl animate-spin">
          <ImSpinner9 />
        </div>
      </div>
    );
  }

  if (user.profile == "admin") {
    return (
      <div
        className={` w-screen h-screen p-6 flex justify-center items-center ${changeMainBg()}`}
      >
        <UserLogout />
      </div>
    );
  } else {
    return (
      <div
        className={`flex w-screen sm:gap-3 md:gap-6 h-screen z-20 sm:p-2 sm:pb-6 md:p-6 ${changeMainBg()}`}
      >
        <UserSidebar />
        <div className={`w-full flex flex-col  sm:gap-3 md:gap-6`}>
          <UserNavbar />
          <Outlet />
        </div>
      </div>
    );
  }
};

export default UserLayout;
