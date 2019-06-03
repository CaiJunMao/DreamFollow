<template>
	<!--可复用组件，显示诗歌简介-->
	<div class="poemAbout">
		<div class="box" v-for="(item, index) in items" :key="index" @click="poemsdetail(item.title, item.authors, item.content)" v-if="items">
			<div class="title">
				{{item.title}}
			</div>
			<div class="author">
				{{item.authors}}
			</div>
			<div class="content" v-if="typeof item.content == 'string'">
				{{item.content.split("|")[0]}}
			</div>

			<div class="content" v-else>
				{{item.content[0]}}
				{{item.content[1]}}
			</div>

		</div>
		<!--<div class="box" >
			<div class="title">
				长歌行
			</div>
			<div class="author">
				/两汉/佚名
			</div>
			<div class="content">
				青青园中葵，朝霞待日晞
			</div>
		</div>
		<div class="box" >
			<div class="title">
				长歌行
			</div>
			<div class="author">
				/两汉/佚名
			</div>
			<div class="content">
				青青园中葵，朝霞待日晞
			</div>
		</div>-->
	</div>
</template>

<script>
	export default{
		name: 'poetryabout',
		props: ['items'],
		methods: {
			poemsdetail(title, author, content){//点击对于的搜索结果，将诗的数据提交到store
				this.$store.commit({
					type: "introductionPoem", 
					title, 
					author, 
					content
				})
				console.log(title, author, content)
				this.$router.push({name:'poemDetail'})
			}
		}
	}
</script>

<style scoped lang="less">
.poemAbout{
	padding: 5% 2%;
	.box{
		min-height:60px;
		padding:5%;
		border:dashed 1px;
		margin-bottom:5%;
		border: 1px solid transparent;
		/*border-image-source: url(../../public/img/border.png);
		border-image-width:10px*/
		background-image:url(../../public/img/border.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		
		/*color:white;*/
		/*opacity: 0.8;*/
		.title{
			font-size:25px;
			line-height: 25px;
		}
		.content{
			font-size:20px;
		}
	}
	text-align: left;
}
</style>