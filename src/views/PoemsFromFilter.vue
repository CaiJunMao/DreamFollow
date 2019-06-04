<template>
  <div class="poemsFromFilter">
    <TopBar :title=name ></TopBar>
    <!--<div class="poet" v-if="author">
    		<div class="author">
    			<span>{{authorIntroduce.name}}</span>
    		</div>
    		<div class="introduce">
    			<div>{{authorIntroduce.resume}}</div>
    		</div>
    </div>-->
    <PoemAbout :items="sort" v-if="sort"></PoemAbout>
    <!--<PoemAbout :items="poemOfPoet" v-if="author"></PoemAbout>-->
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
  data(){
  	return{
  		authorIntroduce: null,
  		poemOfPoet: [],
  		sort1: null,
  		sortflag: 1,//控制请求只执行一次
  		authorid: null,//存储请求到的作者的id
  		authorflag: 1,
  		name:'筛选结果'
  	}
  },
  computed: {
  		sort(){
  			if(this.$store.state.sort && this.sortflag){
  				this.sortflag = 0
  				const request = new Request()
  				request.http({
  					 url: "/api/v1/poetry/search",
  					 method: "GET",
  					 params: {
				        keywords: this.$store.state.sort,
				        type: "text",
				        size: "15"
				    }
  				})
  				.then(res => {
  					this.sort1 = res.data.resp.data
  				})
  				
  			}
  			return this.sort1
  		},
	  	author(){
	  		if(this.$store.state.author && this.authorflag){
	  			this.authorflag = 0
	  			const request = new Request()
  				request.http({
  					 url: "/api/v1/poetry/search",
  					 method: "GET",
  					 params: {
				        keywords: this.$store.state.author,
				        type: "author",
				        size: "15"
				    }
  				})
  				.then(res => {
  					this.poemOfPoet = res.data.resp.data
//					this.authorid = res.data.resp.data[0].author._id
  				})
//		  		if(this.authorid){
//		  			const request = new Request()
//	  				request.http({
//	  					 url: "/api/v1/author/detail",
//	  					 method: "GET",
//	  					 params: {
//					        authorId: '59dca987bddaf83748e8904c'
//					    }
//	  				})
//	  				.then(res => {
//	  					this.authorIntroduce = res.data.resp
//	  				})
//		  		}
	  		}
	  		
	  		if(this.poemOfPoet)
	  			return true
	  		else	
	  			return false
	  	}
  	},
  }
</script>

<style lang="less" scoped>
	.poemsFromFilter{
		height: 100%;
		.poemAbout{
			height: 86%;
			overflow: scroll;
		}
	}
</style>

