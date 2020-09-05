<template>
  <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex my-2 xs12>
        <span class="text-h4 text-center primary--text">Education</span>
        </v-flex>

        <v-flex xs12 v-for="(study, i) in education" :key="i">
          <v-card flat color="rgb(255, 0, 0, 0)">
            <v-layout row wrap justify-space-between>
              <v-flex xs12 sm6 md8>
            <v-card-title class="primary--text">{{study.level}}</v-card-title>
              </v-flex>
            <v-flex xs12 sm3 md2>
                <v-card-text class="primary--text">
              <div>{{study.place}}, {{study.city}}</div>
            </v-card-text>
              </v-flex>
              <v-flex xs12 sm3 md2>
                <v-card-text class="font-weight-medium primary--text">
              <div>{{study.date}}</div>
            </v-card-text>
              </v-flex>
 
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

  </v-container>

</template>


<script lang="ts">
export default {
  data() {
    return{
      education: [
        {level: 'Master in Informatics',
          info: 'Interaction Design, Game and Learning Technology', 
          place: 'NTNU', city: 'Trondheim', date: '2020 - now'},
        {level: 'Bachelor in Informatics', 
          place: 'NTNU', city: 'Trondheim', date: '2016 - 2020'},
        {level: 'General', place: 'Øvrebyen upper secondary school', city: 'Kongsvinger', date: '2015 - 2016'},
        {level: 'A-Levels', place: 'York College', city: 'York', date: '2014 - 2015'},
        {level: 'General', place: 'Øvrebyen upper secondary school', city: 'Kongsvinger', date: '2013 - 2014'},
      ]
    }
  }
}
</script>
