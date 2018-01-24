<template>
  <div id="app">
    <!-- <div class="menu-tog">
      <a v-on:click="show" class="menu-toggle" href="">Menu</a>
    </div> -->
      <div v-on:click="show" v-show="!open" class="menu-icon">
					<span class="top"></span>
					<span class="bottom"></span>
				</div>
      <div class="menu" v-show="open">
        <!-- <div class="menu-tog">
        <a v-on:click="hide" class="menu-toggle" id="close" href="">Close</a>
      </div> -->
      <div class="menu-icon close" v-show="btnc">
				<a v-on:click="hide" class="menu-toggle" id="close" href="">Close</a>
				</div>
        <div class="contact-info">
          <div class="social-media fb">
            <a target="_blank" href="https://www.facebook.com/Ennahid">
              <img class="icon" src="static/Icons/fb.png" alt="">
              <h2 class="link-text">Facebook<span class="link-username">/Ennahid</span></h2>
            </a>
          </div>
          <div class="social-media in">
            <a target="_blank" href="https://www.linkedin.com/in/abdelghafour-ennahid/">
              <img class="icon" src="static/Icons/in.png" alt="">
              <h2 class="link-text">LinkedIn<span class="link-username">/Ennahid</span></h2>
          </a>
          </div>
        </div>
      </div>
    <transition name="fade">
      <div id="loading" v-show="preload">
      <div id="loading-center">
      <div id="loading-center-absolute">
      <div class="object" id="object_one"></div>
      <div class="object" id="object_two"></div>
      <div class="object" id="object_three"></div>
      <div class="object" id="object_four"></div>

      </div>
      </div>
      
      </div>
      <!-- <div class="loading" v-show="preload">
        
      </div> -->
    </transition>
    <router-view/>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'app',
  data() {
    return {
        preload: false,
        open: false,
        btnc: false
    }
  },
  mounted() {
    // setTimeout(()=>{ this.preload = false; }, 4000)
  },
  methods: {
    show: function (event) {
      this.open = true;
      event.preventDefault();
      setTimeout(()=>{ this.btnc = true; }, 200);
    },
    hide: function (event) {
      this.open= false;
      this.btnc = false;
      event.preventDefault()
    }
  }
}

  // Vue.nextTick(function () {
  //   this.done = true;
  // })
</script>
<style>

@import url("https://fonts.googleapis.com/css?family=Heebo:400,700");

.contact-info h2{
  opacity: 0;
  color: #fff;
  color: #cecece;
  /* animation: show_con 800ms forwards 600ms; */
}
.contact-info *{
  opacity: 0;;
  animation: show_con 800ms forwards 500ms;
}

@keyframes show_con {
  0%{
    opacity: 0;
    transform: translateY(-10px)
  }
  100%{
    opacity: 1;
  }
}
.menu-icon {
  position: absolute;
  top: 65px;
  left: 70px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 100;
  border-radius: 50%;
  padding-left: 10px;
  padding-top: 15px;
}
.menu-icon .top {
  width: 20px;
  height: 2px;
  background: #fff;
  display: block;
  margin-bottom: 4px;
  transition: width ease 0.2s;
}
.menu-icon .bottom {
  width: 10px;
  height: 2px;
  background: #fff;
  display: block;
  transition: width ease 0.2s;
}
.bottom, .top{
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.menu-icon:hover .top{
	width: 10px;
}
.menu-icon:hover .bottom{
	width: 20px;
}
.menu{
  background: #000;
  height: 100vh;
  width: 100%;
  opacity: 1;
  position: absolute;
  z-index: 7;
  animation: show 500ms alternate;
}
.menu-tog{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 20px;
}
.menu-toggle{
  color: #fff;
}
.close{
  animation: showClose 600ms;
  z-index: 15;
  transition: letter-spacing 300ms ease-in-out;
}

.close:hover{
  transition: all 300ms ease-in-out;
  letter-spacing: 0.2ch;
}

.contact-info{
  position: absolute;
  right: 0;
  top: 0;
  padding: 20%;
}
.social-media{
  width: 250px;
  height: 50px;
  /* background: red; */
  margin-bottom: 20px;
}
.icon{
  float: left;
  height: 50px;
  margin-right: 10px;
}
.link-text{
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-family: 'Heebo', sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  display: inline-block;
  float: left;
  margin-top: calc(25px - 8px);
  /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);   */
}
.link-username{
  color: #fff;
  color: #cecece;
  opacity: 0;
  display: inline-block;
  /* transition: all 500s ease-in-out; */
  animation: rev-out 500ms forwards; 
  font-family: 'Heebo', sans-serif;
  letter-spacing: 0.08rem;
  font-weight: 400;
}
.fb:hover .link-username{
  animation: rev 500ms forwards;
}
.in:hover .link-username{
  animation: rev 500ms forwards;
}

@keyframes rev {
  0%{
    transform: translateX(-20px);
    }
  100%{
    /* transform: translateX(-20px); */
    opacity: 1;
  }
}
@keyframes rev-out {
  0%{
    /* transform: translateX(-20px); */
    opacity: 1;
    }
  100%{
    transform: translateX(-20px);
    opacity: 0;
  }
}

@keyframes show {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes showClose {
  0%{
    transform: translateX(-20px);
    opacity: 0;
  }
  100%{
    opacity: 1;
    
  }
}






/* 
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  
}

.fade-enter, .fade-leave-to {
  opacity: 0;
} */




.loading{
  background: black;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 5000;
}
.loading h3{
  margin-top: calc(50vh - 65px);
  text-align: center;
  display: inline-block;
  color: #fff;
  font-family: 'Assistant', sans-serif;
  font-size: 6.5rem;
  font-weight: bolder;
  line-height: 1.0;
  letter-spacing: 0.2rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
    margin-top: 0px;
    margin-bottom: 50px;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-size: 6.5rem;    font-weight: bolder;
    color: rgb(54, 52, 73);
    line-height: 1.0;
    letter-spacing: 0.2rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9); */
}




/* ---- Preload Animation ---------*/

#loading{
	background-color: #000000;
	height: 100%;
	width: 100%;
	position: fixed;
	z-index: 500;
	margin-top: 0px;
	top: 0px;
}
#loading-center{
	width: 100%;
	height: 100%;
	position: relative;
}
#loading-center-absolute {
	position: absolute;
	left: 50%;
	top: 50%;
	height: 150px;
	width: 120px;
	margin-top: -75px;
  margin-left: -60px;
  padding: 11px;
}
.object{
	    width: 10px;
    height: 10px;
    background-color: #ffffffad;
    float: left;
    margin-right: 10px;
	margin-top: 65px;
	-moz-border-radius: 50% 50% 50% 50%;
	-webkit-border-radius: 50% 50% 50% 50%;
	border-radius: 50% 50% 50% 50%;
}

#object_one {	
	-webkit-animation: object_one 1.5s infinite;
	animation: object_one 1.5s infinite;
	}
#object_two {
	-webkit-animation: object_two 1.5s infinite;
	animation: object_two 1.5s infinite;
	-webkit-animation-delay: 0.25s; 
    animation-delay: 0.25s;
	}
#object_three {
    -webkit-animation: object_three 1.5s infinite;
	animation: object_three 1.5s infinite;
	-webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
	
  }
  #object_four {
    -webkit-animation: object_four 1.5s infinite;
	animation: object_four 1.5s infinite;
	-webkit-animation-delay: 0.5s;
    animation-delay: 0.75s;
	
	}

	



@-webkit-keyframes object_one {
75% { -webkit-transform: scale(0); }
}

@keyframes object_one {

  75% { 
    transform: scale(0);
    -webkit-transform: scale(0);
  }

}





@-webkit-keyframes object_two {
 

  75% { -webkit-transform: scale(0); }


}

@keyframes object_two {
  75% { 
    transform: scale(0);
    -webkit-transform:  scale(0);
  }

}

@-webkit-keyframes object_three {

  75% { -webkit-transform: scale(0); }

}

@keyframes object_three {

  75% { 
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  
}

@-webkit-keyframes object_four {

  75% { -webkit-transform: scale(0); }

}

@keyframes object_four {

  75% { 
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  
}


/* --------- scroll cta ------------*/


</style>
