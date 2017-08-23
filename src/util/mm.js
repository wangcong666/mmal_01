var config ={
	 getServerUrl : 'http://192.168.1.254/mmall_back_01/'
}
var _mm = {
  //网络请求
  request:function (param) {
  	$.ajax({
  		url:param.url || '',
  		success:param.success || function(){alert("suc")},
  		error:param.error || function(){alert("err")}
  	});
  },
  //获得服务器资源的路径
  getServerUrl:function(url){
        return config.getServerUrl+url;
  }
};
module.exports = _mm;