<template>
  <div>
        <div class="card-body">
          <div class="alert alert-success" v-if = "match">
            <strong>Matching in Secondary!</strong> <a href="#" class="alert-link"></a>.
          </div>

          <div class="alert alert-danger" v-if = "!match">
            <strong>Not Matching Anything in Secondary!</strong> <a href="#" class="alert-link"></a>.
          </div>

          <h5 class="card-title">Championship : {{data.championship}}</h5>
          <p class="card-text"><b>Team 1 : </b> {{data.team1}}</p>
          <p class="card-text"><b>Team 2 : </b> {{data.team2}}</p>
          <p class="card-text"><b>Sport  : </b> {{data.sport}}</p>
          <p class="card-text"><b>Date (TimeStamp)   : </b> {{data.start_time}}</p>
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
    data  : Object,
  },
  data(){
    return{
          match : true
    }
  },
  filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format("MM/DD/YYYY");
        return date
    }
  },
  created(){},
  
  computed : {
    ...mapState(['secondary'])
  },

  watch: {
    match : function(){}
  }
,
  methods:{
    check_match(){

        let data_set = this.secondary;
        let _x = this.data;
        let match_obj;

        for(let data in data_set){
            if(_x.team1 == data_set[data].team1){
              match_obj =  data_set[data] 
              break; 
            }
        }

        if(match_obj != undefined){
          if(_x.team2 == match_obj.team2 &&  _x.sport == match_obj.sport && _x.championship == match_obj.championship && _x.start_time == match_obj.start_time && _x.championship == match_obj.championship ){
              // console.log('Found', match_obj);
              this.match = true
              return
          }
          else{
              // console.log('Something Matched');
              this.match = false;
              return
           }
      }
      else{
            // console.log('Nothing matched')
            this.match = false
            return
      }
    }
  },

  mounted(){ this.check_match(); console.log('called once')},
  updated(){this.check_match() }
}
</script>

<!--  -->