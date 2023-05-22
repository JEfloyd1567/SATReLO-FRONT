import axios from "axios";

const satreloLoginAPI = axios.create({
  baseURL: '52.14.213.34:8085',
});

export default satreloLoginAPI;