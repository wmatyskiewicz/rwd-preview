!function ($) {
	$(function () {
		$('iframe').load(function () {
			var width = $(".content-width").width()
			var height = $(".content-height").height()
			console.log(width)
			console.log(height)
			$(".content-width").attr.val(width);
			$(".content-height").attr.val(height);
		});
	});
}(window.jQuery);
