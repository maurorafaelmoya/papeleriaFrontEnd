import axios from "axios";

/**Creamos la instancia de axios con la url del servidor */
export const AxiosPapeleria = axios.create({
    baseURL: "http://192.168.130.6:4000/api/"
  });