<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/summernote/summernote.css" />
	<script src="/statics/plugins/adminLTE/plugins/summernote/summernote.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/summernote/lang/summernote-zh-CN.min.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
	<div class="col-md-12">
		<form role="form">
			<textarea name="text"></textarea>
			<button type="submit" class="btn btn-default btn-flat">确定提交</button>
		</form>
		<br><br>
	</div>
	<script>
        var editor = $('textarea').editor({placeholder : '输入点什么吧...'});
        $('form').on('submit', function (e) {
            e.preventDefault();
            alert(editor.val());
        });
	</script>
</div>
<%@include file="../pre.jsp" %>