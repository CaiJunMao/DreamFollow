<template>
  <div class="filter">
    筛选页面
    <el-button @click="$router.push({name:'opemsFromFilter'})" >筛选结果</el-button>
    <el-button @click="$router.go(-1)" >返回</el-button>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'v-filter',
  components: {
  }
}
</script>
<style lang="less" scoped>
	.filter{
		height: 100%;
		background-color: #428351;
	}
</style>