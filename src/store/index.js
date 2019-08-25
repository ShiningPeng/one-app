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
      // console.log('state1',state);
        state.pictureCollection.push(value);
        // console.log('state2',state);
    },
    addMusicCollection(state, value){
      state.musicCollection.push(value);
    }
  },
  actions:{},
})

export default store;