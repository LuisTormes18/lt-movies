import axios from "axios";

const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default instanceAxios;
