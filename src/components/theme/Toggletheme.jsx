import React, { useContext } from 'react';
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from '../theme/Thememanage'; // นำเข้า ThemeContext

function Toggletheme() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // ใช้ useContext เพื่อเชื่อมกับ ThemeContext

  return (
    <div className="drop-shadow-md  dark:drop-shadow-md border dark:border-gray-800  dark:bg-white rounded-full w-auto h-auto  flex items-center justify-items-center">
      <label className="swap swap-rotate p-2">
        {/* this hidden checkbox controls the state */}
        <input
          onClick={toggleTheme} // เรียกใช้ฟังก์ชัน toggleTheme เมื่อกด checkbox
          type="checkbox"
          // กำหนดสถานะตาม isDarkMode
          className="theme-controller"
        />

        {/* sun icon */}
        <IoSunny className="swap-off w-5 h-5 text-amber-500" />

        {/* moon icon */}
        <BsFillMoonStarsFill className="swap-on w-5 h-5 text-violet-950" />
      </label>
    </div>
  );
}

export default Toggletheme;
