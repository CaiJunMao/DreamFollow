<template>
  <div class="index">
    首页
    <el-button @click="$router.push({name:'filter'})" >筛选</el-button>
    <el-button @click="$router.push({name:'menu'})">目录</el-button>
    <el-button @click="$router.push({name:'opemSearch'})">搜索</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'index',
  components: {
  }
}
</script>
<style lang="less" scoped >
	
</style>
