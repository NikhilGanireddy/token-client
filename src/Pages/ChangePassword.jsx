import React, {useContext, useState} from "react"
import {UserContext} from "../UserContext.jsx";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const ChangePassword = () => {
    const {
        user, ready, setUser, setReady, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
    } = useContext(UserContext);
    const navigate = useNavigate()
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const changePasswordFunc = async (ev) => {
        ev.preventDefault()
        const hallTicket = user.hallTicket

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            toast.error("Please fill all the forms")
        }


        if (currentPassword && newPassword && confirmNewPassword) {
            try {
                let successMsg;
                const data = axios.post("/user/profile/changePassword", {
                    hallTicket, currentPassword, newPassword, confirmNewPassword
                }).then(res => {
                    toast.success(res.data.message)
                    setConfirmNewPassword("")
                    setCurrentPassword("")
                    setNewPassword("")
                    setUser(null)
                    window.localStorage.removeItem("loggedIn")
                    navigate("/")
                })
            } catch (e) {
                console.log(e)
            }
        }

    }

    return (
      <div
        className={`flex justify-center w-full h-full items-center p-4  rounded-2xl backdrop-blur-sm ${changeBg()}`}
      >
        <form
          className={` w-full max-w-[450px]  p-4 py-8 gap-12 rounded-2xl flex flex-col justify-center items-center `}
        >
          <h1 className={` text-2xl font-semibold`}>Change Password</h1>
          <div
            className={` w-full flex-col flex justify-center items-center gap-4`}
          >
            <div className={` flex flex-col gap-2 justify-center w-full`}>
              <label className={`font-semibold `}>Current Password</label>
              <input
                className={`border-gray-500`}
                type={"password"}
                value={currentPassword}
                onChange={(event) => {
                  setCurrentPassword(event.target.value);
                }}
              />
            </div>
            <div className={` flex flex-col gap-2 justify-center w-full`}>
              <label className={`font-semibold `}>New Password</label>
              <input
                className={`border-gray-500`}
                type={"text"}
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />
            </div>
            <div className={` flex flex-col gap-2 justify-center w-full`}>
              <label className={`font-semibold `}>Confirm New Password</label>
              <input
                className={`border-gray-500`}
                type={"password"}
                value={confirmNewPassword}
                onChange={(event) => {
                  setConfirmNewPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <button type={"submit"} onClick={changePasswordFunc}>
            Save
          </button>
        </form>
      </div>
    );
}

export default ChangePassword