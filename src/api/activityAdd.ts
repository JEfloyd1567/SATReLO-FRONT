import axios from "axios";

const activityAdd = axios.create({
  baseURL: 'http://3.12.41.54:8087',
});

export default activityAdd;