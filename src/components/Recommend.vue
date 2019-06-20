<template>
	<div class="recommend">
		<!--背景遮罩-->
		<div class="mask" ></div>
		<div class="top">
			<span>随机推荐</span>
			<i class="el-icon-refresh" @click="exchange"></i>
		</div>
		
		<div class="tags" v-if="tags" >
			<!--<span v-for="(item, index) in tags" :key="index">{{item}}</span>-->
			<span >{{tags[0]}}</span>
			
		</div>
		<div class="text-box"  v-if="content" >
			<span>{{content}}</span>
		</div>
		<!--<div class="exchange">
			<a class="btn" @click="exchange">换一句</a>
		</div>-->
		<PoemAbout :items="poetrys" v-if='poetrys' ></PoemAbout>

	</div>
</template>

<script>
	import Request from '@/tools/Request.js'
	import PoemAbout from '@/components/PoemAbout.vue'
	export default{
		name: 'recommend',
		data(){
			return{
				content: null, //随机推荐的诗句
				tags: null, //推荐诗句的标签
				poetrys:null,
				tag:null,
                loading:true
			}
		},
		components: {
			PoemAbout,
		},
		methods: {
			//封装axios请求，当用户点击“换一句”按钮的时候重复请求
			getaxios(){
				axios
					.get("https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=TbPMxaJYrt8EoL6nPgAPeNgW2ivdgLeG")
					.then(res => {
						this.content = res.data.data.content
						this.tags = res.data.data.matchTags
						this.getSimilarByTag(this.tags[0])
//						this.setTagToIndex(this.tags[0])
//						console.log(this.$store.state.tag)
					})
			},
			//点击“换一句”按钮
			exchange(){
				this.getaxios()
			},
			getSimilarByTag(tag){
				const request = new Request()
				var query={
						url: "/api/v1/poetry/search",
						method: "GET",
						
						params: {
							keywords: tag,
							type: "text",
							size: "100"
						}
					}
				var that =this
                this.loading = true
				request.http(query).then(function(response) {
					console.log(response.data)
					that.poetrys = response.data.resp.data
                    this.loading = false
					// console.log(response.data)
				})
			},
				
//			setTagToIndex(tag){
//				this.$store.commit('getCommentTag', tag)
//			}
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
		height: 16%;
		display: flex;
		justify-content: space-between;
		span{
			margin: 2%;
			}
		i{
			margin: 2%;
		}
	}
	.tags{
		display: flex;
		justify-content: space-around;
		height: 54%;
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
		margin-top: 5%;
		height: 20%;
		/*padding:5% 0 ;*/
		font-size: 20px;
		line-height: 20px;
		text-align: center;
	}
}
</style>