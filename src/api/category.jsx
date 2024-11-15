import axios from "axios";

export const listcategory = async () => {
    return axios.get("http://localhost:8000/api/listCategory");
  };