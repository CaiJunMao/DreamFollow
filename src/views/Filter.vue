<template>
  <div class="filter">
    <i class="el-icon-error"  @click="$router.go(-1)"></i>
	<el-tabs v-model="activeName" tab-position="left">
	    <el-tab-pane label="朝代" name="first">
	    		<ul>
	    			<li>先秦</li>
	    			<li>两汉</li>
	    			<li>魏晋</li>
	    			<li>南北朝</li>
	    			<li>隋代</li>
	    			<li @click="screenDynasty('唐朝')">唐代</li>
	    			<li>五代</li>
	    			<li @click="screenDynasty('宋朝')">宋代</li>
	    			<li>金朝</li>
	    			<li>元代</li>
	    			<li>明代</li>
	    			<li>清代</li>
	    		</ul>
	    </el-tab-pane>
	    <el-tab-pane label="作者" name="second">
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
	    <el-tab-pane label="类型" name="third">
	    		<ul>
	    			<li>写景</li>
	    			<li>咏物</li>
	    			<li>春天</li>
	    			<li>夏天</li>
	    			<li>秋天</li>
	    			<li>冬天</li>
	    			<li>写雨</li>
	    			<li>写雪</li>
	    			<li>写风</li>
	    			<li>写花</li>
	    		</ul>
	    </el-tab-pane>
	    <el-tab-pane label="诗集" name="fourth">
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
	    <el-tab-pane label="教材" name="fifth">
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
    <!--<dl>
    		<dt>朝代</dt>
    		<dd @click="screenDynasty('先秦')">先秦</dd>
    		<dd @click="screenDynasty('两汉')">两汉</dd>
    		<dd @click="screenDynasty('唐朝')">唐朝</dd>
    		<dd @click="screenDynasty('宋朝')">宋朝</dd>
    </dl>
    <dl>
    		<dt>作者</dt>
    		<dd @click="screenAuthor('苏轼')">苏轼</dd>
    		<dd @click="screenAuthor('杜牧')">杜牧</dd>
    		<dd @click="screenAuthor('李清照')">李清照</dd>
    		<dd @click="screenAuthor('李商隐')">李商隐</dd>
    </dl>
    <el-button @click="$router.go(-1)" >返回</el-button>-->


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
  	screenDynasty(dynasty){
  		this.$store.commit('introductionDynasty', dynasty)
  		this.$router.push({name:'poemsFromFilter'})
  	},
  	screenAuthor(author){
  		this.$store.commit('introductionAuthor', author)
  		this.$router.push({name:'poemsFromFilter'})
  	}
  }
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