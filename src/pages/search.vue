<template>
  <div class="search-container">
    <div class="search-searchbox">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="在这里写下你想寻找的"
          show-action
          background="#ffffff"
          @search="onSearch"
          @cancel="$router.back()"
        />
      </form>
    </div>
    <div class="search-items">
      <div class="search-item" 
        @click="$router.push({path:'/sort', params:{ type:'图文'}})"
        >图文</div>
      <div class="search-item" 
        @click="$router.push({path:'/sort', params:{ type:'问答'}})"
        >问答</div>
      <div class="search-item" 
        @click="$router.push({path:'/sort', params:{ type:'阅读'}})"
        >阅读</div>
      <div class="search-item"
        @click="$router.push({path:'/sort', params:{ type:'连载'}})"
      >连载</div>
      <div class="search-item"
        @click="$router.push({path:'/sort', params:{ type:'影视'}})"
      >影视</div>
      <div class="search-item"
        @click="$router.push({path:'/sort', params:{ type:'音乐'}})"
      >音乐</div>
      <div class="search-item"
        @click="$router.push({path:'/sort', params:{ type:'电台'}})"
      >电台</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'search',
  data () {
    return {
      value:''
    }
  },
  methods:{
    onSearch () {
      console.log('search');
    },
    // onCancel (){
    //   console.log('cancel')
    // }
  }
}
</script>

<style lang="stylus" scoped>
.search-container
  width 100%
  top 0
  bottom 0
  right 0
  left 0
  .search-searchbox
    width 100%
    height 60px
    box-sizing border-box
    // border 1px solid #000
  .search-items
      width 100%
      height 100%
      padding 10% 0 20% 0
      text-align center
    .search-item
      width 100%
      height 80px
      line-height 80px

</style>