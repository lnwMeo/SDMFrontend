import axios from "axios";

export const createbrand = async (data) => {
  return axios.post("http://localhost:8000/api/createBrand", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const listbrand = async () => {
  return axios.get("http://localhost:8000/api/listBrand");
};

export const updatebrand = async (id, data) => {
  return axios.put(`http://localhost:8000/api/updateBrand/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const removebrand = async (id) => {
  return axios.delete(`http://localhost:8000/api/removeBrand/${id}`);
};
