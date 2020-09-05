<template class="dark">
  <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex my-5 xs12>
        <span class="text-h4 text-center primary--text">Experience</span>
        </v-flex>

        <v-flex xs12 v-for="(job, i) in jobs" :key="i">
          <v-card flat color="rgb(0, 0, 0, 0)">
            <v-layout row wrap justify-space-between>
              <v-flex xs12 sm4 md8>
            <v-card-title class="primary--text">{{job.role}}</v-card-title>
              </v-flex>
              <v-flex xs12 sm3 md2>
                <v-card-text class="font-weight-medium primary--text">
              <div>{{job.date}}</div>
            </v-card-text>
              </v-flex>
            </v-layout>
            <v-card-subtitle class="font-weight-medium primary--text">{{job.company}}</v-card-subtitle>
            <v-card-text class="primary--text">
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
        {role: 'Intern', company: 'Cisco Systems Inc', place: 'Oslo', date: '2020 Summer', 
        description: 'Worked on the Co-Creation team with the white-boarding feature on Cisco’s devices and Webex Teams. Used technologies and tools such as C++, Qt and OpenGL daily to research and implement textured pen strokes'},
        {role: 'VR Developer',  company: 'Breach Reality', place: 'Trondheim', date: '2019 Jun - 2020 Apr', 
        description: 'Developing multiplayer, location-based VR puzzle game for the Oculus Quest headset. Started as a summerinternship which continued as a part-time job (40%)'},
         {role: 'AR Developer',  company: 'Ludenso (previously MovieMask)', place: 'Oslo', date: '2018 Apr - Nov', 
        description: 'Helped to shape the new direction of the company towards AR through creating an AR developer community,teaching AR courses and exploring the possibilities of AR development.'}
      ],
      volunteer: [
        {role: 'Co-founder', company: 'MAKE NTNU', place: 'Trondheim', date: '2017 Jun -2018 Feb', 
        description: 'Co-founder of a makerspace that exists as an open platform for pursuing craft projects at the university'},
        {role: 'LabOps Leader',  company: 'Hackerspace', place: 'Trondheim', date: '2017 Feb -2018 Feb', 
        description: 'Leader for a team of 19 people in an organization of around 80 active members. The team was responsible forevents and day-to-day operations in the makerspace'}
      ]
    }
  }
}
</script>
