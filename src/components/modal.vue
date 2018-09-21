
<template>

<div class="modal-wrapper">
 <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h5 class="modal-title">Championship: {{post.championship}}</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <p class="card-text"><b>Team 1 : </b> {{post.team1}} <i class="fa fa-pencil-square-o fa-lg" /> </p>
          <p class="card-text"><b>Team 2 : </b> {{post.team2}} <i class="fa fa-pencil-square-o fa-lg" /> </p>
          <p class="card-text"><b>Sport  : </b> {{post.sport}} <i class="fa fa-pencil-square-o fa-lg" /> </p>
          <p class="card-text"><b>Date   : </b> {{post.start_time |  formatDate}} <i class="fa fa-pencil-square-o fa-lg" /> </p>
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

import moment from 'moment'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'

export default{

	name: 'Modal',
	props: {
    	post: Object
    },
    data(){
      return{
        edit: false
      }
    },
    filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format('L');
        return date
    }
 },

  updated(){
    // console.log('Updated',this.post);
  },

  created(){
    // console.log('Created',this.unique);
  }
}

</script>

<style scoped>
  
.fa.fa-pencil-square-o{
  cursor: pointer !important;
}

</style>