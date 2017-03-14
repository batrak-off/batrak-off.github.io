//	Слик карусель спикеров
$('.wrap-slick').slick({
	dots: true,
	infinite: true,
	speed: 300
	, slidesToShow: 3
	, slidesToScroll: 3
	, responsive: [
		{
			breakpoint: 991
			, settings: {
				slidesToShow: 2
				, slidesToScroll: 2
				, infinite: true
				, dots: true
			}
		}
		, {
			breakpoint: 600
			, settings: {
				slidesToShow: 1
				, slidesToScroll: 1
			, }
		}
		, // You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});
//	Слик карусель партнеров
$('.slick-partner').slick({
	dots: true
	, infinite: true
	, speed: 300
	, rows: 2
	, slidesToShow: 5
	, slidesToScroll: 5
	, responsive: [
		{
			breakpoint: 1199
			, settings: {
				slidesToShow: 4
				, slidesToScroll: 4
				, infinite: true
				, dots: true
			}
		}
		, {
			breakpoint: 991
			, settings: {
				slidesToShow: 3
				, slidesToScroll: 3
			}
		}
		, {
			breakpoint: 768
			, settings: {
				slidesToShow: 2
				, slidesToScroll: 2
			}
		}
		, {
			breakpoint: 600
			, settings: {
				slidesToShow: 1
				, slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});
//	Слик карусель партнеров на странице спонсоров
$('.slick-partner-page').slick({
	dots: true
	, infinite: true
	, speed: 300
	, rows: 4
	, slidesToShow: 5
	, slidesToScroll: 5
	, responsive: [
		{
			breakpoint: 1199
			, settings: {
				slidesToShow: 4
				, slidesToScroll: 4
				, infinite: true
				, dots: true
			}
		}
		, {
			breakpoint: 991
			, settings: {
				slidesToShow: 3
				, slidesToScroll: 3
			}
		}
		, {
			breakpoint: 768
			, settings: {
				slidesToShow: 2
				, slidesToScroll: 2
			}
		}
		, {
			breakpoint: 600
			, settings: {
				slidesToShow: 1
				, slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});
//	Слик карусель отзывов
$('.comments').slick({
	dots: true
	, infinite: true
	, adaptiveHeight: true
	, speed: 300
	, rows: 1
	, slidesToShow: 1
	, slidesToScroll: 1
, });
