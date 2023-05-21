import axios from "axios";

const satreloUsersAPI = axios.create({
  baseURL: 'http://52.14.213.34:8086',
});

export default satreloUsersAPI;