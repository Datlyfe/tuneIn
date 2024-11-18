import { createApp } from "vue";
import App from "./App.vue";
// @ts-expect-error
import { Vue3Mq } from "vue3-mq";
// @ts-expect-error
import swc from "svg-web-component";
import "./app.scss";
import { createPinia } from "pinia";
import icons from "./icons";
swc.load(icons);

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.use(Vue3Mq, {
	global: true,
});

app.mount("#app");
