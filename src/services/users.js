import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/sign-up'

const create = async ({ newUser }) => {
    const response = await axios.post(baseUrl, newUser);
    console.log('here')
    return response.data;
}

export default { create };