 $(function () {
 	$(window).scroll(function () {
 		if ($(this).scrollTop() > 0 && !$('.go-top').hasClass('scrolling')) {
 			$('.go-top').addClass('active-top');
 		}
 		else {
 			$('.go-top').removeClass('active-top');
 		}
 	});
 	$('.go-top').click(function () {
 		$('body,html').animate({
 			scrollTop: 0
 		}, 900, function () {
 			$('.go-top').removeClass('active-top');
 		});
 	});
 });
