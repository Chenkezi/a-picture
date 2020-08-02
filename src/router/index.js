import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Fabu from '../components/fabu.vue'
import Guanli from '../components/guanli.vue'
import Denglu from '../components/denglu.vue'
import Shipin from '../components/shipin.vue'



Vue.use(VueRouter)

  const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/fabu',
    component:Fabu
  },
  {
    path:'/guanli',
    component:Guanli
  },
  {
    path:'/denglu',
    component:Denglu
  },
  {
    path:'/shipin',
    component:Shipin
  }
  
]


const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/guanli'){
    if(!window.sessionStorage.getItem("chen")){
      next('/')
      return
    }else{
      next()
    }
  }else{
      next()
  }
})

export default router
