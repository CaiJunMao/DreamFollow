import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      //Filter,menu
      children: [
      	{
		      path: '/Index/Filter',
		      name: 'Filter',
		      component: () => import('./views/Filter.vue'),
		    },
       	{
		      path: '/Index/Menu',
		      name: 'menu',
		      component: () => import('./views/Menu.vue'),
		    },
		  ]
    },
    {
      path: '/OpemsFromFilter',
      name: 'opemsFromFilter',
       // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/OpemsFromFilter.vue')
    },
    {
      path: '/OpemSearch',
      name: 'opemSearch',
      component: () => import('./views/OpemSearch.vue')
    },
    {
      path: '/OpemDetail',
      name: 'opemDetail',
      component: () => import('./views/OpemDetail.vue')
    },
    {
      path: '/Setting',
      name: 'setting',
      component: () => import('./views/Setting.vue')
    },
    {
      path: '/Write',
      name: 'write',
      component: () => import('./views/Write.vue')
    },
    {
      path: '/Collection',
      name: 'collection',
      component: () => import('./views/Collection.vue')
    },
    
  ]
})
