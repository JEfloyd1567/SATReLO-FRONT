import axios from "axios";

const satreloLoginAPI = axios.create({
  baseURL: 'http://3.12.41.54:8085',
});

satreloLoginAPI.interceptors.request.use((request) => {
    request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  return request;
})

export default satreloLoginAPI;