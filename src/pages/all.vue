<template>
  <div class="all-container">
    <div class="all-header">
      ONE &nbsp;&nbsp;IS&nbsp;&nbsp; ALL
      <span class="all-header-icon"><i class="iconfont">&#xe619;</i></span>
    </div>
    <div class="all-banner">
      <img src="../assets/images/bg.png" alt="">
    </div>
    <div class="white-space"></div>
    <div class="all-sortnav">
      <span class="text">分类导航</span>
      <div class="all-sortnav-items">
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">图文</span>
        </div>
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">问答</span>
        </div>
        <div class="all-sortnav-bigitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">阅读</span>
        </div>
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">连载</span> 
        </div>
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">影视</span> 
        </div>
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">音乐</span> 
        </div>
        <div class="all-sortnav-smallitem">
          <img src="../assets/images/bg.png" alt="">
          <span class="all-sortnav-text">电台</span>
        </div>
      </div>
    </div>
    <div class="white-space"></div>
    <div class="all-zhuanti">
      <div class="all-zhuanti-img">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <p>你是我最难忘的夏天</p>
    </div>
    <div class="white-space"></div>
    <div class="all-zhuanti">
      <div class="all-zhuanti-img">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <p>第22届上海国际电影节展映特辑</p>
    </div>
    <div class="white-space"></div>
    <div class="all-zhuanti">
      <div class="all-zhuanti-img">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <p>胖子的自我修养</p>
    </div>
    <div class="white-space"></div>
    <div class="all-zhuanti">
      <div class="all-zhuanti-img">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <p>我想探索你内心的宇宙</p>
    </div>
    <div class="white-space"></div>
    <div class="all-hot-authors">
      <p>近期热门作者</p>
      <Author />
      <Author />
      <Author />
      <button class="change">换一批</button>
    </div>
  </div>
</template>

<script>
import Author from '@/components/author';
export default {
  name:'All',
  components:{
    Author
  }
}
</script>

<style lang="stylus" scoped>
.all-container 
  width 100%
  .all-header
    width 100%
    background #fff
    text-align center
    font-weight 700
    height 60px
    line-height 60px 
    box-sizing border-box
    border 1px solid #000
    font-size 20px
    display flex 
    .all-header-icon
      display inline-block
  .all-banner
    width 100%
    height 250px
    img 
      width 100%
      height 100% 
  .white-space
    background-color #eeeeee
    width 100%
    height 10px
  .all-sortnav
    width 90%
    padding 3% 5% 7% 5%
    .text
      display block
      margin-bottom 15px
    .all-sortnav-items
      width 100%
      // display flex 
      box-sizing border-box
      border 1px solid #000
      font-size 0 
      .all-sortnav-smallitem
        width 25%
        display inline-block
        box-sizing border-box
        border 1px solid #000
        height 80px
        line-height 80px
        padding 2px
        position relative
        img
          width 100%
          height 100%
          // z-index 1

        .all-sortnav-text
          z-index 10
          position absolute
          // text-align center

      .all-sortnav-bigitem
        width 50%
        display inline-block
        box-sizing border-box
        border 1px solid #000
        height 80px
        padding 2px
        .all-sortnav-text
          z-index 10
        img
          width 100%
          height 100%
          z-index 1
  .all-zhuanti
    width 90%
    padding 5%
    &-img 
      width 100%
      height 200px
      margin-bottom 10px
      img 
        width 100%
        height 100%
    p
      display block
      height 20px
      line-height 20px
      font-size 15px
  .all-hot-authors
    width 90%
    padding 5% 5% 15% 5%
    text-align center
    p
      text-align left
    .change
      margin 10px 0 20px 0
      width 80px
      height 40px
      background-color #fff
      border 1px solid #808080
      font-size 15px
</style>