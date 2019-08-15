<template>
  <div id="app">
    <router-view/>
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
</style>
