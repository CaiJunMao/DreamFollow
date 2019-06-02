<template>

  <div class="index" >
  	<div @click="hide" class = "indexCss" :class="{indexCssForMenu:routerStyle=='menuStyle','indexCssFirst':routerStyle==''}">
  		<TopBar :title=name :menuShow="showMenu"></TopBar>
	    <el-button @click.stop="showFilter" >筛选</el-button>
	
	    <el-button @click="$router.push({name:'poemSearch'})">搜索</el-button>
  		<Recommend></Recommend>
    <PoemAbout :items="poetrys"></PoemAbout>
  	</div>
    
    <!--<div :class="{ showMenuCss: menuStyle }">-->
    	 <!--<router-view ></router-view>-->
    <!--</div>-->
   	<div class="secondRouter" >
	  	<transition :name="transitionName">
	  		<keep-alive>
	      	<router-view :class="routerStyle"></router-view>
	      </keep-alive>
	  	</transition>
	  </div>
    


  </div>
</template>

<script>
import Recommend from '@/components/Recommend.vue'
import PoemAbout from '@/components/PoemAbout.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'index',
  components: {
  	Recommend,
  	PoemAbout,
    TopBar,
  },
  data(){
  	return{
  		poetrys: null,
      name:"首页",
      //目录样式，true为出现和false隐藏
      menuStyle:false,
      filterStyle:false,
      routerStyle:'',
      transitionName:null,
  	}
  },
    methods:{
      showMenu(){
        console.log("点击显示目录")
        this.$router.push({name:'menu'})
        //更改目录样式,出现且左浮，index右缩
//      this.menuStyle = !this.menuStyle
        this.routerStyle='menuStyle'
//      this.transitionName = 'slide'
      },
      showFilter(){
        console.log("点击显示筛选")
        this.$router.push({name:'filter'})
        //更改目录样式,出现且左浮，index右缩
//      this.filterStyle = !this.filterStyle
        this.routerStyle='filterStyle'
//      this.transitionName = 'slide'
      },
      hide(){
        console.log("点击隐藏")
        this.$router.push({name:'index'})
        //更改目录样式,出现且左浮，index右缩
        this.menuStyle = !this.menuStyle
        this.routerStyle=''
//       this.transitionName = 'slide-right'
      },
    },
    watch:{
  	'$route' (to, from) {
	    //首页跳目录，slide,目录跳首页slide-right
	   
	   	console.log(from)
	   	if(to.name=='menu'){
	   		this.transitionName = 'menu-slide-left'
	   	}else if(from.name=='index' && to.name=='filter'){
	   		this.transitionName = 'center-out'
	   	}else if(to.name=='index'){
	   		this.routerStyle=''
	   	}
	    
	  }
  },
   beforeRouteEnter(to, from, next){
   	axios
   		.get("https://api.apiopen.top/getSongPoetry?page=1&count=20")
   		.then(res => {
   			next(vm =>{
   				vm.poetrys = res.data.result.slice(0, 20)
   			})
   		})
   },
created(){
	//重置子路由遮罩，让其消失，避免首页无法点击
//	this.routerStyle=''
}

}
</script>
<style lang="less" scoped >
	
	.index{
		height: 100%;
		position: relative;
		
		.secondRouter{
			display: flex;
		}
		.indexCss{
			transition: all 1s ease-in; 
			height: 100%;
		}
		.indexCssFirst{
			background: blueviolet;
			height: 100%;
		}
		.indexCssForMenu{
			background: deepskyblue;
			height: 100%;
			width: 100%;
			position: absolute;
			/*top: 10%;*/
			/*形变：右移且缩小*/
			transform: scale(0.9, 0.9) translateX(70%);
		}
	}
		/*transition 的name作为前缀*/
	/*跟transition name="fade"的name自动匹配，也就是作为前缀*/
	/*目录样式*/
	.menuStyle{	
		position: absolute;
		top: 0;
		height: 100%;
		width: 70%;
	}
	.filterStyle{	
		/*align-self: center;*/
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		transform: scale(0.9, 0.9);
	}
	
	.menuHideStyle{
		position: absolute;
		display: none;
		height: 100%;
		width: 70%;
		top: 0;
		left: 0;
		z-index: 99;
	}
	
	/*右滑入slide-right，左滑入slide-left,区别在于偏移的方向*/
	/*目录路由过渡效果*/
 .menu-slide-left-enter{
 		/*opacity: 0;*/
 		transform: translateX(-70%);
 }
 .menu-slide-left-enter-active{
	  transition: all 1s ease-in;
	}
	.menu-slide-left-enter-to{
 		/*opacity: 1;*/
	}
	.menu-slide-left-leave{
		
	 }
 .menu-slide-left-leave-active {
	  transition: all 1s;
	  
	}
	.menu-slide-left-leave-to{
		transform: translateX(-70%);
		opacity: 0;
	}
	/*筛选路由过渡效果*/
	.center-out-enter{
 		opacity: 0.5;
 		transform: scale(0.3, 0.3);
 }
 .center-out-enter-active{
	  transition: all 2s ;
	}
	.center-out-enter-to{
 		opacity: 1;
 		transform: scale(0.9, 0.9);
	}
	.center-out-leave{
		
	 }
 .center-out-leave-active {
	  transition: all 2s;
	  
	}
	.center-out-leave-to{
		transform: scale(0.3, 0.3);
		opacity: 0;
	}

</style>
