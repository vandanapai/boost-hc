$(window).load(function() {
	$(document.body).fadeIn(1000);

	// fade out page

	$(document).on("click", "a", function () {

	    var newUrl = $(this).attr("href");

	    if (!newUrl || newUrl[0] === "#") {

	        location.hash = newUrl;
	        return;
	    }

	    $("body").fadeOut(function () {
	        
	        location = newUrl;
	    });

	    return false;
	});
});
