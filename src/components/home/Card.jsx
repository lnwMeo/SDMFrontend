// เลือกตามหมวดหมู่และเซิร์ต ยังไม่ได้

// import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";

import noimge from "../../assets/image/No_image.png";
import { Comment } from "react-loader-spinner";

function Card({ productsDATA, loading, addToBasket }) {
  //  สร้าง  useState เพิื่มเก็บข้อมูล

  if (loading) {
    return (
      <div className="flex justify-center">
        <Comment
          visible={true}
          height="100"
          width="100"
          color="#fff"
          backgroundColor="#7f7fff"
        />
      </div>
    );
  }

  if (!productsDATA || productsDATA.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="font-prompt text-center dark:text-white text-gray-950">ไม่มีครุภัณฑ์</p>
      </div>
    );
  }



  return (
    <>
      {loading ? (
        <div className="flex  justify-center">
          <Comment
            visible={true}
            height="100"
            width="100"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#7f7fff"
          />
        </div>
      ) : (
        <div className="grid  grid-cols-2 gap-3 mt-5 mb-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8  ">
          {productsDATA.map((product) => (
            <div
              key={product.id}
              className="max-w-sm  drop-shadow-md  dark:shadow-md dark:shadow-gray-800/50 bg-white dark:bg-gray-950  rounded-lg  font-prompt hover:border-violet-700 overflow-hidden"
            >
              {product.first_image && product.first_image.length > 0 ? (
                <img
                  className="rounded-t-md min-w-full h-24 object-cover"
                  src={`http://localhost:8000/${product.first_image[0].path}`} // ระบุ path ของภาพแรก
                  alt={product.productname}
                />
              ) : (
                <img
                  className="rounded-t-md min-w-full h-24 object-cover"
                  src={noimge} // ระบุ path ของภาพแรก
                  alt=""
                />
              )}

              <div className="px-2 py-2">
                <h5 className=" truncate text-sm font-normal tracking-tight text-gray-950 dark:text-white md:text-md sm:text-sm lg:text-md">
                  {product.productname}
                </h5>
                <p className="mb-3 font-light text-gray-500 text-[12px] dark:text-amber-500">
                  {product.category_name}
                </p>
                <button     onClick={() => addToBasket(product)}  className="flex items-center justify-center w-full font-normal text-center px-2 py-1 sm:text-[12px] text-[10px] text-white bg-violet-950 rounded-md hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <FaCartPlus className="mr-1" />
                  เพิ่มเข้าตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;
