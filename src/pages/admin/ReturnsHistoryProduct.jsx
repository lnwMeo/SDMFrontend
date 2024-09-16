import React from 'react'
import Layoutaddmin from '../../components/admin/LayoutAdmin'
import { BiSolidDetail } from "react-icons/bi";
function Returnshistoryproduct() {
    return (
        <Layoutaddmin>

            <p className='text-3xl text-slate-900 font-prompt'>ประวัติการส่งคืน</p>
            <div className='h-full max-h-full p-3 mt-2 bg-white border border-gray-300 rounded-md font-prompt'>
                <div className="relative mt-2 overflow-x-auto border sm:rounded-lg">

                    <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                        <thead className="border bg-gray-50">
                            <tr >
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    รหัสรายการ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    รายการ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    วันที่ยืม
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    วันที่ส่งคืน
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ผู้ยืม
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ผู้จ่ายครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ผู้รับคืนครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    รายละเอียด
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    สถานะ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900 ">
                                    0001
                                </td>
                                <td scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900 ">
                                    การยืม - คืน
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    10/6/2024
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    ครู เพ็ญศรี
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    แอดมิน สมพงษ์
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    แอดมิน สมหมาย
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' ><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white ">
                                    <p className='bg-gray-500 rounded-md'>
                                        คืนแล้ว
                                    </p>
                                </td>
                            </tr>






                        </tbody>
                    </table>
                </div>
            </div>
        </Layoutaddmin>
    )
}

export default Returnshistoryproduct