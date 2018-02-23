//$.fn.myModal = function() {
//
//}
$.fn.extend({
	myModal: function(options) {
		var _this = this;
		this.empty();//先清空组件容器
		var defaults = {
			title:'温馨提示',
			contents:'你确定要删除这条商品记录吗',
			buttons:[
				{
					text:'确定',
					callback:function(){
//						......
						console.log('这是确定的回调')
					}
				},
				{
					text:'取消',
					callback:function(){
						$.closeModal();//关闭模态框
					}
				}
			]
		}
//		对象的合并
		var opts = $.extend({},defaults,options);
		var html = '<div class="modal-mask">\
						<div class="modal-content">\
							<div class="modal-header">'+opts.title+'</div>\
							<div class="modal-body">'+opts.contents+'</div>\
							<div class="modal-footer">\
								<button>'+opts.buttons[0].text+'</button>\
								<button>'+opts.buttons[1].text+'</button>\
							</div>\
						</div>\
					</div>'	;	
		this.append(html);
		
//		给确定按钮绑定点击事件
		$('.modal-footer button:nth-of-type(1)').click(function(){
//			ajax请求
			opts.buttons[0].callback();
			
		})
//		给取消按钮绑定点击事件
		$('.modal-footer button:nth-of-type(2)').click(function(){
//			如果传了回调就关闭
			if(opts.buttons[1].callback){
				opts.buttons[1].callback();
			}else{
				$.closeModal();
			}
			
		});
		
//		关闭模态框的方法
		$.closeModal = function(){
			_this.empty();//关闭模态框
		}

		
	}
})