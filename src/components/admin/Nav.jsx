import React, { useContext } from "react";
import Toggletheme from "../theme/Toggletheme";
function Nav() {
 
  return (
    <>
      <nav className="bg-white dark:bg-gray-950  w-full  top-0 start-0  border-b border-gray-200 dark:border-gray-600">
        <div className=" flex  items-center justify-between mx-auto p-4">
          <div className="flex items-center"></div>
      
          <div className="flex flex-inline items-center gap-2 font-prompt ">
            <p className="text-[16px] font-normal text-violet-950 dark:text-white">
              สวัสดี : Chaitawat.no
            </p>
            <Toggletheme/>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
