<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 px-4">
        <h1 class="text-center"><span>Login</span></h1>
        <v-btn @click="myLogin">Login Button</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'LoginPage',
    methods: {
      myLogin() {
        console.log('login clicked');
        this.$auth.loginWith('github');
      }
    }
  }
</script>
