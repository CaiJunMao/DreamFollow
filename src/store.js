import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	title: null,
	author: null,
	content: null,
  },
  mutations: {
	introductionPoem(state, poem){
		state.title = poem.title
		state.author = poem.author
		state.content = poem.content
	}
  },
  actions: {

  }
})
