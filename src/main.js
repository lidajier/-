
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Cell, CellGroup, Field, Popup, Button, Icon } from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use( Cell, CellGroup, Field, Popup, Button, Icon );