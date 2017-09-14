$(function() {
	
	$('a[href^="#"]').click(function(e) {
		console.log("Click event registered on the links");
		var target = $(this).attr('href');
		var strip = target.slice(1);
		var anchor = $("div[id='" + strip + "']");

		e.preventDefault();

		$('body').animate({

			scrollTop: anchor.offset().top

		}, 1000);

		// Added code for proper working of scrolling on firefox
		$('html').animate({

			scrollTop: anchor.offset().top

		}, 1000);
	
	});
});
