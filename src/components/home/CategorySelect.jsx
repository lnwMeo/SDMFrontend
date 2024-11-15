import React, { useEffect, useState } from "react";
import {listcategory} from "../../api/category";

const CategorySelect = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listcategory();
        setCategories(response.data); // Assuming `response.data` contains an array of categories
      } catch (error) {
        console.error("Error fetching categories!", error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <p className="text-[14px] font-medium text-gray-900 dark:text-white">หมวดหมู่ :</p>
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="mt-2 md:mt-0 w-30 max-w-lg text-gray-900 bg-white dark:bg-gray-900 dark:text-white select select-sm text-[14px] drop-shadow-md dark:shadow-md dark:shadow-gray-800/50"
      >
        <option value="">ทั้งหมด</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>
    </>
  );
};
export default CategorySelect;
