import request from '@/utils/http'
export function insertCartAPI(skuId,count) {
  return request({
    url: '/member/cart',
    method: 'POST',
    data : {
      skuId,
      count
    } 
  })
}
export function getNewCartAPI(){
  return request({
    url:'/member/cart'
  })
}
export function deleteCartAPI(ids){
  return request({
    method : 'delete',
    url:'/member/cart',
    data:{
      ids
    }
  })
}