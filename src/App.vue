<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
      <NavigationDrawer />
    <v-main class="mx-4 mb-4" >
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavigationDrawer
  },

  data: () => ({
    //
  })
});
</script>

