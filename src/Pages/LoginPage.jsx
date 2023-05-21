import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import axios from "axios";
import { UilMoon, UilSun, UilUserCircle } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [hallTicket, setHallTicket] = useState("");
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const loginUser = async (ev) => {
    ev.preventDefault();
    if (!name || !hallTicket || !room || !password) {
      toast.error("Please fill all the forms");
    } else {
      if (password.length < 6) {
        toast.error("Password should have a minimum of 6 charecters");
      }
    }

    try {
      const { data } = await axios.post("/login", {
        name,
        hallTicket,
        room,
        password,
      });
      toast.success("Logged in succesfully");
      setUser(data);
      // console.log(user);
      navigate("/user/dashboard");
    } catch (err) {
      toast.error("Some error");
    }
  };

  return (
    <div
      className={` flex justify-center w-full ${changeMainBg()} min-h-screen p-6`}
    >
      <div className={`w-full min-h-[80vh] flex items-center  gap-12 flex-col`}>
        <nav
          className={` flex w-full justify-between items-center sm:px-4 md:px-12 py-4 rounded-2xl shadow-2xl ${changeBg()} `}
        >
          <Link to={"/"} className={` text-2xl font-semibold`}>
            Rudramadevi
          </Link>
          <div className={` flex justify-between gap-2 items-center`}>
            <div
              className={` p-2 rounded-full border cursor-pointer border-indigo-800 `}
              onClick={toggleDarkMode}
            >
              {darkMode ? <UilSun /> : <UilMoon />}
            </div>
          </div>
        </nav>
        <main
          className={` sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mt-0 lg:mt-32  flex flex-col p-12 gap-6 justify-center items-center shadow-2xl rounded-2xl min-h-[50vh] ${changeBg()}`}
        >
          <h1 className={` text-2xl font-semibold`}> Login</h1>
          <form
            className=" w-full h-max sm:py-4 lg:py-12   rounded-2xl flex flex-col justify-center items-center gap-3"
            onSubmit={loginUser}
          >
            <input
              className=""
              type="text"
              placeholder="Name"
              value={name}
              onChange={(ev) => {
                setName(ev.target.value.toLowerCase());
              }}
            />
            <input
              className=""
              type="text"
              placeholder="Hall ticket No"
              value={hallTicket}
              onChange={(ev) => {
                setHallTicket(ev.target.value.toUpperCase());
              }}
            />
            <input
              className=""
              type="text"
              placeholder="Room No"
              value={room}
              onChange={(ev) => {
                setRoom(ev.target.value.toUpperCase());
              }}
            />
            <input
              className=""
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
