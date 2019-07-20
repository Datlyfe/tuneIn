import Vue from "vue";
import Router from "vue-router";

const loadRoute = route => () =>
  import(/* webpackChunkName: "view-[request]" */ `./components/${route}.vue`);

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: loadRoute("Discover")
    },
    {
      path: "/search",
      name: "search",
      component: loadRoute("Search")
    },
    {
      path: "/likes",
      name: "likes",
      component: loadRoute("Likes")
    },
    {
      path: "/app",
      name: "app",
      component: loadRoute("Page404")
    },
    {
      path: "/premium",
      name: "premium",
      component: loadRoute("Page404")
    },
    {
      path: "/settings",
      name: "settings",
      component: loadRoute("Page404")
    }
  ]
});
