export default {
  async fetchEpisodes({commit}){
    const res = await this.$axios.get('/api/v1/episode');
    const episodes = res.data.results || [];
    commit('setEpisodes', episodes)
  }
}
