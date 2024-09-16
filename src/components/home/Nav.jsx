import React, { useContext } from "react";
import Logos from "./logo.png";
// import cat from './assets/image/cat.png'
import { FaUserCircle } from "react-icons/fa";

import Toggletheme from "../theme/Toggletheme";

const usertest = [
  {
    id: "1",
    name: "chaitawat.no",
  },
];
const Nav = () => {
 
  return (
    <>
      <nav className="  border-gray-100 rounded-lg border-y-2   font-prompt navbar dark:bg-gray-950 dark:border-violet-900">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-violet-950 lg:hidden dark:text-violet-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-white shadow z-[0] menu menu-sm dropdown-content rounded-box w-52  "
            >
              <li>
                <a
                  href="/"
                  className="text-violet-950  hover:text-white hover:bg-violet-800"
                >
                  ขอยืม ครุภัณฑ์
                </a>
              </li>
              <li>
                <a
                  href="/returnproduct"
                  className="text-violet-950  hover:text-white hover:bg-pink-600 "
                >
                  ส่งคืน ครุภัณฑ์
                </a>
              </li>
              <li>
                <a
                  href="/statusproduct"
                  className="text-violet-950  hover:text-white hover:bg-amber-500"
                >
                  สถานะ ขอยืม - ส่งคืน
                </a>
              </li>
            </ul>
          </div>
          {/* <img src={Logos} alt="logo" className='max-w-56' /> */}
          <p className="p-2 text-[20px] font-semibold text-violet-950 italic dark:text-violet-400">
            COMCENTER SDM
          </p>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-3 px-1 menu menu-horizontal">
            <li>
              <a
                href="/"
                className="text-violet-950 hover:text-white hover:bg-violet-800 dark:text-white"
              >
                ขอยืม ครุภัณฑ์
              </a>
            </li>
            <li>
              <a
                href="/returnproduct"
                className="text-violet-950 hover:text-white hover:bg-pink-600 dark:text-white"
              >
                ส่งคืน ครุภัณฑ์
              </a>
            </li>
            <li>
              <a
                href="/statusproduct"
                className="text-violet-950 hover:text-white hover:bg-amber-500 dark:text-white"
              >
                สถานะ ขอยืม - ส่งคืน
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 z-10 ">
          {usertest.map((name) => (
            <p
              key={name.id}
              className="text-violet-950  text-md hidden md:block dark:text-violet-200"
            >
              สวัสดี!! : {name.name}
            </p>
          ))}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-violet-600"
            >
              <div className="avatar online placeholder ">
                <div className="w-10 bg-white rounded-full text-neutral-content">
                  <FaUserCircle className="text-2xl text-violet-950" />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-white shadow z-[0] menu menu-sm dropdown-content rounded-box w-52"
            >
              <li>
                <a className="text-violet-950  hover:text-white hover:bg-violet-800 ">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <Toggletheme/>
        </div>
      </nav>
    </>
  );
};

export default Nav;
