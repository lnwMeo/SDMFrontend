import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import {
  createcategory,
  listcategory,
  updatecategory,
  removecategory,
} from "../../api/category";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CrudCategory = () => {
  const [newCategory, setnewCategory] = useState(""); // ตรวจสอบให้แน่ใจว่าค่าตั้งต้นเป็น string
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await listcategory(); // ดึงข้อมูลหมวดหมู่
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories(); // เรียกใช้งานเมื่อ component ถูก mount
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      toast.warn("กรุณากรอกชื่อหมวดหมู่");
      return;
    }

    try {
      if (editMode) {
        // Update category
        await updatecategory(editCategoryId, { category_name: newCategory });
        toast.success("แก้ไขหมวดหมู่สำเร็จ !");
      } else {
        // Create category
        await createcategory({ category_name: newCategory });
        toast.success("เพิ่มหมวดหมู่สำเร็จ !");
      }
      setnewCategory("");
      setEditMode(false);
      setEditCategoryId(null);
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error("เกิดข้อผิดพลาด มีชื่อหมวดหมู่นี้อยู่แล้ว");
      setnewCategory("");
    }
  };

  const handleEditCategory = (category) => {
    setnewCategory(category.category_name);
    setEditMode(true);
    setEditCategoryId(category.id);
  };

  const handleDeleteCategory = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบหมวดหมู่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      customClass: {
        popup: "text-white dark:bg-gray-800  rounded-lg",
        title: "text-xl font-normal font-prompt text-gray-900 dark:text-white", // ใช้ Tailwind สำหรับ title
        content: "text-sm font-prompt  text-gray-700 dark:text-white", // ใช้ Tailwind สำหรับ content
        confirmButton:
          "bg-blue-500 font-prompt  hover:bg-blue-600 text-white font-normal  py-2 px-4 rounded",
        cancelButton:
          "bg-red-500 font-prompt  hover:bg-red-600 text-white font-normal  py-2 px-4 rounded",
      },
    });
    if (result.isConfirmed) {
      try {
        await removecategory(id);
        toast.success("ลบหมวดหมู่สำเร็จ !");
        fetchCategories();
      } catch (error) {
        console.error(error);
        toast.error("เกิดข้อผิดพลาดในการลบ");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-900  rounded-lg shadow-lg">
      <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] text-slate-900 dark:text-white mb-4">
        หมวดหมู่
      </p>

      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          id="small-input"
          placeholder="กรุณากรอก หมวดหมู่ ... "
          value={newCategory}
          onChange={(e) => setnewCategory(e.target.value)}
          className="p-1 w-full flex-grow text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50"
        />
        <button
          onClick={handleAddCategory}
          className={`${
            editMode
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-green-600 hover:bg-green-500"
          } text-white p-2 flex-shrink-0 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] rounded-md inline-flex gap-2 justify-center items-center`}
        >
          {editMode ? "แก้ไขหมวดหมู่" : "เพิ่มหมวดหมู่"}
        </button>
      </div>
      <div className="overflow-y-auto h-72 p-2 mt-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-2 mt-1  bg-gray-100 dark:bg-gray-800 rounded-md flex justify-between items-center"
          >
            <p className="text-slate-900 dark:text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
              {category.category_name}
            </p>
            <div className="inline-flex gap-1">
              <button
                className="p-1 rounded-md  bg-amber-500 hover:bg-amber-600"
                onClick={() => handleEditCategory(category)}
              >
                <BiSolidEdit className="text-[16px] text-white dark:text-white" />
              </button>
              <button
                className="p-1 rounded-md bg-red-500 hover:bg-red-600"
                onClick={() => handleDeleteCategory(category.id)}
              >
                <MdDelete className="text-[16px] text-white dark:text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudCategory;
