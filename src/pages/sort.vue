<template>
  <div >
    hah
  </div>
</template>

<script>
export default {
  name:'sort',
  methods:{
    con() {
      console.log(this.$route.params);
    }
  },
  created(){
    this.con();
    // console.log(Vue.$route.params)
  }
  // mounted:{
  //   // console.log
  // }
}
</script>

<style lang="stylus" scoped>
  
</style>