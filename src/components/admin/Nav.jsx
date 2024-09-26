import React, { useContext } from "react";
import Toggletheme from "../theme/Toggletheme";
import { IoNotifications } from "react-icons/io5";
function Nav() {
  return (
    <>
      <nav className="bg-white shadow-md dark:shadow-violet-950/50 dark:bg-gray-950  w-full  top-0 start-0   border-gray-200 ">
        <div className=" flex  items-center justify-between mx-auto p-4">
          <div className="flex items-center"></div>

          <div className="flex flex-inline items-center gap-2 font-prompt ">
            <div>
              <p className="text-[14px] font-normal text-violet-950 dark:text-white">
                สวัสดี : Chaitawat.no
              </p>
              <p className="text-xs text-gray-400 text-right">Admin</p>
            </div>
            <div className="indicator mr-2">
              <span className="indicator-item badge bg-pink-600 badge-sm border-pink-600 text-white">2</span>
              <button className="btn btn-circle btn-sm bg-white dark:bg-violet-900 border-violet-900 hover:bg-violet-900 dark:hover:bg-white text-violet-900 dark:text-white  hover:text-white dark:hover:text-violet-900"><IoNotifications className="text-xl " /></button>
            </div>
            <Toggletheme />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
