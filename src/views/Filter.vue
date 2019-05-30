<template>
  <div class="filter">
    筛选页面

    <dl>
    		<dt>朝代</dt>
    		<dd @click="screenDynasty('先秦')">先秦</dd>
    		<dd @click="screenDynasty('两汉')">两汉</dd>
    		<dd @click="screenDynasty('唐朝')">唐朝</dd>
    		<dd @click="screenDynasty('宋朝')">宋朝</dd>
    </dl>
    <dl>
    		<dt>作者</dt>
    		<dd @click="screenAuthor('苏轼')">苏轼</dd>
    		<dd @click="screenAuthor('杜牧')">杜牧</dd>
    		<dd @click="screenAuthor('李清照')">李清照</dd>
    		<dd @click="screenAuthor('李商隐')">李商隐</dd>
    </dl>
    <el-button @click="$router.push({name:'poemsFromFilter'})" >筛选结果</el-button>
    <el-button @click="$router.go(-1)" >返回</el-button>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'v-filter',
  components: {
  },
  methods: {
  	screenDynasty(dynasty){
  		this.$store.commit('introductionDynasty', dynasty)
  		this.$router.push({name:'poemsFromFilter'})
  	},
  	screenAuthor(author){
  		this.$store.commit('introductionAuthor', author)
  		this.$router.push({name:'poemsFromFilter'})
  	}
  }
}
</script>
<style lang="less" scoped>
	.filter{
		/*height: 100%;*/
		background-color: #428351;
	}
</style>