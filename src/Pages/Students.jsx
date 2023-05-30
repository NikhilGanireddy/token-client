import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import axios from "axios";
import StudensListMap from "./StudentsListMap.jsx";

const Students = () => {
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
    <div
      className={`dashboard overflow-y-scroll w-full h-full rounded-2xl justify-center items-center flex sm:flex-col gap-4  lg:flex-row lg:gap-4`}
    >
      <div className={`lg:w-[30%] sm:w-full rounded-2xl h-full `}>
        <h1 className={`text-xl font-semibold`}>Add a new Student</h1>
        <div
          className={` w-full min-h-[300px] rounded-2xl backdrop-blur-sm h-1/2 ${changeBg()}`}
        ></div>
      </div>
      <div
        className={`dashboard lg:w-[70%] sm:w-full sm:pb-6 lg:pb-0 rounded-2xl h-full sm:min-h-[60vh] overflow-y-scroll `}
      >
        <h1 className={`text-xl font-semibold mb-4`}>
          Click to edit the student details
        </h1>
        <StudensListMap />
      </div>
    </div>
  );
};

export default Students;
