<template>
  <div>
    <!-- <nav class="navbar navbar-custom navbar-expand-sm navbar-dark shadow">
            <b-icon-globe class='ml-1 mt-2 h5 text-white'></b-icon-globe>
            <a class="ml-2 navbar-brand navbar-brand__logo " href="#">NSLAB</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
            </div>
        </nav> -->
    <b-navbar toggleable="sm" class="navbar-custom" type="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-icon-globe class="ml-1 mt-2 h5 text-white"></b-icon-globe>
      <b-navbar-brand class="ml-2">NSLAB</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav> </b-collapse>
      <b-navbar-nav class='ml-auto text-white'> <b-button size="sm">Log Out</b-button> </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/main.scss";
@import "assets/font.scss";
.navbar-custom {
  background-color: $twitchBlack;
  .navbar-brand__logo {
    font-family: SecularOneerererre;
    font-size: font(5);
  }
}
</style>