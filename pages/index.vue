<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 px-4">
        <h1 class="text-center"><span>SCSS + {{$t("welcome", { name: "myName" })}}</span></h1>
        <h2>I am rendered on the {{ renderedOn }} side</h2>
        <div class="py-4" v-if="$auth.loggedIn">
          <pre>{{ user }}</pre>
          <v-btn @click="$auth.logout()">logout</v-btn>
        </div>
        <div v-else>No user</div>
        <div>
          <div>{{ content }}</div>
          <v-btn type="button" color="primary" @click="refresh">Refresh</v-btn>
          <v-divider class="my-4"></v-divider>
          <a href="https://github.com/MerantauWarrior/nuxt" target="_blank">{{ $t('git_title') }}</a>
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
    data(){
      user: null
    },
    created() {
      console.log(this.$auth.user)
      console.log(this.$store.state.auth.user)
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
