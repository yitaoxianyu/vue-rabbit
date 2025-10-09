import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router/router";
import { useUserInfoStore } from "@/stores/userinfo";
const instance = axios.create({
    timeout: 3000,
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
})

instance.interceptors.request.use((config) => {
    const userInfoStore = useUserInfoStore()
    if(userInfoStore.userInfo.token){
        config.headers.Authorization = `Bearer ${userInfoStore.userInfo.token}`
    }
    return config
},(e) => Promise.reject(e))

instance.interceptors.response.use((res) => res.data,(e) => {
    ElMessage({type : 'warning',message : e.response.data.msg})
    if(e.response.status == 401){
        const userInfoStore = useUserInfoStore()
        userInfoStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(e)
})

export default instance;