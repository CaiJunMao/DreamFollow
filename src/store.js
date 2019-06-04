import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	title: null,
	sort: null,
	content: null,
	dynasty: null,
	font:null,
  },
  mutations: {
	introductionPoem(state, poem){
		state.title = poem.title
		state.dynasty = poem.dynasty
		state.author = poem.author
		state.content = poem.content
	},
	introductionSort(state, sort){
		state.sort = sort
	},
	introductionAuthor(state, author){
		state.author = author
	},
	changeFont(state,font){
		state.font = font
	}
  },
  actions: {

  }
})
