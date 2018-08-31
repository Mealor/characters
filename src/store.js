import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(context, characters) {
      this.state.characters = characters.data;
    },
  },
  actions: {
    setCharacters({ commit }) {
      if (this.state.characters.length === 0) {
        Axios.get('https://api.opendota.com/api/heroStats')
          .then(response => (commit('setCharacters', response)));
      }
    },
  },
});
