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

<style>
</style>