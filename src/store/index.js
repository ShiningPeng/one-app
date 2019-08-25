import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    articleCollection:[],
    pictureCollection:[],
    muiscCollection:[],
    radioCollection:[],
    movieCollection:[]
  },
  mutations:{
    addArticleCollection(state, value){
      state.articleCollection.push(value);
    },
    addMovieCollection(state, value){
      state.movieCollection.push(value);
    },
    addRadioCollection(state, value){
      state.radioiCollection.push(value);
    },
    addPictureCollection(state, value){
      state.pictureCollection.push(value);
    },
    addMusicCollection(state, value){
      state.musicCollection.push(value);
    }
  },
  actions:{},
})

export default store;