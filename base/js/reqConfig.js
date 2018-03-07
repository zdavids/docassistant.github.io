/*****************************增值测试地址*************************************/
var requestUrl = "";	//请求后台地址
// var requestUrl = "http://localhost:8051";	//请求后台地址
var currEnv = "php";	//html或者php



/*****************************用户测试地址*************************************/
//var requestUrl = "http://10.4.105.172:8051";	//请求后台地址

/*****************************本机测试地址*************************************/
//var requestUrl = "http://localhost:8080";	//请求后台地址


/******************************************************************************
 *                               地址跳转
 *    author:zhongwei by egou
 *    version:1.0
 *    updateTime: 2017-07-28
 *    参数说明:
 *		strUrl:跳转地址   status:错误码，404,500这种,  
 *      jumpType:0表示本页刷新,1表示打开新页面
 *
 ******************************************************************************/


function comJudgeLogin(){
	$.ajax({ 
	    url: requestUrl+'/vasCommon/getUserInfo', 
	    type:'post',
	    data:'',
	    async:false,
	    success:function (data){
	    	data = JSON.parse(data);

	    	//status==1已登录，0未登录
	    	if(typeof(comJudgeLogin) == 'function'){
	    		comJudgeLoginLogic(data);
	    	}
	    },
	    error:function (data){
	    	alert(data)
	    }
	});
}