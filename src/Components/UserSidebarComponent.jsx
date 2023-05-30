import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import userSidebarData from "../data/userSidebarData.jsx";
import { Link, Navigate } from "react-router-dom";

const UserSidebarComponent = () => {
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

  return (
    <div className=" flex flex-col w-full h-full gap-2">
      {userSidebarData.map((data) => {
        return (
          <Link
            to={data.path}
            onClick={() => {
              showSideBar();
            }}
            key={data.id}
            className={` py-2 rounded-xl md:pr-4 xl:pr-24 duration-200 transition-all ease-in-out pl-4 flex items-center gap-4 font-semibold ${hoverBgChange()} ${
              data.class
            }`}
          >
            <div>{data.icon}</div>
            <div className="sm:flex md:hidden xl:flex ">{data.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default UserSidebarComponent;
