import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import axios from "axios";
import StudensListMap from "./StudentsListMap.jsx";
import NewUser_TotalStudents from "./NewUser_TotalStudents.jsx";
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
    hoverTextChange,
  } = useContext(UserContext);
  const studentsList = user.studentsList;
  return (
    <div
      className={`scrollbar overflow-y-scroll w-full h-full rounded-2xl justify-center items- flex sm:flex-col gap-4  lg:flex-row lg:gap-4`}
    >
      <div
        className={`lg:w-[30%] sm:w-full h-full rounded-2xl flex justify-center items-center flex-col `}
      >
        <h1 className={`text-xl font-semibold mb-4 w-full`}>
          Add a new Student
        </h1>
        <NewUser_TotalStudents />
      </div>
      <div
        className={`scrollbar lg:w-[70%] sm:w-full sm:pb-6 lg:pb-0 rounded-2xl sm:min-h-[60vh] overflow-y-scroll `}
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
