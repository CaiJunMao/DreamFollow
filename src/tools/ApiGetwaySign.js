/**
 * create by focus on 2018/5/29 10:05
 */

let crypto = require("crypto");
let ApiGetwaySign = function ({AccessKeyId, AccessKeySecret}) {
    this.AccessKeyId = AccessKeyId;
    this.AccessKeySecret = AccessKeySecret;
};

ApiGetwaySign.prototype = {
    /**
     * Obj转为param
     * @param obj
     * @param encode
     * @returns {string}
     */
    objToUrl: function (obj, encode = false) {
        let strAry = [];
        for (let k in obj) {
            if (encode) {
                strAry.push(encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]));
            } else {
                strAry.push(k + "=" + obj[k])
            }
        }
        return strAry.join("&");
    },
    /**
     * @return {string}
     */
    HmacSHA1: function (str, key) {
        let hmac = crypto.createHmac('sha1', key);
        hmac.update(str,"utf8");
        return hmac.digest("hex");
    },
    sign: function ({method, body = {}, query = {}, path}) {
        let date = new Date();
        let commonQuery = {
            AccessKeyId: this.AccessKeyId,
            SignatureNonce: String(date.getTime()),	//随机字符串
            Timestamp: date.toISOString().replace(/\.\d{3}/, '')
        };
        let tempQuery = Object.assign(commonQuery, query, body);
        let signQuery = {};
        Object.keys(tempQuery).sort().forEach(function (k) {
            signQuery[k] = tempQuery[k];
        });

        let str = method.toUpperCase() + "&" + encodeURIComponent(path) + "&" + (this.objToUrl(signQuery, true));
        signQuery.Signature = this.HmacSHA1(str, "&" + this.AccessKeySecret);
        return signQuery;
    }
};
//module.exports = ApiGetwaySign;
//报错： Error in created hook: "TypeError: Cannot assign to read only property 'exports' of object '#<Object>'"

		//代码没毛病，在webpack打包的时候，可以在js文件中混用require和export。但是不能混用import 以及module.exports 。
		//因为webpack 2中不允许混用import和module.exports ,
		//解决办法就是统一改成ES6的方式编写即可

export default ApiGetwaySign;