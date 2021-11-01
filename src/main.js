import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'

import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
app.use(store)
app.mount('#app')