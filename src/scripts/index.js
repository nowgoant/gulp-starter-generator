import './myconfig';
//导入LOADING工具
import './../../jrmui/src/scripts/ui/loading';


const bindEvent = function() {
  //加点击效果和防重复点击
  $('.jrm-btn').bindTapActive().safeClick(function() {
    console.log('hihi');
    this.enable(true);
  });
};

$(function() {
  $.loading.showPage();

  bindEvent();
});