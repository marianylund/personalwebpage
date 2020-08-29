import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Education from "../views/Education.vue";
import Interests from "../views/Interests.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Experience from "../views/Experience.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/interests',
      name: 'interests',
      component: Interests
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
  ]
})

// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   routes
// });

// export default router;
