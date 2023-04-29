import axios from "axios";

const satreloLoginAPI = axios.create({
  baseURL: 'http://18.218.238.240:80',
});

export default satreloLoginAPI;