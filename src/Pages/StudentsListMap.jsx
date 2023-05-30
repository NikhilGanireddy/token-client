import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

const StudentsListMap = () => {
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

  const studentsList = user.studentsList;

  return (
    <div className=" w-full h-full flex flex-col items-center gap-2 ">
      {studentsList.map((user) => {
        return (
          <div
            className={` w-full rounded-2xl grid backdrop-blur-sm  grid-cols-3 px-4 py-3 ${changeBg()}`}
            key={user._id}
          >
            <div className={`text-lg font-semibold capitalize`}>
              {user.name}
            </div>
            <div className={`text-lg text-center font-semibold capitalize`}>
              {user.hallTicket}
            </div>
            <div className={`text-lg text-right font-semibold uppercase`}>
              {user.branch}
            </div>
          </div>
        );
      })}
      {studentsList.map((user) => {
        return (
          <div
            className={` w-full rounded-2xl grid backdrop-blur-sm  grid-cols-3 px-4 py-3 ${changeBg()}`}
            key={user._id}
          >
            <div className={`text-lg font-semibold capitalize`}>
              {user.name}
            </div>
            <div className={`text-lg text-center font-semibold capitalize`}>
              {user.hallTicket}
            </div>
            <div className={`text-lg text-right font-semibold uppercase`}>
              {user.branch}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentsListMap;
