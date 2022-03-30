import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instanceAxios;
