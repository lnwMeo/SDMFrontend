import { React, useState, useEffect } from "react";
import LayoutHome from "../../components/layout/home/LayoutHome";
import Card from "../../components/home/Card";
import Basket from "../../components/home/Basket";
import CardBasket from "../../components/home/CardBasket";
import { FaBasketShopping } from "react-icons/fa6";

import CategorySelect from "../../components/home/CategorySelect";
import ProductSearch from "../../components/home/ProductSearch";
import ReactPaginate from "react-paginate";

import {
  listProduct,
  listproductbycategory,
  listProductBySearch,
} from "../../api/product";
function Home() {
  const [selectCategory, setselectCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [productsDATA, setProductDATA] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // For pagination
  const itemsPerPage = 16; // Set items per page

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response;
      if (keyword) {
        response = await listProductBySearch(keyword);
      } else if (selectCategory) {
        response = await listproductbycategory(selectCategory);
      } else {
        response = await listProduct();
      }
      setProductDATA(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectCategory, keyword]);

  // logic สำหรับแบ่งหน้า
  const pageCount = Math.ceil(productsDATA.length / itemsPerPage);
  const handlePageClick = (event) => setCurrentPage(event.selected);

  // สร้างข้อมูลที่แบ่งตามหน้า
  const paginatedData = productsDATA.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
      <LayoutHome>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="fixed z-[99999] bottom-8 right-8 bg-violet-900 shadow-sm shadow-violet-700 btn btn-circle hover:bg-white text-white hover:text-violet-900"
        >
          <div className="indicator">
            <FaBasketShopping className="w-6 h-6 " />
            <span className="text-white bg-red-600 border-white badge badge-sm indicator-item">
              5
            </span>
          </div>
        </button>
        <div className="flex items-center justify-between p-2 md:mt-5 font-prompt md:p-0">
          <p className="content-center font-medium text-center text-gray-900 text-md dark:text-white">
            ขอยืม ครุภัณฑ์
          </p>

          <div className="items-center  md:inline-flex gap-2">
            <CategorySelect onSelectCategory={setselectCategory} />
            <ProductSearch onSearch={setKeyword} />
            {/* <CategorySearch /> */}
          </div>
        </div>
        <Card productsDATA={paginatedData} loading={loading} />
        <div className="grid items-center col-span-6 px-5 py-5 text-center ">


        {/* Component Pagination */}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center list-none p-0 mx-3 my-3"
          pageClassName="mx-1"
          pageLinkClassName="px-3 py-1  sm:text-[12px] text-[10px]  cursor-pointer bg-indigo-600 text-white  text-gray-700 rounded-md hover:bg-indigo-800 font-prompt"
          activeLinkClassName=" cursor-pointer text-white  bg-indigo-950"
          previousClassName="mx-1"
          nextClassName="mx-1"
          breakClassName="mx-1"
          previousLinkClassName="px-3 py-1  sm:text-[12px] text-[10px] cursor-pointer bg-indigo-700 text-white  text-gray-700 rounded-md hover:bg-indigo-600 font-prompt"
          nextLinkClassName="px-3 py-1 sm:text-[12px] text-[10px]  cursor-pointer bg-indigo-700 text-white  text-gray-700 rounded-md hover:bg-indigo-600 font-prompt"
        />
        </div>

        <dialog
          id="my_modal_2"
          className=" modal modal-bottom sm:modal-middle font-prompt  "
        >
          <div className="bg-white modal-box dark:bg-slate-900">
            <h3 className="font-medium text-gray-900 text-md text-[18px] dark:text-white">
              ตะกร้า
            </h3>
            <div className="flex justify-between ">
              <h3 className="font-medium text-gray-900 text-md dark:text-white">
                รายละเอียด
              </h3>
            </div>
            <hr className="mt-2 mb-2 border dark:border-violet-950" />
            {/* พื้นที่การ์ด */}
            <div className="overflow-y-auto h-72 p-2 ">
              <CardBasket />
            </div>

            {/* พื้นที่การ์ด */}
            <hr className="mt-2 mb-2 border dark:border-violet-950" />
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  ผู้ยืม :{" "}
                </p>
                <p className="text-gray-900 dark:text-white  text-[14px] text-center  p-2">
                  ครู เพ็ญศรี
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  หน่วยงาน :{" "}
                </p>
                <p className="text-gray-900 dark:text-white  text-[14px] text-center  p-2">
                  คณะครุศาสตร์
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  เบอร์โทร :{" "}
                </p>
                <p className="text-gray-900 dark:text-white  text-[14px] text-center  p-2">
                  0999999999
                </p>
              </div>
            </div>
            <div className="flex justify-around mt-2 mb-2">
              <div className="items-center ">
                <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                  วันที่ต้องการ ยืม :{" "}
                </p>
                <input
                  type="date"
                  id=""
                  name=""
                  className="text-white bg-green-600  text-[14px] border-2 border-green-600 rounded-md p-2 dark:bg-gray-900 dark:border-green-500"
                />
              </div>
              <div className="items-center ">
                <p className="text-[14px] font-light text-gray-900 dark:text-white ">
                  วันที่ต้องการ ส่งคืน :{" "}
                </p>
                <input
                  type="date"
                  id=""
                  name=""
                  className="text-white bg-red-600  text-[14px] border-2 border-red-600 rounded-md p-2 dark:bg-gray-900 dark:border-red-500"
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

      </LayoutHome>
    </>
  );
}

export default Home;

{
  /*pagination */
}
{
  /* <div className="grid items-center col-span-6 px-5 py-5 text-center ">
          <div className=" ">
            <div className=" bg-white dark:bg-gray-950 join dark:text-white">
              <button className="text-gray-950  bg-white dark:bg-gray-950 dark:text-white join-item btn ">
                «
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white  join-item btn ">
                1
              </button>
              <button className=" text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn ">
                2
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn ">
                3
              </button>
              <button className=" text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn ">
                4
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950  dark:text-white join-item btn ">
                5
              </button>
              <button className="text-gray-950 bg-white dark:bg-gray-950 dark:text-white join-item btn ">
                »
              </button>
            </div>
          </div>
        </div> */
}
{
  /* </div> */
}

{
  /* basket */
}
{
  /* <div className='p-5 md:p-0 sm:p-0 lg:p-0 xl:p-0'>
                        <Basket />

                    </div> */
}
{
  /* </div> */
}
