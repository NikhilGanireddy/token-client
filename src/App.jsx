import React from "react";
import UserContextProvider from "./UserContext";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage.jsx";
import axios from "axios";
import Dashboard from "./Pages/Dashboard.jsx";
import Attendance from "./Pages/Attendance.jsx";
import Complaints from "./Pages/Complaints.jsx";
import Feedback from "./Pages/Feedback.jsx";
import UserLogout from "./Pages/UserLogout.jsx";
import Ms from "./Pages/Ms.jsx";
import Food from "./Pages/Food.jsx";

import Profile from "./Pages/Profile.jsx";
import Room from "./Pages/Room.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import ChangePassword from "./Pages/ChangePassword.jsx";
import UserLayout from "./UserLayout.jsx";
import AdminLayout from "./AdminLayout.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AdminLogout from "./Pages/AdminLogout.jsx";
import Students from "./Pages/Students.jsx";
import CreateStudent from "./Pages/CreateStudent";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  // axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.baseURL = "https://tokenserver.onrender.com";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/user"} element={<UserLayout />}>
          <Route path={"/user/dashboard"} element={<Dashboard />} />
          <Route path={"/user/attendance"} element={<Attendance />} />
          <Route path={"/user/complaints"} element={<Complaints />} />
          <Route path={"/user/feedback"} element={<Feedback />} />
          <Route path={"/user/food"} element={<Food />} />
          <Route path={"/user/logout"} element={<UserLogout />} />
          <Route path={"/user/ms"} element={<Ms />} />
          <Route path={"/user/profile"} element={<Profile />} />
          <Route path={"/user/room"} element={<Room />} />
          <Route
            path={"/user/profile/changePassword"}
            element={<ChangePassword />}
          />
        </Route>
        <Route path={"/admin"} element={<AdminLayout />}>
          <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
          <Route path={"/admin/students"} element={<Students />} />
          <Route path={"/admin/createStudent"} element={<CreateStudent />} />

          <Route path={"/admin/logout"} element={<AdminLogout />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
