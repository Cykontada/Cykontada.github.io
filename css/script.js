$(window).on('mousemove', function(e) {
	var w = $(window).width();
	var h = $(window).height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$('.parallax').each(function(i, el){
		var offset = parseInt($(el).data('offset'));

		var translate = "translate3d(" + Maths.round(offsetX * offset)
		+ "px," + Maths.round(offsetY * offset) + "px, 0px";

		$(el).css({
			'transform' :translate
		})
	})
}