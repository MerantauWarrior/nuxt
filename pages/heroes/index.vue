<template>
  <v-container>
    <h1>{{$t('heroes_title')}}</h1>
    <v-divider class="mb-4"></v-divider>
    <v-row justify="center">
      <v-col
        lg="3"
        v-for="hero in allHeroes"
        :key="hero.id"
      >
        <HeroCard :info="hero"/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'Heroes',
    transition: 'home',
    data() {
      return {
        page: 1,
      }
    },
    computed: {
      ...mapState({
        allHeroes: state => state.heroes.all
      })
    },
    created() {
      this.fetchHeroes();
    },
    methods: {
      ...mapActions({
        fetchHeroes: 'heroes/fetchHeroes'
      })
    },
    head() {
      return {
        title: "Heroes",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Heroes page description'
          }
        ]
      }
    }
  }
</script>
