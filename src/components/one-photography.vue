<template>
  <div class="one-photography-container">
    <div class="one-photography-photo">
      <img :src="item.imgUrl" alt="">
    </div>
    <span class="one-photography-author">{{item.headType}}&nbsp;|&nbsp;{{item.author}}</span>
    <p class="one-photography-desc">{{item.desc}}</p>
    <span class="one-photography-source">{{item.source}}</span>
    <div class="bottom-btn">
      <span class="discovery"><i class="iconfont">&#xe6b9;</i><span id="text">发现</span></span>
      <div class="btn-right">
        <span class="edit"><i class="iconfont">&#xe63a;</i></span>
        <span class="collect" @click="addCollection(item)"><i class="iconfont">&#xe60b;</i></span>
          <span class="zhuanfa">
            <router-link to="/share">
              <i class="iconfont">&#xe60d;</i>
            </router-link>
          </span>
        <span class="dianzan"><i class="iconfont">&#xe601;</i>{{item.aixinCount}}</span>
      </div>
    </div>
    <div class="white-space"></div>
  </div> 
</template>

<script>
export default {
  props:['item'],
  name:'onePhotography',
  data () {
    return {
      
    }
  },
  methods:{
    addCollection(data){
      this.$emit('addToCollection', data);
    }
  }
}
</script>

<style lang='stylus' scoped>
.one-photography-container
  width 100%
  // height 500px
  font-size 14px 
  box-sizing border-box
  // border 1px solid #000 
  margin-top 50px
  .one-photography-photo
    width 100%
    height 300px
    img 
      width 100%
      height 100%
  .one-photography-author
    display block
    width 100%
    height 20px
    line-height 20px
    text-align center
    margin 20px 0 10px 0
    color  #808080
  .one-photography-desc
    width 80%
    display block
    padding 5% 10%
  .one-photography-source
    display block
    width 100%
    text-align center
    height 20px
    line-height 20px
    color  #808080
    margin 10px 0
  .bottom-btn
    width 90%
    padding 5% 5% 0 5%
    height 20px
    line-height 20px
    margin 15px 0
    font-size 14px
    display flex
    .btn-right
      display flex
      flex 1
      .edit, .collect, .zhuanfa, .dianzan
        // margin-right 10px
        flex 1
      a 
        text-decoration: none
      .router-link-active 
        text-decoration none
    .discovery
      flex 1
      #text
        font-size 13px
        margin-left 5px
        color #808080
  .white-space
    background-color #eeeeee
    width 100%
    height 10px
</style>
