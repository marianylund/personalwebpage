<template>
    <v-container fill-height fluid >
    <v-layout row wrap align-start>
      <v-flex xs12>
          <span class="text-h2 primary--text">Skills</span>
      </v-flex>
      <v-flex xs12>
          <span class="text-h5 primary--text">Languages/Scripts</span>
      </v-flex>
      <v-flex v-for="(icon, i) in languageIcons" :key="i">
          <v-icon class="primary--text ma-0">{{icon}}</v-icon>
      </v-flex>
          <v-flex xs12>
          <span class="text-h5 primary--text">Environments</span>
      </v-flex>
      <v-flex xs12>
          <span class="text-body1 primary--text">
            Visual Studio, Visual Code, Android Studio, Atom, Eclipse, PyCharm</span>
      </v-flex>

            <v-flex xs12>
          <span class="text-h5 primary--text">Other</span>
      </v-flex>
      <v-flex xs12>
          <span class="text-body1 primary--text">
            Unity, OpenGL, PyTorch, Photon Bolt, Vuforia, A-frame, Agile development, Project Management, Technical Documentation</span>
      </v-flex>

   
      </v-layout>
    </v-container>
</template>

// C#, Java, Python, C++, GLSL, LaTex, JavaScript, HTML, CSS
<script lang="ts">
export default {
  data() {
    return{
      languageIcons: [
        'mdi-language-csharp', 'mdi-language-java', 'mdi-language-python',
        'mdi-language-cpp', 'GLSL',
        'mdi-language-typescript', 'mdi-language-javascript', 'mdi-language-html5', 'mdi-language-css3'
        ]
    }
    
  }
}
</script>