<template>
  <v-sheet rounded class="px-4 py-4" elevation="4">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-container v-else>
      <v-row>
        <v-col cols="12">
          <BackButton class="mb-4" />
          <h1>{{character.name}}</h1>
        </v-col>
        <v-col lg="4">
          <v-img
            :src="character.image"
          ></v-img>
          <v-divider class="my-4"></v-divider>
          <v-btn
            color="primary"
            v-if="!isFav(character.id)"
            large
            @click="addToFavs(character)"
          >
            <v-icon left>
              mdi-heart
            </v-icon>
            Add to favorites
          </v-btn>
          <v-btn
            color="error"
            v-else
            large
            @click="removeFromFavs(character.id)"
          >
            <v-icon left>
              mdi-minus
            </v-icon>
            Remove from favorites
          </v-btn>
        </v-col>
        <v-col lg="8">
          <v-list dense>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>name:</v-list-item-title>
                <v-list-item-subtitle>{{character.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>status:</v-list-item-title>
                <v-list-item-subtitle>{{character.status}}</v-list-item-subtitle>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>species:</v-list-item-title>
                <v-list-item-subtitle>{{character.species}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>gender:</v-list-item-title>
                <v-list-item-subtitle>{{character.gender}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>origin:</v-list-item-title>
                <v-list-item-subtitle>{{character.origin.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>location:</v-list-item-title>
                <v-list-item-subtitle>{{character.location.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Episodes
                <template v-slot:actions>
                  <v-icon color="primary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-virtual-scroll
                  :items="character.episode"
                  height="300"
                  item-height="48"
                >
                  <template v-slot:default="{ item }">
                    <v-list-item :key="item">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                  </template>
                </v-virtual-scroll>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';
  export default {
    name: "Hero",
    scrollToTop: true,
    transition: 'home',
    // async asyncData({params, $axios}) {
    //   const character = await $axios.$get(`/api/v1/character/${params.id}`)
    //   return {character}
    // },
    data() {
      return {
        character: {},
      }
    },
    async fetch() {
      this.character = await this.$axios.$get(`/api/v1/character/${this.$route.params.id}`)
    },
    computed: {
      ...mapGetters({
        isFav: 'heroes/isHeroFav'
      })
    },
    methods: {
      ...mapActions({
        addToFavs: 'heroes/addFavHero',
        removeFromFavs: 'heroes/removeFavHero',
      })
    },
    head() {
      return {
        title: this.character.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.character.name} page description`
          }
        ]
      }
    }
  }
</script>
