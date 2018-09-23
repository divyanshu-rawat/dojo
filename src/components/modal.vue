
<template>

<div class="modal-wrapper">
 <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
      <!-- Modal Header -->
      <div class="modal-header">

        <div v-if = "!edit_championship" class="_MARGIN">
        <p class="card-text"><b>Championship :</b>{{post.championship}}</p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_championship">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_championship" class="_MARGIN">
        <b>Championship :</b> <input class="form-control col-lg-5" :value = "post.championship" @input = "getVal_championship"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_championship">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_championship">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>

      </div>
        
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


<!--  Toggle Sport()-->

    
      <div v-if = "!edit_sport" class="_MARGIN">
        <p class="card-text"><b>Sport : </b> {{post.sport}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_sport">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_sport" class="_MARGIN">
        <b>Sport :</b> <input class="form-control col-lg-5"  :value = "post.sport"  @input = "getVal_team_sport"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="set_sport">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_sport">
         <span class="fa fa-close fa-lg" aria-hidden="true"></span>
        </button>

      </div>


<!-- Toggle Date -->

      <div v-if = "!edit_date" class="_MARGIN">
        <p class="card-text"><b>Date (TimeStamp): </b> {{post.start_time}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="unset_date">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_date" class="_MARGIN">
        <b>Date (TimeStamp) :</b> <input class="form-control col-lg-5" :value = "post.start_time" @input = "getVal_team_date"/>

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
import { mapState } from 'vuex'

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
      }
    },
    filters: {
    formatDate(val) {
        if (!val) { return '-' }
        let date = moment(val).format("MM/DD/YYYY");
        return date
    }
 },

  methods:{


// Championship

    getVal_championship($event){
      console.log('hey',$event.target.value)
      this.set_championship_value = $event.target.value
    },

    set_championship(){

      if(this.set_championship_value == null){
         this.edit_championship = !this.edit_championship
         return;
      } 

      this.post.championship = this.set_championship_value
      this.edit_championship = !this.edit_championship
     
    },
    unset_championship(){
      this.edit_championship = !this.edit_championship
    },




// Team One
    getVal_team_one($event){
      this.set_team_one_value = $event.target.value
    },

    set_team_one(){

      if(this.set_team_one_value == null){
          this.edit_team_one = !this.edit_team_one
          return
      }

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

      if( this.set_team_two_value == null){
          this.edit_team_two = !this.edit_team_two
          return 
      }

       this.post.team2 = this.set_team_two_value
       this.edit_team_two = !this.edit_team_two
    },

    unset_team_two(){
      this.edit_team_two = !this.edit_team_two
    },

// Date

    getVal_team_date($event){
       this.set_date_value = $event.target.value
       // console.log('pasrsed date', Date.parse($event.target.value))
       // console.log('Origninal Date', moment($event.target.value).format("MM/DD/YYYY"))
    },

    set_date(){

      if(this.set_date_value == null){
          this.edit_date = !this.edit_date
          return

      }

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

      if(this.set_sport_value == null){
        this.edit_sport = !this.edit_sport
        return
      }

      this.post.sport = this.set_sport_value
      this.edit_sport = !this.edit_sport
    },
    unset_sport(){
      this.edit_sport = !this.edit_sport
    }
  },

  computed : {
    ...mapState(['secondary'])
  },

  updated(){ 
              // console.log(this.secondary) 
              // console.log('post',this.post)
  },
  beforeUpdate(){

  },
  mounted(){
    // console.log(this.secondary) 
              // console.log('post',this.post)
  },
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