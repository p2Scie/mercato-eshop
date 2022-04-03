import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(PrimeVue)
app.mount('#app')
