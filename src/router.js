import Vue from "vue";
import Router from "vue-router";
import Discover from "./components/Discover.vue";
import Search from "./components/Search.vue";
import Likes from "./components/Likes.vue";
import Page404 from "./components/Page404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Discover
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/likes",
      name: "likes",
      component: Likes
    },
    {
      path: "/app",
      name: "app",
      component: Page404
    },
    {
      path: "/premium",
      name: "premium",
      component: Page404
    },
    {
      path: "/settings",
      name: "settings",
      component: Page404
    }
  ]
});
