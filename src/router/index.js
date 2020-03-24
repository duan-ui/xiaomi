import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
import NoMatch from '../views/NoMatch.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Cart from '../views/Cart.vue'
import '../assets/js/flexible.min.js'

import Produce from '../views/Produce.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produce/:id',
    name: 'Produce',
    component: Produce
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta:{requireAuth:true}
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/set',
    redirect:'/user'
  },
  {
    path: '/cat',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta:{requireAuth:true}
  },
  {
    path: '*',
    name: 'NoMatch',
    component: NoMatch
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  routes
})
import Cookie from '../assets/js/Cookie.js'
router.beforeEach((to,from,next)=>{
  console.log("to:",to);
  console.log("from:",from);
  if(to.meta.requireAuth){
    if(!Cookie.getCookie("uname")){
      next("/login?redirect="+to.path)
    }else{
      next();
    }
  }else{
    next();
  }
  
})

export default router
