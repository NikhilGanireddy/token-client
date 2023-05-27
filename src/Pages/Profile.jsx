import React, {useContext} from 'react'
import {UserContext} from "../UserContext.jsx";

const Profile = () => {

    const {
        user, ready, setUser, setReady, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
    } = useContext(UserContext);

    return (<div
        className={` profile overflow-y-scroll w-full h-full rounded-2xl  p-4 pb-12 backdrop-blur-sm flex flex-col lg:gap-0 ${changeBg()}`}>
        <div className={` flex relative justify-center items-center w-full min-h-[350px] `}>
            <div className={` w-[200px] h-[200px] rounded-full `}>
                <img className={` w-full h-full object-cover object-center overflow-hidden rounded-full`}
                     src={user.pic}/>
            </div>
        </div>
        <div
            className={`grid sm:grid-cols-1 sm:gap-2 md:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Name
                </label>
                <input disabled={true} type={"text"} placeholder={user.name}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Hall Ticket
                </label>
                <input disabled={true} type={"text"} placeholder={user.hallTicket}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Branch
                </label>
                <input disabled={true} type={"text"} placeholder={user.branch}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Year
                </label>
                <input disabled={true} type={"text"} placeholder={user.year}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Room
                </label>
                <input disabled={true} type={"text"} placeholder={user.room}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Mother Name
                </label>
                <input disabled={true} type={"text"} placeholder={user.motherName}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Mother Mobile
                </label>
                <input disabled={true} type={"text"} placeholder={user.motherMobile}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Father Name
                </label>
                <input disabled={true} type={"text"} placeholder={user.fatherName}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Father Mobile
                </label>
                <input disabled={true} type={"text"} placeholder={user.fatherMobile}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Address
                </label>
                <input disabled={true} type={"text"} placeholder={user.address}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Outings
                </label>
                <input disabled={true} type={"text"} placeholder={user.address}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>
            <div className={` flex flex-col gap-2 justify-center`}>
                <label className={` px-4`}>
                    Attendance
                </label>
                <input disabled={true} type={"text"} placeholder={user.address}
                       className={`cursor-not-allowed placeholder:capitalize border-gray-600`}/>
            </div>

        </div>
        <div className={` flex w-full sm:mt-6 md:mt-8 lg:mt-12 items-center justify-center `}>
            <button type={"submit"}>Change Password</button>
        </div>
    </div>)
}

export default Profile