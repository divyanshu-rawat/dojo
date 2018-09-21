<template>
  <div class="hello">
    <h2>{{appName}}</h2>

<div class="row">
    <div class="card col-lg-4"  v-for = "data in primary" :key="primary.indexOf(data)">
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

<div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">{{post.championship}}</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <p class="card-text">{{post.team1}}</p>
          <p class="card-text">{{post.team2}}</p>
          <p class="card-text">{{post.sport}}</p>
          <p class="card-text">{{post.start_time |  formatDate}}</p>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
</div>
  



  </div>
</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import moment from 'moment'


export default {
  name: 'Dojo',
  props: {
    appName: String
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
        console.log('called',post)
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
