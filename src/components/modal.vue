
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

<!-- toggle_team_one() -->
      <div v-if = "!edit_team_one" class="_MARGIN">
        <p class="card-text"><b>Team 1 : </b> {{post.team1}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_team_one">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>



      </div>

      <div v-if = "edit_team_one" class="_MARGIN">
        <b>Team 1 :</b> <input class="form-control col-lg-5" :value = "post.team1" @input = "getVal_team_one"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_team_one">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_team_one">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>

      </div>

<!-- toggle_team_two() -->
       <div v-if = "!edit_team_two" class="_MARGIN">
        <p class="card-text"><b>Team 2 : </b> {{post.team2}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_team_two">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_team_two" class="_MARGIN">
        <b>Team 2 :</b> <input class="form-control col-lg-5" :value = "post.team2" @input = "getVal_team_two"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_team_two">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_team_two">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>


      </div>


<!--  toggle_date()-->

    
      <div v-if = "!edit_sport" class="_MARGIN">
        <p class="card-text"><b>Sport : </b> {{post.sport}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_sport">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_sport" class="_MARGIN">
        <b>Sport :</b> <input class="form-control col-lg-5" @input = "getVal_team_sport"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_sport">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_sport">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>

      </div>


<!-- Toggle Sport -->

      <div v-if = "!edit_date" class="_MARGIN">
        <p class="card-text"><b>Date : </b> {{post.start_time |  formatDate}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_date">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_date" class="_MARGIN">
        <b>Date :</b> <input class="form-control col-lg-5" :value = "post.start_time |  formatDate" @input = "getVal_team_date"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_date">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_date">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>
      </div>


<!--  -->
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
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
import $ from 'jquery'
import { mapState } from 'vuex'
import _ from 'lodash';

export default{

	name: 'Modal',
	props:{
    post : Object
  },
  
  data: function(){
      return{
        edit_team_one: false,
        edit_team_two: false,
        edit_date: false,
        edit_sport: false,
        edit_championship: false,

        set_team_one_value: null,
        set_team_two_value: null,
        set_championship_value: null,
        set_date_value: null,
        set_sport_value: null,
        set_championship_value: null
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

    updateModel(){},
    doNotUpdate(){},

// Team One
    getVal_team_one($event){
      this.set_team_one_value = $event.target.value
    },

    set_team_one(){
      this.post.team1 = this.set_team_one_value
      this.edit_team_one = !this.edit_team_one
    },
    unset_team_one(){
      this.edit_team_one = !this.edit_team_one
    },

// Team Two

    getVal_team_two($event){
        this.set_team_two_value = $event.target.value
    },

    set_team_two(){
       this.post.team2 = this.set_team_two_value
       this.edit_team_two = !this.edit_team_two
    },

    unset_team_two(){
      this.edit_team_two = !this.edit_team_two
    },

// Date

    getVal_team_date($event){
       this.set_date_value = $event.target.value
    },

    set_date(){
      this.post.start_time = this.set_date_value
      this.edit_date = !this.edit_date
    },

    unset_date(){
      this.edit_date = !this.edit_date
    },


// Sport

    getVal_team_sport($event){
      this.set_sport_value = $event.target.value
    },
    set_sport(){
      this.post.sport = this.set_sport_value
      this.edit_sport = !this.edit_sport
    },
    unset_sport(){
      this.edit_sport = !this.edit_sport
    }
  },

  updated(){},
  beforeUpdate(){},
  mounted(){},
  watch:{},
}

</script>

<style scoped>
  
.fa.fa-pencil-square-o{
  cursor: pointer !important;
}

._MARGIN{
  margin: 10px !important; 
}

.btn.btn-primary{
  background-color: #e5e5e5 !important;
  border: 1px solid #e5e5e5 !important;
  border-radius: 0.5rem !important;
  margin-right: 5px;
  margin-left: 5px;
  color: black;
}

.card-text{
    display: inline-block !important;
    margin-right: 25px !important;
}

.form-control{
  display: inline-block;
}

</style>