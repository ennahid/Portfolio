<template>
<div class="hero-cont">
    <div class="hero-title">
        <h1 class="head-text">Hello my name is Ennahid</h1>
        <br>
        <!-- <h1 class="head-text">i create awesome stuff</h1> -->
        <!-- <vue-typer text='watermelon' erase-style='backspace'></vue-typer> -->
        <!-- <vue-typer text='watermelon' :erase-on-complete='true'></vue-typer> -->
        <vue-typer :text='["Make Great Stuff","Have Fun","Use Condoms"]' :pre-erase-delay='2000'></vue-typer>
    </div>  
</div>
</template>


<script>
export default {
  name: 'Head',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  components:{
  }
}
</script>

<script src=".././assets/Js/jquery.min.js">

</script>

<style scoped>
.hero-cont{
    margin: 0px;
    height: 100vh;
    min-height: 350px;
    width: 100%;
    background-image: url(".././assets/Hero/8-2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-Y: 40%;
    display : table;
    /* background: red; */
}
.hero-title{
    display: table-cell;
    margin: 0 auto;
    position: relative;
    text-align: center;
    vertical-align: middle;
}
.head-text{
    margin-top: 0px;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-size: 4.5rem;
    line-height: 1.0;
    letter-spacing: -.08rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

</style>

<style>

.vue-typer{
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-size: 4.5rem;
    line-height: 1.0;
    letter-spacing: -.08rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow:2px 1px 1px 5px rgba(0, 0, 0, 0.767);
}

span .typed{
 color: #fff !important;   
}

.vue-typer .custom.caret {
  background-color: #FFF;
}
</style>

