<template>
  <div class='main-div'>
    <Navbar />
    <b-container class='bg-success h-100' fluid>
      <b-row align-v="stretch" class="h-100">
        <b-col cols="3" class="bg-primary">
          <Sidebar />
        </b-col>
        <b-col cols="9" class="bg-danger">
          <AppMain />
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import AppMain from "components/AppMain";
export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.main-div{
  min-height: 100%;
  height:100%;
}
</style>