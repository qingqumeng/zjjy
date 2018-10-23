import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import Home from '@/pages/home/Home'
import Community from '@/pages/Community/Community'
import News from '@/pages/News/News'
import My from '@/pages/My/My'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/t',
    //   name: 'HelloFromVux',
    //   component: HelloFromVux
    // },
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    {
      path:'/Home',
      redirect:'/'
    },
    {
      path: '/Community',
      name: 'Community',
      component: Community
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
  ]
})
