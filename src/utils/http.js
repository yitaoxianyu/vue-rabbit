import axios from "axios";

const instance = axios.create({
    timeout: 3000,
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
})

instance.interceptors.request.use((config) => {
    return config;
},(e) => Promise.reject(e))

instance.interceptors.response.use((res) => res.data,(e) => Promise.reject(e))

export default instance;