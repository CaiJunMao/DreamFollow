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
  		poems: [],
        name:'收藏',
  	}
  },
  methods:{
  },
  created(){
  	this.poems = JSON.parse(localStorage.getItem('poemshelf'))
    console.log(this.poems)
  }
}
</script>
<style scoped lang="less">
  .collection{
    height: 100%;
  }
</style>