import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.papacapim.just.pro.br'
})

api.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api