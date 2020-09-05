<template>
  <v-container>
    <v-navigation-drawer permanent 
        v-if="drawerVisibility" 
        app disable-resize-watcher
        color="primary"
        >
    <v-list nav>
        <v-list-item>
        <v-list-item-avatar class="outlinedAvatar" size=150>
            <img src="../assets/profile.jpg">
        </v-list-item-avatar>
        
        </v-list-item>
    </v-list>

    <v-list
    mandatory
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route"
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

  </v-container>
</template>

<script>
  export default {
      data(){
          return {
              items: [
                { icon: 'mdi-account', title: 'About', route: '/' },
                { icon: 'mdi-account', title: 'Projects', route: '/projects' },
                { icon: 'mdi-account', title: 'Experience', route: '/experience' },
                { icon: 'mdi-account', title: 'Education', route: '/education' },
                { icon: 'mdi-account', title: 'Skills', route: '/skills' },
                //{ icon: 'mdi-account', title: 'Interests', route: '/interests' },
                //{ icon: 'mdi-facebook', title: 'Home', route: '/' },
            ]
          }
      },

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