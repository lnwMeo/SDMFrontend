import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import {
  createModal,
  listBrandModal,
  updateModal,
  removeModal,
} from "../../api/modal";

import { listbrand } from "../../api/brand";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CrudModal = () => {
  const [brands, setBrands] = useState([]);
  const [selectBrand, setSelectBrand] = useState("");
  const [newModal, setnewModal] = useState("");
  const [brandmodals, setBrandModal] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editModalId, setEditModalId] = useState(null);

  useEffect(() => {
    fetchBrands();
    fetchBrandModal();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await listbrand();
      setBrands(response.data); // เก็บข้อมูลแบรนด์ใน state
    } catch (error) {
      console.error("Error fetching brands:", error);
      toast.error("ไม่สามารถโหลดข้อมูลยี่ห้อได้");
    }
  };

  const headleAddModal = async () => {
    if (!selectBrand || !newModal.trim()) {
      toast.warn("กรุณาเลือกยี้ห้อและกรอกชื่อรุ่น");
      return;
    }

    try {
      const modalData = {
        brandId: selectBrand, // ส่ง brandId ใน body
        model_name: newModal, // ส่ง model_name ใน body
      };
      if (editMode) {
        await updateModal(editModalId, modalData);
        toast.success("แก้ไขรุ่นสำเร็จ !");
      } else {
        await createModal(modalData); // เรียกใช้ API ด้วย data ใน body
        toast.success("เพิ่มรุ่นสำเร็จ !");
      }
      setSelectBrand("");
      setnewModal("");
      setEditMode(false);
      fetchBrandModal();
    } catch (error) {
      console.error("Error adding model:", error);
      toast.error("เกิดข้อผิดพลาด");
    }
  };

  const handleEditModal = (modal) => {
    setnewModal(modal.model_name); // เซ็ตชื่อรุ่นที่ต้องการแก้ไข
    setSelectBrand(modal.brandId); // เซ็ตยี่ห้อที่เกี่ยวข้อง
    setEditMode(true); // เปิดโหมดแก้ไข
    setEditModalId(modal.id); // เซ็ต ID ของ modal ที่ต้องการแก้ไข
  };

  const handleDeleteModal = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบรุ่น ?",
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
        await removeModal(id);
        toast.success("ลบรุ่นสำเร็จ !");
        fetchBrandModal();
      } catch (error) {
        console.error(error);
        toast.error("เกิดข้อผิดพลาดในการลบ");
      }
    }
  };

  const fetchBrandModal = async () => {
    try {
      const response = await listBrandModal();
      setBrandModal(response.data);
    } catch (error) {
      console.error("fetch Error !!!", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-900  rounded-lg shadow-lg">
      <p className="text-[16px] text-slate-900 dark:text-white mb-4">รุ่น</p>
      <div className="grid gap-y-2">
        <div className="flex justify-between items-center gap-2">
          <p className="dark:text-white text-gray-950  text-[14px]">
            เลือกยี้ห้อ
          </p>
          <select
            value={selectBrand}
            onChange={(e) => setSelectBrand(e.target.value)}
            className="w-full max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-600 border border-gray-300 select select-sm text-[14px]"
          >
            <option value="">เลือกยี่ห้อ</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.brand_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between items-center gap-2 ">
          <input
            value={newModal}
            type="text"
            id="small-input"
            onChange={(e) => setnewModal(e.target.value)}
            className="p-1 w-full flex-grow text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50"
          />
          <button
            onClick={headleAddModal}
            className={`${
              editMode
                ? "bg-yellow-500 hover:bg-yellow-400"
                : "bg-green-600 hover:bg-green-500"
            } text-white p-2 flex-shrink-0 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] rounded-md inline-flex gap-2 justify-center items-center`}
          >
            {editMode ? "แก้ไขรุ่น" : "เพิ่มรุ่น"}
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-72 p-2 mt-2">
        {brandmodals.map((brandmodal) => (
          <div
            key={brandmodal.id}
            className="bg-gray-100 dark:bg-gray-800 p-2 mt-1 text-slate-900 dark:text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] rounded-md flex justify-between items-center"
          >
            <div>
              <p className="text-amber-500 text-[10px]">
                {brandmodal.brand.brand_name}
              </p>
              <p>{brandmodal.model_name}</p>
            </div>
            <div className="inline-flex gap-1">
              <button
                onClick={() => handleEditModal(brandmodal)}
                className="p-1 rounded-md  bg-amber-500 hover:bg-amber-600"
              >
                <BiSolidEdit className="text-[16px] text-white dark:text-white" />
              </button>
              <button
                onClick={() => handleDeleteModal(brandmodal.id)}
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

export default CrudModal;
