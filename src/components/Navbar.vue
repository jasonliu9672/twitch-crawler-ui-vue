<template>
  <nav>
    <v-app-bar app light color="mainWhite">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="toggleSideBar"
      ></v-app-bar-nav-icon>
      <div class="text-uppercase">
        <span class="font-weight-700 custom-title">
          {{ this.$route.name }}</span
        >
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        <span>Log Out</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    logout() {
      this.$store
        .dispatch("user/logout")
        .then( () => {
          console.log( this.$store.getters.token)
          this.$router.push("/login")})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/main.scss";
@import "assets/font.scss";
.custom-title {
  font-size: font(2);
}
</style>