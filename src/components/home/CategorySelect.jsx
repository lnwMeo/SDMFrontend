import React from "react";

const CategorySelect = () => {
  return (
    <>
      <p className="text-[14px] font-medium text-gray-900 dark:text-white">หมวดหมู่ :</p>
      <select className="mt-2  md:mt-0 w-30 max-w-lg text-gray-900 bg-white dark:bg-gray-900 dark:text-white border-violet-300 select select-sm text-[14px] dark:border-violet-900">
        <option>เลือกหมวดหมู่</option>
        <option>โน๊ตบุ๊ค</option>
        <option>สวิตซ์</option>
        <option>เราเตอร์</option>
      </select>
    </>
  );
};
export default CategorySelect;
