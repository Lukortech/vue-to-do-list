import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/to-all-list',
      name: 'to-all-list',
      component: () => import(/* webpackChunkName: "about" */ './views/to-all-list.vue')
    },
    {
      path: '/to-do-list',
      name: 'to-do-list',
      component: () => import(/* webpackChunkName: "about" */ './views/to-do-list.vue')
    },
    {
      path: '/to-done-list',
      name: 'to-done-list',
      component: () => import(/* webpackChunkName: "about" */ './views/to-done-list.vue')
    }
  ]
})
