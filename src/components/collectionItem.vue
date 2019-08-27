<template>
  <div class="item-container" @click="toggleToDetail">
    <van-cell :title="contentType" is-link size="large" :label="description" />
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
    contentType:{
      type:String,
      default:''
    }
  },
  data () {
    return {

    }
  },
  methods:{
    toggleToDetail() {
      this.$emit('toDetail');
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>