import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const Complaints = () => {
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

  const navigate = useNavigate();

  const [complaint, setComplaint] = useState("");
  const sendComplaint = async (e) => {
    e.preventDefault();
    const userName = user.name;
    const userHallTicket = user.hallTicket;
    const userBranch = user.branch;
    const userYear = user.year;
    const userMobile = user.mobile;

    try {
      const { data } = await axios.post("/user/complaints/sendComplaint", {
        userName,
        userHallTicket,
        userBranch,
        userYear,
        userMobile,
        complaint,
      });
      toast.success("Sent Succesfull");
      navigate("/user/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`complaints w-full h-full rounded-2xl backdrop-blur-sm flex p-4 justify-center overflow-y-scroll items-center ${changeBg()} `}
    >
      <div
        className={` w-full max-w-[450px]  flex flex-col justify-center gap-8 items-center rounded-2xl p-4`}
      >
        <div className={` text-2xl font-semibold`}>Send a Complaint!</div>
        <form
          className={`w-full  flex flex-col justify-center items-center gap-4`}
          onSubmit={sendComplaint}
        >
          <div
            className={` flex sm:flex-col md:flex-row  justify-between items-center w-full px-4`}
          >
            <div className={`flex items-center gap-2`}>
              <div>From:</div>
              <div className={` capitalize text-lg font-semibold`}>
                {user.name}
              </div>
            </div>
            <div className={`flex items-center gap-2`}>
              <div>To:</div>
              <div className={` capitalize text-lg font-semibold`}>
                Archana Mam
              </div>
            </div>
          </div>
          <textarea
            className={` resize-y min-h-[200px] outline-none border-gray-600`}
            placeholder={"State your complaints"}
            onChange={(e) => {
              setComplaint(e.target.value);
            }}
          />
          <button type={"submit"}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Complaints;
