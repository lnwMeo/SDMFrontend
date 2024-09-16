import React, { useState } from "react";
import { LuBox } from "react-icons/lu";
import { IoIosListBox } from "react-icons/io";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function TableReturn() {
  const ProductData = [
    {
      id: "001",
      listname: "การยืม - คืน",
      loanDate: "10/6/2024",
      returnDate: "15/6/2024",
      borrower:"ครู เพ็ญศรี",
      returnee: "แอดมิน สมพงษ์",
    },
    {
      id: "002",
      listname: "การยืม - คืน",
      loanDate: "16/6/2024",
      returnDate: "24/6/2024",
      borrower:"ครู เพ็ญศรี",
      returnee: "แอดมิน สมพงษ์",
    },
    {
      id: "003",
      listname: "การยืม - คืน",
      loanDate: "18/6/2024",
      returnDate: "26/6/2024",
      borrower:"ครู เพ็ญศรี",
      returnee: "แอดมิน สมพงษ์",
    },
    {
      id: "004",
      listname: "การยืม - คืน",
      loanDate: "10/6/2024",
      returnDate: "15/6/2024",
      borrower:"ครู เพ็ญศรี",
      returnee: "แอดมิน สมพงษ์",
    },
    {
      id: "005",
      listname: "การยืม - คืน",
      loanDate: "10/6/2024",
      returnDate: "15/6/2024",
      borrower:"ครู เพ็ญศรี",
      returnee: "แอดมิน สมพงษ์",
    },
  ];

  const handleReturn = () => {
    // ถามผู้ใช้ด้วย SweetAlert2
    MySwal.fire({
      title: "คุณต้องการคืนครุภัณฑ์ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, คืนครุภัณฑ์",
      cancelButtonText: "ไม่",
      customClass: {
        title: "text-xl font-normal font-prompt text-gray-900", // ใช้ Tailwind สำหรับ title
        content: "text-sm font-prompt  text-gray-700", // ใช้ Tailwind สำหรับ content
        confirmButton:
          "bg-blue-500 font-prompt  hover:bg-blue-600 text-white font-normal  py-2 px-4 rounded",
        cancelButton:
          "bg-red-500 font-prompt  hover:bg-red-600 text-white font-normal  py-2 px-4 rounded",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // ถ้าผู้ใช้ยืนยันการคืนครุภัณฑ์ แสดงข้อความสำเร็จ
        MySwal.fire({
          //   position: 'top-end',
          icon: "success",
          title: "ส่งคำขอส่งคืนครุภัณฑ์สำเร็จ!",
          showConfirmButton: false,
          timer: 5000,
          customClass: {
            title: "text-xl font-normal font-prompt text-gray-900", // ใช้ Tailwind สำหรับ title
          },
        });
      }
    });
  };

  return (
    <>
      <div className="p-2 mt-5 overflow-y-auto border border-gray-300 rounded-lg font-prompt h-[450px] dark:border-violet-900">
        <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
          <thead className="border border-gray-300  bg-violet-950 dark:border-violet-900">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white "
              >
                รหัสรายการ
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
              >
                รายการ
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
              >
                วันที่ยืม
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
              >
                กำหนดคืน
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white  dark:text-white "
              >
                ผู้ยืม
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white  dark:text-white "
              >
                ผู้จ่ายครุภัณฑ์
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
              >
                รายละเอียด
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[12px] font-normal text-white dark:text-white "
              >
                สถานะ
              </th>
            </tr>
          </thead>
          <tbody>
            {ProductData.map((product)=>(
            <tr key={product.id} className="border border-gray-300 dark:border-violet-900">
              <td
                scope="row"
                className="px-6 py-4 font-normal text-[12px] text-gray-900 dark:text-white"
              >
                {product.id}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-normal text-[12px] text-gray-900 dark:text-white"
              >
                {product.listname}
              </td>
              <td className="px-6 py-4 font-normal text-[12px] text-gray-900 dark:text-white">
                {product.loanDate}
              </td>
              <td className="px-6 py-4 font-normal text-[12px] text-white dark:text-white">
                <p className="bg-red-700 rounded-md"> {product.returnDate}</p>
              </td>
              <td className="px-6 py-4 font-normal text-[12px] text-gray-900 dark:text-white">
                {product.borrower}
              </td>
              <td className="px-6 py-4 font-normal text-[12px] text-gray-900 dark:text-white">
                {product.returnee}
              </td>

              <td className="px-6 py-4 ">
                <button
                  className="p-1 text-white bg-blue-700 rounded-md hover:bg-blue-800 dark:text-white"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <IoIosListBox />
                </button>
              </td>
              <td className="px-6 py-4 font-light text-[12px] text-white dark:text-white">
                <button
                  className="inline-flex gap-2 px-1 py-1 text-white bg-red-600 border-white rounded-md hover:bg-red-500 dark:text-white"
                  onClick={handleReturn}
                >
                  คืน ครุภัณฑ์
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog
        id="my_modal_5"
        className=" modal modal-bottom sm:modal-middle font-prompt"
      >
        <div className="bg-white modal-box">
          <div className="flex justify-between ">
            <h3 className="font-medium text-gray-900 text-md">รายละเอียด</h3>
            <h3 className="text-[14px] font-light text-gray-900">
              รหัสรายการ 0001
            </h3>
          </div>
          <hr className="mt-2 mb-2 border" />
          {/* พื้นที่การ์ด */}
          <div className="overflow-y-auto h-72 ">
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_6.png"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500">โน๊ตบุ๊ค</p>
              </div>
            </div>
          </div>

          {/* พื้นที่การ์ด */}
          <hr className="mt-2 mb-2 border" />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">
                วันที่ยืม :{" "}
              </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                10/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">
                วันที่ต้อง ส่งคืน :{" "}
              </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                15/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">ผู้ยืม : </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                ครู เพ็ญศรี
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">
                ผู้จ่ายครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                แอดมิน สมพงษ์
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">
                ผู้รับคืนครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                {" "}
                -{" "}
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">สถานะ : </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                กำลังใช้งาน
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900">
                KeyReceive :{" "}
              </p>
              <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                Xyz152
              </p>
            </div>
          </div>
          <hr className="mt-2 mb-2 border" />
          <div className="justify-center modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-normal text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">
                ปิด
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default TableReturn;
