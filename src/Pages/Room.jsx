import React, {useContext} from 'react'
import {UserContext} from "../UserContext.jsx";

const Room = () => {
    const {
        user, setUser, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
    } = useContext(UserContext);


    return (<div
        className={` w-full h-full flex justify-center flex-col items-center backdrop-blur-sm rounded-2xl p-4 ${changeBg()}`}>
        Room
    </div>)
}

export default Room