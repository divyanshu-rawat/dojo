<template>
  <div class="hello">
    <h2>{{appName}}</h2>

    <div class="row">

      <div class="col-lg-5">
         <h4>Primary Data</h4>
        <div class="card col-lg-12"  v-for = "data in primary" :key="primary.indexOf(data)">
           
            <List :data = 'data'/>
        </div>
      </div>
        <div class="col-lg-5 offset-lg-2">
          <h4>Secondary Data</h4>
            <div class="card col-lg-12"  v-for = "data in secondary" :key="secondary.indexOf(data)">
                
                <List :data = 'data'/>
            </div>
         </div>
      
       </div>
    
    </div>
  
  </div>
</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import List from './list.vue'
import moment from 'moment'



export default {
  name: 'Dojo',
  props: {
    appName: String
  },
  components: {
    List
  },
  computed:{...mapState(['primary','secondary'])},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.card{
  margin: 5px !important;
}

</style>
