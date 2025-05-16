import './assets/styles/main.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useDeviceStore } from './store/deviceStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)
const deviceStore = useDeviceStore()
deviceStore.init()
app.mount('#app')
