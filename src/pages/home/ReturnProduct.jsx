import React from 'react'
import LayoutHome from "../../components/layout/home/LayoutHome";
import TableReturn from '../../components/home/TableReturn';
function ReturnProduct() {
  return (
    <LayoutHome >


      <div className='flex justify-start p-2 mt-5 font-prompt md:p-0'>
        <p className='content-center font-medium text-center text-gray-900 text-md dark:text-white'>ส่งคืน ครุภัณฑ์</p>
      </div>
     
        <TableReturn />
      {/* </div> */}

    </LayoutHome>
  )
}

export default ReturnProduct