<template>
  <div class="index">
    首页
    <el-button @click="$router.push({name:'filter'})" >筛选</el-button>
    <el-button @click="$router.push({name:'menu'})">目录</el-button>

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
  		poetrys: null
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
	.index{
		height: 100%;
	}
		/*transition 的name作为前缀*/
	/*跟transition name="fade"的name自动匹配，也就是作为前缀*/
	.routerCss{
		/*display: flex;*/
		position: relative;
		>div{
			width: 100%;
			position: absolute;
			top: 0;
		}
	}
	/*.fade-enter{
 		transform: translateX(100%);
 		opacity: 0;
 }
 .fade-enter-active {
	  transition: all 2s ;
	}
	.fade-enter-to{
		opacity: 1;
	}
	
 .fade-leave{
 }
 .fade-leave-active {
	  transition: all 2s;
	  
	}
	.fade-leave-to{
		transform: translateX(-100%);
		opacity: 0;
	}*/
</style>
