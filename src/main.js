// main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import axios from "axios";
// import axios from "@vue/cli-service/lib/options";

axios.defaults.baseURL='http://localhost:8081'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
    .use(store)
    .use(ElementPlus);
app.mount('#app');
