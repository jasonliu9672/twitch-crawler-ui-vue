<template>
  <v-navigation-drawer
    app
    v-model="isCollapse"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-toolbar flat class="align-center" dense>
      <v-spacer />
      <v-toolbar-title>
        <!-- <span class="font-weight-light logo">EECS</span> -->
        
        <v-btn block dark to="/dashboard" depressed :ripple="false" class="no-background-hover">
          <span class="font-weight-700 custom-title logo"> NSLAB</span></v-btn
        >
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-btn text block large to="/dashboard/crawler"
      ><v-icon left>mdi-twitch</v-icon
      ><span class="ml-3 menu__item">Crawler</span></v-btn
    >
    <v-btn text block large to="/dashboard/database"
      ><v-icon left>mdi-database</v-icon
      ><span class="ml-3 menu__item">Database</span></v-btn
    >
    <v-btn text block large to="/dashboard/accounts"
      ><v-icon left>mdi-account</v-icon
      ><span class="ml-3 menu__item">Accounts</span></v-btn
    >
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      console.log(!this.sidebar.opened);
      return !this.sidebar.opened;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/main.scss";
.logo {
  font-size: font(4);
}
.menu__item {
  font-size: font(1);
}
.no-background-hover::before {
   background-color: transparent !important;
    text-decoration: none !important;
}
</style>