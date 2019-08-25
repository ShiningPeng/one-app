<template>
  <div>
    <BackButton :headType="type"/>
  </div>
</template>

<script>
import BackButton from '@/components/backButton'
export default {
  data () {
    return {
      type:'',
      
    }
  },
  components:{
    BackButton
  },
  created(){
    this.getProps();
  },
  methods:{
    getProps() {
      this.type = this.$route.params.type;
      switch(type){
        case '文章':
          
      }
    },
    getStoreData(type) {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>