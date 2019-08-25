<template>
  <div>
    <BackButton :detailType="type" />
    {{articleCollection}}
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
    ...mapState(['articleCollection'])
  },
  methods:{
    getProps() {
      this.type = this.$route.params.type;
      // switch(type){
      //   case '文章':
          
      // }
    },
    getStoreData(type) {
      console.log(this.articleCollection);
    },
    // ...mapMutations['addArticleCollection','addMovieCollection']
  }
}
</script>

<style lang="stylus" scoped>
  
</style>