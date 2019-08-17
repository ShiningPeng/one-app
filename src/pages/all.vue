<template>
  <div class="all-container">
    <div class="all-header">
      ONE IS ALL
      <span><i class="iconfont"></i></span>
    </div>
    <div class="all-banner"></div>
    <div class="white-space"></div>
    <div class="all-sortnav">
      <span class="text">分类导航</span>
      <div class="all-sortnav-items">
        <div class="all-sortnav-smallitem"><img src="" alt="">图文</div>
        <div class="all-sortnav-smallitem"><img src="" alt="">问答</div>
        <div class="all-sortnav-bigitem"><img src="" alt="">阅读</div>
        <div class="all-sortnav-smallitem"><img src="" alt="">连载</div>
        <div class="all-sortnav-smallitem"><img src="" alt="">影视</div>
        <div class="all-sortnav-smallitem"><img src="" alt="">音乐</div>
        <div class="all-sortnav-smallitem"><img src="" alt="">电台</div>
      </div>
    </div>
    <div class="white-space"></div>
    <div class="all-zhuan">
      <div class="all-zhuanti-img">
        <img src="" alt="">
      </div>
      <p>你是我最难忘的夏天</p>
    </div>
    <div class="all-zhuan">
      <div class="all-zhuanti-img">
        <img src="" alt="">
      </div>
      <p>第22届上海国际电影节展映特辑</p>
    </div>
    <div class="all-zhuan">
      <div class="all-zhuanti-img">
        <img src="" alt="">
      </div>
      <p>胖子的自我修养</p>
    </div>
    <div class="all-zhuan">
      <div class="all-zhuanti-img">
        <img src="" alt="">
      </div>
      <p>我想探索你内心的宇宙</p>
    </div>
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
  
</style>