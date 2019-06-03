<template>
  <div class="poemsFromFilter">
    <TopBar :title=name ></TopBar>
    <div class="poet" v-if="author">
    		<div class="author">
    			<span>{{authorIntroduce.name}}</span>
    		</div>
    		<div class="introduce">
    			<div>{{authorIntroduce.desc}}</div>
    		</div>
    </div>
    <PoemAbout :items="dynasty" v-if="dynasty"></PoemAbout>
    <PoemAbout :items="poemOfPoet" v-if="poemOfPoet"></PoemAbout>
  </div>
</template>

<script>
// @ is an alias to /src
import PoemAbout from '@/components/PoemAbout.vue'
import TopBar from '@/components/TopBar.vue'
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
  		dynastyTang: null,
  		dynastySong: null,
  		name:'筛选结果'
  	}
  },
  computed: {
  		dynasty(){
  			if(this.$store.state.dynasty == '唐朝'){
	  			axios
			  		.get("https://api.apiopen.top/getTangPoetry?count=100")
			  		.then(res => {
			  			this.dynastyTang = res.data.result
			  		})
		  		return this.dynastyTang
	  		}else if(this.$store.state.dynasty == '宋朝'){
	  			axios
		  		.get("https://api.apiopen.top/getSongPoetry?count=100")
		  		.then(res => {
		  			this.dynastySong = res.data.result
		  		})
		  		return this.dynastySong
	  		}
  		},
	  	author(){
	  		if(this.$store.state.author){
	  			axios
		  			.get('https://api.apiopen.top/searchAuthors?name=' + this.$store.state.author)
		  			.then(res => {
		  				this.authorIntroduce = res.data.result[0]
		  			})
		  		axios
		  			.get("https://api.apiopen.top/likePoetry?name=" + this.$store.state.author)
		  			.then(res => {
		  				res.data.result.forEach((ele, index) => {
		  					if(ele.authors == this.$store.state.author){
								this.poemOfPoet.push(ele)
		  					}
		  				})
		  			})
	  		}
	  		
	  		if(this.authorIntroduce && this.poemOfPoet)
	  			return true
	  		else	
	  			return false
	  	}
  	},
  }
</script>

