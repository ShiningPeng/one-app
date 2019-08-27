<template>
  <div>
    <BackButton :detailType="type"  />
    <div class="collection-container">
      <div class="content" v-if="relativeData[0].length">
        <CollectionItem  :contentType="item.headType"
        :description="item.title || item.desc" v-for="(item, index) in relativeData[0]" :key="index" @toDetail="changeToDetail(item.id, item.headType, item.type)" />
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
    // this.getProps();
    this.getStoreData();
  },
  computed:{
    ...mapState(['articleCollection', 'pictureCollection', 'musicCollection', 'radioCollection', 'movieCollection'])
  },
  methods:{
    changeToDetail(id, headType, type) {
      this.$router.push({name:'Detail', params:{id, headType, type}});
    },
    getStoreData() {
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
          this.relativeData.push({meg:'类型不对哦'})
      }
      this.operateData();
      console.log('this.relativeData:---', this.relativeData[0])
    },
    operateData() {
      // console.log('state', this.$store.state);
      for(let i = 0; i < this.relativeData[0].length; i ++) {
        let htype = this.relativeData[0][i].headType;
        switch(htype){
          case '问答':
            this.relativeData[0][i].type = 'question';break;
          case '阅读':
            this.relativeData[0][i].type = 'article';break;
          case '摄影':
          case '插画':
            this.relativeData[0][i].type = 'picture';break;
          case '连载':
            this.relativeData[0][i].type = 'lianzai';break;
          case '影视':
            this.relativeData[0][i].type = 'movie';break;
          case '音乐':
            this.relativeData[0][i].type = 'music';break;
          case '电台':
            this.relativeData[0][i].type = 'radio';break;
        }
      }
    },
    // ...mapMutations['addArticleCollection','addMovieCollection']
  }
}
</script>

<style lang="stylus" scoped>
.collection-container
  margin-top 60px
</style>