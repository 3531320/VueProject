<template>
<div>
  <el-button @click="clik()">asdas</el-button>
</div>
</template>
<script>
  console.log("Asda")
{
let a= 10;
var b=1;
}
console.log(b)


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
