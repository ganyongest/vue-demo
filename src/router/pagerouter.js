/**
 * Created by gy on 2019/8/19.
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import userCenter from '@/page/userCenter'
import userInfo from '@/page/userInfo'
import demo from '@/page/demo'
import demo1 from '@/page/demo1'
import aaaa from '@/page/aaaa'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/aaaa',
      name: 'index',
      component: aaaa
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userCenter',
      component: userCenter,
      children:[
        {
          path: '/userInfo',
          component: userInfo
        }
      ]
    },

  ]
})
