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

	if ($(window).width() < 1024){

		$('#navButton').on('click', function () {
			$(this).toggleClass("nav-menu-open");
			$('#mainNavLinks').toggleClass("mobile-active");
			
				if ($('#navButton').hasClass("nav-menu-open")) {
					
					// $('#mainNavLinks').addClass("mobile-active");
					$('#mainNav').fadeIn("slow");
					$('.header-container').css("height", "100vh");

				}

				else {
					$('#mainNavLinks').removeClass("mobile-active");
					$('#mainNav').hide();
					$('.header-container').css("height", "auto");
				}
			});


		};

	$('#mobileMenuButton').on('click', function () {
		$('.main-nav-links-container').toggleClass('active-mobile-menu');
		return false;
	});
	



})
