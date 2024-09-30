import React from "react";
import { FaCartPlus } from "react-icons/fa";

function Card({ productsDATA }) {
  // Safeguard: check if productsDATA exists and is an array
  if (
    !productsDATA ||
    !Array.isArray(productsDATA) ||
    productsDATA.length === 0
  ) {
    return (
      <div className=" flex justify-center">
        <p className="font-prompt text-center text-white">ไม่มีครุภัณฑ์</p>
      </div>
    );
  }
  return (
    <>
      <div className="grid  grid-cols-2 gap-3 mt-5 mb-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8  ">
        {productsDATA.map((product) => (
          <div
            key={product.id}
            className="max-w-sm  drop-shadow-md  dark:shadow-md dark:shadow-gray-800/50 bg-white dark:bg-gray-950  rounded-lg  font-prompt hover:border-violet-700 overflow-hidden"
          >
            <img
              className="rounded-t-md min-w-full h-24 object-fill"
              src={product.imageproduct}
              alt={product.name} // Add meaningful alt text
            />
            <div className="px-2 py-2">
              <h5 className="truncate text-sm font-normal tracking-tight text-gray-950 dark:text-white md:text-md sm:text-sm lg:text-md">
                {product.name}
              </h5>
              <p className="mb-3 font-light text-gray-500 text-[12px] dark:text-amber-500">
                {product.category}
              </p>
              <button className="flex items-center justify-center w-full font-normal text-center px-2 py-1 sm:text-[12px] text-[10px] text-white bg-violet-950 rounded-md hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <FaCartPlus className="mr-1" />
                เพิ่มเข้าตะกร้า
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
