import React, {useContext} from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import {UserContext} from "../UserContext.jsx";

const Logout = () => {

    const navigate = useNavigate()

    const {
        user, setUser, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
    } = useContext(UserContext);
    const logOut = (e) => {
        e.preventDefault()
        navigate("/")
        setUser(null)
        window.localStorage.removeItem("loggedIn")
    }
    return (<div>

            <button onClick={logOut} type={"submit"}>Log out</button>
        </div>)
}

export default Logout