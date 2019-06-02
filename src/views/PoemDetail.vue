<template>
  <div class="poemDetail">
    <div class="nav">
    		<i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
    		<i class="el-icon-star-off" @click="addCollection({title: title, authors: author, content: contents})"></i>
    </div>
    <div class="poetabout">
    		<span>{{title}}</span>
    		<!--<span>望庐山瀑布</span>-->
    </div>
    <div class="author">
    		<span>{{author}}</span>
    		<!--<span>李白</span>-->
    </div>
    <!--<div class="content">-->
    <div class="content" v-for="(item, index) in contents" :key="index">
    		<span>{{item}}</span>
    		<!--<span>日照香炉生紫烟，</span>-->
    </div>
    <!--<div class="content">
    		<span>遥看瀑布挂前川。</span>
    </div>
    <div class="content">
    		<span>飞流直下三千尺，</span>
    </div>
    <div class="content">
    		<span>疑是银河落九天。</span>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'opemDetail',
  components: {
  },
  data(){
  	return{
  		poems: []
  	}
  },
  computed: {
  	title(){
  		return this.$store.state.title
  	},
  	author(){
  		return this.$store.state.author
  	},
  	contents(){
  		//解决数据问题，使页面显示的诗歌为一行
  		let poemArray = this.$store.state.content.split('|').join('，').split('，')
  		for(let i = 0; i < poemArray.length ; i++){
  			if(poemArray[i].charAt(poemArray[i].length - 1) == '！' 
  			|| poemArray[i].charAt(poemArray[i].length - 1) == '？'
  			|| poemArray[i].charAt(poemArray[i].length - 1) == '。'){
  			}else{
  				poemArray[i] = poemArray[i].concat('，')
  			}
  		}
  		return poemArray
  	},
  },
  methods:{
  	//添加收藏，传入诗，
  	addCollection(poem){
  		var flag
  		if(localStorage.getItem("poemshelf")){
  			JSON.parse(localStorage.getItem("poemshelf")).forEach((ele, index) => {
  				if(ele.content[0] == poem.content[0])
  					flag = 1
  			})
  			if(flag != 1){
  				this.poems.push(poem)
  			}
  		}else{
  			this.poems.push(poem)
  		}
        localStorage.setItem('poemshelf',JSON.stringify(this.poems))
  	}
  	
  },
}
</script>
<style lang="less" scoped>
	.poemDetail{
		height: 100%;
		background-image: url(../../img/BFACB745EA60D2AFE07CFE6B9C51580D.png);
		background-size: 100% 100%;
		.nav{
			i:nth-of-type(1){
				position: fixed;
				left: 5px;
				top: 5px;
			}
			i:nth-of-type(2){
				position: fixed;
				right: 5px;
				top: 5px;
			}
		}
		.poetabout{
			font-size: 22px;
			margin-top: 25px;
			margin-bottom: 10px;
		}
		.author{
			font-size: 12px;
			margin: 20px auto;
		}
		.content{
			margin-bottom: 15px;
			text-align: center;
		}
	}
</style>