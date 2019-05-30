<template>
  <div class="collection">
    <TopBar :title=name></TopBar>
    <PoemAbout :items="poems"></PoemAbout>
  </div>
</template>

<script>
// @ is an alias to /src
import PoemAbout from '@/components/PoemAbout.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'collection',
  components: {
      PoemAbout,
      TopBar
  },
  data(){
  	return{
  		poems:null,
        name:'收藏',
  	}
  },
  methods:{
  	getPoemshelf(){
  	    var poem = {
            title:'水调歌头 .秉承中秋',
            authors:'/宋代、苏轼',
            content:'秉承中秋，欢饮达旦，大醉，作此篇兼怀子由。|',
        }
        var poem2 = {
            title:'水调歌头 .秉承中秋',
            authors:'/宋代、苏轼',
            content:'秉承中秋，欢饮达旦，大醉，作此篇兼怀子由。|',
        }
  		var poemExampel = []
        poemExampel.push(poem)
        poemExampel.push(poem2)
  		//使用时去掉注释
			//poemExampel = poem
        ///如果存储的是复杂结构的，比如对象，浏览器会把存储的这个对象的类型转换为一个字符串，
        // 如[objectt,object],然后存储到localStorag,故获取也是这个字符串e，
        // //故复杂结构要先序列化,载通过反序列化获取
        localStorage.setItem('poemshelf',JSON.stringify(poemExampel))
  		// localStorage.setItem('poemshelf',poemExampel);
  		this.poems = JSON.parse(localStorage.getItem('poemshelf'))
        console.log(this.poems)

  	}
  },
  created(){
  	this.getPoemshelf()
  }
}
</script>
<style scoped lang="less">
  .collection{
    height: 100%;
  }
</style>