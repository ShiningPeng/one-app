<template>
  <div class="header">
    <div class="head-con">
      <span class="day">{{day}}</span>
      <span class="year-month">{{yearAndMonth}}</span>
      <span><i class="iconfont">&#xe603;</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hd",
  data() {
    return {
      day: "26",
      yearAndMonth: "Jul.2019"
    }
  }
}
</script>

<style lang="stylus">

.header 
  position fixed
  width 90%
  height 60px
  line-height 60px
  text-align left
  // margin-left 5%
  padding 0 5%
  z-index 1
  background-color #fff
  top 0
  .head-con
    width 100%
    height 100%
    .day
      // display inline-block
      font-size 40px
      font-weight 700
    .year-month
      font-size 14px
      font-weight bold
</style>