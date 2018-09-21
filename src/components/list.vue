<template>
  <div>
      
        <div class="card-body">
          <h5 class="card-title">Championship : {{data.championship}}</h5>
          <p class="card-text">Team 1 : {{data.team1}}</p>
          <p class="card-text">Team 2 : {{data.team2}}</p>
          <p class="card-text">Sport  : {{data.sport}}</p>
          <p class="card-text">Date   : {{data.start_time |  formatDate}}</p>
           <button type="button" class="btn btn-primary" @click="viewPost(data)" data-toggle="modal" data-target="#myModal">
            See Focused View
          </button>
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
  name: 'List',
  props: {
    data: Object,
    name : String
  },

  components: {
    Modal
  },

  data(){
    return{
      post:{}
    }
  },
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
