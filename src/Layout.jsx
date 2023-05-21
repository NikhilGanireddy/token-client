import React, {useContext} from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import {UserContext} from "./UserContext.jsx";

const Layout = () => {
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
  return (
    <div className={`flex w-screen gap-6 min-h-screen ${changeMainBg()}`}>
      <Sidebar />
      <div className={` flex flex-col gap-6 ${changeMainBg()}`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
