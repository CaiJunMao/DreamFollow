<template>
  <div class="poemDetail">
  	<!--<TopBar :title=name ></TopBar>-->
    <div class="nav">
    		<i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
    		<i class="el-icon-star-off" @click="addCollection({title: title, dynastyText: dynasty, author: {name: author}, straightMatter: contents})"></i>
    </div>
    <div class="contents">
    		<div class="poetabout">
	    		<span>{{title}}</span>
	    </div>
	    <div class="dynasty">
	    		<span>{{dynasty}}</span>
	    </div>
	    <div class="author">
	    		<span>{{author}}</span>
	    </div>
	    <div class="content" v-for="(item, index) in contents" :key="index">
	    		<span>{{item}}</span>
	    </div>
    </div>
	    
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'opemDetail',
  components: {
  	TopBar
  },
  data(){
  	return{
  		poems: [],
  		name:'诗歌详情'
  	}
  },
  computed: {
  	title(){
  		return this.$store.state.title
  	},
  	dynasty(){
  		return this.$store.state.dynasty
  	},
  	author(){
  		return this.$store.state.author
  	},
  	contents(){
  		//解决数据问题，使页面显示的诗歌为一行
  		var poemSymbol = [] //存储诗词中的标点符号
  		var poemContent = this.$store.state.content //太长了，用个变量存一下
  		var reg = new RegExp("[\\u4E00-\\u9FFF]");//判断是汉字的正则
  		for (let i = 0; i < poemContent.length; i++){
  			if(!reg.test(poemContent.charAt(i))){
  				poemSymbol.push(poemContent.charAt(i))
  			}
  		}
  		//用，。！？去切割字符串形成不带符号的数组
		let poemArray = this.$store.state.content.split(/[\uff0c\u3002\uff1f\uff01]/)
		poemArray.pop()//移除切割最后一位空值
		for(let i = 0; i < poemArray.length; i++){
			//将标点符号和诗句连起来
				poemArray[i] = poemArray[i].concat(poemSymbol.shift())
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
  				if(ele.straightMatter[0] == poem.straightMatter[0])
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
		background-image: url(../../img/detail.png);
		background-size: 100% 100%;
		.nav{
			height: 5%;
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
		.contents{
			height: 95%;
			overflow: scroll;
			.poetabout{
				font-size: 22px;
				margin-bottom: 10px;
			}
			.dynasty, .author{
				font-size: 12px;
				margin: 20px auto;
			}
			.content{
				margin-bottom: 15px;
				text-align: center;
			}
		}
	}
</style>