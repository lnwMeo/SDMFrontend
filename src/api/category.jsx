import axios from "axios";

export const createcategory = async (data) => {
  return await axios.post("http://localhost:8000/api/createCategory", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const listcategory = async () => {
  return axios.get("http://localhost:8000/api/listCategory");
};

export const updatecategory = async (id, data) => {
  return axios.put(`http://localhost:8000/api/updateCategory/${id}`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const removecategory = async (id) => {
  return axios.delete(`http://localhost:8000/api/removeCategory/${id}`);
};
