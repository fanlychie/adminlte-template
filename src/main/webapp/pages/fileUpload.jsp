<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/css/fileinput.min.css" />
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/js/fileinput.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/js/locales/zh.js"></script>
	<div class="col-md-6">
        <input id="uploadfile" name="files">
	</div>
	<script type="text/javascript">
        var fileUpload = $("#uploadfile").fileupload({
            maxFileCount: 2,
            url : ctx + '/fileupload',
            success : function (result) {
                console.log(result);
            }
        });
	</script>
</div>
<%@include file="pre.jsp" %>