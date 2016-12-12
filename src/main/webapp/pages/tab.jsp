<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-md-6">
		<div class="nav-tabs-custom">
			<ul class="nav nav-tabs">
				<li class="active">
					<a href="#tab_1" data-toggle="tab">Tab 1</a>
				</li>
				<li>
					<a href="#tab_2" data-toggle="tab">Tab 2</a>
				</li>
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#"> Tab 3 <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li role="presentation"><a role="menuitem" href="#tab_31" data-toggle="tab">Tab 3-1</a></li>
						<li role="presentation"><a role="menuitem" href="#tab_32" data-toggle="tab">Tab 3-2</a></li>
						<li role="presentation" class="divider"></li>
						<li role="presentation"><a role="menuitem" href="#tab_33" data-toggle="tab">Tab 3-3</a></li>
					</ul>
				</li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active" id="tab_1">Tab 1 内容<br><br><br><br><br><br><br><br></div>
				<div class="tab-pane" id="tab_2">Tab 2 内容<br><br><br><br><br><br><br><br></div>
				<div class="tab-pane" id="tab_31">Tab 3-1 内容<br><br><br><br><br><br><br><br></div>
				<div class="tab-pane" id="tab_32">Tab 3-2 内容<br><br><br><br><br><br><br><br></div>
				<div class="tab-pane" id="tab_33">Tab 3-3 内容<br><br><br><br><br><br><br><br></div>
			</div>
		</div>
	</div>
</div>
<%@include file="pre.jsp" %>