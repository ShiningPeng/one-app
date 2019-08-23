<template>
  <div>
      <ul>
        <li  v-for="(item,index) in items" :key="index" @click="changeToDetail(item.id, item.type,item.headType)">
          <!-- <router-link to="/detail"> -->
            <div class='com-coner'>
              <div class='con-type'>- {{item.headType}} -</div>
              <h3 class='title'>{{item.title}}</h3>
              <p class='author'>{{item.author}}</p>
              <div class='pic'>
                <img :src='item.imgUrl' alt='叶修' />
              </div>
              <p class='desc'>{{item.desc}}</p></div>
          <!-- </router-link> -->
            <div class='foot'>
              <span class='date'>{{date}}</span>
              <div class='aixin-forwarding'>
                <span class='aixin'>
                  <i class='iconfont'>&#xe601;</i>
                  {{item.aixinCount}}
                </span>
                <router-link to="/share">
                  <span class='forwarding'>
                    <i class='iconfont'>&#xe60d;</i>
                  </span>
                </router-link>
              </div>
            </div>
          <div class="white-space"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    items:{
      type:Array,
      default:[]
    },
    date:{
      type:String,
      default:''
    }
  },
  name: 'item',
  data() {
    return {
      
    };
  },
  methods:{
    changeToDetail(id, type, headType) {
      console.log(id, type);
      this.$router.push({ name:'Detail', params:{id, type, headType}});
    }
  }
};
</script>
<style lang='stylus' scoped>
a 
  text-decoration: none
.router-link-active 
  text-decoration none
.com-coner  
  // height 465px
  width 90% 
  // margin-top 10px 
  padding 2% 5% 
  background-color #fff 
  margin-bottom 10px 
  .con-type  
    text-align center 
    color #808080 
    font-size 12px 
    margin-bottom 10px 
    padding-top 8px 
  .title  
    font-weight 500 
    margin-bottom 10px 
    color #333333 
    font-size 15px 
  .author  
    font-size 14px 
    color #808080 
    margin-bottom 10px 
  .pic  
    width 100% 
    height 250px 
    margin-bottom 10px 
    img  
      width 100% 
      height 100% 
  .desc  
    font-size 14px 
    color #808080 
    margin-bottom 20px 
.foot  
  width 90%
  display flex 
  color #808080 
  font-size 15px 
  padding 2% 5% 

  // margin-bottom 10px
  // position relative
  .date  
    flex: 1 
    text-align: left 
    // width 50%
    // position absolute
  .aixin-forwarding  
    display inline-block 
    // width 50%
    // position absolute
    flex 1 
    text-align  right 
.white-space
  background-color #eeeeee
  width 100%
  height 10px
</style>
