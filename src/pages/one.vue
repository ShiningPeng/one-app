<template>
  <div class="one-container">
    <!-- header -->
    <Header />
    <OnePhotography :item="item"/>
    <!-- <keep-alive> -->
      <!-- <div class="item-top"> -->
        <Commont :items="items"  :date="date"/>
      <!-- </div> -->
      <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->
    <!-- 摄影 -->
    <!-- smallNavigator -->
    <!-- one-story -->
    <!-- 问答 -->
    <!-- 音乐 -->
    <!-- 影视 -->
    <!-- 深夜电台 -->
    <!-- 上一个 -->
  </div>
</template>

<script>
import Header from '@/components/header';
import Commont from '@/components/one-common';
import OnePhotography from '@/components/one-photography';

export default {
  name: "One",
  components: {
    Header,
    Commont,
    OnePhotography
  },
  data() {
    return { 
      item:[], 
      date:'', 
      items:[]
    };
  },
  methods: {
   getPhotos() {
     this.$axios.get('https://www.easy-mock.com/mock/5cbf0110a70f960bc333c4e7/home').then(res => {
      //  console.log(res);
      this.item = res.data.result.items[0];
      this.date = res.data.result.date.substring(5);
      console.log(this.date);
      this.items = res.data.result.items.slice(1);
     })
   }
  },
  created(){
    this.getPhotos();
  }
};
</script>

<style lang="stylus" scoped>
html,body
  width 100%
  height 100%
  .one-container
    padding-bottom 60px
  .item-top
    margin-top 50px
    text-decoration none

</style>
