<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item  
    to="/one" icon="circle" inactive-color="#808080" active-color="#333333">ONE</van-tabbar-item>
      <van-tabbar-item  
    to="/all" icon="apps-o" inactive-color="#808080"  active-color="#333333">ALL</van-tabbar-item>
      <van-tabbar-item 
    to="/me" icon="user-o" inactive-color="#808080"  active-color="#333333">ME</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 
<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  },
  methods: {
    onChange(event) {
      console.log(event.detail);
    }
  }
};
</script>

<style>
</style>
