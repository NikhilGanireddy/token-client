import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

const Dashboard = () => {
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

  const [tempUser, setTempUser] = useState(null);

  if (!user && ready) {
    return <Navigate to={"/login"} />;
  }

  if (user) {
    // console.log(user);
    try {
      const { name, _id, hallTicket } = user;
      const data = axios.get("/user/dashboard", { name, _id, hallTicket });

      console.log();
      console.log(user);

      // console.log(tempUser);
    } catch (err) {
      console.log(err);
    }
    return <div>{user._id}</div>;
  }
};

export default Dashboard;
