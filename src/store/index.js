import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList:[
      {id: 1, author: "Charlotte Bronte", image: require('@/assets/batman_robin.jpg'), subtext: "Logo"},
      {id: 2, author: "Michael Bronte", image: require('@/assets/tornado.jpg'), subtext: "Logo"},
      {id: 3, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 4, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 5, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 6, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 7, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 8, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 9, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
      {id: 10, author: "Charlotte Bronte", image: require('@/assets/logo.png'), subtext: "Logo"},
  ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});
