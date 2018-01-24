<template>
    <div class="projects-cont">
      <div class="proj-links">
        <a href="#0" v-on:click="showproj1">proj 1</a>
        <a href="#0" v-on:click="showproj2">proj 2</a>
        <a href="#0" v-on:click="showproj3">proj 3</a>
        <a href="#0" v-on:click="showproj4">proj 4</a>
      </div>
      <transition name="fade">
      <div class="proj-info" v-show="proj1">
        <div class="proj-imgs">
          <!-- <img class="proj-img" src=".././assets/Hero/8.jpg" alt=""> -->
        </div>
        <!-- proj 1 -->
        <div class="proj-text proj-1">
          <h1 class="proj-title">this project 1</h1>
          <p class="proj-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod ex voluptatem commodi, odio nisi eligendi quibusdam id iste, aspernatur provident sint alias vel dolorem fugiat rerum. Earum, ad eum.</p>
          <div class="proj-tech">
            <img src="https://chippd.github.io/img/techlogos/jquery.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/bootstrap.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/node.png" alt="">
          </div>
        </div>
      </div>
        </transition>
        <!-- proj 2 -->
        <transition name="fade">
        <div class="proj-info" v-show="proj2">
        <div class="proj-imgs">
          <!-- <img class="proj-img" src=".././assets/Hero/8.jpg" alt=""> -->
        </div>
        <div class="proj-text proj-2">
          <h1 class="proj-title">this project 2</h1>
          <p class="proj-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod ex voluptatem commodi, odio nisi eligendi quibusdam id iste, aspernatur provident sint alias vel dolorem fugiat rerum. Earum, ad eum.</p>
          <div class="proj-tech">
            <img src="https://chippd.github.io/img/techlogos/node.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/bootstrap.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/jquery.png" alt="">
          </div>
        </div>
        </div>
          </transition>
        <!-- proj 3 -->
        <transition name="fade">
        <div class="proj-info" v-show="proj3">
        <div class="proj-imgs">
          <!-- <img class="proj-img" src=".././assets/Hero/8.jpg" alt=""> -->
        </div>
        <div class="proj-text proj-2">
          <h1 class="proj-title">this project 3</h1>
          <p class="proj-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod ex voluptatem commodi, odio nisi eligendi quibusdam id iste, aspernatur provident sint alias vel dolorem fugiat rerum. Earum, ad eum.</p>
          <div class="proj-tech">
            <img src="https://chippd.github.io/img/techlogos/node.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/bootstrap.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/jquery.png" alt="">
          </div>
        </div>
        </div>
        </transition>
        <!-- proj 4 -->
        <transition name="fade">
        <div class="proj-info" v-show="proj4" >
        <div class="proj-imgs">
          <!-- <img class="proj-img" src=".././assets/Hero/8.jpg" alt=""> -->
        </div>
        <div class="proj-text proj-2">
          <h1 class="proj-title">this project 4</h1>
          <p class="proj-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod ex voluptatem commodi, odio nisi eligendi quibusdam id iste, aspernatur provident sint alias vel dolorem fugiat rerum. Earum, ad eum.</p>
          <div class="proj-tech">
            <img src="https://chippd.github.io/img/techlogos/node.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/bootstrap.png" alt="">
            <img src="https://chippd.github.io/img/techlogos/jquery.png" alt="">
          </div>
        </div>
      </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Projects',
  components:{
    
  },
  data () {
    return {
      seen : true,
      proj1 : true,
      proj2 : false,
      proj3 : false,
      proj4 : false,
    }
  },
  methods: {
    showproj1: function (event) {
      event.preventDefault();
      this.proj2 = false
      this.proj3 = false
      this.proj4 = false
      this.proj1 = true
    },
    showproj2: function (event) {
      event.preventDefault();
      this.proj1 = false
      this.proj2 = true
      this.proj3 = false
      this.proj4 = false
    },
    showproj3: function (event) {
      event.preventDefault();
      this.proj1 = false
      this.proj2 = false
      this.proj3 = true
      this.proj4 = false
    },
    showproj4: function (event) {
      event.preventDefault();
      this.proj1 = false
      this.proj2 = false
      this.proj3 = false
      this.proj4 = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all .6s;
}
.fade-enter, .fade-leave-to .fade-leave-active {
  opacity: 0;
}
.proj-info{
  background: blue;
  width: 80%;
  height: 60%;
  min-height: 400px;
  margin: 0 auto;
  padding-top: 5%;
  position: absolute;
  /* transition: all 300ms ease-in-out; */
  /* left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; */
}
.proj-imgs{
  height: 80%;
  min-height: 160px;
  margin-left: 3%;
  width: 40%;
  background: rgb(73, 73, 73);
  float: left;
  overflow: hidden;  
  position: relative;
}

.proj-img{
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.proj-text{ 
  margin-left: 5%;
  width: 40%;
  height: 80%;
  float: left;
  transition: all 300ms ease-in-out;
}

.proj-title{
  font-size: 5rem;
  text-align: start;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #ffffff;
}
.proj-desc{
  text-align: start;
  line-height: 3rem;
  color: #d4d4d4;
}

.proj-tech img{
  height: 50px;
}
.proj-tech{
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.767);
}
.proj-links{
  margin-bottom: 30px;
}
a{
  color: #ffffff;
}
a:not(:last-child){
  margin-right: 8%;
}
.projects-cont{
    /* background: red; */
    background-image: url(".././assets/Hero/5.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: top;
    position: relative;

}
</style>