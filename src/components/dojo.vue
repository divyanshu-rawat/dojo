<template>

<div class="hello">
   <h2>{{appName}}</h2>
   <div class="row">
         <div class="card col-sm-5"  v-for = "(data) in orderedUsers" :key="orderedUsers.indexOf(data)">

            <List  :data = 'data'/>
            <button type="button" class="btn btn-primary _MARGIN" data-toggle="modal" @click="viewPost(data)" data-target="#myModal">
            See Focused View
          </button>
         </div>
   </div>

   <Modal :post = "post"/>

</div>

</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import List from './list.vue'
import Modal from './modal.vue'
import _ from 'lodash';



export default {
  name: 'Dojo',

  data(){
    return{
        post : {},
    }
  },
  props: {
    appName: String,
  },
  components: {
    List, Modal
  },
  computed:{
    ...mapState(['primary','secondary']),

    orderedUsers(){
      return _.orderBy(this.primary, 'start_time')
    }
  },

  methods:{
    viewPost(value){
      this.post = value
      // this.post.index = index

      // this.post.deepCopy = _.clone(value);    Removing Deepcopy
    }
  },


  updated(){
    // console.log('data updated');
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
._MARGIN{
  margin: 5px !important;
}

</style>
