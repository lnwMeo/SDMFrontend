import React from 'react'
import Layoutaddmin from '../../components/admin/LayoutAdmin'
import { IoTrashBin } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
function ManageAdmin() {
    return (
        <Layoutaddmin>

            <p className='text-3xl text-slate-900 font-prompt dark:text-white'>จัดการ Admin</p>
          
                <div className='flex justify-between font-prompt'>
                    <p className='text-[16px] text-gray-950'></p>
                    <button className='text-[14px] p-1 bg-green-600 text-white hover:text-white hover:bg-green-700 rounded-md inline-flex gap-2 items-center' onClick={() => document.getElementById('my_modal_4').showModal()} > <IoMdAddCircle className='text-xl' />เพิ่ม Admin</button>
                </div>
                <div className="relative mt-2  overflow-x-auto border dark:border-violet-950 rounded-lg font-prompt">
                    <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                        <thead className="dark:bg-violet-900 bg-gray-200">
                            <tr >
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    ลำดับ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    UserName
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    ระดับ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    แก้ไข - ลบ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900  dark:text-white">
                                    1
                                </td>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900  dark:text-white">
                                    chaitawat
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    chaitawat.no@nrru.ac.th
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    หัวหน้า
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className="inline-flex items-center px-2 py-2 font-normal dark:text-white text-white border-white rounded-full bg-amber-500 hover:bg-amber-600"><MdEditSquare className='text-[16px] text-white' /></button>
                                    <button className="inline-flex items-center px-2 py-2 ml-2 font-normal dark:text-white text-white bg-red-500 border-white rounded-full hover:bg-red-600"><IoTrashBin className='text-[16px] text-white' /></button>
                                </td>
                            </tr>
                            <tr className=''>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white ">
                                    1
                                </td>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900  dark:text-white">
                                    chaitawat
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    chaitawat.no@nrru.ac.th
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    พนักงาน
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className="inline-flex items-center px-2 py-2 font-normal dark:text-white text-white border-white rounded-full bg-amber-500 hover:bg-amber-600"><MdEditSquare className='text-[16px] text-white' /></button>
                                    <button className="inline-flex items-center px-2 py-2 ml-2 font-normal dark:text-white text-white bg-red-500 border-white rounded-full hover:bg-red-600"><IoTrashBin className='text-[16px] text-white' /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>





                <dialog id="my_modal_4" className="modal">
                    <div className="w-11/12 max-w-md bg-white dark:bg-gray-900 modal-box font-prompt">
                        <div className="flex items-center justify-between">
                            <h3 className='font-medium text-gray-900 text-md dark:text-white'>เพิ่ม Admin</h3>
                        </div>
                        <hr className='mt-2 mb-2 border dark:border-violet-950' />
                     
                        <div className="grid grid-cols-1 md:grid-cols-1">
                            <div className='inline-flex items-center justify-between mt-2'>
                                <p className='text-[14px] font-light text-gray-900 dark:text-white'>UserName : </p>
                                <input type="text" id="small-input" className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />

                            </div>
                            <div className='inline-flex items-center justify-between mt-2'>
                                <p className='text-[14px] font-light text-gray-900 dark:text-white'>Email : </p>
                                <input type="email" id="small-input" className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                            </div>
                            <div className='inline-flex items-center justify-between mt-2'>
                                <p className='text-[14px] font-light text-gray-900 dark:text-white'>Password : </p>
                                <input type="password" id="small-input" className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                            </div>
                            <div className='inline-flex items-center justify-between mt-2'>
                                <p className='text-[14px] font-light text-gray-900 dark:text-white'>Confirm Password : </p>
                                <input type="password" id="small-input" className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                            </div>
              
                       
                     
                        </div>
                        <hr className='mt-2 mb-2 border dark:border-violet-950' />
                        <div className="justify-center modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="font-normal text-white dark:text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-700">ยืนยัน</button>
                                <button className="font-normal ml-2 text-white dark:text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-700">ยกเลิก</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            
        </Layoutaddmin>
    )
}

export default ManageAdmin