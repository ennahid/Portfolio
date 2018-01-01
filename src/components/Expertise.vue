<template>
  <div class="my-expertise">
      <h2 class="section-heading">My Expertise</h2>
  </div>
</template>

<script>
export default {
  name: 'Expertise',
  ready: function(){
    // activate light gallery plugin
    $('h2').append('hhh');
  }
}
</script>

<style scoped>
.my-expertise{
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(".././assets/Hero/10-2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-Y: 35%;
    /* background-position-X: 500px; */
    display : table;
    /* background: red; */
}
</style>
