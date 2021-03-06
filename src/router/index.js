import Vue from 'vue'
import Router from 'vue-router'
import One from '@/pages/one'
import All from '@/pages/all'
import Me from '@/pages/me'
import DateNav from '@/components/DateNav'
import OnePhotography from '@/components/one-photography';
import Detail from '@/pages/detail'
import Share from '@/pages/share'
import Author from '@/components/author'
import CommentBtn from '@/components/commentButton'
import BackBtn from '@/components/backButton'
import Search from '@/pages/search'
import Sort from '@/pages/sort'
import CollectionDetail from '@/pages/collectionDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/one'
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/d',
      name: 'DateNav',
      component: DateNav
    },
    {
      path: '/p',
      name: 'OnePhotography',
      component: OnePhotography
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path:'/coldetail',
      name:'CollectionDetail',
      component:CollectionDetail
    },
    {
      path: '/a',
      name: 'Author',
      component: Author
    },
    {
      path: '/btn',
      name: 'CommentBtn',
      component: CommentBtn
    },
    {
      path: '/share',
      name: 'Share',
      component: Share 
    },
    {
      path: '/search',
      name: 'Search',
      component: Search 
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort 
    },
    {
      path: '/backbtn',
      name: 'BackBtn',
      component: BackBtn 
    }
  ]
})
