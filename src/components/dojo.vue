<template>
  <div class="hello">
    <h2>{{appName}}</h2>
    <h4>Primary Data</h4>

    <div class="row">
      <div class="col-lg-4">
        <div class="card col-lg-12"  v-for = "data in primary" :key="primary.indexOf(data)">
            <div class="card-body">
              <h4 class="card-title">{{data.championship}}</h4>
              <p class="card-text">{{data.team1}}</p>
              <p class="card-text">{{data.team2}}</p>
              <p class="card-text">{{data.sport}}</p>
              <p class="card-text">{{data.start_time |  formatDate}}</p>
               <button type="button" class="btn btn-primary" @click="viewPost(data)" data-toggle="modal" data-target="#myModal">
                See Focused View
              </button>
            </div>
        </div>
       </div>
    </div>
  
    <Modal :post = 'post'/>

  </div>
</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Modal from './modal.vue'
import moment from 'moment'


export default {
  name: 'Dojo',
  props: {
    appName: String
  },

  components: {
    Modal
  },

  data(){
    return{
      post:{}
    }
  },
  computed:{...mapState(['primary','secondary'])},
  filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format('L');
        return date
    }
 },
  methods:{
      viewPost(post){
          this.post = post
      }
   }
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
