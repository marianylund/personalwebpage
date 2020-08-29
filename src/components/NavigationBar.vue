<template>
  <v-container>
    <v-app-bar v-if="barVisibility" app dark>
    
    </v-app-bar>

  </v-container>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$vuetify.breakpoint)
    },

    computed: {
      barVisibility () {
          if(this.$vuetify.breakpoint.name == 'xs'){
              return true;
          }
          return false;
      },
    },
  }
</script>
