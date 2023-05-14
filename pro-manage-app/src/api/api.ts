import axios from "axios";

const api = axios.create({
    baseURL: "http://ip:3000" //lembrar de trocar para 'ip' quando commitar
})

export default api