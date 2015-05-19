/**
 * Creator: Li'Zhuo(lizhuo04@baidu.com||topgrd@outlook.com)
 * Think First, Code Later
 * Date: 2015-05-18
 * Time: 16:00
 */
(function ($) {
	$.fn.slide = function (options) {
		/**
		 * 默认设置
		 * start: true or false 默认开始
		 * speed：2000 轮播速度 默认2000 单位：ms
		 * 
		 */
		this.defaults = {
			start: true,
			speed: 2000
		}
		opts = $.extend({}, this.defaults, options);
		this.each(function () {
			var slideContainer = $(this).find('.slide-container');
			var slide = slideContainer.find('li');
			var count = slide.length;
			var index = 0;
			var time = null;
			var _this = this;
			var speed = opts.speed||2000;
			$(this).data('opts',opts);
			console.log(slide);
			$(slide[0]).show();
			//增加前进后退按钮元素
			var ctrlHtml 
			= '<a href="javascript:;" class="ctrl-slide prev">上一个</a>'
			+ '<a href="javascript:;" class="ctrl-slide next">下一个</a>';
			$('.slide').append(ctrlHtml);
			var pageIndex 
			= '<ul class="slide-tabs">';
			for (var i=0; i<count;i++) {
				pageIndex += '<li><a href="#" class="slide-a">d</a></li>'
			}
			pageIndex += '</ul>';
			$('.slide').append(pageIndex);
			function start() {
				if (opts.start) {
					time = setInterval(function () {
						var old = index;
						if (index >= count - 1) {
							index = 0;
						}
						else {
							index++;
						}
						change.call(_this, index, old);
					}, speed);
				}
			};

			$(this).find('.next').on('click', function () {
				var old = index;
						if (index >= count - 1) {
							index = 0;
						}
						else {
							index++;
						}
				change.call(_this, index, old);

			});

			$(this).find('.prev').on('click', function () {
				var old = index;
						if (index >= count - 1) {
							index = 0;
						}
						else {
							index--;
						}
				change.call(_this, index, old);

			});

			$(this).on('mouseover', function () {
				if (opts.start) {
					clearInterval(time);
				}
				$(this).find('.ctrl-slide').css({opacity:0.6});
			})

			$(this).on('mouseout', function () {
				if (opts.start) {
					start();
				}
				$(this).find('.ctrl-slide').css({opacity:0.15});
			})
			$(this).find('.slide-tabs li').each(function (aIndex) {
				$(this).on('click.slide-tabs', function () {
					change.call(_this, aIndex, index);
					index = aIndex;
				});
			});

			start();
		});
	};
	function change(showIndex, hideIndex) {
		var opts = $(this).data('opts');
		$(this).find('.slide-container li').eq(hideIndex).stop().hide().animate({opacity: 0});
		$(this).find('.slide-container li').eq(showIndex).show().css({opacity: 0}).stop().animate({opacity: 1});
	};
})(jQuery);