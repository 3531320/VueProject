<template>
<div>
  dfs
</div>
</template>
<script>
  import axios from 'axios'
  console.log("Asd");
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
        axios.get('/api/news/list')
             .then(function (response) {
              var s = response;
             })
             .catch(function (error) {
               console.log(error);
             });
      }
    }
  }
</script>
