import axios from "axios";
const baseUrl = "http://localhost:3001/api/item";

const itemService = {
  create: async (item) => {
    const response = await axios.post(baseUrl, item);
    return response.data;
  },
};

export default itemService;
