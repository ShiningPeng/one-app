<template>
  <div>
    <BackButton :detailType="headType" :collectionData="current" @addToCollection="addCollection" :colIsShow="true"/>
     <div class="article-container">
    <h1 class="article-title">{{current.title}}</h1>
    <span class="article-author" v-show="current.author">{{current.author}}</span>
    <div class="article-content">
      {{current.content}}
    </div>
    <p class="article-edit">{{current.editor}}</p>
    <div class="article-author-introduction">
      <span class="zuozhe">作者</span>
      <Author />
    </div>
    <!-- <div class="article-commitlist">
      <span class="pinglunliebiao">评论列表</span>
      <ul>
        <li v-for="(comment,index) in commentList" :key="index">{{comment.userName}}---：<br/>{{comment.content}}</li>
      </ul>
    </div> -->
    <CommentButton />
  </div>
  </div>
  
</template>

<script>
import Author from '@/components/author';
import CommentButton from '@/components/commentButton';
import BackButton from '@/components/backButton';
import { mapState, mapMutations } from 'vuex';

export default {
  name:'detail',
  components:{
    Author,
    CommentButton,
    BackButton
  },
  data () {
    return {
      current:{},
      headType:''
    }
  },
  created(){
    this.getData();
  },
  computed:{
    // ...mapState['']
  },
  methods:{
    getData(){
      // console.log('调用了getData函数');
      const { id, type, headType} = this.$route.params;
      this.headType = headType;
      this.$axios.get(`https://www.easy-mock.com/mock/5cbf0110a70f960bc333c4e7/${type}`).then(res => {
        // console.log(res);
        this.current = res.data.result[id];
      })
    },
    addCollection(collectionData){
      // console.log('headtype', this.headType);
      collectionData.headType = this.headType;
      console.log('点击了收藏按钮,collectionData:', collectionData);
      switch(this.headType){
        case '问答':
        case '连载':
        case '阅读':
          this.addArticleCollection(collectionData);break;
        case '音乐':
          this.addMusicCollection(collectionData);break;
        case '影视':
          this.addMovieCollection(collectionData);break;
        case '电台':
          this.addRadioCollection(collectionData);break;
        default:
          console.log('类型不对哦');
      }
      
    },
    ...mapMutations(['addArticleCollection', 'addPictureCollection', 'addMusicCollection', 'addRadioCollection', 'addMovieCollection'])
  }
}
</script>

<style lang='stylus' scoped>
.article-container
  width 90%
  top 0
  bottom 0
  right 0
  left 0
  z-index 100
  padding 60px 5% 0 5%
  .article-title
    font-size 25px
    margin 30px 0
  .article-author
    display block
    font-size 15px
    color #808080
    margin-bottom 30px
  .article-content
    font-size 16px
    line-height 30px
    margin-bottom 80px
  .article-edit
    font-size 14px
    margin 10px 0
    color #808080
  .article-author-introduction
    width 100%
    height 100px
    margin 20px 0
    .zuozhe
      display block
      font-size 15px
      width 60px
      height 30px
      box-sizing border-box
      border-bottom 3px solid #000
  .article-commitlist
    width 100%
    .pinglunliebiao
      display block
      width 60px
      height 30px
      box-sizing border-box
      border-bottom 3px solid #000
      font-size 15px
    ul
      li
        list-style none 
</style>
