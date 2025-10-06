import { onMounted,ref } from 'vue'
import { getBannerAPI } from '@/apis/banner'
export function useBanner() {
  const bannerList = ref([])

  onMounted(async () => {
    const res = await getBannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  })

  return {
    bannerList,
  }
}
