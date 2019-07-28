import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Resource from "./plugins/resource";
import VueMq from 'vue-mq'


import * as resources from "./resources";

import "boxicons/css/boxicons.min.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(Resource, {
  endpoint: "https://deezer-proxy-d6blegb47.now.sh/",
  resources
});

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1200,
    lg: Infinity,
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
