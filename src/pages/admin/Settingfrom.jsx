import Layoutaddmin from "../../components/layout/admin/LayoutAdmin";

import CrudCategory from "../../components/admin/CrudCategory";
import CrudBrand from "../../components/admin/CrudBrand";
import CrudModal from "../../components/admin/CrudModal";
const Settingfrom = () => {
  return (
    <Layoutaddmin>
      <p className="text-3xl text-slate-900 font-prompt dark:text-white">
        ตั้งค่ายี้ห้อ รุ่น หมวดหมู่
      </p>
      <div className="h-full max-h-full p-3 mt-2 rounded-md font-prompt">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-2 flex-wrap">
          <CrudBrand />
          <CrudModal />
          <CrudCategory />
        </div>
      </div>
    </Layoutaddmin>
  );
};

export default Settingfrom;
