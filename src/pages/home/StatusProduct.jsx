import React from 'react'
import LayoutHome from "../../components/layout/home/LayoutHome";
import TableStatus from '../../components/home/TableStatus';
function StatusProduct() {
  return (
    <LayoutHome >
      <div className='flex justify-start p-2 mt-5 font-prompt md:p-0'>
        <p className='content-center font-medium text-center text-gray-900 text-md dark:text-white'>สถานะ ขอยืม - คืน</p>
      </div>
    
        <TableStatus />
      
    </LayoutHome>
  )
}

export default StatusProduct