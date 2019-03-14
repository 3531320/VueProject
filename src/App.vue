<template>
  <div class="app">
       <div>
           <!-- <el-row style="margin-bottom:20px">
            <router-link :to="{path:'he'}">
                <el-button type="success">布局</el-button>
            </router-link>
            <router-link :to="{path:'button'}">
                <el-button type="primary">按钮</el-button>
            </router-link>
             <router-link :to="{path:'/'}">
                <el-button type="danger">主页</el-button>
            </router-link>
             <router-link :to="{path:'select'}">
                <el-button type="warning">选择器</el-button>
            </router-link>
            <router-link :to="{path:'upload'}">
                <el-button type="danger">上传</el-button>
            </router-link>
            <router-link :to="{path:'NavMenu'}">
                <el-button type="info">导航菜单</el-button>
            </router-link>
        </el-row> -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'he'}">布局</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'button'}">按钮</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'select'}">选择器</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'upload'}">上传</el-breadcrumb-item>
          </el-breadcrumb>
          <br>
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'NavMenu'}">导航菜单</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'text'}">练习</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'text1'}">练习1-调查文件HTML5小应用</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'new'}">用户列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'text2'}">练习2</el-breadcrumb-item>
          </el-breadcrumb>
       <hr>
      </div>
       <router-view></router-view>
   </div>
</template>

<script>

export default {

}
</script>



