<template>
  <div class="index">
    首页
    <el-button @click="$router.push({name:'filter'})" >筛选</el-button>
    <el-button @click="$router.push({name:'menu'})">目录</el-button>
    <el-button @click="$router.push({name:'opemSearch'})">搜索</el-button>
    <router-view></router-view>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Recommend from '@/components/Recommend.vue'
export default {
  name: 'index',
  components: {
  	Recommend
  }
}
</script>
<style lang="less" scoped >
	
</style>
