import React from "react";
import LayoutHome from "../../components/home/LayoutHome";
import Card from "../../components/home/Card";
import Basket from "../../components/home/Basket";
import CardBasket from "../../components/home/CardBasket";
import { FaBasketShopping } from "react-icons/fa6";
import CategorySelect from "../../components/home/CategorySelect";
import CategorySearch from "../../components/home/CategorySearch";

function Home() {
  return (
    <>
      <LayoutHome>
        <div className="flex items-center justify-between p-2 md:mt-5 font-prompt md:p-0">
          <p className="content-center font-medium text-center text-gray-900 text-md dark:text-white">
            ขอยืม ครุภัณฑ์
          </p>

          <div className="items-center  md:inline-flex gap-2">
            <CategorySelect />
            <CategorySearch />
          </div>
        </div>

        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="fixed bottom-8 right-8 bg-violet-900 shadow-sm shadow-violet-700 btn btn-circle    hover:bg-white text-white hover:text-violet-900"
        >
          <div className=" indicator">
            <FaBasketShopping className="w-6 h-6 " />
            <span className="text-white bg-red-600 border-white badge badge-sm indicator-item">
              5
            </span>
          </div>
        </button>

        <div className="grid grid-cols-2 gap-3 mt-5 mb-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8  ">
          <Card />
        </div>
        
        <div className="grid items-center col-span-6 px-5 py-5 text-center ">
          {/*pagination */}
          <div className=" ">
            <div className="border bg-white dark:bg-gray-950 border-gray-200 dark:border-violet-900 join dark:text-white">
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                «
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white  join-item btn border-gray-200 dark:border-violet-900">
                1
              </button>
              <button className=" text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                2
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                3
              </button>
              <button className=" text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                4
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950  dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                5
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn border-gray-200 dark:border-violet-900">
                »
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* basket */}
        {/* <div className='p-5 md:p-0 sm:p-0 lg:p-0 xl:p-0'>
                        <Basket />

                    </div> */}
        {/* </div> */}

        <dialog
          id="my_modal_2"
          className=" modal modal-bottom sm:modal-middle font-prompt"
        >
          <div className="bg-white modal-box">
            <h3 className="font-medium text-gray-900 text-md text-[18px]">
              ตะกร้า
            </h3>
            <div className="flex justify-between ">
              <h3 className="font-medium text-gray-900 text-md">รายละเอียด</h3>
            </div>
            <hr className="mt-2 mb-2 border" />
            {/* พื้นที่การ์ด */}
            <div className="overflow-y-auto h-72 ">
              <CardBasket />
            </div>

            {/* พื้นที่การ์ด */}
            <hr className="mt-2 mb-2 border" />
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900">
                  ผู้ยืม :{" "}
                </p>
                <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                  ครู เพ็ญศรี
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900">
                  หน่วยงาน :{" "}
                </p>
                <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                  คณะครุศาสตร์
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900">
                  เบอร์โทร :{" "}
                </p>
                <p className="text-gray-900 bg-white text-[14px] text-center  p-2">
                  0999999999
                </p>
              </div>
            </div>
            <div className="flex justify-around mt-2 mb-2">
              <div className="items-center ">
                <p className="text-[14px] font-light text-gray-900">
                  วันที่ต้องการ ยืม :{" "}
                </p>
                <input
                  type="date"
                  id=""
                  name=""
                  className="text-white bg-green-600  text-[14px] border-2 border-green-600 rounded-md p-2 "
                />
              </div>
              <div className="items-center ">
                <p className="text-[14px] font-light text-gray-900">
                  วันที่ต้องการ ส่งคืน :{" "}
                </p>
                <input
                  type="date"
                  id=""
                  name=""
                  className="text-white bg-red-600  text-[14px] border-2 border-red-600 rounded-md p-2"
                />
              </div>
            </div>

            <hr className="mt-2 mb-2 border" />
            <div className="justify-center modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="font-normal text-white bg-green-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-600">
                  ยืนยัน
                </button>
                <button className="font-normal ml-2 text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">
                  ยกเลิก
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </LayoutHome>
    </>
  );
}

export default Home;
