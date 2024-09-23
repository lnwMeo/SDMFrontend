import React from "react";
import { FaSearch } from "react-icons/fa";

const CategorySearch = () => {
  return (
    <>
      <p className="text-[14px] font-medium text-gray-900 mt-2  md:mt-0 dark:text-white">ค้นหา :</p>
      <div className="relative mt-2  md:mt-0  ">
        <div className="absolute inset-y-0 start-0 flex items-center  ps-3 pointer-events-none bg-violet-950 rounded-s-lg pr-2">
          <FaSearch className="w-4 h-4 text-white " />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-[14px] dark:bg-gray-900 dark:text-white text-gray-900 border border-violet-300 rounded-lg bg-white input-sm dark:border-violet-900 "
          placeholder="ค้นหา"
        />
      </div>
    </>
  );
};

export default CategorySearch;
