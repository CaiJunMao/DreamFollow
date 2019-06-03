<template>
	<div class="recommend">
		<!--背景遮罩-->
		<div class="mask"></div>
		<div class="top">
			<span>随机推荐</span>
			<i class="el-icon-refresh" @click="exchange"></i>
		</div>
		
		<div class="tags" v-if="tags" >
			<!--<span v-for="(item, index) in tags" :key="index">{{item}}</span>-->
			<span>{{tags[0]}}</span>
			
		</div>
		<div class="text-box"  v-if="content" >
			<span>{{content}}</span>
		</div>
		<!--<div class="exchange">
			<a class="btn" @click="exchange">换一句</a>
		</div>-->
	</div>
</template>

<script>
	export default{
		name: 'recommend',
		data(){
			return{
				content: null, //随机推荐的诗句
				tags: null, //推荐诗句的标签
			}
		},
		methods: {
			//封装axios请求，当用户点击“换一句”按钮的时候重复请求
			getaxios(){
				axios
					.get("https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=TbPMxaJYrt8EoL6nPgAPeNgW2ivdgLeG")
					.then(res => {
						this.content = res.data.data.content
						this.tags = res.data.data.matchTags
					})
			},
			//点击“换一句”按钮
			exchange(){
				this.getaxios()
			}
		},
		created(){
			this.getaxios()
		}
	}
</script>

<style scoped lang="less">
.recommend{
	height: 35%;
	/*background-image: url(../../public/img/recoment.png);
	background-size:cover;
	background-repeat:no-repeat;
	visibility: 0.5;*/
	position: relative;
	z-index: 2;
	.mask{
		height: 100%;
		width: 100%;
		background-image: url(../../public/img/recoment.png);
		background-size:cover;
		background-repeat:no-repeat;
		/*background-color:rgba(255,0,0,0.2);*/
		opacity: 0.8;
		position: absolute;
		top: 0;
		z-index: -1;
	}
	
	.top{
		height: 20%;
		display: flex;
		justify-content: space-between;
	}
	.tags{
		display: flex;
		justify-content: space-around;
		height: 55%;
		span{
			display: inline-block;
			/*height: 25px;*/
			font-size:35px ;
			 align-self: center;
			
			/*border: dashed 1px;*/
			/*margin: 5% 2%;*/
		}
	}
	.text-box{
		height: 20%;
		padding:5% 0 ;
		font-size: 20px;
		line-height: 20px;
	}
}
</style>