<template>
	<div class="recommend">
		<div class="text-box">
			<span>{{content}}</span>
		</div>
		<div class="tags" v-for="(item, index) in tags" :key="index">
			<span>{{item}}</span>
		</div>
		<div class="exchange">
			<a class="btn" @click="exchange">换一句</a>
		</div>
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

<style>
</style>