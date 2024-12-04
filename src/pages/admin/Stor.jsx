import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdQrCodeScanner } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Stor() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Notebook HP G10 N.1",
      serialNumber: "MK0998VLLL",
      productNumber: "คต093238495",
      brand: "HP",
      model: "Probook",
      category: "โน๊ตบุ๊ค",
      expiryDate: "15/12/68",
      status: "อยู่ในคลัง",
    },
    {
      id: 2,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 3,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 4,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 5,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 6,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 7,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 7,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 7,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
    {
      id: 7,
      name: "Notebook Lenovo IdeaPad 3",
      serialNumber: "LV9384DFFE",
      productNumber: "คต93847293",
      brand: "Lenovo",
      model: "IdeaPad",
      category: "โน๊ตบุ๊ค",
      expiryDate: "30/12/68",
      status: "ถูกยืม",
    },
  ];
  return (
    <Layoutaddmin>
      <p className="text-3xl text-slate-900 font-prompt dark:text-white">
        คลังครุภัณฑ์
      </p>
      <div className="h-full max-h-full p-3 mt-2   rounded-md font-prompt ">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-gray-900 font-normal dark:text-white">
            หมวดหมู่ครุภัณฑ์
          </p>
          <div className="inline-flex gap-2">
            <select className="w-full max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-950 border-gray-300 select select-sm text-[14px]">
              <option>เลือกหมวดหมู่</option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
            <div className="relative mt-2  md:mt-0  ">
              <div className="absolute inset-y-0 start-0 flex items-center  ps-3 pointer-events-none rounded-s-lg pr-2 ">
                <FaSearch className="w-4 h-4 text-gray-900 dark:text-white" />
              </div>
              <input
                type="search"
                className="block w-full p-2 ps-10 text-[14px] dark:bg-gray-900 dark:text-white text-gray-900  rounded-lg bg-white input-sm dark:border-violet-900 "
                placeholder="ค้นหา"
              />
            </div>
          </div>
          <div className="">
            <button
              className="text-[14px] p-1 bg-green-500 text-white hover:text-white hover:bg-green-700 rounded-md inline-flex gap-2 items-center"
              onClick={() => navigate("/admin/Fromaddproduct")}
            >
              {" "}
              <IoMdAddCircle className="text-xl" />
              เพิ่ม ครุภัณฑ์
            </button>
          </div>
        </div>

        <div className="relative mt-2  overflow-x-auto border dark:border-violet-950 sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 rtl:text-right ">
            <thead className=" dark:bg-violet-900 bg-gray-200  ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white "
                >
                  ลำดับ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  ชื่อครุภัณฑ์
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[12px] font-normal text-gray-900 dark:text-white hidden md:table-cell"
                >
                  serial number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white hidden md:table-cell"
                >
                  เลขครุภัณฑ์
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white hidden md:table-cell"
                >
                  ยี่ห้อ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white hidden md:table-cell"
                >
                  รุ่น
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white hidden md:table-cell"
                >
                  หมวดหมู่
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  วันหมดอายุสัญญา
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  รายละเอียด
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  เปิด - ปิด การยืม
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[12px] font-normal text-gray-900 dark:text-white"
                >
                  แก้ไข - ลบ
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 dark:bg-gray-950">
              {products.map((product, index) => (
                <tr key={product.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white ">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                    {product.serialNumber}
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                    {product.productNumber}
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                    {product.brand}
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                    {product.model}
                  </td>

                  <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] text-red-600 dark:text-red-500">
                    {product.expiryDate}
                  </td>

                  <td
                    className={`px-6 py-4 font-light text-[12px] ${
                      product.status === "อยู่ในคลัง"
                        ? "text-emerald-600  dark:text-emerald-400"
                        : "text-gray-600 dark:text-gray-600"
                    }`}
                  >
                    {product.status}
                  </td>

                  <td className="px-6 py-4 ">
                    <button
                      className="p-1 bg-blue-700 rounded-md hover:bg-blue-800"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      <BiSolidDetail className="text-[16px] text-white dark:text-white" />
                    </button>
                  </td>
                  <td className="px-6 py-4 font-light text-[12px] ">
                    <input
                      type="checkbox"
                      className="toggle toggle-sm toggle-success [--tglbg:white] "
                      defaultChecked
                    />
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="inline-flex gap-2">
                      <button className="p-1 rounded-md bg-amber-500 hover:bg-amber-700">
                        <FaEdit className="text-[16px] text-white dark:text-white" />
                      </button>
                      <button className="p-1 bg-red-500 rounded-md hover:bg-red-800">
                        <MdDelete className="text-[16px] text-white dark:text-white" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* <tr className="">
                <th
                  scope="row"
                  className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4 font-light  text-[12px] text-gray-900 dark:text-white">
                  Notebook HP G10 N.1
                </td>
                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                  MK0998VLLL
                </td>
                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                  คต093238495
                </td>
                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                  HP
                </td>
                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                  Probook
                </td>

                <td className="px-6 py-4 font-light text-[12px] text-gray-900 dark:text-white hidden md:table-cell">
                  โน๊ตบุ๊ค
                </td>
                <td className="px-6 py-4 font-light text-[12px] text-red-600 dark:text-red-500">
                  15/12/68
                </td>

                <td className="px-6 py-4 font-light text-[12px] text-gray-600 dark:text-gray-600">
                  ถูกยืม
                </td>
                <td className="px-6 py-4 ">
                  <button
                    className="p-1 bg-blue-700 rounded-md hover:bg-blue-800"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    <BiSolidDetail className="text-[16px] text-white dark:text-white" />
                  </button>
                </td>
                <td className="px-6 py-4 font-light text-[12px] ">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm toggle-success [--tglbg:white] "
                    defaultChecked
                  />
                </td>
                <td className="px-6 py-4 ">
                  <div className="inline-flex gap-2">
                    <button className="p-1 rounded-md bg-amber-500 hover:bg-amber-700">
                      <FaEdit className="text-[16px] text-white dark:text-white" />
                    </button>
                    <button className="p-1 bg-red-500 rounded-md hover:bg-red-800">
                      <MdDelete className="text-[16px] text-white dark:text-white" />
                    </button>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>

        {/* รายละเอียด  เพิ่ม zoom image*/}
        <dialog id="my_modal_5" className="modal ">
          <div className="  max-w-5xl bg-white dark:bg-gray-900 modal-box ">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900 dark:text-white text-md">
                รายละเอียด
              </h3>
              <button className="inline-flex gap-2 p-2 font-prompt text-[14px] bg-cyan-600 rounded-md text-white hover:bg-cyan-700">
                {" "}
                <MdQrCodeScanner className="text-[20px]" /> Gen QRcode
              </button>
            </div>
            <hr className="mt-2 mb-2 border dark:border-violet-950" />
            {/* พื้นที่การ์ด */}
            <div className="flex justify-center dark:bg-slate-800">
              <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2  ">
                <div className="flex items-center p-1  rounded-md  size-32 ">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="flex items-center p-1 size-32 rounded-md ">
                  <img
                    src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center p-1 size-32  rounded-md ">
                  <img
                    src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center p-1 size-32 rounded-md ">
                  <img
                    src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center p-1 size-32 rounded-md ">
                  <img
                    src="https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08473513_2_5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* พื้นที่การ์ด */}
            <hr className="mt-2 mb-2 border dark:border-violet-950" />
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  ชื่อครุภัณฑ์ :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center   p-2 dark:text-white">
                  Notebook HP G10 N.1
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  Sereal Number :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center  p-2 dark:text-white">
                  MK0998VLLL
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  เลขครุภัณฑ์ :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center  p-2 dark:text-white">
                  คต093238495
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  ยี้ห้อ :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center  p-2 dark:text-white">
                  HP
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  รุ่น :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center  p-2 dark:text-white">
                  Probook
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  หมวดหมู่ :{" "}
                </p>
                <p className="text-gray-900  text-[14px] text-center  p-2 dark:text-white">
                  โน๊ตบุ๊ต
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  วันเริ่มสัญญา :{" "}
                </p>
                <p className="text-green-700  text-[14px] text-center dark:text-green-500 p-2">
                  15/12/68
                </p>
              </div>
              <div className="inline-flex items-center">
                <p className="text-[14px] font-light text-gray-900 dark:text-white">
                  วันหมดอายุสัญญา :{" "}
                </p>
                <p className="text-red-700  text-[14px] text-center dark:text-red-500  p-2">
                  15/12/68
                </p>
              </div>
            </div>
            <hr className="mt-2 mb-2 border dark:border-violet-950" />
            <div className="justify-center modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="font-normal text-white bg-red-500 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-600">
                  ปิด
                </button>
              </form>
            </div>
          </div>
        </dialog>
        {/* รายละเอียด */}
      </div>
    </Layoutaddmin>
  );
}

export default Stor;
