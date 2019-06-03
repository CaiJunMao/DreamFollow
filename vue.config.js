module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "https://account.getlove.cn/apiGetWay/5b010c7445657b2b64ada7a2",
				changeOrigin: true
			},
//			"/test": {
//				target: "http://localhost:8020",
//				changeOrigin: true,
//				pathRewrite: {
//					"^/test": ""
//				}
//			}
		}
	}
}