!function ($) {
		$('iframe').load(function () {
			var width = $(".content-width").width();
			var height = $(".content-height").height();
			console.log(width);
			console.log(height);
			$(".content-width").val(width);
			$(".content-height").val(height);
		});
}(window.jQuery);
