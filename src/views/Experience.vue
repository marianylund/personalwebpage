<template>
  <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex my-5 xs12>
        <span class="text-h4 text-center">Experience</span>
        </v-flex>

        <v-flex my-3 xs12 v-for="(job, i) in jobs" :key="i">
          <v-card flat color="rgb(255, 0, 0, 0)">
            <v-layout row wrap justify-space-between>
              <v-flex xs12 sm4 md8>
            <v-card-title>{{job.role}}</v-card-title>
              </v-flex>
              <v-flex xs12 sm3 md2>
                <v-card-text>
              <div>{{job.date}}</div>
            </v-card-text>
              </v-flex>
            </v-layout>
            <v-card-subtitle>{{job.company}}</v-card-subtitle>
            <v-card-text>
              <div>{{job.description}}</div>
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
        {role: 'Intern', company: 'Cisco Systems Inc', date: '2020 Summer', 
        description: 'Worked on the Co-Creation team with the white-boarding feature on Cisco’s devices and Webex Teams. Usedtechnologies and tools such as C++, Qt and OpenGL daily to research and implement textured pen strokes'},
        {role: 'VR Developer',  company: 'Breach Reality', date: '2019 Jun -2020 Apr', 
        description: 'Developing multiplayer, location-based VR puzzle game for the Oculus Quest headset. Started as a summerinternship which continued as a part-time job (40%)'}
      ]
    }
  }
}
</script>
