import './../../jrmui/src/scripts/vendor/jrm.fastclick';
import './../../jrmui/src/scripts/vendor/jrm.zepto';

//线上环境
var baseURL = '//aa.com';

if (process.env.NODE_ENV === 'test') {
  //测试环境
  baseURL = '//bb.com';
} else if (process.env.NODE_ENV === 'pretest') {
  //预发环境
  baseURL = '//cc.com';
}

baseURL += '/dd/xx/xxx/';

//配置信息-不同命令，不同环境
console.log(baseURL);