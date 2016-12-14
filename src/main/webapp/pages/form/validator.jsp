<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/bootstrapvalidator/css/bootstrapValidator.min.css" />
	<script src="/statics/plugins/adminLTE/plugins/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrapvalidator/js/language/zh_CN.js"></script>
	<div class="col-md-6">
		<button type="button" class="btn btn-block btn-default btn-flat" onclick="dialog.show()">打开表单模态框</button>
	</div>
	<div id="form" style="display:none">
		<div class="form-group">
			<label>账号</label>
			<input type="text" class="form-control" name="username" placeholder="账号/邮箱/手机">
		</div>
		<div class="form-group">
			<label>密码</label>
			<input type="password" class="form-control" name="password" placeholder="登录密码">
		</div>
	</div>
	<script type="text/javascript">
	var dialog = $.dialog({
		title : '验证表单',
		content : '#form',
		buttons : [
			{
				type : 'submit',
				name : '确认保存'
			},
			{
				name : '关闭退出',
				exit : true
			}
		]
	});
	dialog.form.validator({'username':'请填写您登陆的账户名称', 'password' : '请填写您的登陆密码'}, function(form) {
		alert('账户：' + $('input[name="username"]').val() + ', 密码：' + $('input[name="password"]').val());
		alert('现在表单可以提交了 ^_^*');
	});
	</script>
</div>
<%@include file="../pre.jsp" %>