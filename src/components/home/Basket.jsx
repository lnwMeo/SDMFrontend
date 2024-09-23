import React from 'react'
import CardBasket from './CardBasket'
function Basket() {
  return (
    <div className="h-full p-2 bg-white border border-gray-200  rounded-lg font-prompt">
      <p className='mb-2 font-medium text-gray-900 text-md'>ตะกร้า</p>
      <hr className='mb-2 border' />
      <div className='p-2 overflow-y-auto max-h-96 h-96'>
        <CardBasket />
        <CardBasket />
        <CardBasket />
        <CardBasket />


        {/* <p className='content-center text-sm font-light text-center text-gray-500'>  ยังไม่ได้เลือก ครุภัณฑ์</p> */}


      </div>
      <hr className='mt-2 mb-2 border' />
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=''>
          <p className='text-[14px] font-light text-gray-900'>วันที่ต้องการ ยืม</p>
          <form action="" className='text-center '>
            <input type="date" id="" name="" className='text-gray-500 bg-white text-[14px] border-2 rounded-md p-2 ' />
          </form>
        </div>
        <div className=''>
          <p className='text-[14px] font-light text-gray-900'>วันที่ต้องการ คืน</p>
          <form action="" className='text-center '>
            <input type="date" id="" name="" className='text-gray-500 bg-white text-[14px] border-2 rounded-md p-2' />
          </form>
        </div>
      </div>
      <hr className='mt-2 mb-2 border' />
      <button href="#" className="items-center w-full px-2 py-2 text-sm text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
        ยืนยันการยืม
      </button>
      <p className='mt-2 text-[12px] font-light text-gray-500'>หมายเหตุ : เมื่อคลิก "ยืนยันการยืม" แล้วโปรดติดตามสถานะ เมื่อแสดงสถานะ "อนุมัติ" ให้ไปรับเครื่องที่สำนักคอมพิวเตอร์ ชั้น 3</p>
    </div>
  )
}



export default Basket