$(document).ready(function () {


	$(window).scroll(function () {
		if ($(window).scrollTop() > 300 ) {
			$('.nav-container').addClass('show-nav-bg');
		}

		else {
			$('.nav-container').removeClass('show-nav-bg');
		}

	})

	$('.hide').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).show();


		return false;
	});

})
