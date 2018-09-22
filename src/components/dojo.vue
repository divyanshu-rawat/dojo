<template>

<div class="hello">
   <h2>{{appName}}</h2>
   <div class="row">
         <div class="card col-sm-5"  v-for = "(data,index) in primary" :key="primary.indexOf(data)">
            <List  :data = 'data'/>
            <button type="button" class="btn btn-primary _MARGIN" data-toggle="modal" @click="viewPost(data,index)" data-target="#myModal">
            See Focused View
          </button>
         </div>
   </div>

   <Modal :post = "post" :test = "post.team1"/>

</div>

</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import List from './list.vue'
import Modal from './modal.vue'
import moment from 'moment'



export default {
  name: 'Dojo',

  data(){
    return{
        post : {}
    }
  },
  props: {
    appName: String,
    // primary: Array,
    // Secondary: Array,
  },
  components: {
    List, Modal
  },
  computed:{...mapState(['primary','secondary'])},

  methods:{
    viewPost(value,index){
      this.post = value
      this.post.index = index
      this.post.deepCopy = _.clone(value);
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
._MARGIN{
  margin: 5px !important;
}

</style>
