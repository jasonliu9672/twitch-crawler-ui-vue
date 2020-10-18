import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'login',
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () =>
      import("views/dashboard/index.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path:'',
        component: () =>
          import("views/dashboard/home/index.vue")
      },
      {
        path: 'crawler',
        name: 'Crawler',
        component: () =>
          import("views/dashboard/crawler/index.vue")
      },
      {
        path: 'database',
        name: 'Database',
        component: () =>
          import("views/dashboard/database/index.vue")
      },
      {
        path: 'accounts',
        name: 'Accounts',
        component: () =>
          import("views/dashboard/accounts/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import("views/login/index.vue"),
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
