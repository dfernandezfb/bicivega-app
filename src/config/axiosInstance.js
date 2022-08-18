import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000' //Debería ir como variable de entorno (process.env.REACT_APP_TU_VARIABLE)
})

export default axiosInstance