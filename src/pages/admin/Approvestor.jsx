import React from 'react'
import Layoutaddmin from '../../components/admin/LayoutAdmin'
import { BiSolidDetail } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
function Approvestor() {
    return (
        <Layoutaddmin>
            <p className='text-3xl text-slate-900 font-prompt'>ขอยืม - ส่งคืน</p>
            <div className="grid gap-3 md:grid-cols-3">

                <div className='h-full max-h-full p-3 mt-2 border rounded-md border-sky-300 font-prompt'>
                    <p className='text-[16px] text-gray-900 font-normal'>รออนุมัติขอยืม</p>
                    <div className="relative mt-2 overflow-x-auto bg-white border border-sky-600 sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                            <thead className=" bg-sky-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รหัสรายการ
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        ผู้ยืม
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รายละเอียดการขอยืม
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                        0001
                                    </th>
                                    <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                        ครู เพ็ญศรี
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button className='p-1 rounded-md bg-sky-600 hover:bg-blue-500' onClick={() => document.getElementById('my_modal_1').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='h-full max-h-full p-3 mt-2 border rounded-md border-amber-300 font-prompt'>

                    <p className='text-[16px] text-gray-900 font-normal'>รอจ่ายครุภัณฑ์</p>
                    <div className="relative mt-2 overflow-x-auto bg-white border border-amber-600 sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                            <thead className="bg-amber-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รหัสรายการ
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        ผู้ยืม
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รายละเอียดการขอยืม
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                        0000
                                    </th>
                                    <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                        ครู ยอดชาย
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button className='p-1 rounded-md bg-amber-700 hover:bg-amber-800' onClick={() => document.getElementById('my_modal_2').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='h-full max-h-full p-3 mt-2 border border-gray-300 rounded-md font-prompt'>
                    <p className='text-[16px] text-gray-900 font-normal'>รออนุมัติขอคืน</p>
                    <div className="relative mt-2 overflow-x-auto bg-white border sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                            <thead className="bg-gray-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รหัสรายการ
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        ผู้ยืม
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[12px] font-normal text-white ">
                                        รายละเอียดการขอยืม
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                        1
                                    </th>
                                    <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                        Notebook HP G10 N.1
                                    </td>
                                    <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                        <button className='p-1 bg-gray-700 rounded-md hover:bg-gray-800' onClick={() => document.getElementById('my_modal_3').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* รอจ่ายครุภัณฑ์ */}
            <dialog id="my_modal_2" className=" modal modal-bottom sm:modal-middle font-prompt">
                <div className="bg-white modal-box">
                    <h3 className='font-medium text-gray-900 text-md text-[18px]'>รอจ่ายครุภัณฑ์</h3>
                    <div className="flex justify-between ">
                        <h3 className='font-medium text-gray-900 text-md'>รายละเอียด</h3>
                        <h3 className='text-[14px] font-light text-gray-900'>รหัสรายการ 0000</h3>
                    </div>
                    <hr className='mt-2 mb-2 border' />
                    {/* พื้นที่การ์ด */}
                    <div className='overflow-y-auto h-72 '>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                    </div>


                    {/* พื้นที่การ์ด */}
                    <hr className='mt-2 mb-2 border' />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>10/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ต้อง ส่งคืน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>15/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>ครู เพ็ญศรี</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>หน่วยงาน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>คณะครุศาสตร์</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>เบอร์โทร : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>0999999999</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้จ่ายครุภัณฑ์ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'> - </p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้รับคืนครุภัณฑ์ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'> - </p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>สถานะ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>รอจ่ายครุภัณฑ์</p>
                        </div>
                        <div className='inline-flex items-center col-span-2 gap-2 mt-2'>
                            <p className='text-[14px] font-light text-gray-900'>KeyReceive : </p>
                            <input type="text" id="small-input" className="p-2 text-[14px] font-light text-gray-900 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                        </div>
                    </div>
                    <hr className='mt-2 mb-2 border' />
                    <div className="justify-center modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="font-normal text-white bg-green-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-600">ยืนยัน</button>
                            <button className="font-normal ml-2 text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">ยกเลิก</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* รอจ่ายครุภัณฑ์ */}
            {/* คืนครุภัณฑ์ */}
            <dialog id="my_modal_3" className=" modal modal-bottom sm:modal-middle font-prompt">
                <div className="bg-white modal-box">
                    <h3 className='font-medium text-gray-900 text-md text-[18px]'>รออนุมัติขอคืน</h3>
                    <div className="flex justify-between ">
                        <h3 className='font-medium text-gray-900 text-md'>รายละเอียด</h3>
                        <h3 className='text-[14px] font-light text-gray-900'>รหัสรายการ 0000</h3>
                    </div>
                    <hr className='mt-2 mb-2 border' />
                    {/* พื้นที่การ์ด */}
                    <div className='overflow-y-auto h-72 '>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                    </div>


                    {/* พื้นที่การ์ด */}
                    <hr className='mt-2 mb-2 border' />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>10/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ต้อง ส่งคืน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>15/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>ครู เพ็ญศรี</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>หน่วยงาน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>คณะครุศาสตร์</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>เบอร์โทร : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>0999999999</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้จ่ายครุภัณฑ์ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'> แอดมิน สมพงษ์ </p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้รับคืนครุภัณฑ์ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'> - </p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>สถานะ : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>รออนุมัติขอคืน</p>
                        </div>
                        <div className='inline-flex items-center col-span-2 gap-2 mt-2'>
                            <p className='text-[14px] font-light text-gray-900'>KeyReceive : </p>
                            <input type="text" id="small-input" className="p-2 text-[14px] font-light text-gray-900 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                        </div>
                    </div>
                    <hr className='mt-2 mb-2 border' />
                    <div className="justify-center modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="font-normal text-white bg-green-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-600">ยืนยัน</button>
                            <button className="font-normal ml-2 text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">ยกเลิก</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* คืนครุภัณฑ์ */}
            <dialog id="my_modal_1" className=" modal modal-bottom sm:modal-middle font-prompt">
                <div className="bg-white modal-box">
                    <h3 className='font-medium text-gray-900 text-md text-[18px]'>รออนุมัติขอยืม</h3>
                    <div className="flex justify-between ">
                        <h3 className='font-medium text-gray-900 text-md'>รายละเอียด</h3>
                        <h3 className='text-[14px] font-light text-gray-900'>รหัสรายการ 0001</h3>
                    </div>
                    <hr className='mt-2 mb-2 border' />
                    {/* พื้นที่การ์ด */}
                    <div className='overflow-y-auto h-72 '>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 mt-2">
                            <div className='col-span-1'>
                                <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png" className='w-10 rounded-md ' alt="" />
                            </div>
                            <div className='col-start-2 col-end-6 md:col-end-5 lg:col-end-6 '>
                                <p className='text-sm font-normal text-gray-900'>NoteBook HP N.15</p>
                                <p className='text-[12px] font-light text-gray-500'>โน๊ตบุ๊ค</p>
                            </div>
                        </div>
                    </div>


                    {/* พื้นที่การ์ด */}
                    <hr className='mt-2 mb-2 border' />
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>10/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>วันที่ต้อง ส่งคืน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>15/6/2024</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>ผู้ยืม : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>ครู เพ็ญศรี</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>หน่วยงาน : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>คณะครุศาสตร์</p>
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='text-[14px] font-light text-gray-900'>เบอร์โทร : </p>
                            <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>0999999999</p>
                        </div>


                    </div>
                    <hr className='mt-2 mb-2 border' />
                    <div className="justify-center modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="font-normal text-white bg-green-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 items-center hover:bg-green-600"><FaCheckCircle className='text-[16px] text-white' />อนุมัติ</button>
                            <button className="font-normal ml-2 text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 items-center hover:bg-red-600"><FaCircleXmark className='text-[16px] text-white' />ไม่อนุมัติ</button>
                        </form>
                    </div>
                    <hr className='mt-2 border' />
                    <div className="justify-center modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="font-normal ml-2 text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">ปิด</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </Layoutaddmin>
    )
}

export default Approvestor