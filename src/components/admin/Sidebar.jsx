import React from "react";
import { FaBars } from "react-icons/fa6";
import { RiDashboard2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 ${
          isCollapsed ? "w-16" : "w-64 "
        } h-screen transition-width duration-300 bg-gray-950  font-prompt `}
      >
        <div className="flex items-center justify-between  ml-2">
          <p
            className={` text-center text-[24px] font-semibold text-violet-400 italic ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            COMCENTER
          </p>
          <button
            onClick={toggleSidebar}
            className="flex justify-center  p-2 m-3 rounded-md text-violet-800 bg-violet-300 hover:bg-violet-800 hover:text-white"
          >
            <FaBars />
          </button>
        </div>
        <div className="p-2">
          <p
            className={`font-medium text-[14px] text-white ${
              isCollapsed ? "hidden" : "block "
            }`}
          >
            แดชบอร์ด
          </p>

          <a
            href="/admin/Dashbord"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 p-2  rounded-l-lg items-center hover:bg-violet-800 hover:text-white w-full "
          >
            <RiDashboard2Line className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              แดชบอร์ด
            </span>
          </a>

          <p
            className={`font-medium text-[14px] text-white ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            จัดการคลังครุภัณฑ์
          </p>
          <a
            href="/admin/Stors"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <FaBox className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              คลังครุภัณฑ์
            </span>
          </a>

          <p
            className={`font-medium text-[14px] text-white ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            จัดการขอยืม - ส่งคืน
          </p>
          <a
            href="/admin/Approvestors"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <FaChalkboardUser className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              ขอยืม - ส่งคืน
            </span>
          </a>

          <a
            href="/admin/Producttracking"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <FaTags className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              ติดตามครุภัณฑ์ที่ถูกยืม
            </span>
          </a>
          <a
            href="/admin/Returnshistoryproduct"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <MdWorkHistory className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              ประวัติการส่งคืน
            </span>
          </a>

          <p
            className={`font-medium text-[14px] text-white ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            จัดการแอดมินและการแจ้งเตือน
          </p>
          <a
            href="/admin/ManageAdmin"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <FaUserFriends className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              จัดการแอดมิน
            </span>
          </a>
          <a
            href="/admin/Settingnotifi"
            className="font-light text-[14px] text-white inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center hover:bg-violet-800 hover:text-white"
          >
            <MdNotificationsActive className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              การแจ้งเตือน
            </span>
          </a>
          <hr className={`${isCollapsed ? "hidden" : "block"}`} />
          <button className="font-light text-[14px] text-gray-950 inline-flex m-2 gap-2 px-2 py-2 w-full rounded-l-lg items-center bg-violet-300 hover:bg-violet-800 hover:text-white">
            <CiLogout className="text-xl " />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              ออกจากระบบ
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
