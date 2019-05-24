<template>
	<!--可复用组件，显示诗歌简介-->
	<div class="poeAbout">
		<div class="box" v-for="(item, index) in items" :key="index">
			<div class="title">
				{{item.title}}
			</div>
			<div class="author">
				{{item.authors}}
			</div>
			<div class="content">
				{{item.content.split("|")[0]}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'poetryabout',
		props: ['items']
	}
</script>

<style>
</style>