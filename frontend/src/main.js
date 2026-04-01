import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WineList from './components/WineList.vue'

const app = createApp(App)
app.component('WineList', WineList)
app.mount('#app')