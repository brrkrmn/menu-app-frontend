import axios from "axios";
const baseUrl = "http://localhost:3001/api/category";

const categoryService = {
  create: async (category) => {
    const response = await axios.post(baseUrl, category);
    return response.data;
  },
};

export default categoryService;
