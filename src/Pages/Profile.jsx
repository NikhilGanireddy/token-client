import React, {useContext} from 'react'
import {UserContext} from "../UserContext.jsx";

const Profile = () => {

  const {
    user, ready, setUser, setReady, darkMode, setDarkMode, changeBg, changeMainBg, BtnBg,
  } = useContext(UserContext);

  return (
    <div className={ ` profile overflow-y-scroll w-full h-full rounded-2xl  backdrop-blur-sm flex flex-col lg:gap-0 ${changeBg()}`}>
      <div className={` flex relative justify-center items-center w-full min-h-[350px] `}>
        <div className={` w-[200px] h-[200px] rounded-full `}>
          <img className={` w-full h-full object-cover object-center overflow-hidden rounded-full`} src={user.pic}/>
        </div>
      </div>
      <div className={`grid sm:grid-cols-1 sm:gap-2 md:gap-3 p-4 lg:gap-4 md:grid-cols-2 lg:grid-cols-3`}>
          <div className={` flex flex-col gap-2 justify-center`}>
            <label className={` px-4`}>
              Name
            </label>
            <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
          </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` px-4`}>
            Name
          </label>
          <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` px-4`}>
            Name
          </label>
          <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
        </div>
        <div className={` flex flex-col gap-2 justify-center`}>
          <label className={` px-4`}>
            Name
          </label>
          <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
        </div><div className={` flex flex-col gap-2 justify-center`}>
        <label className={` px-4`}>
          Name
        </label>
        <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
      </div><div className={` flex flex-col gap-2 justify-center`}>
        <label className={` px-4`}>
          Name
        </label>
        <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
      </div><div className={` flex flex-col gap-2 justify-center`}>
        <label className={` px-4`}>
          Name
        </label>
        <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
      </div><div className={` flex flex-col gap-2 justify-center`}>
        <label className={` px-4`}>
          Name
        </label>
        <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
      </div><div className={` flex flex-col gap-2 justify-center`}>
        <label className={` px-4`}>
          Name
        </label>
        <input disabled={true} type={"text"} placeholder={user.name} className={`cursor-not-allowed placeholder:capitalize border-gray-600`} />
      </div>
      </div>
    </div>
  )
}

export default Profile