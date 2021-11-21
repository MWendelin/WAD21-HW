import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList:[
      {id: 1, author: "Michael Bronte", time: "Sep 12 2021, 13:15", subtext: "Hello!"},
      {id: 2, author: "Elle Bernhard", time: "Sep 14 2021, 17:18",image: require('@/assets/tornado.jpg'), subtext: "Looks like it's going to rain"},
      {id: 3, author: "Matt Smith", time: "Sep 15 2021, 23:34",image: require('@/assets/batman_robin.jpg'), subtext: "Best friends forever"},
      {id: 4, author: "Michelle Woodbar", time: "Sep 22 2021, 17:59",image: require('@/assets/dinner.png'), subtext: "Best dinner I've had yet :)"},
      {id: 5, author: "Billie Waterboard", time: "Sep 22 2021, 18:12", subtext: "Logo"},
      {id: 6, author: "Anthon Callister", time: "Sep 29 2021, 22:21", subtext: "Logo"},
      {id: 7, author: "William Willing", time: "Sep 30 2021, 11:00",image: require('@/assets/birthday.jpg'), subtext: "Happy birthday to me!"},
      {id: 8, author: "Brody Broom", time: "Oct 1 2021, 23:45",image: require('@/assets/hogwarts.png'), subtext: "Missing my school :'( :( :("},
      {id: 9, author: "Billie Waterboard", time: "Oct 14 2021, 17:17", subtext: "Logo"},
      {id: 10, author: "Michael Bronte", time: "Oct 24 2021, 08:01",image: require('@/assets/forest.jpg'), subtext: "Guess what time it is... :D"},
  ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});
