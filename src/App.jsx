import React from "react";
import UserContextProvider from "./UserContext";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage.jsx";
import axios from "axios";
import Layout from "./Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Attendance from "./Pages/Attendance.jsx";
import Complaints from "./Pages/Complaints.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Logout from "./Pages/Logout.jsx";
import Ms from "./Pages/Ms.jsx";
import Food from "./Pages/Food.jsx";

import Profile from "./Pages/Profile.jsx";
import Room from "./Pages/Room.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4000";
  // axios.defaults.baseURL = "https://tokenserver.onrender.com";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />

        <Route path={"/user"} element={<Layout />}>
          <Route path={"/user/dashboard"} element={<Dashboard />} />
          <Route path={"/user/attendance"} element={<Attendance />} />
          <Route path={"/user/complaints"} element={<Complaints />} />
          <Route path={"/user/feedback"} element={<Feedback />} />
          <Route path={"/user/food"} element={<Food />} />
          <Route path={"/user/logout"} element={<Logout />} />
          <Route path={"/user/ms"} element={<Ms />} />
          <Route path={"/user/profile"} element={<Profile />} />
          <Route path={"/user/room"} element={<Room />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
