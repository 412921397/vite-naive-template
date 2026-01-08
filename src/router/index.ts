import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import HomeView from "@/views/home/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { keepAlive: true },
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
