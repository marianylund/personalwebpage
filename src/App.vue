<template>
  <v-app>
      <NavigationBar />
      <NavigationDrawer />

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavigationDrawer,
    NavigationBar
  },

  data: () => ({
    //
  })
});
</script>

