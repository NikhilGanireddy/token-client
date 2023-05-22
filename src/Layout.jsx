import React, { useContext } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "./UserContext.jsx";

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

  if (user == null && ready) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div
      className={`flex w-screen sm:gap-3 md:gap-6 h-screen z-20 sm:p-2 md:p-6 ${changeMainBg()}`}
    >
      <Sidebar />
      <div className={`w-full flex flex-col  sm:gap-3 md:gap-6`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
