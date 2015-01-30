$(document).ready(function () {


	$(window).scroll(function () {
		if ($(window).width() > 1024) {

			if ($(window).scrollTop() > 300 ) {
				$('.nav-container').addClass('show-nav-bg');
			}

			else {
				$('.nav-container').removeClass('show-nav-bg');
			}
		}

		else {
			if ($('.nav-container').hasClass('show-nav-bg')) {
				$(this).removeClass('show-nav-bg');
			}
		}

	})

	$('.hidden').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).fadeIn();


		return false;
	});

	$('#navButton').on('click', function () {
		$(this).toggleClass("nav-mobile-active");
		

		if ($('#navButton').hasClass("nav-mobile-active")) {
			
			$('#mainNavLinks').addClass("mobile-active");
			$('#mainNav').fadeIn("slow");
			$('.nav-container').css("height", "100vh");

		}

		else {
			$('#mainNav').hide();
			$('.nav-container').css("height", "auto");
		}

		return false;

		// return false;
	})



})
