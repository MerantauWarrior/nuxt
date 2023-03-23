<template>
  <v-btn rounded small @click="$router.back()" class="text-capitalize" color="accent">
    <v-icon small>mdi-chevron-left</v-icon>
    {{$t('back_btn')}}
  </v-btn>
</template>

<script>
  export default {
    name: "BackButton"
  }
</script>
