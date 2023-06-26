import axios from "axios";
const baseUrl = 'http://localhost:3001/api/login';

const loginService = {
  login: async (user) => {
    const response = await axios.post(baseUrl, user);
    return response.data;
  },
};

export default loginService;