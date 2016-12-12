<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/select2/select2.css" />
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/select2/select2-fix.css" />
	<script src="/statics/plugins/adminLTE/plugins/select2/select2.full.min.js"></script>
	<div class="col-md-6">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Select</h3>
			</div>
			<div class="box-body">
				<div class="form-group">
					<label for>请选择 :</label>
					<select class="form-control select2" data-placeholder="请选择" style="width:100%;">
						<option value="Alabama">Alabama</option>
						<option value="Alaska">Alaska</option>
						<option value="California">California</option>
						<option value="Delaware">Delaware</option>
						<option value="Tennessee">Tennessee</option>
						<option value="Texas">Texas</option>
						<option value="Washington">Washington</option>
					</select>
				</div>
				<div class="form-group">
					<label for>请选择 :</label>
					<select class="form-control select2" multiple="multiple" data-placeholder="请选择" style="width:100%;">
						<option value="Alabama">Alabama</option>
						<option value="Alaska">Alaska</option>
						<option value="California">California</option>
						<option value="Delaware">Delaware</option>
						<option value="Tennessee">Tennessee</option>
						<option value="Texas">Texas</option>
						<option value="Washington">Washington</option>
					</select>
				</div>
				<script type="text/javascript">
				$(".select2").select2();
				</script>
			</div>
		</div>
	</div>
</div>
<%@include file="../pre.jsp" %>