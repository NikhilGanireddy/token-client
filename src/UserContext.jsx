import axios from "axios";

import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        // console.log(ready);
        setReady(true);
        // console.log(ready);
      });
    }
  }, []);
  const changeMainBg = () => {
    if (darkMode == true) {
      return `bg-[#151922] text-white`;
    }
    if (darkMode == false) {
      return `bg-gray-100 text-black`;
    }
  };

  const changeBg = () => {
    if (darkMode == true) {
      return `bg-[#151922] text-white`;
    }
    if (darkMode == false) {
      return `bg-white text-black`;
    }
  };

  const BtnBg = () => {
    return `bg-indigo-700 text-white px-6 py-2 rounded-xl`;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        darkMode,
        setUser,
        setDarkMode,
        setReady,
        changeMainBg,
        changeBg,
        BtnBg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
