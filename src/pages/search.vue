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
          @cancel="onCancel"
        />
      </form>
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
    onCancel (){
      console.log('cancel')
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-container
  width 100%
  .search-searchbox
    width 100%
    height 60px
    box-sizing border-box
    // border 1px solid #000
</style>