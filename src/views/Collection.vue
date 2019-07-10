<template>
	<div class="collection">
		<TopBar :title=name></TopBar>
		<div v-if="poems">
			<PoemAbout :items="poems"></PoemAbout>
		</div>
		<div v-else>
			还没有收藏
		</div>
	</div>
</template>

<script>
	import PoemAbout from '@/components/PoemAbout.vue'
	import TopBar from '@/components/TopBar.vue'
	export default {
		name: 'collection',
		components: {
			PoemAbout,
			TopBar
		},
		data() {
			return {
				poems: [],
				name: '收藏',
			}
		},
		methods: {},
		created() {
			this.poems = JSON.parse(localStorage.getItem('poemshelf'))
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.poems = JSON.parse(localStorage.getItem('poemshelf'))
			})
		}
	}
</script>
<style scoped lang="less">
	.collection {
		height: 100%;
		background-image: url(../../public/img/collection.png);
		background-size: 100% 100%;

		div:nth-of-type(2) {
			height: 92%;
			overflow: auto;
		}

		div:nth-of-type(3) {
			height: 92%;
			overflow: auto;
			/*background: chartreuse;*/
		}
	}
</style>
