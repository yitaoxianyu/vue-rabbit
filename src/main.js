import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyloadPlugin } from './directive/lazyloadPlugin'
import { registerPlugin } from '@/components/RegisterComponents.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入插件
import App from './App.vue'
import router from '@/router/router'
import '@/styles/common.scss'
import 'element-plus/dist/index.css'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyloadPlugin)
app.use(registerPlugin)


app.mount('#app')
