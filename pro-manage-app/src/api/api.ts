import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.186.121:3000" //lembrar de trocar para 'ip' quando commitar
})

export default api