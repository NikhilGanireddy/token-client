import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import RoomMembers from "./RoomMembers.jsx";
import {
  MdTableRestaurant,
  FaFan,
  RiLightbulbFlashFill,
  FaChair,
} from "react-icons/all.js";
import { UilMessage } from "@iconscout/react-unicons";
import { toast } from "react-hot-toast";
import axios from "axios";

const Room = () => {
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);

  const [complaint, setComplaint] = useState("");
  const sendComplaint = async (e) => {
    e.preventDefault();
    const userName = user.name;
    const userHallTicket = user.hallTicket;
    const userBranch = user.branch;
    const userYear = user.year;
    const userMobile = user.mobile;
    const userRoom = user.room;

    try {
      const { data } = await axios.post("/user/room/sendComplaint", {
        userName,
        userHallTicket,
        userBranch,
        userYear,
        userMobile,
        complaint,
        userRoom,
      });
      toast.success("Sent Succesfully");
      setComplaint("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`scrollbar w-full h-full flex flex-col overflow-y-scroll gap-4  items-center rounded-2xl`}
    >
      <h1 className="sm:text-center lg:text-left w-full font-semibold text-2xl px-4">
        {user.room}
      </h1>
      <div className={` flex lg:flex-row sm:flex-col w-full gap-4`}>
        <div className={` sm:w-full lg:w-3/5 max-h-[500px] `}>
          <div
            className={`rounded-2xl overflow-hidden w-full h-full p-4 backdrop-blur-sm ${changeBg()}`}
          >
            <img
              className={` rounded-2xl object-cover w-full h-full object-center`}
              src={user.roomPic}
            />
          </div>
        </div>
        <div
          className={`scrollbar sm:w-full lg:w-2/5 flex flex-col justify-start scroll-smooth items-center rounded-2xl lg:max-h-[500px] overflow-y-scroll backdrop-blur-sm p-4 gap-4  ${changeBg()}`}
        >
          <h1 className="text-xl font-semibold my-4">Room Mates</h1>
          <RoomMembers />
        </div>
      </div>
      <div
        className={` flex lg:flex-row sm:flex-col sm:w-full  gap-4 min-h-[200px]`}
      >
        <div
          className={` lg:w-[40%] rounded-2xl gap-4 grid sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-sm sm:w-full`}
        >
          <div
            className={` sm:min-w-[100px] lg:min-w-[60px] sm:min-h-[100px] lg:min-h-[60px] justify-center gap-3 p-3 items-center rounded-2xl flex flex-col ${changeBg()}`}
          >
            <MdTableRestaurant className=" w-12 h-12" />
            <div className="flex justify-center items-center text-lg font-semibold gap-2">
              <h1>Tables</h1>
              <h2>1</h2>
            </div>
          </div>
          <div
            className={` sm:min-w-[100px] lg:min-w-[60px] sm:min-h-[100px] lg:min-h-[60px] justify-center gap-3 p-3 items-center rounded-2xl flex flex-col ${changeBg()}`}
          >
            <FaChair className=" w-12 h-12" />
            <div className="flex justify-center items-center text-lg font-semibold gap-2">
              <h1>Chairs</h1>
              <h2>3</h2>
            </div>
          </div>
          <div
            className={` sm:min-w-[100px] lg:min-w-[60px] sm:min-h-[100px] lg:min-h-[60px] justify-center gap-3 p-3 items-center rounded-2xl flex flex-col ${changeBg()}`}
          >
            <RiLightbulbFlashFill className=" w-12 h-12" />
            <div className="flex justify-center items-center text-lg font-semibold gap-2">
              <h1>Lights</h1>
              <h2>2</h2>
            </div>
          </div>
          <div
            className={` sm:min-w-[100px] lg:min-w-[60px] sm:min-h-[100px] lg:min-h-[60px] justify-center gap-3 p-3 items-center rounded-2xl flex flex-col ${changeBg()}`}
          >
            <FaFan className=" w-12 h-12" />
            <div className="flex justify-center items-center text-lg font-semibold gap-2">
              <h1>Fans</h1>
              <h2>1</h2>
            </div>
          </div>
        </div>

        <div
          className={` lg:w-[60%] rounded-2xl backdrop-blur-sm sm:w-full flex flex-col gap-4 p-4 items-center justify-center  ${changeBg()}`}
        >
          <h1 className="text-lg font-bold text-center">
            Complaints/repairs regarding your room?
          </h1>
          <form className=" w-full max-w-[450px] rounded-2xl flex sm:flex-col lg:flex-row gap-4 justify-center items-center">
            <textarea
              value={complaint}
              onChange={(e) => {
                setComplaint(e.target.value);
              }}
              className={` w-full`}
            ></textarea>
            <button
              onClick={sendComplaint}
              type="submit"
              className="flex justify-center items-center gap-2"
            >
              <span>Send</span> <UilMessage />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Room;
