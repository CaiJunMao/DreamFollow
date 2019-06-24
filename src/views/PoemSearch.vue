<template>
	<div class="poemSearch">
		<TopBar :title=name></TopBar>
		<div class="poemSearch-main">
			<el-input placeholder="请输入内容" v-model="input" clearable @input="getaxios"></el-input>
			<el-table :data="searchContents" highlight-current-row @current-change="poemsfromsearch" :show-header='showHeader' v-loading="loading" style="background-color: transparent;">
				<el-table-column prop="title" label="诗歌"></el-table-column>
			</el-table>
		</div>
		
		<!-- <dl v-if="searchContents">
			<dd v-for="(item, index) in searchContents" :key="index" @click="poemsfromsearch(item.title, item.author, item.straightMatter)" >{{item.title}}</dd>
		</dl> -->
		<!--<el-button @click="$router.push({name:'poemsFromSearch'})" >搜索结果</el-button>-->
	</div>
</template>

<script>
	// @ is an alias to /src
	import TopBar from '@/components/TopBar.vue'
	import Request from '@/tools/Request.js'
	export default {
		name: 'poemSearch',
		components: {
			TopBar
		},
		data() {
			return {
				input: '',
				searchContents: [],
				loading: false,
				
				showHeader: false,
				name: '搜索'
			}
		},

		methods: {
			getaxios() {
				if(this.input) {
					//有输入，则显示加载
					this.loading=true
					const request = new Request()
					var query = {
						url: "/api/v1/poetry/search",
						method: "GET",
						params: {
							keywords: this.input,
							type: "text ",
							size: "100"
						}
					}
					var that = this
					request.http(query).then(function(response) {
						that.searchContents = response.data.resp.textList.data
						//结束加载：
						that.loading=false
					}).catch(err => {
						console.log(err.data)
						this.searchContents=[]
					})
				}else{
					//如果输入值删除，则对应上次结果删除
					this.searchContents=[]
				}

			},
			poemsfromsearch(val) { //点击对应的搜索结果，将诗的数据提交到store
				this.$store.commit({
					type: "introductionPoem",
					title: val.title,
					dynasty: val.author.dynastyText,
					author: val.author.name,
					content: val.straightMatter
				})
				this.$router.push({
					name: 'poemDetail'
				})
			},
			handleCurrentChange(val){
				console.log(val)
			}
		},

	}
</script>
<style lang="less" scoped>
	.poemSearch {
		height: 100%;
		background-image: url(../../public/img/search.png);
		background-size: 100% 100%;
		.poemSearch-main{
			height: 92%;
			overflow: auto;
			background-color: transparent;
		}
	}
</style>