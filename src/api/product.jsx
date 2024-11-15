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
