$(function () {

	$(".slider").slick({
		nextArrow: '<button class="slick-arrow slick-next"><img src="./images/logo/next-arrow.svg" alt="next-arrow"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="./images/logo/prev-arrow.svg" alt="prev-arrow"></button>',
		responsive: [
			{
				breakpoint: 441,
				settings: {
					arrows: false
				}

			}

		]

	});

});
