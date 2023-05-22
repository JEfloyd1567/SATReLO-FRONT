import axios from "axios";

const satreloUsersAPI = axios.create({
  baseURL: 'http://18.188.39.32:8086',
});

export default satreloUsersAPI;