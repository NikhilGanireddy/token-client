import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import sidebarData from "../data/sidebarData";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
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
      {sidebarData.map((data) => {
        return (
          <Link
            to={data.path}
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

export default SidebarComponent;
