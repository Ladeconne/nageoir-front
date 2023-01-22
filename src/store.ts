import Vuex, { Store } from 'vuex'

interface State {
  count: number
}

const store: Store<State> = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
  },
  actions: {
    increment({ commit }: { commit: any }) {
      commit('increment')
    },
  },
  getters: {
    count: (state: State) => state.count,
  },
})

export default store
