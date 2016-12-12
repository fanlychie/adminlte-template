<%@ page pageEncoding="UTF-8"%>
<div class="row">
	<div class="col-md-6">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Input</h3>
			</div>
			<div class="box-body">
				<div class="form-group">
					<label for>文本</label>
					<input type="text" class="form-control" placeholder="输入点什么 ...">
				</div>
				<div class="form-group">
					<label for>多行文本</label>
					<textarea class="form-control" rows="3" placeholder="输入点什么 ..."></textarea>
				</div>
				<div class="form-group">
					<label for>复选框</label>
					<div class="checkbox">
						<label> <input type="checkbox"> 选项 1 </label>
					</div>
					<div class="checkbox">
						<label> <input type="checkbox"> 选项 2 </label>
					</div>
					<div class="checkbox">
						<label> <input type="checkbox"> 选项 3 </label>
					</div>
				</div>
				<div class="form-group">
					<label for>单选框</label>
					<div class="radio">
						<label> <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> 选项 1 </label>
					</div>
					<div class="radio">
						<label> <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> 选项 2 </label>
					</div>
					<div class="radio">
						<label> <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"> 选项 3</label>
					</div>
				</div>
				<div class="form-group">
					<label for>下拉框</label>
					<select class="form-control">
						<option>选项 1</option>
						<option>选项 2</option>
						<option>选项 3</option>
						<option>选项 4</option>
						<option>选项 5</option>
					</select>
				</div>
				<div class="form-group">
					<label for>账号</label>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-user"></i></span>
						<input type="text" class="form-control" placeholder="账号/邮箱/手机">
					</div>
				</div>
				<div class="form-group">
					<label for>密码</label>
					<div class="input-group">
						<span class="input-group-addon"><i class="fa fa-key"></i></span>
						<input type="password" class="form-control" placeholder="登录密码">
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<%@include file="../pre.jsp" %>