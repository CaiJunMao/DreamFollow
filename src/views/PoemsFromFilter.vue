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
		<PoemAbout :items="sort1" v-if="sort1" v-loading="loading"></PoemAbout>
		<PoemAbout :items="poemOfPoet" v-else="poemOfPoet" v-loading="loading"></PoemAbout>
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
				poems: null,
				loading: true,
			}
		},
		computed: {
			keyword() {
				console.log("计算：" + this.$store.state.sort)
				return this.$store.state.sort

			},
			author() {
				console.log("计算：" + this.$store.state.author)
				return this.$store.state.author
			},

		},
		watch: {
			keyword: function() {
				console.log("监听：" + this.keyword)
				//请求类别
				this.getPoemByShor(this.keyword)
			},
			author: function() {
				console.log("监听：" + this.author)
				this.getPoemByAuthor(this.author)
			},
		},
		methods: {
			getPoemByAuthor(author) {
				//请求作者诗歌
				if (author) {
					const request = new Request()
					this.loading = true
					request.http({
							url: "/api/v1/poetry/search",
							method: "GET",
							params: {
								keywords: author,
								type: "author",
								size: "15"
							}
						})
						.then(res => {
							this.poemOfPoet = res.data.resp.data
							this.loading = false
							// console.log(res.data)
							//					this.authorid = res.data.resp.data[0].author._id
						})
				}
			},
			getPoemByShor(keyword) {
				//只有在不为空情况下才请求
				if (keyword) {
					const request = new Request()
					this.loading = true
					request.http({
							url: "/api/v1/poetry/search",
							method: "GET",
							params: {
								keywords: keyword,
								type: "text",
								size: "15"
							}
						})
						.then(res => {
							this.sort1 = res.data.resp.data
							this.loading = false
						})
				}
			},
		},
		created() {
			console.log("created")
			this.getPoemByShor(this.keyword)
			this.getPoemByAuthor(this.author)
		},

		beforeRouteLeave(to, from, next) {
			// 导航离开该组件的对应路由时调用
			// 可以访问组件实例 `this`
			console.log("守卫beforeRouteLeave")

			//重置为'',这样下次进来computed才能起作用
			this.$store.commit('introductionSort', '')
			this.$store.commit('introductionAuthor', '')
			//把已展示的数据设为空，避免第二次进来是还残留之前的筛选数据
			this.sort1 = null
			this.poemOfPoet = null
			next()
		}

	}
</script>

<style lang="less" scoped>
	.poemsFromFilter {
		height: 100%;
		background-image: url(../../public/img/search.png);
		background-size: 100% 100%;

		.poemAbout {
			height: 86%;
			overflow: scroll;
		}
	}
</style>
