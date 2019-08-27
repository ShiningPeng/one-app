<template>
  <div class="one-container">
    <!-- header -->
    <Header />
    
    <keep-alive>
      <Scroll :data="items" :pullup="true" :pulldown="true" :refreshDelay=20>
        <OnePhotography :item="item" @addToCollection="addToPictureCollection"/>
        <Commont :items="items" :date="date" @toggleToDetail="toggleToDetail"/>
      </Scroll> 
    </keep-alive>
    <!-- 摄影 -->
    <!-- smallNavigator -->
    <!-- one-story -->
    <!-- 问答 -->
    <!-- 音乐 -->
    <!-- 影视 -->
    <!-- 深夜电台 -->
    <!-- 上一个 -->
    <div class="previous" @click="previousOne">
      <div class="previous-img">
        <img src="../assets/images/bg.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Commont from "@/components/one-common";
import OnePhotography from "@/components/one-photography";
import Scroll from "@/components/scroll";
import { mapState, mapMutations} from 'vuex';

export default {
  name: "One",
  components: {
    Header,
    Commont,
    OnePhotography,
    Scroll
  },
  data() {
    return {
      item: [],
      date: "",
      items: [],
      receive:[],
      i:0
    };
  },
  computed:{
    ...mapState(['pictureCollection'])
  },
  methods: {
    toggleToDetail(id, type, headType){
      this.$router.push({ name:'Detail', params:{id, type, headType}});
    },
    ...mapMutations(['addPictureCollection']),
    addToPictureCollection(data){
      console.log('点击了收藏按钮');
      // console.log('data',data);
      this.addPictureCollection(data);
      // console.log(this.pictureCollection);
      // console.log(this.$store.state.pictureCollection)
    },
    changeData(receive){
      this.item = receive.items[0];
      this.date = receive.date.substring(5);
      this.items = receive.items.slice(1);
    },
    previousOne(){
      this.i++;
      if(this.i > 6) this.i = 0;
      this.changeData(this.receive[this.i]);
    },
    getData() {
      this.$axios
        .get("https://www.easy-mock.com/mock/5cbf0110a70f960bc333c4e7/home")
        .then(res => {
          console.log(res);
          this.receive = res.data.result.all;
          // this.i = 0;
          this.changeData(this.receive[this.i]);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
html, body 
  width 100%
  height 100%

  .one-container 
    padding-bottom 50px
  
  .item-top 
    margin-top 50px
    text-decoration none
  .previous
    width 100%
    height 150px
    position relative
    .previous-img
      width 100%
      height 100%
      img 
        width 100%
        height 100%
</style>
