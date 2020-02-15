import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMq from 'vue-mq'

import Discover from '@/components/Discover'
import Search from '@/components/Search'
import Page404 from '@/components/Page404'
import Likes from '@/components/Likes'
;[Discover, Search, Page404, Likes].forEach(c => {
  Vue.component(c['name'], c)
})

import '@/sass/app.scss'
import 'boxicons/css/boxicons.min.css'

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1200,
    lg: Infinity
  }
})

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
