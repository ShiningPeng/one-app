<template>
  <div id="app">
    <transition name="fade">
      <router-view ></router-view>
    </transition>
    <Tabbar/>
      
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar';

export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  #app
    background-color #fff
    width 100%
    height 100%
    z-index 10
    .fade-enter 
      opacity 0
    
    .fade-leave
      opacity 1
    
    .fade-enter-active
      transition opacity .5s
    
    .fade-leave-active
      opacity 0
      transition opacity .5s
    
</style>
