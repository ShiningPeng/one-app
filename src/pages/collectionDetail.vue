<template>
  <div>
    <BackButton :detailType="type" />
    {{pictureCollection}}
  </div>
</template>

<script>
import BackButton from '@/components/backButton'
import { mapState } from 'vuex';
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
    this.getStoreData();
  },
  computed:{
    ...mapState(['articleCollection', 'pictureCollection'])
  },
  methods:{
    getProps() {
      this.type = this.$route.params.type;
      // switch(type){
      //   case '文章':
          
      // }
    },
    getStoreData(type) {
      console.log(this.pictureCollection);
    },
    // ...mapMutations['addArticleCollection','addMovieCollection']
  }
}
</script>

<style lang="stylus" scoped>
  
</style>