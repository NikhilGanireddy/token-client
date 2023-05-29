import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const RoomMembers = () => {
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);

  const roomMates = user.roomMates;
  const roomMembers = () => {
    roomMates.map((data) => {
      return <div>{data.name}</div>;
    });
  };

  return (
    <div className={` w-full flex flex-col gap-2`}>
      {roomMates.map((data) => {
        return (
          <div
            className={`p-3 rounded-xl flex  justify-between  ${changeBg()}`}
            key={data._id}
          >
            <div className=" flex items-center gap-2">
              <div className=" w-6 h-6 rounded-full">
                <img className="w-full h-full object-cover object-center rounded-full" src={data.pic} alt="" />
              </div>
              <div className="capitalize font-semibold">{data.name}</div>
            </div>
            <div className="uppercase font-semibold">{data.branch}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomMembers;
