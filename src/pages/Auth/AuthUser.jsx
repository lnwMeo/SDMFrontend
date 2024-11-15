import React from "react";
import bgauth from "../../assets/image/g2.jpeg";


function AuthUser() {
  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center  bg-gray-950">
        <div className=" max-w-2xl flex rounded-xl shadow-cyan-900 shadow-sm ">
          <div className="w-1/2 hidden md:block ">
            <img src={bgauth} alt="" className="rounded-l-xl " />
          </div>
          <div className="md:w-1/2 w-full p-3 my-auto">
            <div className="flex items-center justify-center font-prompt text-center">
              <div className="">
                  <h1 className="font-medium text-3xl mb-3 text-white">เข้าสู่ระบบ</h1>
                <div className="mb-10 text-gray-300">
                  <p className="">NRRU Accuont</p>
                  <p className="">for System Device Management</p>
                </div>
                <button className="btn btn-block border-green-800 hover:border-green-800 bg-green-600 hover:bg-green-700 text-white text-md font-normal">
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

export default AuthUser;
