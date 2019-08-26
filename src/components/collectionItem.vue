<template>
  <div class="item-container">
    <van-cell :title="ContentType" is-link size="large" :label="description" />
  </div>
</template>

<script>
export default {
  name:'CollectionItem',
  props:{
    description:{
      type:String,
      default:''
    },
    ContentType:{
      type:String,
      default:''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>