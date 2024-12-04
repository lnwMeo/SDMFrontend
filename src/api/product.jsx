import axios from "axios";

export const listProduct = async () => {
  return axios.get("http://localhost:8000/api/productincard");
};

export const listproductbycategory = async (categoryId) => {
  return axios.get(
    `http://localhost:8000/api/listProductByCategory/${categoryId}`
  );
};

export const listProductBySearch = async (keyword = "") => {
  return axios.get(
    `http://localhost:8000/api/listProductBySearch?keyword=${keyword}`
  );
};


//ต้องเพิ่มการตรวจเช็คว่าเป็น Admin ไหม
export const CreateProduct = async (productData) => {
  return axios.post('http://localhost:8000/api/createProduct',productData,{
    headers: {
      "Content-Type": "application/json",
    },
  });
};
