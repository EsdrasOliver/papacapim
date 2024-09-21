import { AuthContext } from "@/contexts/AuthProvider";
import axios from "axios";
import { useContext } from "react";

const api = axios.create({
    baseURL: 'https://api.papacapim.just.pro.br'
})

const getToken = () => {
    const { user } = useContext(AuthContext);
    return user?.token
}

api.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api