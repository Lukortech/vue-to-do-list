import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/to-do-list',
      name: 'to-do-list',
      component: () => import(/* webpackChunkName: "about" */ './views/to-do-list.vue')
    }
  ]
})
