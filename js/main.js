!function ($) {
	var iframe = $('iframe');
	var ipt_width = $("#content-width");
	var ipt_height = $("#content-height");
	var slider_width = 25;

	function iframe_resizer(iframe, width, height) {
		width.focusout(function() {
			iframe.animate({width: parseInt(width.val()) + slider_width});
		});
		height.focusout(function() {
			iframe.animate({height: parseInt(height.val()) + slider_width});
		});
	}

	$('iframe').load(function () {
		ipt_width.val(iframe.width() - slider_width);
		ipt_height.val(iframe.height() - slider_width);
		iframe_resizer(iframe, ipt_width, ipt_height);
	});

	$('#pixel-slider').slider({
		range: "max",
		min: 320,
		max: 1600,
		value: 1024,
		orientation: "horizontal",
		animate: true,
		slide: function(event, ui) {
			ipt_width.val(ui.value);
		}
	});
}(window.jQuery);
