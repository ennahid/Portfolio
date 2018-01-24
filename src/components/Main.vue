<template>
  <div id="fullpage" class="Main">
    <my-header class="section"></my-header>  
    <my-timeline class="section"></my-timeline>
    <my-projects class="section"></my-projects> 
    <!-- <my-expertise class="section"></my-expertise> -->
  </div>
</template>

<script>
import Head from '@/components/Head.vue';
import Projects from '@/components/Projects.vue';
import Timeline from '@/components/Timeline.vue';
import Expertise from '@/components/Expertise.vue';
export default {
  name: 'Main',
  components:{
    'my-header' : Head,
    'my-projects' : Projects,
    'my-timeline' : Timeline,
    'my-expertise' : Expertise
  },
  data () {
    return {
      
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
