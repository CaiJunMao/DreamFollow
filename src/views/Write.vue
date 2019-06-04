<template>
  <div class="write">
    <TopBar :title=name ></TopBar>
    <el-form :model="poem" ref="poem"  class="demo-dynamic">
		  <el-form-item
		    prop="poemName"
		    label="诗名"
		    label-width="50px"
		  >
		    <el-input v-model="poem.poemName"  style="width: 60%;float: left;"></el-input>
		  </el-form-item>
		  <el-form-item
		    v-for="(domain, index) in poem.domains"
		    :label="'句' + ++index"
		    :key="domain.key"
		    :prop="'domains.' + index + '.value'"
		    label-width="50px"
		  >
		    <el-input v-model="domain.value" style="width: 70%;"></el-input>
		    <el-button @click.prevent="removeDomain(domain)"  style="width: 30%;background-color: transparent;border: none;" icon='el-icon-circle-close' ></el-button>
		  </el-form-item>
		  <el-form-item style="margin:0">
		    <el-button @click="savePoem('poem')"  style="background-color: transparent;">保存</el-button>
		    <el-button @click="addDomain"  style="background-color: transparent;">新增诗句</el-button>
		    <el-button @click="resetForm('poem')"  style="background-color: transparent;">重置</el-button>
		  </el-form-item>
		</el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'write',
  components: {
  	TopBar
  },
  data(){
  	return{
  		name:'题诗',
  		poem: {
          poemName: '',
          domains: [{
            value: ''
          },
          {
            value: ''
          },
          {
            value: ''
          },
          {
            value: ''
          }],
          
        },
  	}
  },
  methods: {
      savePoem(formName) {
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.poem.domains.indexOf(item)
        if (index !== -1) {
          this.poem.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.poem.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
}
</script>

<style lang="less" scoped>
	.write{
		height: 100%;
		background-image: url(../../img/QQ20190530-1.jpg);
		background-size: 100% 100%;
		
	}
</style>
<style  lang="less">
	.write{
		.el-input__inner{
			background-color: transparent;
			/*border: none;*/
		}
	}
	
</style>