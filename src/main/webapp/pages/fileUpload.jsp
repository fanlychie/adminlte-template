<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/css/fileinput.min.css" />
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/js/fileinput.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-fileinput/js/locales/zh.js"></script>
	<div class="col-md-6">
		<form enctype="multipart/form-data">
			<div class="form-group">
				<input id="uploadfile" name="files" type="file" multiple class="file-loading">
			</div>
		</form>
	</div>
	<script type="text/javascript">
        $("#uploadfile").fileinput({
            language: 'zh',
            uploadUrl: ctx + '/fileupload', // you must set a valid URL here else you will get an error
            allowedFileExtensions : ['jpg', 'png','gif'],
            overwriteInitial: false,
            maxFileSize: 1000,
            maxFilesNum: 10,
            uploadAsync: true
        });
        $('#uploadfile').on('fileerror', function(event, data, msg) {
            debugger
            console.log(data);
        });
        //异步上传返回结果处理
        $("#uploadfile").on("fileuploaded", function (event, data, previewId, index) {
            debugger
            console.log(data);

        });

        //同步上传错误处理
        $('#uploadfile').on('filebatchuploaderror', function(event, data, msg) {
            debugger
            console.log(data);
        });
        //同步上传返回结果处理
        $("#uploadfile").on("filebatchuploadsuccess", function (event, data, previewId, index) {
            debugger
            console.log(data);
        });

        //上传前
        $('#uploadfile').on('filepreupload', function(event, data, previewId, index) {
            debugger
            console.log(data);
        });
	</script>
</div>
<%@include file="pre.jsp" %>