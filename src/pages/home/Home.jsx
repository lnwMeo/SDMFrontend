import {useRef, useCallback, useState, useEffect } from "react";
import LayoutHome from "../../components/layout/home/LayoutHome";
import Card from "../../components/home/Card";
import Basket from "../../components/home/Basket";
import { FaBasketShopping } from "react-icons/fa6";
import CategorySelect from "../../components/home/CategorySelect";
import ProductSearch from "../../components/home/ProductSearch";
import ReactPaginate from "react-paginate";
import {
  listProduct,
  listproductbycategory,
  listProductBySearch,
} from "../../api/product";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const [selectCategory, setselectCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [productsDATA, setProductDATA] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;
  const [basket, setBasket] = useState([]);
  // const [timer, setTimer] = useState(null);
  const timerRef = useRef(null); // ใช้ useRef แทน state
  // const MySwal = withReactContent(Swal);
  const Timeoutproduct = 5 * 60 * 1000;


  const fetchProducts = useCallback(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [selectCategory, keyword]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const displayedProducts = productsDATA.filter(
    (product) => !basket.some((item) => item.id === product.id)
  );

  
  const resetTimer = useCallback(() => {
    if (basket.length === 0) return; // ถ้าตะกร้าว่าง ไม่ต้องตั้ง timer ใหม่
  
    // ล้าง timer เก่าถ้ามี
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      console.log("Cleared previous timer:", timerRef.current);
    }
  
    timerRef.current = setTimeout(() => {
      setBasket([]); // ล้างตะกร้า
      // MySwal.fire({
      //   title: "หมดเวลาการทำรายการ!",
      //   text: "สินค้าที่เลือกไว้ถูกลบออกจากตะกร้า",
      //   icon: "warning",
      //   confirmButtonText: "ตกลง",
      //   customClass: {
      //     title: "text-xl font-normal font-prompt text-gray-900",
      //     content: "text-sm font-prompt text-gray-700",
      //     confirmButton:
      //       "bg-blue-500 font-prompt hover:bg-blue-600 text-white font-normal py-2 px-4 rounded",
      //   },
      // });
      toast.warn("หมดเวลาการทำรายการ ! สินค้าที่เลือกไว้ถูกลบออกจากตะกร้า");
    }, Timeoutproduct); // ตั้ง timer ใหม่
  
    console.log("New timer set:", timerRef.current);
  }, [basket, Timeoutproduct]); 
  
  const clearBasket = () => {
    setBasket([]);
  };
  // useEffect(() => {
  //   resetTimer(); // รีเซ็ต Timer ทุกครั้งที่ตะกร้าเปลี่ยน
  // }, [basket]);
  useEffect(() => {
    if (basket.length === 0) {
      if (timerRef.current) {
        clearTimeout(timerRef.current); // ล้าง timer ถ้า basket ว่าง
        timerRef.current = null;
        console.log("Timer cleared as basket is empty");
      }
    } else {
      resetTimer(); // เรียก resetTimer ถ้า basket มีสินค้า
    }
  }, [basket, resetTimer]); // `resetTimer` ปลอดภัยเพราะใช้ useCallback
  

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // const pageCount = Math.ceil(displayedProducts.length / itemsPerPage);
  const pageCount = Math.max(
    1,
    Math.ceil(displayedProducts.length / itemsPerPage)
  );
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
        <Card
          productsDATA={paginatedData}
          loading={loading}
          addToBasket={addToBasket}
        />
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
          <Basket id="my_modal_2" basket={basket} setBasket={setBasket} clearBasket={clearBasket}/>
        </dialog>
      </LayoutHome>
    </>
  );
}

export default Home;
