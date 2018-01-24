<template>
  <div id="projects">
    <h2 id="title-proj">Projects</h2>
  <el-carousel :interval="3000" type="card" indicator-position="none" height="280px">
    <el-carousel-item>
      <div class="car-cont">
        <div class="cont-img img-1">
        </div>
        <div class="cont-info">
          <h2>M9 Events</h2>
          <p>static website for a communication agency based in Rabat, with multiple pages and contact form and google map location</p>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="car-cont">
        <div class="cont-img img-2">

        </div>
        <div class="cont-info">
          <h2>Hikmatex</h2>
          <p>full stack website for textile selling company to manage orders and clients</p>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="car-cont">
        <div class="cont-img img-3">
          
        </div>
        <div class="cont-info">
          <h2>Sms Service</h2>
          <p>"personal project" send sms from a web app to any number across the world with just one single click.</p>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="car-cont">
        <div class="cont-img img-4">

        </div>
        <div class="cont-info">
          <h2>Ecole Albert</h2>
          <p>school management web app to add/delete students/teachers and classes/groupes with parents access to childrens infos and grades.</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>


<script>
export default {
  name: 'Projects',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Heebo:900');


#title-proj{
  color: #ffffffff;
  font-family: 'Heebo', sans-serif;
  font-size: 5rem;
  /* text-transform: uppercase; */
  transform: translateY(-200%);
  letter-spacing: 0.2rem;
}
#projects{
    /* background: red; */
    background-image: url(".././assets/Hero/5.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: top;
    position: relative;
}
  .car-cont{
    height: 100%;
    /* background: rgb(85, 85, 85); */
    padding: 5%;
  }
  .cont-img{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 70%;
    width: 45%;
    float: left;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background: rgb(85, 85, 85); */
    overflow: hidden;
  }

  .img-1{
    background-image: url('.././assets/Projects/1.png');
  }
  .img-2{
    background-image: url('.././assets/Projects/2.png');
    background-position: left;
  }
  .img-3{
    background-image: url('.././assets/Projects/3.png');
  }
  .img-4{
    background-image: url('.././assets/Projects/4.png');
  }
  .cont-img img{
    height: 100%;
  }
  .cont-info{
    margin-left: 50%;
    margin-top: 2%;
    width: 50%;
    /* background: green; */
  }
  .cont-info *{
    text-align: start;
    margin-left: 2%;
  }
  .cont-info h2{
  font-size: 3rem;
  text-align: start;
  /* text-transform: uppercase; */
  margin-bottom: 15px;
  color: #ffffff;
  text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  }
  
</style>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

.cont-info p{
    text-align: start;
    font-family: 'Open Sans', sans-serif;
    color: #ebebeb;
    line-height: 2.3rem; 
    letter-spacing: .05rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    }
.el-carousel__item--card.is-in-stage.is-active{
  opacity: 1;

}
.el-carousel__item--card.is-in-stage{
  opacity: .25;
  -webkit-transition: all 800ms ease-in-out;
  -moz-transition: all 800ms ease-in-out;
  transition: all 800ms ease-in-out;
}
.el-carousel__item--card{
   -webkit-transition: all 800ms ease-in-out;
  -moz-transition: all 800ms ease-in-out;
  transition: all 800ms ease-in-out;
  opacity: 0;
}

  .el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap
  {
    background: initial;
    opacity: 0;
  }

   /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } */
</style>
