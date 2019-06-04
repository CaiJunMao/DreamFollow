<template>
	<div class="poemsFromFilter">
		<TopBar :title=name></TopBar>
		<!--<div class="poet" v-if="author">
    		<div class="author">
    			<span>{{authorIntroduce.name}}</span>
    		</div>
    		<div class="introduce">
    			<div>{{authorIntroduce.resume}}</div>
    		</div>
    </div>-->
		<PoemAbout :items="sort1" v-if="sort1"></PoemAbout>
		<PoemAbout :items="poemOfPoet" v-if="poemOfPoet"></PoemAbout>
	</div>
</template>

<script>
	// @ is an alias to /src
	import PoemAbout from '@/components/PoemAbout.vue'
	import TopBar from '@/components/TopBar.vue'
	import Request from '@/tools/Request.js'
	export default {
		name: 'OpemsFromFilter',
		components: {
			PoemAbout,
			TopBar
		},
		data() {
			return {
				authorIntroduce: null,
				poemOfPoet: null,
				sort1: null,
				sortflag: 1, //控制请求只执行一次
				authorid: null, //存储请求到的作者的id
				authorflag: 1,
				name: '筛选结果',
				poems: null
			}
		},
		computed: {
			keyword() {
				return this.$store.state.sort
			},
			author() {
				return this.$store.state.author
			},

		},
		watch: {
			keyword: function() {
				console.log(this.keyword)
				//请求类别
				const request = new Request()
				request.http({
						url: "/api/v1/poetry/search",
						method: "GET",
						params: {
							keywords: this.$store.state.sort,
							type: "text",
							size: "15"
						}
					})
					.then(res => {
						this.sort1 = res.data.resp.data
					})
			},
			author: function() {
				console.log(this.author)
				//请求作者诗歌
				const request = new Request()
				request.http({
						url: "/api/v1/poetry/search",
						method: "GET",
						params: {
							keywords: this.$store.state.author,
							type: "author",
							size: "15"
						}
					})
					.then(res => {
						this.poemOfPoet = res.data.resp.data
						console.log(res.data)
						//					this.authorid = res.data.resp.data[0].author._id
					})
			},
		},
//		created() {
//
//		},
//		updated() {
//			console.log(this.keyword)
//		}

	}
</script>

<style lang="less" scoped>
	.poemsFromFilter {
		height: 100%;
		.poemAbout {
			height: 86%;
			overflow: scroll;
		}
	}
</style>