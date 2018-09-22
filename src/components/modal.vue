
<template>

<div class="modal-wrapper">
 <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
      <!-- Modal Header -->
      <div class="modal-header">
        <h5 class="modal-title">Championship: {{post.championship}} - {{post.index}}</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <!-- Modal body -->
    <div class="modal-body">

<!-- toggle_team_one() -->
      <div v-if = "!edit_team_one" class="_MARGIN">
        <p class="card-text"><b>Team 1 : </b> {{post.team1}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_team_one()">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_team_one" class="_MARGIN">
        <input class="form-control col-lg-5"  @input = "changeval" v-model = "post.team1"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_team_one()">
         <span class="fa fa-check fa-lg" aria-hidden="true" @click = "updateModel"></span>
        </button>

        <button type="button" class="btn btn-primary" aria-label="Left Align" >
         <span class="fa fa-times fa-lg" aria-hidden="true" @click = "doNotUpdate"></span>
        </button>

        <!-- <i class="fa fa-times fa-lg" aria-hidden="true"></i> -->
        <!-- <i class="fa fa-check fa-lg" aria-hidden="true"></i> -->
      </div>

<!-- toggle_team_two() -->
       <div v-if = "!edit_team_two" class="_MARGIN">
        <p class="card-text"><b>Team 2 : </b> {{post.team2}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_team_two()">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_team_two" class="_MARGIN">
        <input class="form-control col-lg-5" :value= "post.team2"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_team_two()">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

        <!-- <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_team_two()">
         <span class="fa fa-times fa-lg" aria-hidden="true"></span>
        </button> -->

        <!-- <i class="fa fa-times fa-lg" aria-hidden="true"></i> -->
        <!-- <i class="fa fa-check fa-lg" aria-hidden="true"></i> -->
      </div>


<!--  toggle_date()-->

      <div v-if = "!edit_date" class="_MARGIN">
        <p class="card-text"><b>Team 2 : </b> {{post.start_time |  formatDate}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_date()">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_date" class="_MARGIN">
        <input class="form-control col-lg-5" :value= "post.start_time |  formatDate"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_date()">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

       <!--  <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_date()">
         <span class="fa fa-times fa-lg" aria-hidden="true"></span>
        </button> -->

        <!-- <i class="fa fa-times fa-lg" aria-hidden="true"></i> -->
        <!-- <i class="fa fa-check fa-lg" aria-hidden="true"></i> -->
      </div>




<!--  toggle_sport()-->
    
      <div v-if = "!edit_sport" class="_MARGIN">
        <p class="card-text"><b>Team 2 : </b> {{post.sport}} </p>
        
        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_sport()">
         <span class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></span>
        </button>

      </div>

      <div v-if = "edit_sport" class="_MARGIN">
        <input class="form-control col-lg-5" :value= "post.sport"/>

        <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_sport()">
         <span class="fa fa-check fa-lg" aria-hidden="true"></span>
        </button>

      <!--   <button type="button" class="btn btn-primary" aria-label="Left Align" @click="toggle_sport()">
         <span class="fa fa-times fa-lg" aria-hidden="true"></span>
        </button> -->

        <!-- <i class="fa fa-times fa-lg" aria-hidden="true"></i> -->
        <!-- <i class="fa fa-check fa-lg" aria-hidden="true"></i> -->
      </div>


<!--  -->
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
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
    post : Object,
    test : String
  },
  
  data: function(){
      return{
        edit_team_one: false,
        edit_team_two: false,
        edit_date: false,
        edit_sport: false,
        localcopy: null,

        divyanshu: null
        // testcopy: {...this.post}
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

    changeval($event){
      console.log('divyanshu',this.divyanshu)

      // this.localcopy.team_one = $event.target.value
    },
    updateModel(){
   
    },
    doNotUpdate(){

      console.log('deep',this.post)
      // console.log(this.test)
      // let bcd = this.test
      // let abc = _.clone(this.test);
      // console.log('abc',abc)
      // this.localcopy = _.clone(this.test);

      // console.log('bcd',this.localcopy)
      // if

      this.post.team1 = this.post.deepCopy.team1
      console.log('do not update');
       this.edit_team_one = !this.edit_team_one
      // console.log('update_loa_user',this.localUser.team1);
    },
    toggle_team_one(val){
      this.edit_team_one = !this.edit_team_one
      // console.log('New',this.new_data.team1);
    },
    toggle_team_two(val){
      this.edit_team_two = !this.edit_team_two
    },
    toggle_date(val){
      this.edit_date     = !this.edit_date
    },
    toggle_sport(val){
      this.edit_sport    = !this.edit_sport
    }
  },

  updated(){

    console.log('deep',this.post.deepCopy.team1)
    // console.log(this.localcopy.length)
    // if(this.localcopy.length == undefined){
        // let new_obj =  this.post

        // this.localcopy.team_one = this.post.team1
    // }

    // if(this.localcopy){
    //    this.localcopy = _.clone(this.test);
    // }
  },

  beforeUpdate(){
  },
  mounted(){
  },
  watch:{

  },
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