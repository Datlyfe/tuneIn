import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Resource from "./plugins/resource";
import * as resources from "./resources";

import "boxicons";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Resource, {
  endpoint: "https://deezer-proxy-d6blegb47.now.sh/",
  resources
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
