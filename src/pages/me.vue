<template>
  <div class="me-container">
    <div class="me-container-up">
      <!-- <img src="../assets/images/bg.png" alt=""> -->
      <!-- ../assets/images/bg.png -->
      <div class="me-header">
        <span><i class="iconfont">&#xe6b6;</i></span>
        {{user}}
        <span><i class="iconfont">&#xe857;</i></span>
      </div>
      <div class="me-user">
        <div class="me-user-avatar">
          <img src="../assets/images/bg.png" alt="">
        </div>
        <p class="me-user-nickname">{{userName}}</p>
      </div>
      <div class="me-makenote">
        <div class="me-makenote-img">
          <img src="" alt="">
        </div>
        <p>被别人揭下面具是一种...</p>
      </div>
    </div>
    <div class="white-space"></div>
    <div class="me-mycollections">
      <p>我的收藏</p>
      <div class="my-collections-items">
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe62d;</i></span>
          <span>图文</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe756;</i></span>
          <span>文章</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe680;</i></span>
          <span>音乐</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe60c;</i></span>
          <span>影视</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe65b;</i></span>
          <span>电台</span>
        </div>
      </div>
    </div>
    <div class="white-space"></div> 
    <van-cell title="我的关注" icon="friends-o" is-link value="0" />
    <van-cell title="歌单" icon="play-circle-o" is-link />
  </div>
</template>

<script>
export default {
  name:'Me',
  data () {
    return {
      userName:'ShiningPeng'
    }
  },
  computed:{
    user () {
      if(document.documentElement.scrollTop !== 0){
        return this.userName;
      }
      return '';
    }
  }
}
</script>

<style lang="stylus" >
.me-container
  width 100%
  top 0
  right 0
  left 0
  bottom 0
  .me-container-up
    width 100%
    height 400px
    // display flex
    background-image url('../assets/images/bg.png')
    .me-header
      border 1px solid black
      width 100%  
      height 60px
      // flex 1
      .iconfont
        font-size 30px
    .me-user
      border 1px solid #f4f4f4
      // flex 1
      text-align center
      height 110px
      .me-user-avatar
        width 80px
        height 80px
        margin-bottom 10px
        margin 0 auto
        img 
          width 100%
          border-radius 50%
          height 100%
      .me-user-nickname
        display block
        height 20px
    .me-makenote
      border 1px solid aqua
      // flex 1
</style>