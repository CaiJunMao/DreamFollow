<template>
  <div class="poemSearch">
		<TopBar :title=name ></TopBar>
		<el-input placeholder="请输入内容" v-model="input" clearable
			@input="getaxios"></el-input>
		<dl>
			<dd v-for="(item, index) in searchContents" :key="index"
				@click="poemsfromsearch(item.title, item.authors, item.content)">{{item.title}}</dd>
		</dl>
		<!--<el-button @click="$router.push({name:'poemsFromSearch'})" >搜索结果</el-button>-->
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
export default{
	name: 'poemSearch',
	components: {
  	TopBar
 },
	data(){
		return{
			input: '',
			searchContents: '',
			name:'搜索'
		}
	},
	
	methods: {
		getaxios(){
			axios
				.get("https://api.apiopen.top/likePoetry?name=" + this.input)
				.then(res => {
					this.searchContents = res.data.result
				})
		},
		poemsfromsearch(title, author, content){//点击对于的搜索结果，将诗的数据提交到store
			this.$store.commit({
				type: "introductionPoem", 
				title, 
				author, 
				content
			})
			console.log(title, author, content)
			this.$router.push({name:'poemDetail'})
		},
	},
	
}

</script>
<style lang="less" scoped>
	.poemSearch{
		height: 100%;
	}
</style>