<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          :to="localePath('/')"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('home_title') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="localeRoute({name: 'heroes'})"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-account-cowboy-hat-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('heroes_title') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="localeRoute({name: 'episodes'})"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-television-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('episodes_title') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <LangSwitcher class="mr-5" />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-badge
          :content="favCount"
          :value="favCount"
          color="orange"
          overlap
        >
          <v-icon>mdi-menu</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
        <!--          :to="localeRoute({name: 'heroes-id', params: {id: fHero.id}})"-->
        <v-list-item
          v-for="fHero in favoriteHeroes"
          :key="fHero.id"
          :to="localeRoute({name: 'heroes-id', params: {id: fHero.id}})"
          nuxt
          exact
          two-line
        >
          <v-list-item-avatar>
            <v-img :src="fHero.image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{fHero.name}}</v-list-item-title>
            <v-list-item-subtitle>{{fHero.species}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Rick and Morty on Nuxt.js'
    }
  },
  computed: {
    ...mapGetters('heroes',{
      favoriteHeroes: 'getFavHeroes',
      favCount: 'favHeroesCount'
    })
  },

}
</script>
