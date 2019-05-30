<template>
  <div class="index">
    		首页
    		<el-button @click="$router.push({name:'filter'})" >筛选</el-button>
	    <el-button @click="showMenu">目录</el-button>
	    <el-button @click="$router.push({name:'poemSearch'})">搜索</el-button>
	    <router-view></router-view>
	    <Recommend></Recommend>
	    <PoemAbout :items="poetrys"></PoemAbout>
  </div>
</template>

<script>
import Recommend from '@/components/Recommend.vue'
import PoemAbout from '@/components/PoemAbout.vue'
export default {
  name: 'index',
  components: {
  	Recommend,
  	PoemAbout
  },
  data(){
  	return{
  		poetrys: null,
  		show: null
  	}
  },
  methods: {
  	showMenu(){
//		this.show = !show
  		this.$router.push({name:'menu'})
  	}
  },
	beforeRouteEnter(to, from, next){
		axios
			.get("https://api.apiopen.top/getSongPoetry?page=1&count=20")
			.then(res => {
				next(vm =>{
					vm.poetrys = res.data.result.slice(0, 20)
				})
			})
	}
}
</script>
<style lang="less" scoped >

</style>
