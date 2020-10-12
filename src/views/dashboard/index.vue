<template>
  <v-app>
    <AlertMessage />
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import AlertMessage from "components/AlertMessage";
export default {
  components: {
    Sidebar,
    Navbar,
    AlertMessage
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.main-div {
  min-height: 100%;
  height: 100%;
}
</style>