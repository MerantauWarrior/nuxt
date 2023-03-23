<template>
  <v-sheet rounded class="px-4 py-4" elevation="4">
    <p v-if="$fetchState.pending">Fetching eps...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-container v-else>
      <v-row>
        <v-col cols="12">
          <BackButton class="mb-4" />
          <h1>{{episode.name}}</h1>
        </v-col>
        <v-col lg="8">
          <v-list dense>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-capitalize">Name</v-list-item-title>
                <v-list-item-subtitle>{{episode.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-capitalize">episode</v-list-item-title>
                <v-list-item-subtitle>{{episode.episode}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-capitalize">air date</v-list-item-title>
                <v-list-item-subtitle>{{episode.air_date}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-capitalize">characters</v-list-item-title>
                <v-list-item-subtitle v-for="char in episode.characters" :key="char">{{char}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  export default {
    name: "Episode",
    scrollToTop: true,
    transition: 'home',
    data() {
      return {
        episode: {},
      }
    },
    async fetch() {
      this.episode = await this.$axios.$get(`/api/v1/episode/${this.$route.params.id}`)
    },
    head() {
      return {
        title: this.episode.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Episode page description'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
