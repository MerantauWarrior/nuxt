<template>
  <v-container>
    <h1>{{$t('episodes_title')}}</h1>
    <v-divider class="mb-4"></v-divider>
    <v-row>
      <v-col
        lg="3"
        v-for="episode in allEps"
        :key="episode.id"
      >
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-2">
                {{episode.air_date}}
              </div>
              <v-list-item-title class="text-h6 mb-4" :title="episode.name">
                {{episode.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{episode.episode}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              class="px-3"
              color="info"
              :to="localeRoute({name: 'episodes-id', params: {id: episode.id}})"
              exact
              rounded
              nuxt
              small
            >
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "Episodes",
    computed: {
      ...mapState({
        allEps: state => state.episodes.all
      }),
    },
    created() {
      this.fetchEps();
    },
    methods: {
      ...mapActions({
        fetchEps: 'episodes/fetchEpisodes'
      })
    },
    head() {
      return {
        title: "Episodes",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Episodes page description'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
