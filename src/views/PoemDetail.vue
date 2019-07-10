<template>
  <div class="poemDetail">
  	<!--<TopBar :title=name ></TopBar>-->
    <div class="nav">
    		<i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
    		<i v-if="collectState" class="el-icon-star-on" @click="addCollection({title: title, dynastyText: dynasty, author: {name: author}, straightMatter: straightMatter})"></i>
    		<i v-else class="el-icon-star-off" @click="addCollection({title: title, dynastyText: dynasty, author: {name: author}, straightMatter: straightMatter})"></i>
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
  		name:'诗歌详情',
			collectState: null
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
		straightMatter(){//保证数据一致，将未处理前的数据存入localstorage
			return this.$store.state.content
		}
  },
  methods:{
  	//添加收藏，传入诗，
  	addCollection(poem){
  		let flag//flag变量识别localstorage中是否已经存在本首诗
  		if(localStorage.getItem("poemshelf")){//判断该用户是否收藏过诗
			this.poems = JSON.parse(localStorage.getItem("poemshelf"))
  			this.poems.forEach((ele, index) => {
  				if(ele.straightMatter === poem.straightMatter){//如果用户已经收藏过该诗，则，将该诗移除收藏
							flag = 1
							this.collectState = null//更改星星的形状为未收藏
							this.poems.splice(index, 1)//移除本首诗
						}
  			})
  			if(flag !== 1){//如果用户没有收藏过本首诗，则将本首诗添加至收藏夹
					this.collectState = poem.collect//更改星星的形状为已收藏
  				this.poems.push(poem)//添加诗
  			}
  		}else{//该用户没有收藏过诗，则将本首诗收藏进去
				this.collectState = poem.collect//更改星星的形状为已收藏
  			this.poems.push(poem)//添加诗
  		}
      localStorage.setItem('poemshelf',JSON.stringify(this.poems))
  	}
  	
  },
	beforeRouteEnter(to, from, next) {//判断用户是否收藏该诗
			next(vm => {
				vm.collectState = null//首先将星星的状态调整为未收藏
				if(localStorage.getItem("poemshelf")){//如果用户有收藏诗才进行判断
					vm.poems = JSON.parse(localStorage.getItem("poemshelf"))
					vm.poems.forEach((ele, index) => {//循环遍历localstorage，查看用户是否有收藏本诗
						if(vm.straightMatter === ele.straightMatter){
							vm.collectState = 'true'//ok，用户有收藏本诗，将星星的形状变为已收藏
						}
					})
				}
			})
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