import React from "react";
import Layoutaddmin from "../../components/admin/LayoutAdmin";
import { BiSolidDetail } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
function Approvestor() {
  return (
    <Layoutaddmin>
      <p className="text-3xl text-slate-900 font-prompt dark:text-white">
        ขอยืม - ส่งคืน
      </p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="h-full max-h-full p-3 mt-2 rounded-md font-prompt">
          <p className="text-[16px] text-gray-900 font-normal dark:text-white">
            รออนุมัติขอยืม
          </p>
          <div className="relative mt-2 overflow-x-auto bg-white border border-sky-600 sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
              <thead className=" bg-sky-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white "
                  >
                    รหัสรายการ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white "
                  >
                    ผู้ยืม
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white "
                  >
                    รายละเอียดการขอยืม
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-gray-950">
                  <th
                    scope="row"
                    className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white"
                  >
                    0001
                  </th>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                    ครู เพ็ญศรี
                  </td>
                  <td className="px-6 py-4 ">
                    <button
                      className="p-1 rounded-md bg-sky-600 hover:bg-blue-500 dark:text-white"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <BiSolidDetail className="text-[16px] text-white" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-full max-h-full p-3 mt-2 rounded-md  font-prompt">
          <p className="text-[16px] text-gray-900 font-normal dark:text-white">
            รอจ่ายครุภัณฑ์
          </p>
          <div className="relative mt-2 overflow-x-auto bg-white border border-amber-600 sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
              <thead className="bg-amber-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    รหัสรายการ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    ผู้ยืม
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    รายละเอียดการขอยืม
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-gray-950">
                  <th
                    scope="row"
                    className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white"
                  >
                    0000
                  </th>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                    ครู ยอดชาย
                  </td>
                  <td className="px-6 py-4 ">
                    <button
                      className="p-1 rounded-md bg-amber-700 hover:bg-amber-800 dark:text-white"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      <BiSolidDetail className="text-[16px] text-white" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-full max-h-full p-3 mt-2  rounded-md font-prompt">
          <p className="text-[16px] text-gray-900 font-normal dark:text-white">
            รออนุมัติขอคืน
          </p>
          <div className="relative mt-2 overflow-x-auto bg-white border sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
              <thead className="bg-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    รหัสรายการ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    ผู้ยืม
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[12px] font-normal text-white dark:text-white"
                  >
                    รายละเอียดการขอยืม
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-gray-950">
                  <th
                    scope="row"
                    className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                    Notebook HP G10 N.1
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white">
                    <button
                      className="p-1 bg-gray-700 rounded-md hover:bg-gray-800"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <BiSolidDetail className="text-[16px] text-white" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* รอจ่ายครุภัณฑ์ */}
      <dialog
        id="my_modal_2"
        className=" modal modal-bottom sm:modal-middle font-prompt"
      >
        <div className="bg-white dark:bg-gray-900 modal-box">
          <h3 className="font-medium text-gray-900 text-md text-[18px] dark:text-white ">
            รอจ่ายครุภัณฑ์
          </h3>
          <div className="flex justify-between ">
            <h3 className="font-medium text-gray-900 text-md dark:text-white ">
              รายละเอียด
            </h3>
            <h3 className="text-[14px] font-light text-gray-900 dark:text-white ">
              รหัสรายการ 0000
            </h3>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          {/* พื้นที่การ์ด */}
          <div className="overflow-y-auto h-72 dark:bg-gray-900 p-2">
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
          </div>

          {/* พื้นที่การ์ด */}
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                วันที่ยืม :{" "}
              </p>
              <p className="text-gray-900 dark:text-green-500 text-[14px] text-center  p-2">
                10/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                วันที่ต้อง ส่งคืน :{" "}
              </p>
              <p className="text-gray-900 dark:text-red-500 text-[14px] text-center  p-2">
                15/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">ผู้ยืม : </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                ครู เพ็ญศรี
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                หน่วยงาน :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                คณะครุศาสตร์
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                เบอร์โทร :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                0999999999
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                ผู้จ่ายครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                {" "}
                -{" "}
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                ผู้รับคืนครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                {" "}
                -{" "}
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">สถานะ : </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                รอจ่ายครุภัณฑ์
              </p>
            </div>
            <div className="inline-flex items-center col-span-2 gap-2 mt-2">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                KeyReceive :{" "}
              </p>
              <input
                type="text"
                id="small-input"
                 className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 "
              />
            </div>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="justify-center modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-normal text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-700">
                ยืนยัน
              </button>
              <button className="font-normal ml-2 text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-700">
                ยกเลิก
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* รอจ่ายครุภัณฑ์ */}
      {/* คืนครุภัณฑ์ */}
      <dialog
        id="my_modal_3"
        className=" modal modal-bottom sm:modal-middle font-prompt"
      >
        <div className="bg-white modal-box dark:bg-gray-900">
          <h3 className="font-medium text-gray-900 text-md text-[18px] dark:text-white ">
            รออนุมัติขอคืน
          </h3>
          <div className="flex justify-between ">
            <h3 className="font-medium text-gray-900 text-md dark:text-white ">
              รายละเอียด
            </h3>
            <h3 className="text-[14px] font-light text-gray-900 dark:text-white ">
              รหัสรายการ 0000
            </h3>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          {/* พื้นที่การ์ด */}
          <div className="overflow-y-auto h-72 dark:bg-gray-900 p-2">
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
          </div>

          {/* พื้นที่การ์ด */}
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="inline-flex items-center">
              <p className="text-[14px]  font-light text-gray-900 dark:text-white ">
                วันที่ยืม :{" "}
              </p>
              <p className="text-gray-900 dark:text-green-500 text-[14px] text-center  p-2">
                10/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                วันที่ต้อง ส่งคืน :{" "}
              </p>
              <p className="text-gray-900 dark:text-red-500 text-[14px] text-center  p-2">
                15/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                ผู้ยืม :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                ครู เพ็ญศรี
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                หน่วยงาน :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                คณะครุศาสตร์
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                เบอร์โทร :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                0999999999
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                ผู้จ่ายครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                {" "}
                แอดมิน สมพงษ์{" "}
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                ผู้รับคืนครุภัณฑ์ :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                {" "}
                -{" "}
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                สถานะ :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                รออนุมัติขอคืน
              </p>
            </div>
            <div className="inline-flex items-center col-span-2 gap-2 mt-2">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                KeyReceive :{" "}
              </p>
              <input
                type="text"
                id="small-input"
                className="p-2 text-[14px] font-light dark:text-white text-gray-900 border dark:bg-gray-800 dark:border-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 "
              />
            </div>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="justify-center modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-normal text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-700">
                ยืนยัน
              </button>
              <button className="font-normal ml-2 text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-700">
                ยกเลิก
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* คืนครุภัณฑ์ */}
      <dialog
        id="my_modal_1"
        className=" modal modal-bottom sm:modal-middle font-prompt"
      >
        <div className="bg-white modal-box dark:bg-gray-900">
          <h3 className="font-medium text-gray-900 text-md text-[18px] dark:text-white ">
            รออนุมัติขอยืม
          </h3>
          <div className="flex justify-between ">
            <h3 className="font-medium text-gray-900 text-md dark:text-white ">
              รายละเอียด
            </h3>
            <h3 className="text-[14px] font-light text-gray-900 dark:text-white ">
              รหัสรายการ 0001
            </h3>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          {/* พื้นที่การ์ด */}
          <div className="overflow-y-auto h-72 dark:bg-gray-900 p-2">
            <div className="grid grid-cols-6 mt-2">
              <div className="col-span-1">
                <img
                  src="data:image/jpeg;base64,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"
                  className="w-10 rounded-md "
                  alt=""
                />
              </div>
              <div className="col-start-2 col-end-6 md:col-end-5 lg:col-end-6 ">
                <p className="text-sm font-normal text-gray-900 dark:text-white ">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500 dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
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
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500  dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
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
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500  dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
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
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500  dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
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
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500  dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
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
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  NoteBook HP N.15
                </p>
                <p className="text-[12px] font-light text-gray-500  dark:text-amber-500 ">
                  โน๊ตบุ๊ค
                </p>
              </div>
            </div>
          </div>

          {/* พื้นที่การ์ด */}
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                วันที่ยืม :{" "}
              </p>
              <p className="text-green-600 dark:text-green-500 text-[14px] text-center  p-2">
                10/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                วันที่ต้อง ส่งคืน :{" "}
              </p>
              <p className="text-red-600  dark:text-red-500 text-[14px] text-center  p-2">
                15/6/2024
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                ผู้ยืม :{" "}
              </p>
              <p className="text-gray-900  text-[14px] dark:text-white text-center  p-2">
                ครู เพ็ญศรี
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                หน่วยงาน :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                คณะครุศาสตร์
              </p>
            </div>
            <div className="inline-flex items-center">
              <p className="text-[14px] font-light text-gray-900 dark:text-white">
                เบอร์โทร :{" "}
              </p>
              <p className="text-gray-900 dark:text-white text-[14px] text-center  p-2">
                0999999999
              </p>
            </div>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="justify-center modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-normal text-white dark:text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 items-center hover:bg-green-700">
                <FaCheckCircle className="text-[16px] text-white" />
                อนุมัติ
              </button>
              <button className="font-normal ml-2 text-white dark:text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 items-center hover:bg-red-700">
                <FaCircleXmark className="text-[16px] text-white" />
                ไม่อนุมัติ
              </button>
            </form>
          </div>
          <hr className="mt-2 border dark:border-violet-950" />
          <div className="justify-center modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-normal ml-2 text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-700">
                ปิด
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </Layoutaddmin>
  );
}

export default Approvestor;
