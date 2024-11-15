import React from 'react'
import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";
import { BiSolidDetail } from "react-icons/bi";
function Producttracking() {
    return (
        <Layoutaddmin>

            <p className='text-3xl text-slate-900 font-prompt dark:text-white'>ติดตามครุภัณฑ์ที่ถูกยืม</p>
            

                <div className="relative mt-2  overflow-x-auto border dark:border-violet-950 rounded-lg font-prompt">
                    <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                        <thead className="dark:bg-violet-900 bg-gray-200">
                            <tr >
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    รหัสรายการ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    รายการ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    วันที่ยืม
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    กำหนดคืน
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    ผู้ยืม
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    ผู้จ่ายครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    ผู้รับคืนครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white">
                                    รายละเอียด
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900  dark:text-white">
                                    0001
                                </td>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900  dark:text-white">
                                    การยืม - คืน
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    10/6/2024
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white dark:text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    ครู เพ็ญศรี
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                                    แอดมิน สมพงษ์
                                </td>
                            
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' ><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className='px-6 py-4 font-light text-[12px] text-white dark:text-white'>
                                    <p className='bg-green-600 rounded-md'>
                                        กำลังใช้งาน
                                    </p>
                                </td>
                            </tr>






                        </tbody>
                    </table>
                </div>
            
        </Layoutaddmin>
    )
}

export default Producttracking