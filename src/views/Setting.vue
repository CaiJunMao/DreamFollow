<template>
	<div class="setting">
		<TopBar :title=name></TopBar>
		<el-table :data="tableData" :show-header='showHeader' style="width: 100%;font-size: 25px;">
			<el-table-column prop="opsition" label="选项" min-width="60">
			</el-table-column>
			<el-table-column prop="statue" label="状态" min-width="40">
				<template slot-scope="scope">
					<template v-if="scope.row.opsition=='字体选择'">
						<!--选择器-->
						<el-select v-model="fontValue" @change="changeFont" >
							<el-option v-for="item in fontOptions" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
					<template v-if="scope.row.opsition=='字体大小'">
						<el-radio-group v-model="fontSize" size='mini' style='display: flex;justify-content: space-between;'>
							<el-radio-button label="small" >小</el-radio-button>
							<el-radio-button label="middle">中</el-radio-button>
							<el-radio-button label="big">大</el-radio-button>
						</el-radio-group>
					</template>
					<template v-if="scope.row.opsition=='保存历史记录'">
						<el-button round @click='isSaveHistory(scope.row.statue)'  type="info" plain>{{ scope.row.statue }}</el-button>
					</template>
					<!--<template v-else>{{ scope.row.statue }}</template>-->

				</template>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
	import TopBar from '@/components/TopBar.vue'
	export default {
		name: 'setting',
		components: {
			TopBar
		},
		data() {
			return {
				name: '设置',
				tableData: [{
						opsition: '字体大小',
						statue: '中',
					},
					{
						opsition: '字体选择',
						statue: '',
					},
					{
						opsition: '保存历史记录',
						statue: '否',
					},
					{
						opsition: '意见反馈',
						statue: '',
					},
					{
						opsition: '关于',
						statue: '',
					},

				],
				showHeader: false,
				fontOptions: [{
						value: 'fz',
						label: '肥宅'
					},
					{
						value: 'hc',
						label: '火柴'
					},
					{
						value: 'jn',
						label: '江南'
					},
					{
						value: 'xy',
						label: '行云'
					},
				],
				//font-Family
				fontValue: 'jn',
				//font-size
				fontSize:'middle',
				//saveHistory?
				isSave:'否'
			}
		},
		methods: {
			changeFont() {
				console.log(this.fontValue)
				this.$store.commit('changeFont', this.fontValue)
			},
			isSaveHistory(status) {
				console.log(status)
				if(status =='是'){
					this.tableData[2].statue ='否'
				}else{
					this.tableData[2].statue = '是' 
				}
				console.log(this.tableData[2].statue)
//				this.$store.commit('changeFont', this.fontValue)
			}
		},
	}
</script>
<style lang="less" scoped>
	.setting {
		height: 100%;
	}
</style>