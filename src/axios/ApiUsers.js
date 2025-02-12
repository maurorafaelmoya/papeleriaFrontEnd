import axios from "axios";

/**Creamos la instancia de axios con la url del servidor */
export const AxiosPapeleria = axios.create({
    baseURL: "https://papeleriabackend.up.railway.app/api"
  });