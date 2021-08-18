<template>
  <v-container>
    <v-app-bar 
      v-if="barVisibility" 
      app 
      dark
    >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="mobileDrawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="mobileDrawer"
      absolute
      temporary
      color="primary"
    >
      <NavigationBar />
    </v-navigation-drawer>

    <v-navigation-drawer permanent 
        v-if="drawerVisibility" 
        app disable-resize-watcher
        color="primary"
    >
      <NavigationBar />
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "./NavigationBar.vue";

export default Vue.extend({
  components: {
    NavigationBar
  },
    data: function(){
        return {
          mobileDrawer: false,
        }
    },
    
   computed: {
      barVisibility () {
          if(this.$vuetify.breakpoint.name == 'xs'){
              return true;
          }
          return false;
      },
      drawerVisibility () {
        if(this.$vuetify.breakpoint.name != 'xs'){
            return true;
        }
        return false;
      },
      mobileDrawerVisibility () {
        if(this.$vuetify.breakpoint.name == 'xs' && this.$props.mobileDrawer){
            return true;
        }
        return false;
      },
    },
  mounted () {
    console.log(this.$vuetify.breakpoint)
  },
});
</script>

