<%@ page pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>登录页面</title>
	<meta content="IE=11.0000" http-equiv="X-UA-Compatible">
	<link rel="stylesheet" href="/statics/css/login.css" />
	<script src="/statics/plugins/adminLTE/plugins/jQuery/jquery-2.2.3.min.js" ></script>
	<script src="/statics/js/login.js" ></script>
</head>
<body>
	<div class="top_div"></div>
	<div class="main">
		<div class="tinitial"><div class="tou"></div>
			<div class="initial_left_hand" id="left_hand"></div><div class="initial_right_hand" id="right_hand"></div>
		</div>
		<form action="">
			<p class="uinput">
				<span class="u_logo"></span> <input class="ipt" type="text" placeholder="请输入账户名称">
			</p>
			<p class="pinput">
				<span class="p_logo"></span> <input class="ipt" id="password" type="password" placeholder="请输入账户密码">
			</p>
			<div class="mbott">
				<div class="login-btn">登录</div>
			</div>
		</form>
	</div>
</body>
</html>