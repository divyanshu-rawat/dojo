<template>
  <div id="app" class="container">
    <!-- <Dojo appName="Dojo Madness GmbH" :primary = "primary" :secondary: = "secondary"/> -->
    <Dojo appName="Dojo Madness GmbH"/>
  </div>
</template>

<script>
import Dojo from './components/dojo.vue'
import primary from "./data_set/primary"
import secondary from "./data_set/secondary"


export default {
  name: 'app',
  components: {
    Dojo
  },

  data(){
    return{
      // primary: primary,
      // secondary : secondary
    }
  },

  mounted(){
    // eslint-disable-next-line
    // console.log('Store Created!')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialias;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
