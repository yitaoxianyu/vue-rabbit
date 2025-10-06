import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/categroy'
import { onBeforeRouteUpdate,useRoute } from 'vue-router'
export function useCategory() {
  const categoryData = ref([])
  const route = useRoute()

  onMounted(async () => {
    const res = await getCategoryAPI(route.params.id)
    categoryData.value = res.result
  })

  onBeforeRouteUpdate(async (to) => {
    const res = await getCategoryAPI(to.params.id)
    categoryData.value = res.result
  })

  return {
    categoryData,
  }
}
