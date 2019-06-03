<template>
  <div class="menu">
   <div @click="$router.push({name:'index'});">首页</div>
   <div @click="$router.push({name:'write'})">题诗</div>
   <div @click="$router.push({name:'collection'})">收藏</div>
   <div @click="$router.push({name:'setting'})">设置</div>
   <div @click="$router.push({name:'poemSearch'})">搜索</div>

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
		height: 100%;
		background-image: url(../../img/QQ20190530-1.jpg);
		background-size: 100% 100%;
		div:nth-of-type(1){
			margin-top: 128px;
		}
		div{
			&:before{
				content: '';
				display: inline-block;
				height: 30px;
				width: 30px;
				background-image: url(../../img/lotus.png);
				background-size: 100% 100%;
				background-position-y: 9px;
			}
			font-size: 26px;
			margin-bottom: 15px;
		}
		
	}
</style>