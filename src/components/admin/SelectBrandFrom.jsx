const SelectBrandFrom = () => {
  return (
    <>
      <p className="text-[14px] font-light text-gray-900 dark:text-white">
        ยี้ห้อ :{" "}
      </p>
      <select className="w-auto max-w-xs text-gray-900 bg-white dark:bg-gray-900 dark:text-white dark:border-violet-600  border-gray-300 select select-sm text-[14px]">
        <option>เลือกยี้ห้อ</option>
        <option>HP</option>
        <option>Lenovo</option>
        <option>Dell</option>
      </select>
    </>
  );
};

export default SelectBrandFrom;
