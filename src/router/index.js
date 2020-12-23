import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
// import PageTwo from "../views/PageTwo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
  // {
  // path: "/page-two",
  // name: "page-two",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ "../views/PageTwo"),
  // component: PageTwo
  // }
];

const router = new VueRouter({
  routes
});

export default router;
