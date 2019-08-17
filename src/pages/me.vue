<template>
  <div class="me-contaienr">
    <div class="me-container-up">
      <img src="" alt="">
      <!-- ../assets/images/bg.png -->
      <div class="me-header">
        <span><i class="iconfont"></i></span>
        {{userName}}
        <span><i class="iconfont"></i></span>
      </div>
      <div class="me-user">
        <div class="me-user-avatar">
          <img src="" alt="">
        </div>
        <div class="me-user-nickname">{{userName}}</div>
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
          <span><i class="iconfont"></i></span>
          <span>图文</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont"></i></span>
          <span>文章</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont"></i></span>
          <span>音乐</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont"></i></span>
          <span>影视</span>
        </div>
        <div class="my-collections-item">
          <span><i class="iconfont"></i></span>
          <span>电台</span>
        </div>
      </div>
    </div>
    <div class="white-space"></div>
    <van-cell title="我的关注" icon="friends-o" is-link value="0" />
    <van-cell title="歌单" icon="play-circle-o" is-link />

  </div>
  <!-- vant组件 -->
</template>

<script>
export default {
  name:'Me',
  data () {
    return {
      userName:'ShiningPeng'
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>