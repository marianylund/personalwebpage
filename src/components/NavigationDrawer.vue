<template>
  <v-container>
    <v-navigation-drawer permanent v-if="drawerVisibility" app dark disable-resize-watcher>
    <v-list nav>
        <v-list-item>
        <v-list-item-avatar class="outlinedAvatar" size=150>
            <img src="../assets/profile.jpg">
        </v-list-item-avatar>
        
        </v-list-item>
    </v-list>
    </v-navigation-drawer>

  </v-container>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$vuetify.breakpoint)
    },

    computed: {
      drawerVisibility () {
          if(this.$vuetify.breakpoint.name == 'xs'){
              return false;
          }
          return true;
      },
    },
  }
</script>

<style scoped>
.outlinedAvatar {
    border-radius: 50%;
    margin-left: auto !important;
    margin-right: auto !important;
    box-shadow: 0px 0px 0px 10px rgb(78, 71, 71);
}
</style>