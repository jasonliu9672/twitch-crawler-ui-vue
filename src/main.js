import Vue from "vue"
import 'bootstrap/dist/css/bootstrap.css'
//Import custom dependencies
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './bus'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
    }
    else {
      next('login')
    }
  }
  else {
    next()
  }
});