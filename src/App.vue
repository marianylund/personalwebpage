<template>
  <v-app>
      <NavigationDrawer />

    <v-main>
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

