import axios from "axios";

const satreloLoginAPI = axios.create({
  baseURL: 'http://18.188.39.32:8085',
});

export default satreloLoginAPI;