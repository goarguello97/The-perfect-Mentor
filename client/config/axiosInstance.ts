import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_URL_BASE as string,
  withCredentials: true,
});

export default axiosInstance;
