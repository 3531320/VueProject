<template>
<div>
  <ul v-for="item in data" :key="item._id">
    <li>
      <div> {{item.fullname}}</div>
      <div> {{item.prid}}</div>

    </li>
  </ul>
</div>
</template>
<script>
  console.log("Asda")
  import axios from 'axios'
  export  default {
    data(){
      return {
        data:[]
      }
    },
    created(){
      var _this = this;
      this.getList();
    },
    methods:{
      getList:function () {
        var _this = this;
        axios.get('/api/user/list')
             .then(function (response) {
             _this.data = response.data;
             })
             .catch(function (error) {
               console.log(error);
             });
      }
    }
  }
</script>
