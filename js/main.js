!function ($) {
		$('iframe').load(function () {
			var iframe = $('iframe');
			var ipt_width = $("#content-width");
			var ipt_height = $("#content-height");
			var slider_width = 25;

			// Get iframe size
			ipt_width.val(iframe.width() - slider_width);
			ipt_height.val(iframe.height() - slider_width);

			// Set iframe size
			ipt_width.focusout(function() {
				iframe.animate({width: parseInt(ipt_width.val()) + slider_width});
			});
			ipt_height.focusout(function() {
				iframe.animate({height: parseInt(ipt_height.val()) + slider_width});
			});
		});
}(window.jQuery);
