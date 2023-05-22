import axios from "axios";

const satreloLoginAPI = axios.create({
  baseURL: 'http://18.188.39.32:8085',
});

satreloLoginAPI.interceptors.request.use((request) => {
    request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  return request;
})

export default satreloLoginAPI;