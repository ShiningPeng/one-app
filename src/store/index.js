import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    articleCollection:[]
  },
  mutations:{
    addArticleCollection(state, value){
      state.articleCollection.push(value);
    }
  },
  actions:{},
})

export default store;