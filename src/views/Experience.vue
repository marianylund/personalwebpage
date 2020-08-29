<template>
  <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex my-5 xs12>
        <span class="text-h4 text-center">Experience</span>
        </v-flex>

        <v-flex my-3 xs12 v-for="(job, i) in jobs" :key="i">
          <v-card flat class="text-center">
            <v-card-text>
              <div class="subheading">{{job.role}}</div>
              <div class="grey--text">{{job.date}}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

  </v-container>

</template>

<script lang="ts">
export default {
  data() {
    return{
      jobs: [
        {role: 'Test', date: '01.01.2001'},
        {role: 'Test2', date: '01.01.2001'}
      ]
    }
  }
}
</script>
