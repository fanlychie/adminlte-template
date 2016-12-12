<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-md-6">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">表单 1</h3>
			</div>
			<form role="form">
				<div class="box-body">
					<div class="form-group">
						<label for="name">账号</label>
						<input type="text" class="form-control" id="name" placeholder="账号/邮箱/手机">
					</div>
					<div class="form-group">
						<label for="passwd">密码</label>
						<input type="password" class="form-control" id="passwd" placeholder="登录密码">
					</div>
				</div>
				<div class="text-center box-footer">
					<button type="submit" class="btn btn-default btn-flat">确定提交</button>
				</div>
			</form>
		</div>
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">表单 2</h3>
			</div>
			<form class="form-horizontal">
				<div class="box-body">
					<div class="form-group">
						<label for="name2" class="col-sm-2 control-label">账号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="name2" placeholder="账号/手机">
						</div>
					</div>
					<div class="form-group">
						<label for="email" class="col-sm-2 control-label">邮箱</label>
						<div class="col-sm-8">
							<input type="email" class="form-control" id="email" placeholder="邮箱">
						</div>
					</div>
					<div class="form-group">
						<label for="passwd2" class="col-sm-2 control-label">密码</label>
						<div class="col-sm-8">
							<input type="password" class="form-control" id="passwd2" placeholder="登录密码">
						</div>
					</div>
				</div>
				<div class="text-center box-footer">
					<button type="submit" class="btn btn-default btn-flat">确定提交</button>
				</div>
			</form>
		</div>
	</div>
</div>
<%@include file="../pre.jsp" %>