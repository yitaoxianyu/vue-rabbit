import { useIntersectionObserver } from '@vueuse/core'

export const lazyloadPlugin = {
  install(app) {
    app.directive('lazy-load', {
      mounted: (el, binding) => {
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          if (entry.isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      },
    })
  },
}
