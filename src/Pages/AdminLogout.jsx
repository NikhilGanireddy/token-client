import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

const UserLogout = () => {
  const navigate = useNavigate();

  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);
  const logOut = (e) => {
    e.preventDefault();
    navigate("/");
    setUser(null);
    window.localStorage.removeItem("loggedIn");
  };
  return (
    <div
      className={` w-full h-full flex flex-col p-6 justify-center gap-12 items-center rounded-2xl backdrop-blur-sm ${changeBg()}`}
    >
      {user.profile == "user" && (
        <div className=" text-4xl font-extrabold text-center">
          Sorry, You are not authorised to view this page
        </div>
      )}

      <div
        className={`w-full max-w-[450px] p-4 flex flex-col justify-center items-center gap-6`}
      >
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-2xl text-center">Logged in as</h1>
          <span className="text-lg font-semibold text-center">
            ({user.hallTicket})
          </span>
        </div>
        <button type="submit" onClick={logOut}>
          Logout
        </button>
        <Link
          className=" bg-white text-[#4F0DAA] px-6 py-2 rounded-xl font-semibold"
          to={"/"}
        >
          Go to HomePage
        </Link>
      </div>
    </div>
  );
};

export default UserLogout;
