import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { ids: [], one: [], two: [], infoma: [] },
  mutations: {
    ADD_ARRAY (state, value) {
      state.ids.push(value)
      if (state.ids.length === 1) {
        state.one.push((state.ids.slice(0, 1)))
        state.one = JSON.stringify(state.one)
        state.one = state.one.substring(2, state.one.length - 2)
        state.one = JSON.parse(state.one)
      }
      if (state.ids.length === 2) {
        state.two.push((state.ids.slice(1, 2)))
        state.two = JSON.stringify(state.two)
        state.two = state.two.substring(2, state.two.length - 2)
        state.two = JSON.parse(state.two)
      }
    },
    infomat (state, value) {
      state.infoma.push(value)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    elementone: state => {
      var my = JSON.stringify(state.one)
      return my.id
    },
    elementtwo: state => {
      return state.ids.slice(1, 2)
    }
  }
}
)
