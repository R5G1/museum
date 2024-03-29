//!  menu-adaptiv class="welcome"
$(document).ready(function () {

	$('.header__bureger').click(function (event) {
		$('.header__bureger,.header__navigation,.header__nav').toggleClass('active')
		$('.swiper__swiper-contents').toggleClass('disebl');
		$('body').toggleClass('lock');


	});
	$(".header__navigation a").click(function () {
		$('.header__navigation.active').removeClass("active");
		$(".header__nav.active").removeClass("active");
		$(".header__bureger.active").removeClass("active");
		$(".swiper__swiper-contents.disebl").removeClass("disebl");
	});

});
$(document).mouseup(function (e) {
	var div = $("#bureger");
	if (!div.is(e.target)
		&& div.has(e.target).length === 0) {
		$('.header__navigation.active').removeClass("active");
		$(".header__nav.active").removeClass("active");
		$(".header__bureger.active").removeClass("active");
		$(".swiper__swiper-contents.disebl").removeClass("disebl");
	}
});
//!  menu-adaptiv class="welcome" END

//!  Swiper
new Swiper('.mySwiper', {

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",

	},
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return '0<span class = "' + currentClass + '"></span>' + ' |' + ' 0<span class = "' + totalClass + '"></span>';
		}

	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,

	},
	touchRatio: 1,
	grabCursor: true,
	loop: true,
	speed: 800,
});
//!  Swiper END

//! comparison

function imageComparison(selector) {

	let comparison = $(selector)
		.addClass('image-comparison')
		.prepend('<div class="image-comparison__before"></div>')
		.append('<button class="image-comparison__slider"></button>');

	let images = comparison
		.find('img')
		.addClass('image-comparison__image')
		.css('max-width', comparison.width());

	let before = comparison
		.find('.image-comparison__before')
		.append(images.eq(0));

	comparison
		.find('.image-comparison__slider')
		.on('dragstart', () => false)
		.on('mousedown', function (e) {
			let slider = $(this);
			let doc = $(document).on('mousemove', (e) => {
				let offset = e.pageX - comparison.position().left;
				let width = comparison.width();
				if (offset < 0) offset = 0;
				if (offset > width) offset = width;

				slider.css('left', offset + 'px');
				before.css('width', offset + 'px');
			});

			doc.on('mouseup', () => doc.off('mousemove'));
		});
};

imageComparison('#image-comparison');


//!  video-swaiper
var swiper = new Swiper(".mySwiper1", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,

	freeMode: true,
	watchSlidesProgress: true,
	grabCursor: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	loop: true,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination2",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
	thumbs: {
		swiper: swiper,
	},
});
//!  Swiper END

//!map start

var map;
function appendMarker(map, latitude, longitude, text) {
	var pos = { lat: latitude, lng: longitude };
	var markerOption = {
		position: pos,
		map: map,
		title: text || 'Hello World!'
	};
	return new google.maps.Marker(markerOption);
}

function initMap() {
	var myLatLng = {
		lat: 48.86091, lng: 2.3364
	};
	var myLatLng2 = {
		lat: 48.8602, lng: 2.3333
	};
	var myLatLng3 = {
		lat: 48.8607, lng: 2.3397
	};
	var myLatLng4 = {
		lat: 48.8619, lng: 2.3330
	};
	var myLatLng5 = {
		lat: 48.8625, lng: 2.3365
	};
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 16
	});
	appendMarker(map, 48.86091, 2.3364, 'Hello');
	appendMarker(map, 48.8602, 2.3333, 'Hello');
	appendMarker(map, 48.8607, 2.3397, 'Hello');
	appendMarker(map, 48.8619, 2.3330, 'Hello');
	appendMarker(map, 48.8625, 2.3365, 'Hello');

}
//!end

//!animation

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//!end