import React from 'react'
import Layoutaddmin from '../../components/admin/LayoutAdmin'
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdQrCodeScanner } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
function Stor() {
    return (
        <Layoutaddmin>
            <p className='text-3xl text-slate-900 font-prompt'>คลังครุภัณฑ์</p>
            <div className='h-full max-h-full p-3 mt-2 bg-white border border-gray-300 rounded-md font-prompt'>
                <div className='flex items-center justify-between'>
                    <p className='text-[14px] text-gray-900 font-normal'>หมวดหมู่ครุภัณฑ์</p>

                    <select className="w-full max-w-xs text-gray-900 bg-white border-gray-300 select select-sm text-[14px]">
                        <option>เลือกหมวดหมู่</option>
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Italian</option>
                    </select>

                    <button className='text-[14px] p-1 bg-green-500 text-white hover:text-white hover:bg-green-700 rounded-md inline-flex gap-2 items-center' onClick={() => document.getElementById('my_modal_4').showModal()}> <IoMdAddCircle className='text-xl' />เพิ่ม</button>
                </div>


                <div className="relative mt-2 overflow-x-auto border sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
                        <thead className="border bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ลำดับ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ชื่อครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    serial number
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    เลขครุภัณฑ์
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    ยี่ห้อ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    รุ่น
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    หมวดหมู่
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    วันหมดอายุสัญญา
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    สถานะ
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    รายละเอียด
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    เปิด - ปิด การยืม
                                </th>
                                <th scope="col" className="px-6 py-3 text-[12px] font-normal text-gray-900 ">
                                    แก้ไข - ลบ
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    1
                                </th>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                    Notebook HP G10 N.1
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    MK0998VLLL
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    คต093238495
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    HP
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    Probook
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    โน๊ตบุ๊ค
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-white ">
                                    <p className='bg-gray-500 rounded-md'>
                                        อยู่ในคลัง
                                    </p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] ">
                                    <input type="checkbox" className="toggle toggle-sm toggle-success [--tglbg:white] " defaultChecked />
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='inline-flex gap-2'>
                                        <button className='p-1 rounded-md bg-amber-500 hover:bg-amber-700'><FaEdit className='text-[16px] text-white' /></button>
                                        <button className='p-1 bg-red-500 rounded-md hover:bg-red-800'><MdDelete className='text-[16px] text-white' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='border'>
                                <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    1
                                </th>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                    Notebook HP G10 N.1
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    MK0998VLLL
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    คต093238495
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    HP
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    Probook
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    โน๊ตบุ๊ค
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-white ">
                                    <p className='bg-gray-500 rounded-md'>
                                        อยู่ในคลัง
                                    </p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] ">
                                    <input type="checkbox" className="toggle toggle-sm toggle-success [--tglbg:white] " defaultChecked />
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='inline-flex gap-2'>
                                        <button className='p-1 rounded-md bg-amber-500 hover:bg-amber-700'><FaEdit className='text-[16px] text-white' /></button>
                                        <button className='p-1 bg-red-500 rounded-md hover:bg-red-800'><MdDelete className='text-[16px] text-white' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='border'>
                                <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    1
                                </th>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                    Notebook HP G10 N.1
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    MK0998VLLL
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    คต093238495
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    HP
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    Probook
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    โน๊ตบุ๊ค
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-white ">
                                    <p className='bg-gray-500 rounded-md'>
                                        อยู่ในคลัง
                                    </p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] ">
                                    <input type="checkbox" className="toggle toggle-sm toggle-success [--tglbg:white] " defaultChecked />
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='inline-flex gap-2'>
                                        <button className='p-1 rounded-md bg-amber-500 hover:bg-amber-700'><FaEdit className='text-[16px] text-white' /></button>
                                        <button className='p-1 bg-red-500 rounded-md hover:bg-red-800'><MdDelete className='text-[16px] text-white' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='border'>
                                <th scope="row" className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    1
                                </th>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900" >
                                    Notebook HP G10 N.1
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    MK0998VLLL
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    คต093238495
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    HP
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    Probook
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-gray-900">
                                    โน๊ตบุ๊ค
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-red-700 rounded-md'>
                                        15/12/68
                                    </p>
                                </td>

                                <td className="px-6 py-4 font-light text-[12px] text-white">
                                    <p className='bg-green-600 rounded-md'>
                                        ถูกยืม
                                    </p>
                                </td>
                                <td className="px-6 py-4 ">
                                    <button className='p-1 bg-blue-700 rounded-md hover:bg-blue-800' onClick={() => document.getElementById('my_modal_5').showModal()}><BiSolidDetail className='text-[16px] text-white' /></button>
                                </td>
                                <td className="px-6 py-4 font-light text-[12px] ">
                                    <input type="checkbox" className="toggle toggle-sm toggle-success [--tglbg:white] " defaultChecked />
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='inline-flex gap-2'>
                                        <button className='p-1 rounded-md bg-amber-500 hover:bg-amber-700'><FaEdit className='text-[16px] text-white' /></button>
                                        <button className='p-1 bg-red-500 rounded-md hover:bg-red-800'><MdDelete className='text-[16px] text-white' /></button>
                                    </div>
                                </td>
                            </tr>
                      



                        </tbody>
                    </table>
                </div>

                {/* รายละเอียด */}
                <dialog id="my_modal_5" className="modal">
                    <div className="w-11/12 max-w-5xl bg-white modal-box">
                        <div className="flex items-center justify-between">
                            <h3 className='font-medium text-gray-900 text-md'>รายละเอียด</h3>
                            <button className="inline-flex gap-2 p-2 font-prompt text-[14px] bg-cyan-600 rounded-md text-white hover:bg-cyan-700"> <MdQrCodeScanner className='text-[20px]' /> Gen QRcode</button>
                        </div>
                        <hr className='mt-2 mb-2 border' />
                        {/* พื้นที่การ์ด */}
                        <div className='flex justify-center'>
                            <div className="inline-flex gap-2 ">
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* พื้นที่การ์ด */}
                        <hr className='mt-2 mb-2 border' />
                        <div className="grid grid-cols-1 md:grid-cols-3 ">
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>ชื่อครุภัณฑ์ : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>Notebook HP G10 N.1</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>Sereal Number : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>MK0998VLLL</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>เลขครุภัณฑ์ : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>คต093238495</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>ยี้ห้อ : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>HP</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>รุ่น : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>Probook</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>หมวดหมู่ : </p>
                                <p className='text-gray-900 bg-white text-[14px] text-center  p-2'>โน๊ตบุ๊ต</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>วันเริ่มสัญญา : </p>
                                <p className='text-green-700 bg-white text-[14px] text-center  p-2'>15/12/68</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <p className='text-[14px] font-light text-gray-900'>วันหมดอายุสัญญา : </p>
                                <p className='text-red-700 bg-white text-[14px] text-center  p-2'>15/12/68</p>
                            </div>
                        </div>
                        <hr className='mt-2 mb-2 border' />
                        <div className="justify-center modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="font-normal text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">ปิด</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                {/* รายละเอียด */}


                {/* form add to stor */}
                <dialog id="my_modal_4" className="modal">
                    <div className="w-11/12 max-w-5xl bg-white modal-box">
                        <div className="flex items-center justify-between">
                            <h3 className='font-medium text-gray-900 text-md'>เพิ่มครุภัณฑ์</h3>

                        </div>
                        <hr className='mt-2 mb-2 border' />
                        {/* พื้นที่การ์ด */}
                        <div className='flex justify-center'>
                            <div className="inline-flex gap-2 ">

                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>
                                <div className="flex items-center p-1 duration-1000 ease-in-out rounded-md hover:transition-all size-32 col hover:size-60">
                                    <img src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png" alt="" />
                                </div>

                                <div>
                                    <label className="relative flex items-center justify-center w-32 h-32 border border-gray-400 border-dashed rounded-lg cursor-pointer">
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            multiple
                                            accept="image/*"
                                        />

                                        <span className="text-4xl font-light text-gray-400"> <IoMdAddCircle className='text-xl text-center' /></span>
                                        <span className="text-gray-400 text-[14px] font-light text-center ml-1">เพิ่มรูปภาพ</span>

                                    </label>
                                </div>
                            </div>
                        </div>




                        {/* พื้นที่การ์ด */}
                        <hr className='mt-2 mb-2 border' />
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>ชื่อครุภัณฑ์ : </p>
                                <input type="text" id="small-input" className="p-2 text-[14px] font-light text-gray-900 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />

                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>Sereal Number : </p>
                                <input type="text" id="small-input" className="p-2 text-[14px] font-light text-gray-900 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>เลขครุภัณฑ์ : </p>
                                <input type="text" id="small-input" className="p-2 text-[14px] font-light text-gray-900 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>ยี้ห้อ : </p>
                                <select className="w-full max-w-xs text-gray-900 bg-white border-gray-300 select select-sm text-[14px]">
                                    <option>เลือกยี้ห้อ</option>

                                    <option>HP</option>
                                    <option>Lenovo</option>
                                    <option>Dell</option>
                                </select>

                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>รุ่น : </p>
                                <select className="w-full max-w-xs text-gray-900 bg-white border-gray-300 select select-sm text-[14px]">
                                    <option>เลือกรุ่น</option>
                                    <option>Probook</option>
                                    <option>Thigpad X1</option>
                                    <option>Tower</option>
                                </select>
                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>หมวดหมู่ : </p>
                                <select className="w-full max-w-xs text-gray-900 bg-white border-gray-300 select select-sm text-[14px]">
                                    <option>เลือกหมวดหมู่</option>
                                    <option>โน๊ตบุ๊ค</option>
                                    <option>สวิตซ์</option>
                                    <option>เราเตอร์</option>
                                </select>
                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>วันเริ่มสัญญา : </p>
                                <input id="" type="date" className='p-2 text-[14px] bg-green-700 text-gray-50 border border-green-500 rounded-md' />
                            </div>
                            <div className='inline-flex items-center gap-2 mt-2'>
                                <p className='text-[14px] font-light text-gray-900'>วันหมดอายุสัญญา : </p>
                                <input id="" type="date" className='p-2 text-[14px] bg-red-600 text-gray-50 border border-red-500 rounded-md' />
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
                {/* form add to stor */}
            </div>
        </Layoutaddmin>
    )
}

export default Stor