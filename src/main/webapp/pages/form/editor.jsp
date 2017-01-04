<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/summernote/summernote.css" />
	<script src="/statics/plugins/adminLTE/plugins/summernote/summernote.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/summernote/lang/summernote-zh-CN.min.js"></script>
	<div class="col-md-12">
		<form role="form">
			<textarea name="text" class="summernote"></textarea>
			<button type="submit" class="btn btn-default btn-flat">确定提交</button>
		</form>
	</div>
	<script>
        $('.summernote').summernote({
            height: 200,
            lang: 'zh-CN',
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                ['fontname', ['fontname']],
                ['fontsize', ['fontsize']],
                ['para', ['ul', 'ol', 'paragraph', 'height']],
                ['insert', ['table', 'link', 'picture', 'video', 'hr']],
                ['view', ['fullscreen']],
            ],
            styleTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'],
            fontSizes: ['12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
            fontNames: ['微软雅黑', '宋体', '新宋体', '仿宋体', '楷体'],
            placeholder : '输入点什么 . . .',
        });
        $('form').on('submit', function (e) {
            e.preventDefault();
            alert($('.summernote').val());
        });
	</script>
</div>
<%@include file="../pre.jsp" %>