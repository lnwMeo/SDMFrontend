import axios from "axios";

export const createYear = async (data) => {
  return axios.post("http://localhost:8000/api/createYear", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const listYear = async () => {
  return axios.get("http://localhost:8000/api/listYear");
};

export const removeYear = async (id) => {
  return axios.delete(`http://localhost:8000/api/removeYear/${id}`);
};

export const updateYear = async (id, data) => {
  return axios.put(`http://localhost:8000/api/updateYear/${id}`, data, {
    headers: { "Content-Type": "application/json" },
  });
};
