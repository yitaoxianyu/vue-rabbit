import request from '@/utils/http'

export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return request({
    url: '/home/banner',
    params: {
        distributionSite,
    },
  })
}
