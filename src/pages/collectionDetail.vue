<template>
  <div>
    <BackButton :detailType="type"  />
    <div class="collection-container">
      <div class="content" v-if="relativeData.length">
        <CollectionItem  :contentType="item.headType"
        :description="item.title || item.desc" v-for="(item, index) in relativeData" :key="index"/>
      </div>
      <div v-else >还没有收藏哦</div>
    </div>
    
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
      console.log( 'params:---', this.$route.params)
      // this.colData = this.$route.params.colData;
      console.log('coldetail.vue this.type', this.type);
      switch(this.type){
        case '文章':
          this.relativeData.push(this.articleCollection);break;
        case '图文':
          this.relativeData.push(this.pictureCollection);break;
        case '音乐故事收藏':
          this.relativeData.push(this.musicCollection);break;
        case '电影':
          this.relativeData.push(this.movieCollection);break;
        case '深夜电台收藏':
          this.relativeData.push(this.radioCollection);break;
        default:
          this.relativeData.push({meg:'你还没有进行收藏哦'})
      }
      console.log('this.relativeData:---', this.relativeData)
    },
    getStoreData(type) {
      console.log('state', this.$store.state);
    },
    // ...mapMutations['addArticleCollection','addMovieCollection']
  }
}
</script>

<style lang="stylus" scoped>
.collection-container
  margin-top 100px
</style>