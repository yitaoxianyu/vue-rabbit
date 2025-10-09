import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI } from '@/apis/user'
export const useUserInfoStore = defineStore(
  'userinfo',
  () => {
    const userInfo = ref({})
    //通过对外暴露方法驱动数据的更新
    const getUserInfo = async (username, password) => {
      const res = await getUserInfoAPI(username, password)
      console.log('API Response:', res) // 调试：查看API响应
      if (res.code == '1') {
        userInfo.value = res.result
      }
      return res.code
    }
    const clearUserInfo = () => {
      userInfo.value = {}
    }
    return {
      userInfo, // 需要暴露才能持久化
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: {
      key: 'userinfo', // 指定存储键名
      storage: localStorage, // 指定存储方式
      paths: ['userInfo'], // 指定需要持久化的状态路径
    },
  },
)
