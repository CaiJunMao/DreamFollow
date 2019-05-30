<template>
  <div class="poemsFromFilter">
    筛选结果页
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
export default {
  name: 'OpemsFromFilter',
  components: {
  	PoemAbout
  },
  data(){
  	return{
  		authorIntroduce: null,
  		poemOfPoet: [],
  		dynastyTang: null,
  		dynastySong: null
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

