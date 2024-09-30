import React from "react";
import bgad from "../../assets/image/catadmin.jpg";

function AuthAdmins() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  bg-gray-950">
        <div className=" max-w-3xl max-h-full flex rounded-xl shadow-cyan-900 shadow-sm ">
          <div className="w-1/2 hidden md:block ">
            <img src={bgad} alt="" className="rounded-l-xl " />
          </div>
          <div className="md:w-1/2 w-full p-3 my-auto">
            <div className="flex items-center justify-center font-prompt text-center">
              <div className="">
                <h1 className="font-medium text-3xl mb-3 text-white">
                  เข้าสู่ระบบ
                </h1>
                <div className="mb-3 text-gray-300">
                  <p className="">Admin</p>
                  <p className="">for System Device Management</p>
                </div>
                <form action="" className="mb-8">
                  <div>
                    <label
                      for="small-input"
                      class="block mb-2 text-sm text-left  text-white dark:text-white"
                    >
                      UserName
                    </label>
                    <input
                      type="text"
                      id="small-input"
                      class="block w-full p-2  border border-gray-300 rounded-lg bg-gray-900  text-md focus:ring-blue-500 focus:border-blue-500 text-white "
                    />
                  </div>
                  <div>
                    <label
                      for="small-input"
                      class="block mb-2 mt-2 text-sm text-left  text-white dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="small-input"
                      class="block w-full p-2 text-white border border-gray-300 rounded-lg bg-gray-900  text-md focus:ring-blue-500 focus:border-blue-500 "
                    />
                  </div>
                </form>
                <button type="submit" className="btn btn-block border-green-800 hover:border-green-800 bg-green-600 hover:bg-green-700 text-white text-md font-normal">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthAdmins;
