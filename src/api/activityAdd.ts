import axios from "axios";

const activityAdd = axios.create({
  baseURL: '18.188.39.32:8087',
});

export default activityAdd;