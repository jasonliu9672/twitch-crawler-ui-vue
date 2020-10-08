<template>
    <div>
  <div class="bg-success">
    <b-button v-b-toggle.sidebar-1 ve>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" width="350px" shadow visible> 
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
    </div>
</template>
<style scoped>
.router-link-active{
    opacity :1 ;
    visibility: visible;
    border-left-color: #4DB6AC;
    transition: all 0.25s;
}
</style>