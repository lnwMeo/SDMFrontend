import React from 'react'
import Layoutaddmin from '../../components/admin/LayoutAdmin'
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { RiEditCircleFill } from "react-icons/ri";
function Settingnotifi() {
    return (
        <Layoutaddmin>
            <p className='text-3xl text-slate-900 font-prompt'>ตั้งค่า Line Notifi</p>
            <div className='flex justify-center font-prompt'>

                <div className='h-full max-w-3xl max-h-full p-3 mt-2 border border-green-500 rounded-md'>
                    <div className='flex justify-between'>

                        <p className='text-[16px] text-gray-950'>Line Notifi</p>
                        <button className='text-[14px] p-1 bg-green-500 text-white hover:text-white hover:bg-green-700 rounded-md inline-flex gap-2 items-center' onClick={() => document.getElementById('my_modal_4').showModal()} > <IoMdAddCircle className='text-xl' />เพิ่ม Line Token</button>
                    </div>
                    <hr className='mt-2 mb-2 ' />

                    <div className='inline-flex items-center  text-gray-950 text-[14px]'>
                        <p>Token : Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores</p>
                        <div className='inline-flex p-2'>
                            <button className="inline-flex items-center px-2 py-2 font-normal text-white border-white rounded-full bg-amber-500 hover:bg-amber-600"><RiEditCircleFill className='text-[16px] text-white' /></button>
                            <button className="inline-flex items-center px-2 py-2 ml-2 font-normal text-white bg-red-500 border-white rounded-full hover:bg-red-600"><FaCircleXmark className='text-[16px] text-white' /></button>
                        </div>
                    </div>
                </div>







                <dialog id="my_modal_4" className="modal">
                    <div className="max-w-3xl bg-white modal-box">
                        <div className="flex items-center justify-between">
                            <h3 className='font-medium text-gray-900 text-md'>เพิ่ม Line Token</h3>
                        </div>
                        <hr className='mt-2 mb-3 ' />

                        <div className="grid mb-6 md:grid-cols-4">
                            <div className='inline-flex items-center col-span-1 gap-2 '>
                                <p className='text-[14px] font-light text-gray-900 '>Token : </p>
                            </div>
                            <input type="text" className="col-span-3  p-2 text-[14px] font-light text-gray-900 border focus:outline-none  focus:ring focus:ring-violet-300 rounded-md bg-gray-50 " />
                        </div>


                        <div className="justify-center modal-action">
                            <form method="dialog ">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="font-normal text-white bg-green-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-600">ยืนยัน</button>
                                <button className="font-normal ml-2  text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">ยกเลิก</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>






        </Layoutaddmin>
    )
}

export default Settingnotifi