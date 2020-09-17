<template>
  <v-container>
      <v-layout row wrap>
        <v-flex my-3 xs12 md6 v-for="(project, i) in projects" :key="i">
            <v-card
    class="ma-2"
  >
  
    <v-img
      :src="project.img"
      height="200px"
    ></v-img>

    <v-card-title>{{project.title}}</v-card-title>
    <v-card-subtitle>{{project.subtitle}}, {{project.date}}</v-card-subtitle>
    <v-card-subtitle>{{project.technology}}</v-card-subtitle>

    <v-card-actions>

      <v-btn color="purple" text :disabled="project.disableExplore"
      :href="project.exploreRef"
      > Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="project.show = !project.show"
      >
        <v-icon>{{ project.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="project.show">
        <v-divider></v-divider>

        <v-card-text>
         {{project.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
        </v-flex>
      </v-layout>

  </v-container>

</template>

<script lang="ts">
export default {
  data() {
    return{
        projects: [
        {show: false, title: 'Global Warming', subtitle: 'Bachelor Project', date: '2019 Spring',
        img: '/globalwarming.png',
        technology: 'Unity, C#, SteamVR', 
        description: 'Worked on creating a VR-application in a group of 6 students. There a user explores Trondheim using the Virtuix Omni Treadmill to walk around the city. The program consists of two modes, a quest player and a custom climate quest. Quests consist mainly of a route of InfoPoints aimed at teaching the user about different topics (E.g history and geography).Primarily, it was to make a product the customer could present at The Big Challenge festival in the middle of June. The goal of this part was to present the users with a fun and informative experience of how global warming would affect them locally in Trondheim',
        disableExplore: true,
        exploreRef: '',
        },
        {show: false, title: 'Interactive Lights', subtitle: 'Graphics project', date: '2020 Spring',
        img: '/interactivelights.png', 
        technology: 'WebGL, THREE.js, TypeScript, dat.gui',
        description: 'Understanding the differences and effects of different settings in the shading models can be difficult. Thus I wanted to create an interactive tool which is easy to use and lets the user try out various shading models such as Gouraud, Phong and Cook-Torrance. The goal was to make this available on the web to make it widely accessible. The web-site allows a user to change a variety of light properties and see its affects in real-time. There are five objects in the scene: plane, cube, sphere, knot, and one light. Everything except for the plane is grabbable and movable around in the scene. Properties of light affect all objects, whilst the objects have their own shading model status and material properties. Not all properties have effects in all shading models. For example: _roughness_ does not change anything when Phong shading is chosen.',
        disableExplore: false,
        exploreRef: '/interactive/lights.html',
        },
        {show: false, title: 'Q Table Reinforcement Learning', subtitle: 'Machine learning project', date: '2020 Spring',
        img: '/qtable.png',
        technology: 'Python, Jupyter Notebook',  
        description: 'To explain how one can use Q Tables I came up with an important survival skill we all had to learn in 2020.  The ability to go to Kiwi and back without meeting another person. Thus we are creating a survivor that will learn the best path from home to kiwi and back.',
        disableExplore: true,
        exploreRef: '',
        },
        {show: false, title: 'Rubiks Cube', subtitle: 'Graphics project', date: '2020 Autumn',
        img: '/rubiks.png', 
        technology: 'WebGL, THREE.js, TypeScript, dat.gui',
        description: '',
        disableExplore: false,
        exploreRef: '/interactive/rubiks.html',
        },
      ],
    }
  }
}
</script>