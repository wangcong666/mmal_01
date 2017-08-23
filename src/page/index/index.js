/*var $=require('jquery');*/
//$("body").html("this is jquery222~~");
// require("../common.js");
require("./index.css");
console.log("index");

var _user = require('service/user-service.js');
_user.login(
   'username' : 'zs'
   'password' : '1223'
	);
