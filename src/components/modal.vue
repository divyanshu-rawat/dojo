
<template>
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
</template>

<script>
import moment from 'moment'

export default{

	name: 'Modal',
	props: {
    	post: Object
    },
    filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format('L');
        return date
    }
 }
}

</script>