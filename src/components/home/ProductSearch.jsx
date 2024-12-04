import { FaSearch } from "react-icons/fa";

const ProductSearch = ({onSearch}) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }
  return (
    <>
      <p className="text-[14px] font-medium text-gray-900 mt-2  md:mt-0 dark:text-white">ค้นหา :</p>
      <div className="relative mt-2  md:mt-0 drop-shadow-md  dark:shadow-md dark:shadow-gray-800/50 ">
        <div className="absolute inset-y-0 start-0 flex items-center  ps-3 pointer-events-none rounded-s-lg pr-2 ">
          <FaSearch className="w-4 h-4 text-gray-900 dark:text-white" />
        </div>
        <input
          type="search"
         onChange={handleSearchChange}
          className="block w-full p-2 ps-10 text-[14px] dark:bg-gray-900 dark:text-white text-gray-900  rounded-lg bg-white input-sm dark:border-violet-900 "
          placeholder="ค้นหา"
        />
      </div>
    </>
  );
};

export default ProductSearch;
