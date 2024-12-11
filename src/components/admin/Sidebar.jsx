import { FaBars } from "react-icons/fa6";
import { RiDashboard2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import logo from "../../assets/image/Logo.png";

import { useNavigate } from "react-router-dom";
import ButtonSidebar from "./ButtonSidebar";

function Sidebar({ isCollapsed, toggleSidebar }) {
  const navigate = useNavigate();
  return (
    <>
      <aside
        className={`fixed flex flex-col  ${
          isCollapsed ? "w-14" : "w-64 z-[99999] shadow-md"
        } h-full transition-width duration-200 bg-gradient-to-b from-indigo-950 to-gray-950 rounded-r-md font-prompt p-2`}
      >
        <div
          className={`flex items-center   ${
            isCollapsed
              ? "flex items-center justify-center"
              : "block justify-between"
          }`}
        >
          <div className="inline-flex gap-2">
            <img
              src={logo}
              alt=""
              className={`w-12 ${isCollapsed ? "hidden" : "block"}`}
            />
            <div>
              <p
                className={` text-center text-[20px] font-semibold text-white  ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                COMCENTER
              </p>
              <p
                className={`text-[12px]  text-white ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Admin for SDM
              </p>
            </div>
          </div>

          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center  px-2 py-2  rounded-md text-violet-800 bg-violet-300 hover:bg-violet-800 hover:text-white "
          >
            <FaBars />
          </button>
        </div>
        <div className="mt-4">
          <ButtonSidebar onClick={() => navigate("/admin/Dashbord")}>
            <RiDashboard2Line className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>แดชบอร์ด</span>
          </ButtonSidebar>
          <ButtonSidebar onClick={() => navigate("/admin/Stors")}>
            <FaBox className="text-xl" />
            <span className={isCollapsed ? "hidden" : "block"}>
              คลังครุภัณฑ์
            </span>
          </ButtonSidebar>

          <ButtonSidebar onClick={() => navigate("/admin/Approvestors")}>
            <FaChalkboardUser className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>
              ขอยืม - ส่งคืน
            </span>
          </ButtonSidebar>

          <ButtonSidebar onClick={() => navigate("/admin/Producttracking")}>
            <FaTags className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>
              ติดตามครุภัณฑ์ที่ถูกยืม
            </span>
          </ButtonSidebar>
          <ButtonSidebar
            onClick={() => navigate("/admin/Returnshistoryproduct")}
          >
            <MdWorkHistory className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>
              ประวัติการส่งคืน
            </span>
          </ButtonSidebar>
          <ButtonSidebar onClick={() => navigate("/admin/ManageAdmin")}>
            <FaUserFriends className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>
              จัดการแอดมิน
            </span>
          </ButtonSidebar>
          <ButtonSidebar onClick={() => navigate("/admin/Settingnotifi")}>
            <MdNotificationsActive className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>
              การแจ้งเตือน
            </span>
          </ButtonSidebar>
          <hr className={isCollapsed ? "hidden" : "block"} />
          <ButtonSidebar>
            <CiLogout className="text-xl " />
            <span className={isCollapsed ? "hidden" : "block"}>ออกจากระบบ</span>
          </ButtonSidebar>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
