<template>
  <div>
        <div class="card-body">
          <h5 class="card-title">Championship : {{data.championship}}</h5>
          <p class="card-text"><b>Team 1 : </b> {{data.team1}}</p>
          <p class="card-text"><b>Team 2 : </b> {{data.team2}}</p>
          <p class="card-text"><b>Sport  : </b> {{data.sport}}</p>
          <p class="card-text"><b>Date (MM/DD/YY)   : </b> {{data.start_time |  formatDate}}</p>
        </div>
  </div>

</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'

export default {
  name: 'List',
  props: {
    data : Object,
    name : String,
    unique  : Number
  },
  filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format("MM/DD/YYYY");
        return date
    }
  },
  created(){
    // console.log('Created',this.data);
  }
}
</script>
