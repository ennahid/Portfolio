<template>
    <div class="my-timeline">
        <h2 class="section-heading">Timeline</h2>
        <div class="line"></div>
        <div class="bubble-one"></div>
        <div class="box box-one">
            <div class="box-title">
                <h5>Born</h5>
                <p>1995/08/25</p>
                <div class="more-info-bubble" style="display:none">
                    <p>Ainsebaa Casablanca Morocco</p>
                </div>
            </div>

        </div>
        <div class="bubble-two"></div>
        <div class="box box-two">
            <div class="box-title">
                <h5>Bac</h5>
                <p>2015</p>
                <div class="more-info-bubble" style="display:none">
                    <p><b>Lycée</b> Baroudi</p>
                </div>
            </div>
        </div>
        <div class="bubble-three"></div>
        <div class="box box-three">
            <div class="box-title">
                <h5>Dut</h5>
                <p>2015/2017</p>
                <div class="more-info-bubble" style="display:none">
                    <p><b>ISGI:</b> Technicien Spécialisé en Développement Informatique</p>
                </div>
            </div>
        </div>
        <div class="bubble-four"></div>
        <div class="box box-four">
            <div class="box-title">
                <h5>IT-Learing</h5>
                <p>2017</p>
                <div class="more-info-bubble" style="display:none">
                    <p><b>Liam:</b> Licence d'Université Ingénierie des Applications Mobiles </p>
                </div>
            </div>
        </div>
        <!-- <div class="bubble-five"></div>
        <div class="box box-five"></div> -->
        <!-- <div class="bubble-six"></div>
        <div class="box box-six"></div> -->
    </div>
</template>

<script>
export default {
  name: 'Timeline',
  data () {
    return {
      
    }
  },
}
</script>

<style scoped>
.my-timeline{
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(".././assets/Hero/9-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-Y: -80%;
    background-position-X: 500px;
    display : table;
    /* background: red; */
}
.line{
    position: absolute;
    height: 3px;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2000;
    width: 85%;
    border-radius: 100%;
    background-color: #fff;
    z-index: 5;
}
.bubble-one,.bubble-two,.bubble-three,.bubble-four,.bubble-five,.bubble-six{
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #fff;
    top: 40%;
    left: 10%;
    transform: translate(-50%,-50%);
    z-index: 10;
}

.box{
    position: absolute;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: #fff;
    cursor: pointer;
    top: 49%;
    left: 10%;
    transform: translate(-50%,-50%);
    transition: 500ms all ease-in-out;
    z-index: 20;
}
.box * {
    color: #000;
    font-family: 'Assistant', sans-serif;
    letter-spacing: 0.1rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
}
.box:hover{
    width: 12rem;
    height: 12rem;
    border-radius: 0px;
}

.box-title h5,.box-title p{
    margin: 12px 0 0 0;
}
.bubble-two{
    left: 35%;
}
.box-two{
    left: 35%;
    top: 31%;
}
.bubble-three{
    left: 60%;
}
.box-three{
    left: 60%;
}
.bubble-four{
    left: 92%;
}
.box-four{
    top: 31%;
    left: 92%;
}
/* .bubble-five{
    left: 80%;
}
.box-five{
    left: 80%;
}
.bubble-six{
    left: 92%;
}
.box-six{
    left: 92%;
} */

</style>

