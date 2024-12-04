import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";
import ImgDropzone from "../../components/admin/imgDropzone";
import { useNavigate } from "react-router-dom";

const Fromaddproduct = () => {
  const navigate = useNavigate();
  return (
    <Layoutaddmin>
      <div className="flex justify-center">
        <div className=" max-w-7xl  font-prompt bg-white dark:bg-gray-900 p-4 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-900 dark:text-white text-xl">
              เพิ่มครุภัณฑ์
            </p>
            <button
              onClick={() => navigate("/admin/settingfrom")}
              className="bg-amber-600 hover:bg-amber-500 text-white p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] rounded-md inline-flex gap-2 justify-center"
            >
              {" "}
              ตั้งค่ายี้ห้อ รุ่น หมวดหมู่{" "}
            </button>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          {/* พื้นที่การ์ด */}

          <ImgDropzone />

          {/* พื้นที่การ์ด */}
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                ชื่อครุภัณฑ์ :{" "}
              </p>
              <input
                type="text"
                id="small-input"
                // value={productData.productname}
                className="p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 "
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                Sereal Number :{" "}
              </p>
              <input
                type="text"
                id="small-input"
                // value={productData.serialnumber}
                className="p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600 border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 "
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                เลขครุภัณฑ์ :{" "}
              </p>
              <input
                type="text"
                id="small-input"
                // value={productData.serialproduct}
                className="p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:bg-gray-900 dark:text-white dark:border-violet-600  border focus:outline-none focus:ring focus:ring-violet-300 rounded-md bg-gray-50 "
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                ยี้ห้อ :{" "}
              </p>
              <select className="w-auto max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-600  border-gray-300 select select-sm text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
                <option>เลือกยี้ห้อ</option>

                <option>HP</option>
                <option>Lenovo</option>
                <option>Dell</option>
              </select>
              {/* <SelectBrandFrom /> */}
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                รุ่น :{" "}
              </p>
              <select className="w-auto max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-600 border-gray-300 select select-sm text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
                <option>เลือกรุ่น</option>
                <option>Probook</option>
                <option>Thigpad X1</option>
                <option>Thigpad X1 supper</option>
                <option>Tower</option>
              </select>
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                หมวดหมู่ :{" "}
              </p>
              <select className="w-auto max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-600  border-gray-300 select select-sm text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
                <option>เลือกหมวดหมู่</option>
                <option>โน๊ตบุ๊ค</option>
                <option>สวิตซ์</option>
                <option>เราเตอร์</option>
              </select>
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                วันเริ่มสัญญา :{" "}
              </p>
              <input
                id=""
                type="date"
                className="p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] bg-green-700 dark:bg-gray-900 dark:border-green-500 text-gray-50 border border-green-500 rounded-md dark:text-white"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-2 sm:flex justify-between">
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-light text-gray-900 dark:text-white">
                วันหมดอายุสัญญา :{" "}
              </p>
              <input
                id=""
                type="date"
                className="p-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] bg-red-600 dark:bg-gray-900 dark:border-red-500 text-gray-50 border border-red-500 rounded-md"
              />
            </div>
          </div>
          <hr className="mt-2 mb-2 border dark:border-violet-950" />
          <div className="justify-center modal-action">
            <button
              type="submit"
              className="font-normal text-white dark:text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-500"
            >
              ยืนยัน
            </button>
            <button
              onClick={() => navigate("/admin/Stors")}
              className="font-normal ml-2 text-white dark:text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-500"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </Layoutaddmin>
  );
};

export default Fromaddproduct;
