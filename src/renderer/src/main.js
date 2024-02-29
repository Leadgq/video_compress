import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@renderer/assets/css/tailwind.css'
import 'element-plus/dist/index.css'
import '@renderer/assets/css/global.scss'
import piniaPersist from 'pinia-plugin-persist'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.mount('#app')
