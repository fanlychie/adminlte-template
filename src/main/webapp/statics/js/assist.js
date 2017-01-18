/**
 * 为 Bootstrap 模板使用简易而封装的函数
 * 
 * @author fanlychie
 */
(function($) {
	$.extend({
		// 异步请求
		_post : function(options) {
			var defaults = {
				url: undefined,
				data: {},
				async: true,
				type: 'post',
				dataType: 'json',
				timeout: 180000
			};
			var settings = $.extend({}, defaults, options);
			$.ajax({
				url: settings.url,
				type: settings.type,
				data: settings.data,
				async: settings.async,
				timeout: settings.timeout,
				dataType: settings.dataType,
				success: function(data) {
					if (settings.success) settings.success(data);
				},
				beforeSend: function() {
					if (settings.beforeSend) settings.beforeSend();
				},
				complete: function() {
					if (settings.complete) settings.complete();
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					if (settings.error) {
						settings.error(XMLHttpRequest, textStatus, errorThrown);
					} else {
						logConsoleError(XMLHttpRequest, textStatus, this);
					}
				}
			});
		},
		// 模态框
		dialog : function(options) {
			var defaults = {
				title : '未命名标题', // 标题
                width : null,        // 宽度
                height : null,       // 高度
				content : '',		 // 内容, JQuery 选择器(eg: '#id' 或 '.cls')或 HTML 内容, 默认已经使用 form 表单包裹了内容区域, 可以通过 dialog.form 获取此表单对象
                initialize : function() {}, // 初始化
				buttons : [			 // 按钮, type 默认为 'button' 类型
				    {
				    	type : 'button',
				    	clas : 'btn-default', // btn-default, btn-primary, btn-success, btn-info, btn-danger, btn-warning
				    	name : '关闭退出',
				    	exit : true,
				    	click : undefined,
				    }
				],
			};
			var settings = $.extend({}, defaults, options);
			var $modal, $modal_title, $modal_form, $modal_body, $modal_footer, $modal_dialog;
            if ($(settings.content).length === 1) {
            	$modal_body = $(settings.content);
                $modal_body.addClass('modal-body');
                $modal_body.wrapAll('<form role="form"></form>');
                $modal_body.after('<div class="modal-footer"></div>');
                $modal_form = $modal_body.parents('form');
                $modal_form.wrapAll('<div class="modal-content"></div>');
                $modal_form.before(
                	'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
							'<span aria-hidden="true">&times;</span>' +
						'</button>' +
						'<h4 class="modal-title"></h4>' +
                    '</div>'
				);
                var $modal_content = $modal_body.parents('div.modal-content');
                $modal_content.wrapAll('<div class="modal-dialog"></div>');
                $modal_dialog = $modal_body.parents('div.modal-dialog');
                $modal_dialog.wrapAll('<div class="modal" data-backdrop="static" data-init="0"></div>');
                $modal = $modal_dialog.parents('div.modal');
                $modal_title = $modal_content.find('.modal-title');
                $modal_footer = $modal_form.children('div.modal-footer');
            } else {
                var count = 0;
                var modal_id = 'modal-' + new Date().getTime();
                while ($('#' + modal_id + '-' + count).length) {
                	++count;
                }
                modal_id += '-' + count;
                $('body').append(
                	'<div class="modal" data-backdrop="static" data-init="0" id="' + modal_id + '">' +
						'<div class="modal-dialog">' +
							'<div class="modal-content">' +
								'<div class="modal-header">' +
									'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
										'<span aria-hidden="true">&times;</span>' +
									'</button>' +
									'<h4 class="modal-title"></h4>' +
								'</div>' +
								'<form role="form">' +
									'<div class="modal-body"></div>' +
									'<div class="modal-footer"></div>' +
								'</form>' +
							'</div>' +
						'</div>' +
                    '</div>'
				);
                $modal = $('#' + modal_id);
                $modal_title = $modal.find('.modal-title');
                $modal_form = $modal.find('form');
				$modal_body = $modal.find('div.modal-body');
				$modal_footer = $modal.find('div.modal-footer');
				$modal_dialog = $modal.find('div.modal-dialog');
			}
            $modal_title.html(settings.title);
            for (var i in settings.buttons) {
                var button = settings.buttons[i];
                if (!button.type) {
                    button.type = 'button';
                }
                if (!button.clas) {
                    button.clas = 'btn btn-default btn-flat';
                }
                else {
                    button.clas += ' btn btn-flat';
                }
                if (!button.name) {
                    button.name = '按钮';
                }
                if (!button.exit) {
                    button.exit = false;
                }
                var btnHtml = '<button type="' + button.type + '" class="' + button.clas + '" ';
                var btnHtmlId = undefined;
                if (button.exit) {
                    btnHtml += 'data-dismiss="modal"';
                }
                else if (button.click) {
                    btnHtmlId = 'btn-' + $('button').length + '-' + i;
                    btnHtml += 'id="' + btnHtmlId + '"';
                }
                btnHtml += '>' + button.name + '</button>';
                $modal_footer.append(btnHtml);
                if (button.click && btnHtmlId) {
                    $('#' + btnHtmlId).click(function(e){
                        var this_id = $(this).prop('id');
                        var btn_index = parseInt(this_id.substring(this_id.length - 1));
                        settings.buttons[btn_index].click(e);
                    });
                }
            }
            if (settings.width) {
                $modal_dialog.css('width', settings.width + 'px');
            }
            if (settings.height) {
                $modal_dialog.css('height', settings.height + 'px');
            }
            return new Dialog($modal, $modal_title, $modal_form, $modal_body, settings.initialize);
		},
		// 提示信息, info
		info : function(message) {
			toastr.info(message);
		},
		// 提示信息, success
		success : function(message) {
			toastr.success(message);
		},
		// 提示信息, warning
		warning : function(message) {
			toastr.warning(message);
		},
		// 提示信息, error
		error : function(message) {
			toastr.error(message);
		},
	});
	$.fn.extend({
		// bootstrapValidator 表单校验
		validator : function (fields, submitCallback) {
            var defaults = {
                message : '无效的值',
                feedbackIcons : { valid : 'glyphicon glyphicon-ok', invalid : 'glyphicon glyphicon-remove', validating : 'glyphicon glyphicon-refresh' }
            };
            var settings = $.extend({}, defaults, {});
            var field_list = {};
            if (fields) {
                for (var field in fields) {
                    field_list[field] = {validators : {notEmpty : {message : fields[field]}}};
                }
            }
            var $this = $(this);
            $this.bootstrapValidator({
                message : settings.message,
                feedbackIcons : settings.feedbackIcons,
                fields : field_list,
                submitHandler : function (validator, form, submitButton) {
                    submitCallback($this);
                }
            });
            var $form = $(this);
            var $modal = $form.parents('div.modal');
            if ($modal.length) {
                $modal.on('hide.bs.modal', function() {
                    $form[0].reset();
                    try {
                        $form.bootstrapValidator('resetForm');
                    } catch (e) {}
                });
                $modal.on('hidden.bs.modal', function() {
                    $form[0].reset();
                    try {
                        $form.bootstrapValidator('resetForm');
                    } catch (e) {}
                });
            }
		},
		// bootstrap-table 数据表单
		datatable : function(options) {
			var defaults = {
				url : undefined,
				method : 'get',
				dataType : 'json',
				cache : false,						// 是否使用缓存
				striped : true,						// 隔行变色
				pagination : true,					// 表格底部是否显示分页工具栏
				pageSize : 15,						// 每页显示的数据条数
				pageNumber : 1,						// 首页的页码
				pageList : [10, 15, 25, 50, 100],	// 设置可供选择的页面数据条数
				paginationVAlign : 'bottom',		// 设置分页工具栏的垂直位置, top/bottom/bonth
				paginationHAlign : 'right',			// 设置分页工具栏的水平位置, left/right
				paginationDetailHAlign : 'left',	// 分页详细信息在水平方向的位置, left/right
				idField : undefined,				// 指定主键列
				search : true,						// 是否显示表格右上角的搜索框
				searchText : '',					// 初始化搜索框搜索关键字
				searchOnEnterKey : false,			// 按回车键搜索结果, 设置为 false 则自动触发搜索
				strictSearch : false,				// 模糊搜索, 设置为 true 时启动全匹配搜索
				trimOnSearch : true,				// 允许空字符搜索
				searchAlign : 'right',				// 设置搜索框水平位置, left/right
				buttonsAlign : 'right',				// 设置按钮的水平位置, left/right
				toolbarAlign : 'left',				// 设置 toolbar 的水平位置, left/right
				toolbar : '#toolbar',				// toolbar 容器
				singleSelect : true,				// 禁止行多选
				clickToSelect : true,				// 点击时自动选择行的 radio 或 checkbox
				sortable : true,					// 允许列排序, 设置为 false 禁止所有列的排序
				sortName : undefined,				// 默认排序字段
				sortOrder : 'asc',					// 默认排序顺序
				sidePagination : 'server',			// 分页方式, 可选值 server 或 client, 设置为 server 时必须填写服务器地址
				showHeader : true,					// 是否显示列头
				showFooter : false,					// 是否显示列脚
				silent : true,						// 刷新事件必须设置
				showRefresh : true,					// 是否显示刷新按钮
				showToggle : false,					// 是否显示视图切换按钮
				showPaginationSwitch : false,		// 是否显示分页数据切换
				columns : undefined,				// 显示的数据列
				click : function(row, e) {},		// 点击行的回调方法
				doubleClick : function(row, e) {},	// 双击行的回调方法
				queryParamsType : 'limit',			// 发送符合 RESTFul 格式的参数
													// 其中包含 limit(每页显示的条数), offset(起始索引), search(检索框的参数), sort(排序字段名称), order(排序)
													// 另外, 默认将 toolbar 下的输入框加入搜索参数中, 后台可使用额外的 Map<String,String> 类型的 params 参数名来接收
				paramInput : undefined,				// 自定义增加的的属性, 额外的搜索参数控件,
				toolbarBtn : undefined,				// 自定义增加的的属性, 工具栏按钮
				searchPlaceholder : '搜索',			// 自定义增加的的属性, 搜索框搜索提示文字
				showOptionBtns : true,				// 自定义增加的的属性, 显示基础的编辑、删除操作按钮
				delCallback : function(row) {},		// 自定义增加的的属性, showOptionBtns=true 时, 删除按钮点击时的回调函数
				editCallback : function(row) {},	// 自定义增加的的属性, showOptionBtns=true 时, 编辑按钮点击时的回调函数
			};
			var settings = $.extend({}, defaults, options);
			if (settings.showOptionBtns) {
				settings.columns.push({
					title : '操作',
					field : 'state',
			        align : "center",
			        width : "8%",
			        formatter : function (value, row, index) {
			        	return '<span class="fa-span" title="编辑" onclick="optBtnClick(this)" data-edt-selected="false" role="edt" style="color:#228B22"><i class="fa fa-pencil"></i> 编辑</span>' +
			                   '<span class="fa-span" title="删除" onclick="optBtnClick(this)" data-del-selected="false" role="del" style="color:#F08080"><i class="fa fa-trash"></i> 删除</span>';
			        }
				});
			}
			$(this).bootstrapTable({
				url : settings.url,
				method : settings.method,
				dataType : settings.dataType,
				cache : settings.cache,
				striped : settings.striped,
				pagination : settings.pagination,
				pageSize : settings.pageSize,
				pageNumber : settings.pageNumber,
				pageList : settings.pageList,
				paginationVAlign : settings.paginationVAlign,
				paginationHAlign : settings.paginationHAlign,
				paginationDetailHAlign : settings.paginationDetailHAlign,
				paginationPreText : '<i class="fa fa-angle-left"></i>',
				paginationNextText : '<i class="fa fa-angle-right"></i>',
				idField : settings.idField,
                uniqueId : settings.idField,
				search : settings.search,
				searchText : settings.searchText,
				searchOnEnterKey : settings.searchOnEnterKey,
				strictSearch : settings.strictSearch,
				trimOnSearch : settings.trimOnSearch,
				searchAlign : settings.searchAlign,
				buttonsAlign : settings.buttonsAlign,
				toolbarAlign : settings.toolbarAlign,
				toolbar : settings.toolbar,
				singleSelect : settings.singleSelect,
				clickToSelect : settings.clickToSelect,
				sortable : settings.sortable,
				sortName : settings.sortName,
				sortOrder : settings.sortOrder,
				sidePagination : settings.sidePagination,
				showHeader : settings.showHeader,
				showFooter : settings.showFooter,
				silent : settings.silent,
				showRefresh : settings.showRefresh,
				showToggle : settings.showToggle,
				showPaginationSwitch : settings.showPaginationSwitch,
				columns : settings.columns,
				queryParamsType : settings.queryParamsType,
				queryParams : function(params) {
					$('#toolbar input[type!="radio"][type!="checkbox"],#toolbar textarea,#toolbar select,#toolbar input:radio:checked').each(function(i) {
						var $this = $(this);
						var this_name = $this.prop('name');
						if (this_name) {
							params['params["' + this_name + '"]'] = $this.val();
							if ($this.prop('type') === 'text') {
								if (!$('#toolbar-text-input').length) {
									$('#toolbar').append('<span id="toolbar-text-input"></span>');
								}
								$('#toolbar-text-input').attr('data-' + this_name, $this.val());
							}
						}
					});
					$('#toolbar input[type="checkbox"]:checked').each(function(i) {
						var $this = $(this);
						var this_name = $this.prop('name');
						if (this_name) {
							var val = params['params["' + this_name + '"]'];
							if (val) {
								params['params["' + this_name + '"]'] = val + ',' + $this.val();
							}
							else {
								params['params["' + this_name + '"]'] = $this.val();
							}
						}
					});
					return params;
				},
				formatLoadingMessage : function() {
					return '<div class="loading-msg">正在努力加载中，请稍后<span class="loading-gif"></span></div>';
				},
				onClickRow : function(row, e) {
					var $edtSpan = $(e).find('span[class="fa-span"][data-edt-selected="true"]');
					if ($edtSpan.length) {
						settings.editCallback(row);
						$edtSpan.attr('data-edt-selected', false);
					}
					else {
						var $delSpan = $(e).find('span[class="fa-span"][data-del-selected="true"]');
						if ($delSpan.length) {
							settings.delCallback(row);
							$delSpan.attr('data-del-selected', false);
						}
					}
					settings.click(row, e);
				},
				onDblClickRow : function(row, e) {
					settings.doubleClick(row, e)
				}
			});
			var btns = settings.toolbarBtn;
			if (btns) {
				var $toolbar = $('div.bootstrap-table div.fixed-table-toolbar div.columns.columns-right.btn-group.pull-right');
				if (btns instanceof Array) {
					for (var i in btns) {
						$toolbar.prepend(btns[btns.length - i - 1]);
					}
				}
				else {
					$toolbar.prepend(btns);
				}
			}
			$('div.search input.form-control').prop('placeholder', settings.searchPlaceholder);
			try {
				$('span.fasearch').click(function() {
					$('span.fasearch').parents('div.bootstrap-table').find('table.table').bootstrapTable('refresh');
				});
			} catch (e) {}
			// 单选按钮, 多选按钮, 下拉框, 值改变时自动刷新数据表格
			$('#toolbar input[type="radio"],#toolbar input[type="checkbox"],#toolbar select,#toolbar input.change-refresh-control').change(function() {
                refreshDataTable($(this).parents('div.bootstrap-table').find('table.table'));
			});
			// 文本框按键弹起时延迟刷新表格
			$('#toolbar input[type="text"]').keyup(function() {
				var $this = $(this);
				setTimeout(function() {
					var odval = $('#toolbar-text-input').attr('data-' + $this.prop('name'));
					if (odval != undefined && odval != $this.val()) {
						$('#toolbar-text-input').attr('data-' + $this.prop('name'), $this.val());
                        refreshDataTable($this.parents('div.bootstrap-table').find('table.table'));
					}
				}, 1000);
			});
			return new DataTable(this);
		},
		// 日期时间范围
		datetimerange : function(options) {
			var defaults = {
				timePicker : true, 					// 显示时间
				timePicker24Hour : true, 			// 24小时制
				timePickerSeconds : true, 			// 显示秒
				dateLimit : { "days": 366 }, 		// 选择的两个日期最大不允许超过的值
				change : function(stime, etime) {},	// 时间改变时的回调通知
			};
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var today = new Date().format('yyyy-MM-dd');
			var firstDayOfYear = today.substring(0, 4) + '-01-01 00:00:00';
			today += ' 23:59:59';
			// 选择的开始时间将赋值到 #stime
			$this.before('<input type="hidden" id="stime" value="' + firstDayOfYear + '" name="stime">');
			// 选择的结束时间将赋值到 #etime
			$this.before('<input type="hidden" id="etime" value="' + today + '" name="etime">');
			date_language_locale.format = "YYYY-MM-DD HH:mm:ss";
			$this.daterangepicker({
				timePicker : settings.timePicker,
				timePicker24Hour : settings.timePicker24Hour,
				timePickerSeconds : settings.timePickerSeconds,
				dateLimit : settings.dateLimit,
				locale : date_language_locale,
				startDate : firstDayOfYear,
				endDate : today
			}, function(start, end, label) {
				$('#etime').val(end.format('YYYY-MM-DD HH:mm:ss'));
				$('#stime').val(start.format('YYYY-MM-DD HH:mm:ss'));
				settings.change($('#stime').val(), $('#etime').val());
			});
		},
		// 日期范围
		daterange : function(options) {
			var defaults = {
				dateLimit : { "days": 366 }, 		// 选择的两个日期最大不允许超过的值
				change : function(stime, etime) {},	// 时间改变时的回调通知
			};
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var today = new Date().format('yyyy-MM-dd');
			var firstDayOfYear = today.substring(0, 4) + '-01-01';
			// 选择的开始时间将赋值到 #sdate
			$this.before('<input type="hidden" id="sdate" value="' + firstDayOfYear + '" name="sdate">');
			// 选择的结束时间将赋值到 #edate
			$this.before('<input type="hidden" id="edate" value="' + today + '" name="edate">');
			date_language_locale.format = "YYYY-MM-DD";
			$this.daterangepicker({
				dateLimit : settings.dateLimit,
				locale : date_language_locale,
				startDate : firstDayOfYear,
				endDate : today
			}, function(start, end, label) {
				$('#edate').val(end.format('YYYY-MM-DD'));
				$('#sdate').val(start.format('YYYY-MM-DD'));
				settings.change($('#sdate').val(), $('#edate').val());
			});
		},
		// 日期
		date : function() {
			$(this).datepicker({ language : 'zh-CN', format : 'yyyy-mm-dd', autoclose: true });
		},
		// 文件上传
		fileupload : function (options) {
            var defaults = {
                showCaption: true,  // 是否显示文件选择的输入框
                showPreview: true,  // 是否显示文件预览
                showRemove: true,   // 是否显示删除全部的按钮
                showUpload: true,   // 是否显示全部上传的按钮
                showCancel: true,   // 是否显示取消上传的按钮
                showClose: false,   // 是否显示关闭预览的按钮
                language: 'zh',     // 语言
                url: '',            // 上传路径
                allowedFileExtensions : null,  // 允许上传的文件扩展名, eg: ['jpg', 'png','gif']
                initialPreview: [],          // 初始化预览图片,
                initialPreviewAsData: true,  // 初始化预览时自动加上 img 标签
                initialPreviewConfig: [],    // 初始化预览配置,
                initialCaption: '',          // 初始化文件选择框里面的文字
                overwriteInitial: false,  // 是否覆盖已存在的
                minFileSize: 0,           // 文件最小大小, 单位 KB, 0 表示不限制, eg: 0
                maxFileSize: 2 * 1024,    // 文件最大大小, 单位 KB, 0 表示不限制, eg: 2 * 1024
                minFileCount: 0,    // 上传最小文件数, 0 表示不限制
                maxFileCount: 10,   // 上传最大文件数, 0 表示不限制
                uploadAsync: true,  // 是否异步上传
                removeIcon: '<i class="fa fa-trash"></i>',    // 删除图标
                uploadIcon: '<i class="fa fa-upload"></i>',   // 上传图标
                browseIcon: '<i class="fa fa-folder-open"></i>&nbsp;',  // 选择文件图标
                cancelIcon: '<i class="fa fa-ban"></i>',  // 取消图标
                msgValidationErrorIcon: '<i class="fa fa-exclamation-triangle"></i> ', // 上传错误图标
                fileActionSettings : {  // 文件预览动作设置项
                    showZoom: false,    // 是否显示预览原图按钮
                    removeClass: 'btn btn-xs btn-default clean-default',   // 删除图标的 class
                    uploadClass: 'btn btn-xs btn-default clean-default',   // 删除图标的 class
                    uploadIcon: '<i class="glyphicon glyphicon-open text-info"></i>',        // 上传图标
                    indicatorNew: '<i class="glyphicon glyphicon-send text-warning"></i>',   // 未上传的图标
                    indicatorSuccess: '<i class="glyphicon glyphicon-ok text-success"></i>', // 已上传的图标
                },
                success : function (result, e) {},   // 上传成功后的回调函数,
				remove : function (event, id) {},    // 上传成功后删除的回调函数,
				error : function (data, msg) {},     // 上传失败的回调函数
            };
            var settings = $.extend({}, defaults, options);
            var $this = $(this);
            $this.prop('type', 'file');
            $this.prop('multiple', true);
            var fupload = new FileUpload($this, settings);
            fupload.create();
            return fupload;
        },
		// 富文本编辑器
		editor : function (options) {
            var defaults = {
                height: 300,   // 高度
                width: null,    // 宽度
                lang: 'zh-CN',  // 语言
                toolbar: [      // 工具栏
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                    ['fontname', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['para', ['ul', 'ol', 'paragraph', 'height']],
                    ['insert', ['table', 'link', 'picture', 'video', 'hr']],
                    ['view', ['fullscreen']],
                ],
                styleTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'],        // 样式
                fontSizes: ['12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],   // 字体大小
                fontNames: ['Arial', 'Tahoma', 'Verdana', 'Helvetica', 'Courier New', 'Times New Roman', '宋体', '新宋体', '楷体', '微软雅黑'],   // 字体
                placeholder: '',     // placeholder
            };
            var settings = $.extend({}, defaults, options);
            var $this = $(this);
            $this.addClass('summernote');
            $this.summernote(settings);
            $('.note-editor button.dropdown-toggle').dropdownHover().dropdown();
            return new Editor($this);
        }
	});
})(jQuery);
// 文件上传
function FileUpload(e, settings) {
	// 自身引用
    this.self = e;
    // 配置
	this.options = settings;
	// 禁用
	this.disable = function () {
        if (this.self.data('fileinput')) {
            this.self.fileinput('disable');
        }
    };
	// 启用
	this.enable = function () {
        if (this.self.data('fileinput')) {
            this.self.fileinput('enable');
        }
    };
	// 销毁
	this.destroy = function () {
        if (this.self.data('fileinput')) {
            this.self.fileinput('destroy');
        }
    };
	// 重新创建
	this.recreate = function (opts) {
        if (this.self.data('fileinput')) {
            this.destroy();
        }
        if (!opts) {
        	opts = this.options;
        }
        this.create(opts);
    };
	// 初始化预览
	this.preview = function (opts) {
        if (typeof opts === 'object') {
        	// 参数是数组
            if (typeof opts.length === 'number') {
                var configs = new Array();
                $.each(opts, function (i, v) {
                    configs.push({caption : '', size : 0, key : i + 1});
                });
                var o = {
                    initialPreview : opts,
                    initialPreviewConfig : configs,
                    initialCaption : '已上传 ' + opts.length + ' 个文件',
                };
            	o = $.extend({}, this.options, o);
                this.recreate(o);
                if ($('.file-drop-zone-title').css('display') === 'block') {
                    $('.file-drop-zone-title').hide();
                }
            } else {
                var o = $.extend({}, this.options, opts);
                this.recreate(o);
                if ($('.file-drop-zone-title').css('display') === 'block') {
                    $('.file-drop-zone-title').hide();
                }
            }
        }
    };
	// 创建
	this.create = function (opts) {
        if (!opts) {
            opts = this.options;
        }
        var $this = this.self;
        this.self.fileinput({
            showCaption: opts.showCaption,
            showBrowse: opts.showBrowse,
            showPreview: opts.showPreview,
            showRemove: opts.showRemove,
            showUpload: opts.showUpload,
            showCancel: opts.showCancel,
            showClose: opts.showClose,
            language: opts.language,
            uploadUrl: opts.url,
            allowedFileExtensions : opts.allowedFileExtensions,
            initialPreview: opts.initialPreview,
            initialPreviewAsData: opts.initialPreviewAsData,
            initialPreviewConfig: opts.initialPreviewConfig,
            initialCaption: opts.initialCaption,
            overwriteInitial: opts.overwriteInitial,
            minFileSize: opts.minFileSize,
            maxFileSize: opts.maxFileSize,
            minFileCount: opts.minFileCount,
            maxFileCount: opts.maxFileCount,
            uploadAsync: opts.uploadAsync,
            removeIcon: opts.removeIcon,
            uploadIcon: opts.uploadIcon,
            browseIcon: opts.browseIcon,
            cancelIcon: opts.cancelIcon,
            fileActionSettings : opts.fileActionSettings,
        }).on("fileuploaded", function (event, data, previewId, index) {
            opts.success(data.response, $this);
        }).on('filesuccessremove', function(event, id) {
            opts.remove(event, id);
        }).on('fileuploaderror', function(event, data, msg) {
            opts.error(data.response, msg);
        });
    };
}
// 富文本编辑器
function Editor(e) {
    // 自身引用
    this.self = e;
    // 聚焦
    this.focus = function () {
        this.self.summernote('focus');
    };
    // 判断内容是否为空
    this.isEmpty = function () {
        return this.self.summernote('isEmpty');
    }
    // 重置
    this.reset = function () {
        this.self.summernote('code', '');
        this.focus();
    };
    // 禁用
    this.disable = function () {
        this.self.summernote('disable');
    };
    // 启用
    this.enable = function () {
        this.self.summernote('enable');
    };
    // 设置字体
    this.setFontName = function (fontName) {
        this.self.summernote('fontName', fontName);
    };
    // 获取/设置 编辑器的内容
    this.val = function (content) {
        if (content) {
            this.self.summernote('code', content);
        } else {
            return this.self.val();
        }
    };
}
// 扩展  Date 支持 format
Date.prototype.format = function(pattern) {
	var o = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		"S" : this.getMilliseconds()
	};
	if (/(y+)/.test(pattern)) {
		pattern = pattern.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for ( var k in o){
		if (new RegExp("(" + k + ")").test(pattern)) {
			pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return pattern;
}
// 加载中
loading = {
	show : function() {
		var $loading = $('div.loading[role="loading"]')
		if ($loading.length) {
			$loading.show();
		}
		else {
			$('body').append('<div class="loading" role="loading"><div class="load-animate"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><style>.loading{position:absolute;top:0%;left:0%;width:100%;height:100%;background-color:#ECECEC;z-index:999999999;-moz-opacity:0.7;opacity:.70;filter:alpha(opacity =70);}.load-animate{width:100px;height:100px;position:relative;}.load-animate span{display:inline-block;width:20px;height:20px;border-radius:50%;background:#696969;position:absolute;-webkit-animation:load 1.04s ease infinite}@-webkit-keyframes load{0%{-webkit-transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(.3);opacity:.5}}.load-animate span:nth-child(1){left:0;top:50%;margin-top:-10px;-webkit-animation-delay:.13s}.load-animate span:nth-child(2){left:14px;top:14px;-webkit-animation-delay:.26s}.load-animate span:nth-child(3){left:50%;top:0;margin-left:-10px;-webkit-animation-delay:.39s}.load-animate span:nth-child(4){top:14px;right:14px;-webkit-animation-delay:.52s}.load-animate span:nth-child(5){right:0;top:50%;margin-top:-10px;-webkit-animation-delay:.65s}.load-animate span:nth-child(6){right:14px;bottom:14px;-webkit-animation-delay:.78s}.load-animate span:nth-child(7){bottom:0;left:50%;margin-left:-10px;-webkit-animation-delay:.91s}.load-animate span:nth-child(8){bottom:14px;left:14px;-webkit-animation-delay:1.04s}</style>');
			$('div.loading[role="loading"] div.load-animate').css('margin', ((window.innerHeight - $('div.loading[role="loading"] div.load-animate').height()) / 2) + 'px auto');
		}
	},
	hide : function() {
		$('div.loading[role="loading"]').hide();
	}
}
// 数据表格对象
function DataTable(e) {
	// 自身引用
	this.self = $(e);
	// 刷新
	this.refresh = function() {
        refreshDataTable(this.self);
	};
	// 获取选中的行对象(单选行, 多选则返回第一个选中的行)
	this.getSelected = function() {
		return this.self.bootstrapTable('getSelections')[0];
	};
    // 根据ID获取行对象
    this.getRowById = function (uniqueId) {
        return this.self.bootstrapTable('getRowByUniqueId', uniqueId);
    };
}
// 模态框对象
function Dialog(modal, modal_title, modal_form, modal_body, initialize) {
	// 私有属性
	var fn_initialize = initialize;
	// 自身引用
	this.self = modal;
    // form 表单对象
    this.form = modal_form;
    // body
    this.body = modal_body;
    // title
    this.title = modal_title;
	// 隐藏
	this.hide = function() {
		this.self.modal('hide');
	};
	// 显示
	this.show = function() {
        this.self.modal('show');
        if (this.self.attr('data-init') === '0') {
            fn_initialize();
            this.self.attr('data-init', '1');
        }
    };
	// 设置标题
	this.setTitle = function (title) {
		this.title.text(title);
    };
    // 加载动态内容
    this.load = function (url, data, callback) {
        if (!data) {
            data = {};
        }
        var $this = this;
        $.get(url, data, function (data) {
            $this.body.html(data);
            if (callback) {
                callback();
            }
            $this.self.attr('data-init', '0');
            $this.show();
        });
    };
    // 查找
    this.find = function (dom, name) {
		var selector = dom;
        if (name) {
            selector += '[name="' + name + '"]';
        }
        return this.form.find(selector);
    };
    // 查找 Input
    this.findInput = function (name) {
        return this.find('input', name);
    };
    // 重置表单验证
    this.resetFormValidator = function () {
        this.form.bootstrapValidator('resetForm');
    };
}
// 控制台错误日志
function logConsoleError(XMLHttpRequest, textStatus, _this) {
	console.log('-----------------------------------------------------------------------------------------');
	if (textStatus == 'timeout') {
		console.log('请求超时，请确认服务器是否连通，或服务器未能及时响应请求');
	}
	else if (textStatus == 'parsererror' && XMLHttpRequest.status == 200) {
		console.log('解析服务器端返回的结果内容或类型发生异常');
	}
	else if (XMLHttpRequest.status == 400) {
		console.log('请求地址不正确');
	}
	else if (XMLHttpRequest.status == 404) {
		console.log('页面找不到');
	}
	else if (XMLHttpRequest.status == 405) {
		console.log('该服务不支持 ' + _this.type + ' 请求');
	}
	else if (XMLHttpRequest.status == 500) {
		console.log('服务器端处理请求发生异常');
	}
	console.log('status : ' + XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText);
	console.log('url : ' + _this.url);
	console.log('params : ' + _this.data);
	console.log('-----------------------------------------------------------------------------------------');
}
// 刷新数据表格
function refreshDataTable(datatable) {
    var placeholder = $('div.search input.form-control').prop('placeholder');
    var toolbar_btns = $('div.bootstrap-table div.fixed-table-toolbar div.columns.columns-right.btn-group.pull-right button').clone(true);
    datatable.bootstrapTable('refreshOptions', {pageNumber : 1});
    datatable.bootstrapTable('refresh');
    $('div.bootstrap-table div.fixed-table-toolbar div.columns.columns-right.btn-group.pull-right').html(toolbar_btns);
    $('div.search input.form-control').prop('placeholder', placeholder);
}
// 点击操作按钮
function optBtnClick(e) {
	$(e).attr('data-' + $(e).attr('role') + '-selected', true);
}
// 语言汉化
var date_language_locale = {
	"format": "YYYY-MM-DD HH:mm:ss",
	"separator": "  -  ",
	"applyLabel": "确定",
	"cancelLabel": "取消",
	"fromLabel": "起始时间",
	"toLabel": "结束时间",
	"customRangeLabel": "日期时间",
	"weekLabel": "星期",
	"daysOfWeek": [ "日", "一", "二", "三", "四", "五", "六" ],
	"monthNames": [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
	"firstDay": 1
}
$(function() {
	// 菜单链接处理, 点击菜单链接使得页面不跳转
	$('.sidebar-menu a[target!="_blank"]').click(function() {
		var href = $(this).prop('href');
		if (/\/|https?/.test(href)) {
			$.ajax({url : href, type : 'GET', async : false, dataType : 'html',
				success : function(page) {
					$('#main-content').html(page);
				},
				beforeSend : function() {
					loading.show();
				},
				complete : function() {
					loading.hide();
				}
			});
			return false;
		}
		else {
			return true;
		}
	});
	// Toastr 设置
	// http://codeseven.github.io/toastr/demo.html
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": true,
	  "progressBar": true,
	  "positionClass": "toast-top-center",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "3000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
});