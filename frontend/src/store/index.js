import { createStore } from 'vuex'

export default createStore({
  state: {
    allPokemon: '',
  },
  getters: {
  },
  mutations: {
    setAllPokemon(state, nouvelle_valeur){
      state.allPokemon =  nouvelle_valeur;
    }
  },
  actions: {
  },
  modules: {
  }
})
