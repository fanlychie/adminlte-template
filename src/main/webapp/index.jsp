<%@ page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<!-- 公用基础脚本 -->
	<%@include file="base.jsp"%>
</head>
<body class="hold-transition skin-blue-light sidebar-mini">
	<div class="wrapper">
		<!-- 公用头部 -->
		<%@include file="header.jsp"%>
		<!-- 左侧菜单 -->
		<%@include file="menu.jsp"%>
		<div class="content-wrapper">
			<!-- 主体内容 -->
			<section class="content" id="main-content">
				<div class="row">
					<div class="col-md-12">主体内容</div>
				</div>
			</section>
		</div>
		<!-- 公用脚部 -->
		<%@include file="footer.jsp" %>
		<!-- 设置面板 -->
		<%@include file="setting.jsp" %>
	</div>
</body>
</html>