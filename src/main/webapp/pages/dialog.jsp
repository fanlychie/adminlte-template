<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-md-6">
		<button type="button" class="btn btn-block btn-default btn-flat" onclick="dialog.show()">模态框</button>
	</div>
	<div id="form-div" style="display:none">
		<div class="form-group">
			<label for>账户</label>
			<input type="text" name="username" class="form-control" placeholder="输入点什么 ...">
		</div>
		<div class="form-group">
			<label for>密码</label>
			<input type="password" name="password" class="form-control" placeholder="输入点什么 ...">
		</div>
	</div>
	<script type="text/javascript">
	var dialog = $.dialog({
		title : '模态框',
		content : '#form-div', /* '<p>主体内容...<br><br><br></p>' */
		buttons : [
			{
				type : 'submit',
				name : '确认提交',
				click : function(e) {
					// 阻止表单提交
					e.preventDefault();
					alert('账户：' + $('input[name="username"]').val() + ', 密码：' + $('input[name="password"]').val());
					if(confirm("是否关闭模态框？")) {
						dialog.hide();
					}
				}
			},
			{
				name : '关闭退出',
				exit : true
			}
		]
	});
	</script>
</div>
<%@include file="pre.jsp" %>