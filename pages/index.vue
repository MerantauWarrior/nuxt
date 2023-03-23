<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <h1 class="text-center"><span>SCSS + {{$t("welcome", { name: "myName" })}}</span></h1>
        <h2>I am rendered on the {{ renderedOn }} side</h2>
        <div>
          <div>{{ content }}</div>
          <v-btn type="button" color="primary" @click="refresh">Refresh</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'IndexPage',
    transition: 'home',
    asyncData() {
      const renderedOn = process.client ? 'client' : 'server';
      const content = 'Created at: ' + new Date();
      return {renderedOn, content}
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>

<style>
  .home-enter-active, .home-leave-active {
    transition: opacity .4s;
  }

  .home-enter, .home-leave-active {
    opacity: 0;
  }
</style>
