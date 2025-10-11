import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/stores/userinfo'
import { insertCartAPI,getNewCartAPI,deleteCartAPI } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    //skuid 颗粒度更细同一个商品不同规格有着不同的 skuid
    const userInfoStore = useUserInfoStore()
    const isLogin = computed(() => userInfoStore.userInfo.token)
    const cartList = ref([])
    const addCart = async (goods) => {
      if (isLogin.value) {
        await insertCartAPI(goods.skuId, goods.count)
        const res = await getNewCartAPI()
        console.log(res.result)
        cartList.value = res.result;
      } else {
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
          item.count += goods.count
        } else cartList.value.push(goods)
      }
    }
    const delCart = async (skuId) => {
      if(isLogin.value){
        await deleteCartAPI([skuId])
        const res = await getNewCartAPI()
        cartList.value = res.result
      }else{
        cartList.value = cartList.value.filter((item) => item.skuId != skuId)
      }
    }
    const checkCart = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    const checkAllCart = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }
    const allCount = computed(() => {
      return cartList.value.reduce((preValue, item) => preValue + item.count, 0)
    })
    const allPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
    })
    const allChecked = computed(() => {
      if(cartList.value.length === 0) return false;
      else return cartList.value.every((item) => item.selected)
    })
    const checkedPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
    })
    const checkedCount = computed(() => cartList.value
    .filter((item) => item.selected)
    .reduce((preValue,item) => preValue + item.count,0)
  )
    return {
      cartList,
      addCart,
      delCart,
      checkCart,
      checkAllCart,
      allCount,
      allChecked,
      allPrice,
      checkedPrice,
      checkedCount,
    }
  },
  {
    persist: {
      key: 'cart', // 指定存储键名
      storage: localStorage, // 指定存储方式
      paths: ['cartList'], // 指定需要持久化的状态路径
    },
  },
)
