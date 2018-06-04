import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import HotMusic from "../pages/MusicList/HotMusic"
import NewMusic from "../pages/MusicList/NewMusic"
import KingMusic from "../pages/MusicList/KingMusic"
import SingerInfo from "../pages/Singer/SingerInfo"
import MusicPlay from "../pages/MusicPlay"
import Recommend from "../pages/Recommend/Recommend"
import SearchView from "../pages/search/SearchView"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/hot",
      children:[
        {
          path: '/hot',
          name: 'HotMusic',
          component: HotMusic
        },
        {
          path: '/king',
          name: 'KingMusic',
          component: KingMusic
        },
        {
          path: '/new',
          name: 'NewMusic',
          component: NewMusic
        }
      ]
    },
    {//singer换成singerinfo也是可以的，关键是后面的参数不能换
      path:"/singer/:singerid",
      name:"SingerInfo",
      component:SingerInfo
    },
    {
      path:"/play/:songid",
      name:"MusicPlay",
      component:MusicPlay
    },
    {
      path:"/recommend/:musictype",
      name:"Recommend",
      component:Recommend
    },
    {
      path:"/searchview/:searchcontent",
      name:"SearchView",
      component:SearchView
    }
  ]
})
