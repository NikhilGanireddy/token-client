import axios from "axios";

import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(null);
  const [menu, showMenu] = useState(true);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        // console.log(ready);
        // window.localStorage.setItem("loggedIn", JSON.stringify(data));

        setReady(true);
        // console.log(ready);
      });
    }
  }, []);

  const svgBg = () => {
    return;
  };

  const changeMainBg = () => {
    if (darkMode == true) {
      return `bg-dark text-white`;
    }
    if (darkMode == false) {
      return `bg-light text-gray-900`;
    }
  };

  const changeBg = () => {
    if (darkMode == true) {
      return `bg-white/10 text-white`;
    }
    if (darkMode == false) {
      return `bg-black/20 text-black`;
    }
  };

  const showSideBar = () => {
    showMenu(!menu);
    // console.log(menu);
  };

  const BtnBg = () => {
    return `text-[#4F0DAA] bg-white px-6 py-2 rounded-xl font-semibold`;
  };

  const changeBgMenu = () => {
    if (darkMode == true) {
      return `bg-gray-900 text-white`;
    }
    if (darkMode == false) {
      return `bg-white text-gray-800`;
    }
  };

  const hoverBgChange = () => {
    if (darkMode == true) {
      return `hover:bg-white hover:text-gray-800`;
    }
    if (darkMode == false) {
      return `hover:bg-[#4F0DAA] hover:text-white`;
    }
  };
  const hoverTextChange = () => {
    if (darkMode == false) {
      return `hover:text-white `;
    }
    if (darkMode == true) {
      return `hover:text-gray-500 `;
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
        hoverTextChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
