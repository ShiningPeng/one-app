<template>
  <div>
    <BackButton :detailType="type"  />
    {{relativeData}}
  </div>
</template>

<script>
import BackButton from '@/components/backButton'
import CollectionItem from '@/components/collectionItem';
import { mapState } from 'vuex';
export default {
  data () {
    return {
      type:'',
      relativeData:[]
      // colData:{}
    }
  },
  components:{
    BackButton,
    CollectionItem
  },
  created(){
    this.getProps();
    this.getStoreData();
  },
  computed:{
    ...mapState(['articleCollection', 'pictureCollection', 'muiscCollection', 'radioCollection', 'movieCollection'])
  },
  methods:{
    getProps() {
      this.type = this.$route.params.type;
      // this.colData = this.$route.params.colData;
      switch(this.type){
        case '文章':
          this.relativeData.push(this.articleCollection);
        case '图文':
          this.relativeData.push(this.pictureCollection);
        case '音乐故事收藏':
          this.relativeData.push(this.musicCollection);
        case '电影':
          this.relativeData.push(this.movieCollection);
        case '深夜电台收藏':
          this.relativeData.push(this.radioCollection);
        default:
          this.relativeData.push({meg:'你还没有进行收藏哦'})
      }
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