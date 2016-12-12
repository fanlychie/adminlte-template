<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<link rel="stylesheet" href="/statics/plugins/adminLTE/plugins/bootstrap-table/bootstrap-table.min.css" />
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-table/bootstrap-table.min.js"></script>
	<script src="/statics/plugins/adminLTE/plugins/bootstrap-table/bootstrap-table-zh-CN.min.js"></script>
	<div class="col-md-12">
		<table id="data-table"></table>
		<div id="toolbar" class="btn-group">
			<table>
				<tr>
					<td>
						<div class="input-group">
							<span class="input-group-addon">ID</span> <input type="text" class="form-control" name="id">
						</div>
					</td>
					<td>
						<div class="input-group">
							<span class="input-group-addon">姓名</span> <input type="text" class="form-control" name="name">
						</div>
					</td>
					<td>
						<div class="input-group">
							<span class="input-group-addon">电子邮箱</span> <input type="text" class="form-control" name="email">
							<span class="input-group-addon fasearch"><i class="fa fa-search"></i></span>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<script type="text/javascript">
		var table = $('#data-table').datatable({
			idField : 'id',
			url : '/data/list',
			searchPlaceholder : '输入姓名搜索',
			toolbarBtn : [
				'<button type="button" class="btn btn-default btn-flat"><i class="fa fa-plus"></i></button>',
				'<button type="button" class="btn btn-default btn-flat"><i class="fa fa-pencil"></i></button>',
				'<button type="button" class="btn btn-default btn-flat"><i class="fa fa-trash"></i></button>',
			],
			columns : [
				{
				    title : '',
					field : 'state',
				    checkbox :'true',
				    align : "center"
				},
				{
				    title : 'ID',
					field : 'id',
			        align : "center"
				},
				{
				    title : '姓名',
					field : 'name',
			        align : "center"
				},
				{
				    title : '电子邮箱',
					field : 'email',
			        align : "center"
				},
				{
				    title : '注册时间',
					field : 'createTime',
					sortable : true,
			        align : "center",
			        formatter : function (value, row, index) {
			        	return new Date(value).format('yyyy-MM-dd hh:mm:ss');
			        }
				}
			],
			delCallback : function(row) {
				$.success('删除 ID = ' + row.id);
			},
			editCallback : function(row) {
				$.success('编辑 ID = ' + row.id);
			}
		});
	</script>
</div>
<%@include file="pre.jsp" %>