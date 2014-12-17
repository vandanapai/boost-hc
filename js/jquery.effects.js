$(document).ready(function () {

	function isElementInViewport(elem) {
		var $elem = $(elem);

	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	var viewportTop = $(scrollElem).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	var elemTop = Math.round( $elem.offset().top);
	var elemBottom = elemTop + $elem.height();


	return ((elemTop < viewportBottom) && (elemBottom > viewportTop));

	}

	function checkAnimation() {
		var $elem = $('.target');

		if ($elem.hasClass('start')) {
			return}

		else if (isElementInViewport($elem)) {
			$elem.addClass('start');
		}
	}

	$(window).scroll(function () {
		checkAnimation();
	});


});