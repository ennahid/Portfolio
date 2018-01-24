<template>
<div class="hero-cont">
    <div class="mouse">
          <div class="mouse_wheel"></div>
          <div class="mouse_arrow"></div>
    </div>
    <div class="hero-title">
        <h1 class="head-text">Hi, i'm Ennahid. I love to</h1>
        <br>
        <!-- <h1 class="head-text">i create awesome stuff</h1> -->
        <!-- <vue-typer text='watermelon' erase-style='backspace'></vue-typer> -->
        <!-- <vue-typer text='watermelon' :erase-on-complete='true'></vue-typer> -->
        <vue-typer class="head-text-2" :text='["Build websites.","Learn new stuff.","Have fun doing it."]' :pre-erase-delay='2000'></vue-typer>
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



<style scoped>
@import url('https://fonts.googleapis.com/css?family=Assistant');


.hero-cont{
    margin: 0px;
    height: 100vh;
    min-height: 350px;
    width: 100%;
    background-image: url(".././assets/Hero/8-2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-Y: 40%;
    display : table;
    /* background: red; */
}
.hero-title{
    display: block;
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
    font-size: 6.4rem;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -.009rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}


/*-------------- scroll mouse --------------*/
@keyframes scrollGradient {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes pointDown {
  0% {
    transform: translateY(0);
  }
  50%, 70% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
.mouse {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 36px;
  width: 24px;
  /* cursor: pointer; */
  z-index: 5;
}
.mouse::before, .mouse::after{
  box-shadow: 1px 1px 1px black;
}

.mouse:hover .mouse_arrow {
  animation-play-state: running;
}

.mouse::before, .mouse::after {
  content: "";
  display: block;
  height: 50%;
  width: 100%;
  border: 2px solid #fff;
  box-sizing: border-box;
}
.mouse::before {
  border-bottom: 0;
  border-radius: 50% 50% 0 0;
}
.mouse::after {
  border-top: 0;
  border-radius: 0 0 50% 50%;
}
.mouse_wheel {
  height: 6px;
  width: 3px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
}
.mouse_wheel::before {
  content: "";
  display: block;
  background-image: linear-gradient(to top, #fff, #333 60%);
  height: 100%;
  width: 100%;
  animation: 1s scrollGradient ease infinite;
}
.mouse_arrow {
  position: absolute;
  top: 120%;
  left: calc(50% - 4px);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
  animation: pointDown 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  /* animation-play-state: paused; */
  animation-play-state: running;
}
</style>

<style>

.vue-typer{
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-size: 6.4rem;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -.009rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

span .typed{
 color: #fff !important;   
}

.vue-typer .custom.caret {
  background-color: #FFF;
}
</style>

