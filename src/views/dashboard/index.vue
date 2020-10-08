<template>
  <div class='main-div'>
    <Navbar />
    <b-container class='bg-success h-100' fluid>
      <b-row align-v="stretch" class="h-100">
        <b-col cols="3" class="bg-primary">
          <Sidebar />
        </b-col>
        <b-col class="bg-warning"></b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
export default {
  components: {
    Sidebar,
    Navbar
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