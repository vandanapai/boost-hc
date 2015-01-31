$(document).ready(function () {




	$('.hidden').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).fadeIn();


		return false;
	});


	/* NEW */

	$('.mobile-button').on('click', function () {
		$(this).toggleClass('active');
		$('.main-nav-links-container').toggleClass('active-mobile-menu');
		return false;
		
	});

	$(window).scroll(function () {
		if ($(window).width() > 1024) {

			if ($(window).scrollTop() > 300 ) {
				$('.header-container').addClass('sticky');
				$('.boost-nav-logo').addClass('sticky-logo');
				$('.main-nav-links').addClass('sticky-nav-links');
			}

			else {
				$('.header-container').removeClass('sticky');
				$('.boost-nav-logo').removeClass('sticky-logo');
				$('.main-nav-links').removeClass('sticky-nav-links');
			}
		}

		else {
			$('.header-container').removeClass('sticky');
			$('.boost-nav-logo').removeClass('sticky-logo');
			$('.main-nav-links').removeClass('sticky-nav-links');
		}

	})
	



})
