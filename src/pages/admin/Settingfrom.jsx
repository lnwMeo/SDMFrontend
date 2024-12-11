import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";

import CrudCategory from "../../components/admin/CrudCategory";
import CrudBrand from "../../components/admin/CrudBrand";
import CrudModal from "../../components/admin/CrudModal";
import CrudYear from "../../components/admin/CrudYear";
const Settingfrom = () => {
  return (
    <Layoutaddmin>
      <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-slate-900 font-prompt dark:text-white">
        ตั้งค่ายี้ห้อ รุ่น หมวดหมู่
      </p>
      <div className="h-full max-h-full p-3 mt-2 rounded-md font-prompt">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-around lg:space-x-2  gap-2  lg:flex-nowrap">
          <CrudBrand />
          <CrudModal />
          <CrudCategory />
          <CrudYear />
        </div>
      </div>
    </Layoutaddmin>
  );
};

export default Settingfrom;
