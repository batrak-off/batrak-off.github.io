//	  Hamburger

	$(".hamburger").click(function () {
		if($('.hamburger').hasClass("is-active") == true) {
			$('body').removeClass('modal-open');
			$('div.nav-backdrop').remove();
			$('.hamburger').removeClass('is-active');
			$('nav').removeClass('nav-active');


		}

		else {
			$('body').addClass('modal-open').append('<div class="modal-backdrop nav-backdrop fade in"></div>');
			$(this).toggleClass("is-active");
			$('nav').addClass('nav-active');

			$('.nav-backdrop').click(function () {
				$('.hamburger').removeClass('is-active');
				$('body').removeClass('modal-open');
				$('nav').removeClass('nav-active');
				$(this).remove();
			});

		}

		});

//	  Привоение активного класса меню

	  	$(".menu-list > a").click(function(e){
			$("a.active-link").removeClass("active-link");
			$(e.target).addClass("active-link");
		});

	  function windowSize(){
		   if (window.innerWidth >= 768) {
				$('div.nav-backdrop').remove();
			   	$('body').removeClass('modal-open');
			   	$('.left-block').removeClass('height-left-block');
		   } else {
			   $('.left-block').addClass('height-left-block');
		   }
	   }
 		$(window).resize(windowSize);
