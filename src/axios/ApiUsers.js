import axios from "axios";

/**Url para peticiones de los leads */
export const AxiosPapeleria = axios.create({
    baseURL: "http://192.168.130.6:4000/api/"
  });