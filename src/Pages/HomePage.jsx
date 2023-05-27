import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { UilMoon, UilSun, UilUserCircle } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg } =
    useContext(UserContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={` flex justify-center w-full ${changeMainBg()} min-h-screen p-6`}
    >
      <div className={`w-full min-h-[80vh] flex gap-12 flex-col`}>
        <nav
          className={` flex w-full justify-between items-center sm:px-4 lg:px-12 py-4 rounded-2xl shadow-2xl ${changeBg()} `}
        >
          <h1 className={` text-2xl font-semibold`}>Rudramadevi</h1>
          <div className={` flex justify-between gap-2 items-center`}>
            <div
              className={` p-2 rounded-full border cursor-pointer border-gray-500 `}
              onClick={toggleDarkMode}
            >
              {darkMode ? <UilSun /> : <UilMoon />}
            </div>
            <Link
              to={user ? "/user/dashboard" : "/login"}
              className={` p-2 rounded-full border cursor-pointer  border-gray-500 `}
            >
              <UilUserCircle />
            </Link>
          </div>
        </nav>
        <main
          className={` w-full flex justify-center items-center shadow-2xl rounded-2xl min-h-[50vh] ${changeBg()}`}
        >
          <Link
            to={user ? "/user/dashboard" : "/login"}
            className={`font-semibold ${BtnBg()}`}
          >
            {user ? "Go to dashboard" : "Login"}
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
