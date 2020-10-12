
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' 
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
    theme: {
    themes: {
      light: {
        // mainBlue: '#25274D', 
        // secondBlue: "#454866", 
        // mainGrey: "#AAABB8", 
        // mainLightBlue: "#2E9CCA",
        // secondLightBlue: "#29648A"
        mainWhite: '#FEFFFF',
        secondWhite: "#DEF2F1",
        mainGreen: '#3AAFA9',
        secondGreen: "#2B7A78",
        mainBlack: "#17252A"
      },
    },
  },
    
});
