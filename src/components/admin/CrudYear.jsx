import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { createYear, listYear, removeYear, updateYear } from "../../api/year";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const CrudYear = () => {
  const [newYear, setnewYear] = useState("");
  const [year, setYear] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editYearId, setEditYearId] = useState(null);

  const fetchYears = async () => {
    try {
      const response = await listYear();
      setYear(response.data);
    } catch (error) {
      console.log("fetch Error", error);
    }
  };

  useEffect(() => {
    fetchYears();
  }, []);

  const handleAddYears = async () => {
    if (!newYear.trim()) {
      return toast.warn("กรุณากรอกปีที่ต้องการ");
    }
    if (isNaN(newYear)) {
      return toast.warn("กรุณากรอกปีเป็นตัวเลข");
    }
    try {
      if (editMode) {
        await updateYear(editYearId, { year: parseInt(newYear, 10) }); // แปลง newYear เป็นตัวเลข
        toast.success("แก้ไขปีสำเร็จ!");
      } else {
        await createYear({ year: parseInt(newYear, 10) }); // แปลง newYear เป็นตัวเลข
        toast.success("เพิ่มปีสำเร็จ!");
      }
      setnewYear("");
      setEditMode(false);
      setEditYearId(null);
      fetchYears();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "เกิดข้อผิดพลาด");
    }
  };

  const handleEditYear = (year) => {
    setnewYear(year.year);
    setEditMode(true);
    setEditYearId(year.id);
  };

  const handleDeleteYear = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบปี ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      customClass: {
        popup: "text-white dark:bg-gray-800  rounded-lg",
        title: "text-xl font-normal font-prompt text-gray-900 dark:text-white",
        content: "text-sm font-prompt text-gray-700 dark:text-white",
        confirmButton:
          "bg-blue-500 font-prompt hover:bg-blue-600 text-white font-normal py-2 px-4 rounded",
        cancelButton:
          "bg-red-500 font-prompt hover:bg-red-600 text-white font-normal py-2 px-4 rounded",
      },
    });

    if (result.isConfirmed) {
      try {
        await removeYear(id); // ลบข้อมูลผ่าน API
        toast.success("ลบปีสำเร็จ !");
        fetchYears(); // อัปเดตข้อมูลใหม่หลังจากลบสำเร็จ
      } catch (error) {
        console.error(error);

        // แสดงข้อความข้อผิดพลาดผ่าน toast
        if (error.response?.data?.message) {
          // ข้อความจากเซิร์ฟเวอร์
          toast.error(`ข้อผิดพลาด: ${error.response.data.message}`);
        } else if (error.message) {
          // ข้อความทั่วไป เช่น network error
          toast.error(`ข้อผิดพลาด: ${error.message}`);
        } else {
          // ข้อผิดพลาดที่ไม่รู้จัก
          toast.error("เกิดข้อผิดพลาดในการลบ");
        }
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-900  rounded-lg shadow-lg">
      <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] text-slate-900 dark:text-white mb-4">
        ปี
      </p>

      <div className="flex justify-between items-center gap-2 ">
        <input
          type="number"
          id="small-input"
          value={newYear}
          placeholder="กรุณากรอก ปี ... "
          onChange={(e) => setnewYear(e.target.value)}
          className="p-1 w-full flex-grow text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50"
        />
        <button
          onClick={handleAddYears}
          className={`${
            editMode
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-green-600 hover:bg-green-500"
          } text-white p-2 flex-shrink-0 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] rounded-md inline-flex gap-2 justify-center items-center`}
        >
          {" "}
          {editMode ? "แก้ไขปี" : "เพิ่มปี"}
        </button>
      </div>
      <div className="overflow-y-auto h-72 p-2 mt-2">
        {year.map((year) => (
          <div
            key={year.id}
            className="p-2 mt-1  bg-gray-100 dark:bg-gray-800 rounded-md flex justify-between items-center"
          >
            <p className="text-slate-900 dark:text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
              {year.year}
            </p>
            <div className="inline-flex gap-1">
              <button
                className="p-1 rounded-md  bg-amber-500 hover:bg-amber-600"
                onClick={() => handleEditYear(year)}
              >
                <BiSolidEdit className="text-[16px] text-white dark:text-white" />
              </button>
              <button
                className="p-1 rounded-md bg-red-500 hover:bg-red-600"
                onClick={() => handleDeleteYear(year.id)}
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

export default CrudYear;
