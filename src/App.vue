<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!-- 使用动态的 transition name :name="transitionName"-->
    <div class="routerCss">
	  	<!--<transition name="fade">
	  		<keep-alive>
	      	<router-view></router-view>
	      </keep-alive>
	  	</transition>-->
	  	<transition :name="transitionName">
	  		<keep-alive>
	      	<router-view></router-view>
	      </keep-alive>
	  	</transition>
	  </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
//  HelloWorld
  },
  data(){
  	return{
  		//默认路由跳转时都是右滑入，只有执行$router.go(-1)，才左滑入
  		transitionName:'',
  		toRouter:'',
  		fromRouter:'',
  		routerList :[],
	    flag: 0,
  	}
  },
  watch:{
  	'$route' (to, from) {
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	    //当to，和from一直往下走就右滑，如果突然to和from互换，就左滑
	   
	   	console.log('从'+from.path+"去："+ to.path)
	   	
	    if(this.flag !=0 && to.name == this.routerList[this.flag-1][0].name){
	    	console.log( '往回')
	    	//删除数组最后一个
	    	this.routerList.splice(this.flag-1,1)
	    	this.flag--
	    	this.transitionName = 'slide-left'
	    }else{
	    	console.log( '往下')
	    	this.routerList[this.flag] = [from,	to]
	    	this.flag++
	    	this.transitionName = 'slide-right'
	    }
	  }
  },
  
}
</script>

<style lang="less">
	html{
		height: 100%;
	}
	body{
		margin: 0;
		padding: 0;
		height: 100%;
	}
@font-face {
	font-family: 'fly';
	src: url(font/1.ttf);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'fly';
  /*margin-top: 60px;*/
 	height: 100%;
 	/*设置路由铺满app*/
 >div{
 		height: 100%;
 	}
 .routerCss{
		/*display: flex;*/
		position: relative;
		>div{
			width: 100%;
			position: absolute;
			top: 0;
		}
	}
	/*右滑入slide-right，左滑入slide-left,区别在于偏移的方向*/
	.slide-right-enter{
 		transform: translateX(100%);
 		opacity: 0;
 }
 .slide-left-enter{
 		opacity: 0;
 		transform: translateX(-100%);
 }
 .slide-right-enter-active ,.slide-left-enter-active{
	  transition: all 2s ;
	}
	.slide-right-enter-to{
		opacity: 1;
	}
	.slide-left-enter-to{
 		opacity: 1;
	}
 .slide-right-leave,.slide-left-leave{
 }
 .slide-right-leave-active,.slide-left-leave-active {
	  transition: all 2s;
	  
	}
	.slide-right-leave-to{
		transform: translateX(-100%);
		opacity: 0;
	}
	.slide-left-leave-to{
		transform: translateX(100%);
		opacity: 0;
	}
	
}
	
</style>
