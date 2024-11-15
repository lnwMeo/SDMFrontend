import { React, useState, useEffect } from "react";
import LayoutHome from "../../components/layout/home/LayoutHome";
import Card from "../../components/home/Card";
import Basket from "../../components/home/Basket";
import { FaBasketShopping } from "react-icons/fa6";
import CategorySelect from "../../components/home/CategorySelect";
import ProductSearch from "../../components/home/ProductSearch";
import ReactPaginate from "react-paginate";
import { listProduct, listproductbycategory, listProductBySearch } from "../../api/product";

function Home() {
  const [selectCategory, setselectCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [productsDATA, setProductDATA] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;
  const [basket, setBasket] = useState([]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response;
      if (keyword) {
        response = await listProductBySearch(keyword);
      } else if (selectCategory) {
        response = await listproductbycategory(selectCategory);
      } else {
        response = await listProduct();
      }
      setProductDATA(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectCategory, keyword]);

  const displayedProducts = productsDATA.filter(
    (product) => !basket.some((item) => item.id === product.id)
  );

  const pageCount = Math.ceil(displayedProducts.length / itemsPerPage);
  const handlePageClick = (event) => setCurrentPage(event.selected);
  const paginatedData = displayedProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <LayoutHome>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="fixed z-[99999] bottom-8 right-8 bg-violet-900 shadow-sm shadow-violet-700 btn btn-circle hover:bg-white text-white hover:text-violet-900"
        >
          <div className="indicator">
            <FaBasketShopping className="w-6 h-6 " />
            <span className="text-white bg-red-600 border-white badge badge-sm indicator-item">
              {basket.length}
            </span>
          </div>
        </button>
        <div className="flex items-center justify-between p-2 md:mt-5 font-prompt md:p-0">
          <p className="content-center font-medium text-center text-gray-900 text-md dark:text-white">
            ขอยืม ครุภัณฑ์
          </p>

          <div className="items-center  md:inline-flex gap-2">
            <CategorySelect onSelectCategory={setselectCategory} />
            <ProductSearch onSearch={setKeyword} />
          </div>
        </div>
        <Card productsDATA={paginatedData} loading={loading} addToBasket={addToBasket} />
        <div className="grid items-center col-span-6 px-5 py-5 text-center ">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex justify-center list-none p-0 mx-3 my-3"
            pageClassName="mx-1"
            pageLinkClassName="px-3 py-1  sm:text-[12px] text-[10px]  cursor-pointer bg-indigo-600 text-white  text-gray-700 rounded-md hover:bg-indigo-800 font-prompt"
            activeLinkClassName=" cursor-pointer text-white  bg-indigo-950"
            previousClassName="mx-1"
            nextClassName="mx-1"
            breakClassName="mx-1"
            previousLinkClassName="px-3 py-1  sm:text-[12px] text-[10px] cursor-pointer bg-indigo-700 text-white  text-gray-700 rounded-md hover:bg-indigo-600 font-prompt"
            nextLinkClassName="px-3 py-1 sm:text-[12px] text-[10px]  cursor-pointer bg-indigo-700 text-white  text-gray-700 rounded-md hover:bg-indigo-600 font-prompt"
          />
        </div>
        <dialog
          id="my_modal_2"
          className=" modal modal-bottom sm:modal-middle font-prompt"
        >
          <Basket id="my_modal_2" basket={basket} setBasket={setBasket}/>
        </dialog>
      </LayoutHome>
    </>
  );
}

export default Home;
