import { FaRegTrashCan } from "react-icons/fa6";
import noimge from "../../assets/image/No_image.png";

function CardBasket({ product, removeFromBasket }) {
  return (
    <div className="grid w-full max-w-md grid-cols-6 gap-2 mt-2 p-1 bg-white dark:bg-gray-900 rounded-md">
      <div className="col-span-1">
        <img
          src={
            product?.first_image?.[0]?.path
              ? `http://localhost:8000/${product.first_image[0].path}`
              : noimge
          }
          alt={product?.productname || "ไม่มีชื่อสินค้า"}
          className="w-10 rounded-md object-cover"
        />
      </div>
      <div className="col-start-2 col-end-6 md:col-end-6 lg:col-end-6">
        <p className="truncate text-sm font-normal text-gray-900 dark:text-white">
          {product?.productname}
        </p>
        <p className="text-[12px] font-light text-gray-500 dark:text-amber-500">
          {product?.category_name}
        </p>
      </div>
      <button
        onClick={() => removeFromBasket(product.id)} // Use the function here
        className="flex items-center justify-center w-10 mx-0 text-center text-white bg-red-500 rounded-full hover:bg-red-800 md:mx-3 sm:mx-0"
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}

export default CardBasket;

