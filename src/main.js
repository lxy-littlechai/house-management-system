import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css";
import "@/assets/css/commom.scss";
import "@/assets/css/mycss.scss";
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})

app.use(router).use(ElementUI).mount("#app");
