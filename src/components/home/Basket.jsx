import {useEffect, useState } from "react";
import CardBasket from "./CardBasket";



function Basket({ basket, setBasket }) {
  const [remainingTime, setRemainingTime] = useState(0); // ตั้งค่าเริ่มต้นเป็น 0
  const [timerActive, setTimerActive] = useState(false); // ควบคุมการทำงานของตัวจับเวลา

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  };



  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket)); // โหลดข้อมูลตะกร้า
    }
  }, [setBasket]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    if (basket.length > 0) {
      setRemainingTime(5 * 60); // เริ่มต้นใหม่ทุกครั้งเมื่อมีสินค้าใน basket
      setTimerActive(true); // เปิดใช้งานตัวจับเวลา
    } else {
      setRemainingTime(0); // รีเซ็ตเวลาเมื่อไม่มีสินค้า
      setTimerActive(false); // ปิดใช้งานตัวจับเวลา
    }
  }, [basket]);

  useEffect(() => {
    if (!timerActive) return; // ถ้าตัวจับเวลาไม่ทำงาน ไม่ต้องนับถอยหลัง

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(interval); // หยุดการนับถอยหลังเมื่อถึง 0
        setBasket([]); // ล้างตะกร้าเมื่อหมดเวลา
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval); // ล้าง interval เมื่อ component unmount
  }, [timerActive, setBasket]);


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <div className="bg-white modal-box dark:bg-slate-900">
      <div className="flex justify-between ">
        <div>
          <h3 className="font-medium text-gray-900 text-md text-[18px] dark:text-white">
            ตะกร้า
          </h3>
        </div>
        <div className="text-right ">
          <p className="text-amber-400">เวลาทำรายการที่เหลือ : {formatTime(remainingTime)} นาที</p><p className="text-xs">เมื่อหมดเวลาจะลบสินค้าทั้งหมดออกจากตะกร้า</p>
        </div>
      </div>
      <div className="flex justify-between "></div>
      <h3 className="font-medium text-gray-900 text-md dark:text-white">
        รายละเอียด
      </h3>
      <hr className="mt-2 mb-2 border dark:border-violet-950" />
      <div className="overflow-y-auto h-72 p-2">
        {/* Map through basket and pass removeFromBasket */}
        {basket.length > 0 ? (
          basket.map((product) => (
            <CardBasket
              key={product.id}
              product={product}
              removeFromBasket={removeFromBasket}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-300">
            ยังไม่ได้เลือกครุภัณฑ์
          </p>
        )}
      </div>
      <hr className="mt-2 mb-2 border dark:border-violet-950" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="inline-flex items-center">
          <p className="text-[14px] font-light text-gray-900 dark:text-white">
            ผู้ยืม :{" "}
          </p>
          <p className="text-gray-900 dark:text-white text-[14px] text-center p-2">
            ครู เพ็ญศรี
          </p>
        </div>
        <div className="inline-flex items-center">
          <p className="text-[14px] font-light text-gray-900 dark:text-white">
            หน่วยงาน :{" "}
          </p>
          <p className="text-gray-900 dark:text-white text-[14px] text-center p-2">
            คณะครุศาสตร์
          </p>
        </div>
        <div className="inline-flex items-center">
          <p className="text-[14px] font-light text-gray-900 dark:text-white">
            เบอร์โทร :{" "}
          </p>
          <p className="text-gray-900 dark:text-white text-[14px] text-center p-2">
            0999999999
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-2 mb-2">
        <div className="items-center">
          <p className="text-[14px] font-light text-gray-900 dark:text-white">
            วันที่ต้องการ ยืม :
          </p>
          <input
            type="date"
            className="text-white bg-green-600 text-[14px] border-2 border-green-600 rounded-md p-2 dark:bg-gray-900 dark:border-green-500"
          />
        </div>
        <div className="items-center">
          <p className="text-[14px] font-light text-gray-900 dark:text-white">
            วันที่ต้องการ ส่งคืน :
          </p>
          <input
            type="date"
            className="text-white bg-red-600 text-[14px] border-2 border-red-600 rounded-md p-2 dark:bg-gray-900 dark:border-red-500"
          />
        </div>
      </div>
      <hr className="mt-2 mb-2 border dark:border-violet-950" />
      <div className="justify-center modal-action">
        <form method="dialog">
          <button className="font-normal text-white bg-green-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-green-700">
            ยืนยัน
          </button>
          <button className="font-normal ml-2 text-white bg-red-600 border-white rounded-md inline-flex px-4 py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] gap-2 hover:bg-red-700">
            ยกเลิก
          </button>
        </form>
      </div>
    </div>
  );
}

export default Basket;
