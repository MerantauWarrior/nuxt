export const state = () => ({
  all: [],
  favorites: []
})

export const getters = {
  getFavHeroes(state){
    return state.favorites;
  },
  favHeroesCount (state, getters) {
    return getters.getFavHeroes.length;
  },
  isHeroFav: (state) => (id) => {
    return state.favorites.find(hero => hero.id === id)
  }
}

export const mutations = {
  setFavHero(state, hero){
    state.favorites.push(hero);
  },
  deleteFavHero(state, id) {
    state.favorites = state.favorites.filter(item => item.id !== id);
  },
  setHeroes(state, heroes){
    state.all = heroes;
  }
}

export const actions = {
  addFavHero({commit}, hero){
    commit('setFavHero', hero);
  },
  removeFavHero({commit}, hero){
    commit('deleteFavHero', hero);
  },
  async fetchHeroes({commit}){
    const res = await this.$axios.get('/api/v1/character');
    const heroes = res.data.results || [];
    commit('setHeroes', heroes)
  }
}
