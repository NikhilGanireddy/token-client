import React, {useContext} from "react";
import {UserContext} from "./UserContext";
import AdminLogout from "./Pages/AdminLogout.jsx";
import {ImSpinner9} from "react-icons/all.js";
import UserSidebar from "./Components/UserSidebar.jsx";
import UserNavbar from "./Components/UserNavbar.jsx";
import {Outlet} from "react-router";
import AdminSidebar from "./Components/AdminSidebar.jsx";

const AdminLayout = () => {
    const {
        user, ready, setUser, setReady, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
    } = useContext(UserContext);

    if (user == null && ready) {
        return <Navigate to={"/login"}/>;
    }

    if (!user) {
        return (<div
                className={` w-screen h-screen min-h-[590px] ${changeBg()} flex justify-center items-center`}
            >
                <div className="text-8xl animate-spin">
                    <ImSpinner9/>
                </div>
            </div>);
    }

    if (user.profile == "user") {
        return (<div
                className={` w-screen h-screen p-6 flex justify-center items-center ${changeMainBg()}`}
            >
                <AdminLogout/>
            </div>);
    } else {
        return (<div
                className={`flex w-screen sm:gap-3 md:gap-6 h-screen z-20 sm:p-2 sm:pb-6 md:p-6 ${changeMainBg()}`}
            >
            <AdminSidebar/>
            <div className={`w-full flex flex-col  sm:gap-3 md:gap-6`}>
                <UserNavbar />
                <Outlet />
            </div>
            </div>);
    }
}

export default AdminLayout;
