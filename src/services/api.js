import axios from  'axios';

const api = axios.create({
  baseURL: 'https://api-backoffice.herokuapp.com',
})

export default api;
