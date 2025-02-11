import axios from "axios";

/**Creamos la instancia de axios con la url del servidor */
export const AxiosPapeleria = axios.create({
    baseURL: "http://192.168.100.28:4000/api/"
  });