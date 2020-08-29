<template>
  <v-container>

      <v-navigation-drawer
        v-model="drawer"
        app 
        dark
        permanent
      >
        <v-list
          nav
        >
        
          <v-list-item>
            <v-list-item-avatar class="outlinedAvatar" size=150>
              <img src="../assets/profile.jpg">
            </v-list-item-avatar>
           
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

  </v-container>
</template>

<style scoped>
.outlinedAvatar {
    border-radius: 50%;
    margin-left: auto !important;
    margin-right: auto !important;
    box-shadow: 0px 0px 0px 10px rgb(78, 71, 71);
}
</style>