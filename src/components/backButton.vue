<template>
  <div class="backbtn-container">
    <span class="iconfont-container left" @click="goBack">
      <i class="iconfont">&#xe61a;</i>
    </span>
    <span class="detail-type">{{detailType}}</span>
    <span class="iconfont-container right" @click="addToCollection(collectionData)" v-show="colIsShow">
      <i class="iconfont collection">&#xe60b;</i>
    </span>
  </div>
</template>

<script>
export default {
  name:'backButton',
  props:{
    detailType:{
      type:String,
      default:'详情页'
    },
    collectionData:{
      type:Object,
      default:() => {}
    },
    colIsShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      
    }
  },
  computed:{
    
  },
  methods:{
    addToCollection(collectionData){
      this.$emit('addToCollection', collectionData);
    },
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    }
  }
}
</script>

<style lang="stylus" scoped>
.backbtn-container
  position fixed
  top 0
  left 0
  width 100%
  height 60px
  padding 0 3%
  line-height 60px
  display flex
  text-align center
  justify-content center
  align-items center
  background-color #fff
  border-bottom 1px solid #808080
  box-sizing border-box
  .iconfont-container
    display block
    height 60px
  .left 
    float left
    .iconfont
      font-size 20px
  .right    
    float right
    .collection.iconfont
      font-size 25px
  .detail-type
    display block
    flex 10
</style>