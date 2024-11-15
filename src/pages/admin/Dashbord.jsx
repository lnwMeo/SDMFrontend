import React from 'react'
import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";
import { MdAdminPanelSettings } from "react-icons/md";
function Dashbord() {
  return (
    <Layoutaddmin>
      <p className='text-3xl text-slate-900 font-prompt dark:text-white'>แดชบอร์ด</p>


      <div className="grid gap-3 mt-2 md:grid-cols-12 sm:grid-cols-6 font-prompt">

        <div className='col-span-7 p-3 bg-white shadow-md dark:shadow-violet-950/50 rounded-md dark:bg-gray-950 '>
          <p className='text-[14px] text-gray-900 font-normal dark:text-white'>ครุภัณฑ์ ทั้งหมด</p>
          <div className="grid grid-cols-3 gap-3 p-3">
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800  rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800 rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800 rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800 rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800 rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>
            <div className="w-auto h-auto gap-2 p-2 text-gray-100 bg-indigo-800 rounded-md dark:text-white">
              <p className='text-[12px] font-light'>โน๊ตบุ๊ค</p>
              <p className='text-[20px] text-right'>70</p>
            </div>

          </div>
        </div>
        <div className='col-span-5 p-3 bg-white shadow-md dark:shadow-violet-950/50 rounded-md dark:bg-gray-950'>
          <p className='text-[14px] text-gray-900 font-normal dark:text-white'>แอดมิน ทั้งหมด</p>
          <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2">
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
            <div className="inline-flex items-center w-auto h-auto gap-2 p-2 text-gray-100 rounded-md bg-cyan-800 dark:text-white">
              <MdAdminPanelSettings className='text-3xl ' />
              <p className='text-[16px] text-right font-light '>สมหมาย เทสดี </p>
            </div>
          </div>
        </div>


      </div>
    </Layoutaddmin>
  )
}

export default Dashbord