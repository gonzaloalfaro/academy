import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Landingpage.vue"),
    
  },
  {
    path: "/welcome",
    name: "welcome",
    component: Welcome
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("../views/Explore.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/track/:id",
    name: "track",
    component: () => import("../components/Track.vue")
  },
  {
    path: "/playlist/:id",
    name: "playlist",
    component: () => import("../components/Playlist.vue")
  },
  {
    path: "/artist/:id",
    name: "artist",
    component: () => import("../components/Artist.vue")
  },
  { 
    path: '*', 
    component: () => import("../components/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
