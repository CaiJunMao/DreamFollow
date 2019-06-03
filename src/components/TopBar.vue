<template>
	<!--可复用组件，各页面顶部信息栏-->
	<div class="topBar">
		<!--是首页，显示目录按钮，不是则显示<箭头按钮-->
		<i class="el-icon-menu" v-if="$route.meta.isIndex" @click.stop='menuShow'></i>
		<i class="el-icon-arrow-left" v-else @click="$router.go(-1)"></i>
		<div class="title" >{{title}}</div>
		<!--<el-button type="primary" icon="el-icon-edit"></el-button>-->
		<el-button type="text" @click.stop='filterShow'  v-if="$route.meta.isIndex" style="color: #666666;font-size: 15px;font-weight: 600;">筛选</el-button>
	</div>
</template>

<script>
	export default{
		name: 'topBar',
		props:[
		    'title',
			'menuShow',
			'filterShow'
		],
	}
</script>

<style scoped lang="less">
	.topBar{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 8%;
		font-size: 25px;
		i{
			width: 10%;
			display: inline;
		}
		.title{
			width: 80%;
			text-align: center;
		}
	}
</style>