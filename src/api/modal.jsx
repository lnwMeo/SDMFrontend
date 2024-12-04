import axios from "axios";

export const createModal = async (data) => {
    return axios.post(`http://localhost:8000/api/createModel`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  

export const listBrandModal = async () => {
  return axios.get("http://localhost:8000/api/listBrandModal");
};

export const updateModal = async (id, data) => {
  return axios.put(`http://localhost:8000/api/updataModel/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const removeModal = async (id) => {
  return axios.delete(`http://localhost:8000/api/removeModal/${id}`);
};
