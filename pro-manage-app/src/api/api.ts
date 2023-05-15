import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
    baseURL: "http://192.168.15.2:3000" //lembrar de trocar para 'ip' quando commitar
=======
    baseURL: "http://192.168.15.8:3000" //lembrar de trocar para 'ip' quando commitar
>>>>>>> feature/Cadastro_Membros
})

export default api