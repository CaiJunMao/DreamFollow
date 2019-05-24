<template>
  <div class="opemSearch">
		诗歌搜索页
		<el-button @click="$router.push({name:'opemDetail'})" >搜索结果</el-button>
		<el-button @click="$router.go(-1)" >返回</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'opemSearch',
  components: {
  }
}
</script>
