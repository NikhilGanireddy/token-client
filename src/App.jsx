import React from "react";
import UserContextProvider from "./UserContext";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage.jsx";
import axios from "axios";
import Layout from "./Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const App = () => {
  // axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.baseURL = "https://token-server-721u.onrender.com";

  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/user"} element={<Layout />}>
          <Route path={"/user/dashboard"} element={<Dashboard />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
