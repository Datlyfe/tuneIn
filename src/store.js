import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: 'discover',
    likes: JSON.parse(localStorage.getItem('likes')) || []
  },
  mutations: {
    setCurrentView(state, view) {
      state.currentView = view
    },
    likeSong(state, song) {
      state.likes.push(song)
      localStorage.setItem('likes', JSON.stringify(state.likes))
    },
    unlike(state, song) {
      state.likes = state.likes.filter(tune => tune.id !== song.id)
      localStorage.setItem('likes', JSON.stringify(state.likes))
    }
  }
})
