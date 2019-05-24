<template>
  <div class="poemsFromSearch">
    诗歌搜索结果页
    <div class="poetabout">
    		<div class="poet">
    			{{poet}}
    		</div>
    		
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'opemsFromSearch',
  components: {
  },
  data(){
  	return{
  		poet: null
  	}
  },
  computed: {
  	poet(){
  		return store.state.searchAuthor
  	}
  }
}
</script>
