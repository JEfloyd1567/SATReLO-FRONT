import axios from "axios";

const satreloUsersAPI = axios.create({
  baseURL: 'http://3.12.41.54:8086',
});

satreloUsersAPI.interceptors.request.use((request) => {
    request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  return request;
})

export default satreloUsersAPI;