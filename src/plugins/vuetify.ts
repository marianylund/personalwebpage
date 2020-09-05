import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: { 
            dark: {
                primary: '#25171A',
                primaryLighter: '#54343b',
                secondary: '#b0bec5',
                background: '#f0e0e3',
                accent: '#efcb27', // yellowBahaus
                error: '#d0221c', // redBahaus
                info: '#C9F0FF', // columbiaBlue
                success: '#357db2', // blueBahaus
                warning: '#878E88', //battleshipGrey
                anchor: '#8c9eff',
        } },
        dark: true,
    },
    
  })
