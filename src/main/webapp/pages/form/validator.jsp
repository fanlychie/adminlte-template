<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/bootstrapvalidator/css/bootstrapValidator.min.css" />
	<script src="/statics/plugins/adminLTE/plugins/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrapvalidator/js/language/zh_CN.js"></script>
	<div class="col-md-6">
		<button type="button" class="btn btn-block btn-default btn-flat" data-toggle="modal" data-target="#modal1">打开表单模态框</button>
	</div>
	<div class="modal" data-backdrop="static" id="modal1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">标题</h4>
				</div>
				<form role="form" id="form1">
					<div class="modal-body">
						<div class="form-group">
							<label>账号</label>
							<input type="text" class="form-control" name="account" placeholder="账号/邮箱/手机">
						</div>
						<div class="form-group">
							<label>密码</label>
							<input type="password" class="form-control" name="passwd" placeholder="登录密码">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭退出</button>
						<button type="submit" class="btn btn-primary">确认保存</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript">
	$('#form1').validator({'account':'请填写您登陆的账户名称', 'passwd' : '请填写您的登陆密码'}, function(form) {
		alert('现在表单可以提交了 ^_^*');
	});
	</script>
</div>
<%@include file="../pre.jsp" %>