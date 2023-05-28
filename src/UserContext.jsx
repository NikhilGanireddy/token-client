import axios from "axios";

import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(null);
  const [menu, showMenu] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        // console.log(ready);
        window.localStorage.setItem("loggedIn", JSON.stringify(data));

        setReady(true);
        // console.log(ready);
      });
    }
  }, []);

  const svgBg=()=>{
    return
  }

  const changeMainBg = () => {
    if (darkMode == true) {
      return `bg-dark text-gray-300`;
    }
    if (darkMode == false) {
      return `bg-light text-gray-900`;
    }
  };

  const changeBg = () => {
    if (darkMode == true) {
      return `bg-white/10 text-gray-300`;
    }
    if (darkMode == false) {
      return `bg-black/20 text-gray-900`;
    }
  };

  const showSideBar = () => {
    showMenu(!menu);
    // console.log(menu);
  };

  const BtnBg = () => {
    return `bg-indigo-700 text-white px-6 py-2 rounded-xl`;
  };

  const changeBgMenu = () => {
    if (darkMode == true) {
      return `bg-gray-900 text-[#D8B9C3]`;
    }
    if (darkMode == false) {
      return `bg-white text-gray-800`;
    }
  };

  const hoverBgChange = () => {
    if (darkMode == true) {
      return `hover:bg-[#D8B9C3] hover:text-gray-800`;
    }
    if (darkMode == false) {
      return `hover:bg-gray-800 hover:text-white`;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        darkMode,
        menu,
        setUser,
        setDarkMode,
        setReady,
        changeMainBg,
        changeBg,
        showSideBar,
        BtnBg,
        changeBgMenu,
        hoverBgChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
