import request from '@/utils/http'
export function getUserInfoAPI(account,password){
  return request({
    url:'login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}