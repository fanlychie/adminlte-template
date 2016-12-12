<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-md-6">
		<button type="button" class="btn btn-block btn-default btn-flat" data-toggle="modal" data-target="#modal1">模态框</button>
		<button type="button" class="btn btn-block btn-default btn-flat" onclick="openDialog()">脚本模态框</button>
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
				<div class="modal-body">
					<p>主体内容...<br><br><br></p>
				</div>
				<div class="modal-footer text-center">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭退出</button>
					<button type="button" class="btn btn-primary">确认保存</button>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
	var openDialog = function() {
		// 打开模态框
		$('#modal1').modal('show');
		// 关闭模态框
		// $('#modal1').modal('hide');
	};
	</script>
</div>
<%@include file="pre.jsp" %>