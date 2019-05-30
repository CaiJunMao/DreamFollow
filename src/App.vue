<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
     <transition name="slide">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
//  HelloWorld
  }
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
	src: url(font/2.ttf);
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
}
	
</style>
