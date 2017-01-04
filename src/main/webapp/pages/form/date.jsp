<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<!-- 日期时间范围 -->
	<!-- http://www.daterangepicker.com/#options -->
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/daterangepicker/daterangepicker.css" />
	<script src="/statics/plugins/adminLTE/plugins/daterangepicker/moment.min.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/daterangepicker/daterangepicker.js"></script>
	<!-- 日期 -->
	<!-- http://bootstrap-datepicker.readthedocs.io/en/latest/options.html -->
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/datepicker/datepicker3.css" />
	<script src="/statics/plugins/adminLTE/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/datepicker/locales/bootstrap-datepicker.zh-CN.js"></script>
	<div class="col-md-6">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Date</h3>
			</div>
			<div class="box-body">
				<div class="form-group">
					<label for>日期时间范围 : </label>
					<div class="input-group">
						<div class="input-group-addon"><i class="fa fa-clock-o"></i></div>
						<input type="text" class="form-control change-refresh-control pull-right" id="datetime-range">
					</div>
				</div>
				<script type="text/javascript">
				$('#datetime-range').datetimerange();
				</script>
				<div class="form-group">
					<label for>日期范围 : </label>
					<div class="input-group">
						<div class="input-group-addon"><i class="fa fa-calendar"></i></div>
						<input type="text" class="form-control change-refresh-control pull-right" id="date-range">
					</div>
				</div>
				<script type="text/javascript">
				$('#date-range').daterange();
				</script>
				<div class="form-group">
					<label for>日期 : </label>
					<div class="input-group">
						<div class="input-group-addon"><i class="fa fa-calendar"></i></div>
						<input type="text" class="form-control change-refresh-control pull-right" id="datepicker">
					</div>
				</div>
				<script type="text/javascript">
				$('#datepicker').date();
				</script>
			</div>
		</div>
	</div>
</div>
<%@include file="../pre.jsp" %>