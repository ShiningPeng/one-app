<template>
  <div class="me-container">
    <div class="me-container-up">
      <!-- <div class="blank-box"></div> -->
      <!-- <div class="me-container-img">
        <img src="../assets/images/bg.png" alt="" width="100%" height="100%">
      </div> -->
      <!-- ../assets/images/bg.png -->
      <div class="me-header">
        <span><i class="iconfont">&#xe6b6;</i></span>
        <div class="me-header-name">
          {{user}}
        </div>
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
          <img src="../assets/images/bg.png" alt="">
        </div>
        <p>被别人揭下面具是一种多喝点地方</p>
      </div>
    </div>
    <div class="white-space"></div>
    <div class="me-mycollections">
      <p >我的收藏</p>
      <div class="my-collections-items">
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe62d;</i></span>
          <span class="item-text">图文</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe756;</i></span>
          <span class="item-text">文章</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe680;</i></span>
          <span class="item-text">音乐</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe60c;</i></span>
          <span class="item-text">影视</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont">&#xe65b;</i></span>
          <span class="item-text">电台</span>
        </div>
      </div>
    </div>
    <div class="white-space"></div> 
    <van-cell title="我的关注" icon="friends-o" size="large" is-link value="0" />
    <van-cell title="歌单" icon="play-circle-o" size="large" is-link />
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
    text-align center
    position relative
    // .blank-box
    //   width 100%
    //   height 60px
    //   position fixed
    background-image url('../assets/images/bg.png')
    .me-container-img
      width 100%
      height 100% 
      position absolute
      opacity 0.2
      // position fixed
      // z-index -1 
        
    // display flex
    // background-image url('../assets/images/bg.png')
    .me-header
      // border 1px solid #808080
      box-sizing border-box
      width 100%  
      height 60px
      line-height 60px
      display flex
      position fixed
      padding 0 10px
      .me-header-name
        flex 3
      .iconfont
        flex 1
        font-size 40px
    .me-user
      text-align center
      height 120px
      margin-bottom 20px
      // margin 60px 20px
      padding-top 60px
      .me-user-avatar
        width 70px
        height 70px
        margin 0 auto
        img 
          width 100%
          border-radius 50%
          height 100%
      .me-user-nickname
        display block
        margin-top 10px

        height 20px
    .me-makenote
      width 50%
      margin 0 auto 
      background-color #fff
      .me-makenote-img
        width 100%
        height 120px
        padding 3px
        box-sizing border-box
        img 
          width 100%
          height 100%
      p
        font-size 15px
        white-space nowrap  //强制一行显示
        overflow hidden   //超出隐藏
        text-overflow ellipsis
        display block 
        background-color #F1F1F1
        height 30px
        line-height 30px
        padding 0 3px
  .white-space
    background-color #eeeeee
    width 100%
    height 10px
  .me-mycollections
    width 100%
    padding  2% 5% 0 5%
    box-sizing border-box
    p
      font-size 15px
    .my-collections-items
      display flex
      width 100%
      margin 10px 0
      color #808080
      .my-collections-item
        flex 1
        width 25%
        padding 5px
        text-align center
        .iconfont
          display block
          font-size 30px
        .item-text
          display block
          margin-top 10px
          font-size 14px
</style>