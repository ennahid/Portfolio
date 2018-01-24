<template>
<div id="my-timeline">
	<link rel="stylesheet" href="./static/horizontal-timeline/css/reset.css">
	<link rel="stylesheet" href="./static/horizontal-timeline/css/style.css">
	<section class="cd-horizontal-timeline">
		<!-- <h2 class="section-heading">Timeline</h2> -->
		<div class="timeline">
			<div class="events-wrapper">
				<div class="events">
					<ol>
						<li><a href="#0" data-date="16/01/2015" class="selected">1995</a></li>
						<li><a href="#0" data-date="25/03/2015">2015</a></li>
						<li><a href="#0" data-date="10/04/2015">2017</a></li>
						<li><a href="#0" data-date="20/04/2015">2018</a></li>
					</ol>
					<span class="filling-line" aria-hidden="true" style="transform: scaleX(0.172386);"></span>
				</div> <!-- .events -->
			</div> <!-- .events-wrapper -->
				
			<ul class="cd-timeline-navigation">
				<li><a href="#0" class="prev inactive">Prev</a></li>
				<li><a href="#0" class="next">Next</a></li>
			</ul> <!-- .cd-timeline-navigation -->
		</div> <!-- .timeline -->

		<div class="events-content">
			<ol>
				<li class="selected" data-date="16/01/2015">
					<h2 class="event-title">Born</h2>
					<em>1995/08/25</em>
					<p>	
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.

					</p>
				</li>

				<li data-date="25/03/2015">
					<h2 class="event-title">Bacalaureat</h2>
					<em>February 28th, 2014</em>
					<p>	
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
					</p>
				</li>

				<li data-date="10/04/2015">
					<h2 class="event-title">TSDI</h2>
					<em>Institut Specialise de Développement Informatique</em>
					<p>	
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
					</p>
				</li>

				<li data-date="20/04/2015">
					<h2 class="event-title">LIAM</h2>
					<em>Licence d'Université Ingénierie des Applications Mobiles</em>
					<p>	
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
					</p>
				</li>
			</ol>
		</div> <!-- .events-content -->
</section>
  
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

@import url('https://fonts.googleapis.com/css?family=Quicksand:500');

 #my-timeline{
	background-image: url(".././assets/Hero/2.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    background-position-Y: 50%;
}
/* section{
    height: 100%;
} */
p{
	font-family: 'Quicksand', sans-serif;
}
h2,p,em{
	text-align: start;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
</style>



