<template>
  <div id="app" class="wrap">
    <el-row :gutter="24" class="bgcolor">
      <el-col :span="24">
        <div class="grid-content bg-purple z-header">今日头条 <router-link to="/"><i class="el-icon-share"></i></router-link></div>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="z-nav">      
      <el-col :span="12">
        <router-link to="/first" class="link">推荐</router-link>
      </el-col>
      <el-col :span="12">
        <router-link to="/second" class="link">科技</router-link>
      </el-col>
    </el-row>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>