<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
   methods: {
        
   }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
  background-color: black;
}
html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
     background: transparent;  /*optional: just make scrollbar invisible*/
}
.section-heading{
    margin-top: 100px;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-size: 3.5rem;
    line-height: 1.0;
    letter-spacing: 0.2rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

</style>
