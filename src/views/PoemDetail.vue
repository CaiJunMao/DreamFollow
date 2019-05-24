<template>
  <div class="poemDetail">
    诗歌详情页
    <div class="poetabout">
    		<span>{{title}}</span>
    </div>
    <div class="author">
    		<span>{{author}}</span>
    </div>
    <div class="content" v-for="(item, index) in contents" :key="index">
    		<span>{{item}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'opemDetail',
  components: {
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
  }
}
</script>
