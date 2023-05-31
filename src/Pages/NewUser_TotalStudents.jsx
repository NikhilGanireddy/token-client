import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { RiUserAddFill } from "react-icons/all.js";
import { Link } from "react-router-dom";

const NewUser_TotalStudents = () => {
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
    hoverTextChange,
  } = useContext(UserContext);
  const studentsList = user.studentsList;

  return (
    <div
      className={` backdrop-blur-sm px-4 py-6 gap-4 rounded-2xl w-full flex flex-col justify-center items-center ${changeBg()}`}
    >
      <Link
        to={"/admin/createStudent"}
        className={`text-3xl cursor-pointer p-3 rounded-full ${changeBg()} ${hoverTextChange()} `}
      >
        <RiUserAddFill />
      </Link>
      <div className="text-lg font-semibold flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center gap-2">
          <span>Total Students:</span>
          <span>{studentsList.length}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>First Year Students:</span>
          <span>0</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Second Year Students:</span>
          <span>0</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Third Year Students:</span>
          <span>0</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Fourth Year Students:</span>
          <span>9</span>
        </div>
      </div>
    </div>
  );
};

export default NewUser_TotalStudents;
