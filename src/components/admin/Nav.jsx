import React, { useContext } from "react";
import Toggletheme from "../theme/Toggletheme";
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
            <Toggletheme/>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
