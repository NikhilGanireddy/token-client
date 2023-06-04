import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const {
    user,
    setUser,
    darkMode,
    setDarkMode,
    changeBg,
    changeMainBg,
    BtnBg,
  } = useContext(UserContext);

  return (
    <div
      className={`w-screen h-screen flex justify-center sm:p-4 lg:p-6 items-center ${changeMainBg()}`}
    >
      <div
        className={` w-full h-full flex flex-col p-6 text-center justify-center gap-12 items-center rounded-2xl backdrop-blur-sm ${changeBg()}`}
      >
        <div className="flex flex-col items-center justify-center gap-3 ">
          <h1 className="font-extrabold capitalize text-8xl">Oops</h1>
          <h1 className="text-4xl font-semibold capitalize">
            Something went wrong
          </h1>
          <h1 className="text-lg font-semibold capitalize">
            Error 404 Page not found
          </h1>
        </div>

        <Link
          className=" bg-white text-[#4F0DAA] px-6 py-2 rounded-xl font-semibold"
          to={"/"}
        >
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
