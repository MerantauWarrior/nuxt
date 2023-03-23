<template>
  <v-card height="100%">
    <v-img
      :src="info.image"
      height="300px"
    ></v-img>
    <v-card-title>
      {{info.name}}
    </v-card-title>
    <v-card-text>
      <div>{{info.origin.name}}</div>
      <div>{{info.species}}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="px-4"
        color="orange"
        :to="localeRoute({name: 'heroes-id', params: {id: info.id}})"
        exact
        rounded
        nuxt
      >
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "HeroCard",
    props: {
      info: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
