<template>
  <div class="filter">
    <i class="el-icon-error"  @click="$router.go(-1)"></i>
	<el-tabs v-model="activeName" tab-position="left">
	    <el-tab-pane label="作者" name="first">
	    		<ul>
	    			<li @click="screenAuthor('李白')">李白</li>
	    			<li @click="screenAuthor('杜甫')">杜甫</li>
	    			<li @click="screenAuthor('李清照')">李清照</li>
	    			<li @click="screenAuthor('杜牧')">杜牧</li>
	    			<li @click="screenAuthor('李商隐')">李商隐</li>
	    			<li @click="screenAuthor('白居易')">白居易</li>
	    			<li @click="screenAuthor('宋太祖')">宋太祖</li>
	    			<li @click="screenAuthor('苏轼')">苏轼</li>
	    			<li @click="screenAuthor('仇远')">仇远</li>
	    			<li @click="screenAuthor('高骈')">高骈</li>
	    		</ul>
	    </el-tab-pane>
	    <el-tab-pane label="类型" name="second">
	    		<ul>
	    			<li @click="screenSort('写景')">写景</li>
	    			<li @click="screenSort('咏物')">咏物</li>
	    			<li @click="screenSort('春天')">春天</li>
	    			<li @click="screenSort('夏天')">夏天</li>
	    			<li @click="screenSort('秋天')">秋天</li>
	    			<li @click="screenSort('冬天')">冬天</li>
	    			<li @click="screenSort('写雨')">写雨</li>
	    			<li @click="screenSort('写雪')">写雪</li>
	    			<li @click="screenSort('写风')">写风</li>
	    			<li @click="screenSort('写花')">写花</li>
	    		</ul>
	    </el-tab-pane>
	    <el-tab-pane label="诗集" name="third">
	    		<ul>
	    			<li>唐诗三百首</li>
	    			<li>古诗三百首</li>
	    			<li>宋词三百首</li>
	    			<li>古诗十九首</li>
	    			<li>诗经</li>
	    			<li>楚辞</li>
	    			<li>乐府</li>
	    			<li>全唐诗</li>
	    			<li>全宋词</li>
	    			<li>金元曲</li>
	    		</ul>
	    </el-tab-pane>
	    <el-tab-pane label="教材" name="fourth">
	    		<ul>
	    			<li>小学一年级上册</li>
	    			<li>小学一年级下册</li>
	    			<li>小学二年级上册</li>
	    			<li>小学二年级下册</li>
	    			<li>小学三年级上册</li>
	    			<li>小学三年级下册</li>
	    			<li>小学四年级上册</li>
	    			<li>小学四年级下册</li>
	    			<li>小学五年级上册</li>
	    			<li>小学五年级下册</li>
	    		</ul>
	    </el-tab-pane>
	</el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'v-filter',
  components: {
  },
  data(){
  	return{
  		activeName: 'first'
  	}
  	
  },
  methods: {
  	screenSort(sort){
  		this.$store.commit('introductionSort', sort)
  		this.$router.push({name:'poemsFromFilter'})
  	},
  	screenAuthor(author){
  		this.$store.commit('introductionAuthor', author)
  		this.$router.push({name:'poemsFromFilter'})
  	}
  },
}
</script>
<style lang="less">
	.filter{
		/*height: 100%;*/
		background-image: url(../../img/fitterborder.png);
		background-size: 100% 100%;
		background-color: white;
		i{
			position: relative;
			top: 7px;
			left: 148px;
			font-size: 30px;
		}
		.el-tabs{
			position: relative;
			top: 120px;
			.el-tabs__header{
				margin-left: 20px;
			}
			.el-tabs__content{
				margin-right: 70px;
					ul{
						list-style: none;
						li{
							margin-bottom: 5px;
						}
					}
			}
		}
	}
</style>