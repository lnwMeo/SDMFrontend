import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import {
  createbrand,
  listbrand,
  updatebrand,
  removebrand,
} from "../../api/brand";

import { listBrandModal } from "../../api/modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CrudBrand = () => {
  const [newBrand, setnewBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editBrandId, setEditBrandId] = useState(null);

  const fetchBrands = async () => {
    try {
      const response = await listbrand();
      setBrands(response.data);
    } catch (error) {
      console.error("fetch Error !!!", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleAddBrand = async () => {
    if (!newBrand.trim()) {
      toast.warn("กรุณากรอกชื่อยี้ห้อ");
      return;
    }

    try {
      if (editMode) {
        await updatebrand(editBrandId, { brand_name: newBrand });
        toast.success("แก้ไขยี้ห้อสำเร็จ !");
      } else {
        await createbrand({ brand_name: newBrand });
        toast.success("เพิ่มยี้ห้อสำเร็จ !");
      }
      setnewBrand("");
      setEditMode(false);
      setEditBrandId(null);
      fetchBrands();
    } catch (error) {
      console.error(error);
      toast.error("เกิดข้อผิดพลาด");
    }
  };

  const handleEditBrand = (brand) => {
    setnewBrand(brand.brand_name);
    setEditMode(true);
    setEditBrandId(brand.id);
  };

  const handleDeleteBrand = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบยี้ห้อ ?",
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
        const response = await listBrandModal(); // ดึง modal ทั้งหมด
        const linkedModals = response.data.filter(
          (modal) => modal.brandId === id
        );

        if (linkedModals.length > 0) {
          toast.error("ไม่สามารถลบได้เนื่องจากมีรุ่นที่เชื่อมโยงอยู่");
          return;
        }

        await removebrand(id);
        toast.success("ลบยี้ห้อสำเร็จ !");
        fetchBrands();
      } catch (error) {
        console.error(error);
        toast.error("เกิดข้อผิดพลาดในการลบ");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-900  rounded-lg shadow-lg">
      <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] text-slate-900 dark:text-white mb-4">ยี้ห้อ</p>
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          id="small-input"
           placeholder="กรุณากรอก แบรนด์ ... "
          value={newBrand}
          onChange={(e) => setnewBrand(e.target.value)}
          className="p-1 w-full flex-grow text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50"
        />
        <button
          onClick={handleAddBrand}
          className={`${
            editMode
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-green-600 hover:bg-green-500"
          } text-white p-2 flex-shrink-0 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] rounded-md inline-flex gap-2 justify-center items-center`}
        >
          {editMode ? "แก้ไขยี้ห้อ" : "เพิ่มยี้ห้อ"}
        </button>
      </div>
      <div className="overflow-y-auto h-72 p-2 mt-2">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="p-2 mt-1  bg-gray-100 dark:bg-gray-800 rounded-md flex justify-between items-center"
          >
            <p className="text-slate-900 dark:text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
              {brand.brand_name}
            </p>
            <div className="inline-flex gap-1">
              <button
                onClick={() => handleEditBrand(brand)}
                className="p-1 rounded-md  bg-amber-500 hover:bg-amber-600"
              >
                <BiSolidEdit className="text-[16px] text-white dark:text-white" />
              </button>
              <button
                onClick={() => handleDeleteBrand(brand.id)}
                className="p-1 rounded-md bg-red-500 hover:bg-red-600"
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

export default CrudBrand;
