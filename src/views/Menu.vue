<template>
  <div class="menu">
   目录页面
   <el-button @click="$router.push({name:'index'});">首页</el-button>
   <el-button @click="$router.push({name:'write'})">题诗</el-button>
   <el-button @click="$router.push({name:'collection'})">收藏</el-button>
   <el-button @click="$router.push({name:'setting'})">设置</el-button>
   <el-button @click="$router.push({name:'opemSearch'})">搜索</el-button>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'v-menu',
  components: {
  }
}
</script>
<style lang="less" scoped>
	.menu{
		background-color: #42B983;
	}
</style>