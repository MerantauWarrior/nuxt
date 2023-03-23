<template>
  <div class="lang-switcher">
    <v-select
      v-model="$i18n.locale"
      :items="$i18n.locales"
      item-text="name"
      item-value="code"
      prepend-icon="mdi-web"
      return-object
      dense
      hide-details
      single-line
      @change="changeLocale($i18n.locale.code)"
    ></v-select>
<!--    <a-->
<!--      href="#"-->
<!--      v-for="locale in availableLocales"-->
<!--      :key="locale.code"-->
<!--      @click.prevent.stop="changeLocale(locale.code)">{{ locale.name }}-->
<!--    </a>-->
  </div>
</template>

<script>
  export default {
    name: "LangSwitcher",
    // computed: {
    //   availableLocales() {
    //     return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    //   }
    // },
    methods: {
      changeLocale(locale) {
        this.$i18n.setLocale(locale)
        localStorage.setItem("locale", locale);
      },
    },
  }
</script>

<style scoped lang="scss">
  .lang-switcher{
    max-width: 130px;
  }
</style>
