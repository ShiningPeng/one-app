<template>
  <div class="comment-btn-container">
    <input type="text" class="input-box" placeholder="写一个评论.." maxlength="500">
    <div class="comment-btns">
      <i class="iconfont">&#xe601;</i>{{dianzanCount}}
      <i class="iconfont">&#xe64e;</i>{{commentCount}}
      <i class="iconfont">&#xe60d;</i>
    </div>
  </div>
</template>

<script>
export default {
  name:'commentBtn',
  data() {
    return {
      dianzanCount:1254,
      commentCount:653
    }
  }
}
</script>

<style lang="stylus">
.comment-btn-container
  width 100%
  height 40px
  box-sizing border-box
  padding 5px 0
  display flex
  .input-box
    height 25px
    flex 1
  .comment-btns
    display flex
    flex 1
    align-items center
    justify-content center
    text-align right
    .iconfont
      flex 1
</style>
