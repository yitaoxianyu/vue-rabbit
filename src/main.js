import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyloadPlugin } from './directive/lazyloadPlugin'
import { registerPlugin } from '@/components/RegisterComponents.js'
import App from './App.vue'
import router from '@/router/router'
import '@/styles/common.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(lazyloadPlugin)
app.use(registerPlugin)


app.mount('#app')
