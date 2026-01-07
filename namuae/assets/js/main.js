(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	wowAnimation();
    aosAnimation();
});



/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};



/*=============================================
	=           Data Background             =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})



/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 100);

  });
}


/*=============================================
	=            Header Search            =
=============================================*/
$(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
});
$(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});


/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").addClass("active");
	return false;
});
$(".menu-close, .offCanvas__overly").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").removeClass("active");
});



/*===========================================
	=      Select2 Active      =
=============================================*/
$("#course-cat").select2({
    tags: true,
    theme: "bootstrap",
    minimumResultsForSearch: -1,
    dropdownCssClass: "course-category-dropdown",
});


/*=============================================
	=          Swiper active              =
=============================================*/
var swiperSlider = new Swiper('.testimonial-active', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
     // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
});

var swiperSlider = new Swiper('.project-slider-active', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});

var swiperSlider = new Swiper('.project-slider2-active', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});

var swiperSlider = new Swiper('.project-slider3-active', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: "auto",
    breakpoints: {
        '1200': {
            slidesPerView: "auto",
        },
        '992': {
            slidesPerView: "auto",
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});

var swiperSlider = new Swiper('.hero-slider1-active', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

var swiperSlider = new Swiper('.testimonial-active-3', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// Function to add animation classes
function animationProperties() {
    $('[data-ani]').each(function () {
        var animationName = $(this).data('ani');
        $(this).addClass(animationName);
    });

    $('[data-ani-delay]').each(function () {
        var delayTime = $(this).data('ani-delay');
        $(this).css('animation-delay', delayTime);
    });
}
animationProperties();
// Add click event handlers for external slider arrows based on data attributes
$('[data-slider-prev], [data-slider-next]').on('click', function () {
	var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
	var targetSlider = $(sliderSelector);

	if (targetSlider.length) {
		var swiper = targetSlider[0].swiper;

		if (swiper) {
			if ($(this).data('slider-prev')) {
				swiper.slidePrev(); 
			} else {
				swiper.slideNext(); 
			}
		}
	}
});

/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

/*=============================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}

/*=============================================
	=           Gsap       =
=============================================*/
var magnets = document.querySelectorAll('.gsap-magnetic')
var strength = 50

    magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    magnet.addEventListener('mouseout', function(event) {
        TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
    } );
    });

    function moveMagnet(event) {
    var magnetButton = event.currentTarget
    var bounding = magnetButton.getBoundingClientRect()

    //console.log(magnetButton, bounding)

    TweenMax.to( magnetButton, 1, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    })
}
// GSAP Register
window.gsap.registerPlugin(
	window.TweenMax
);

/*=============================================
	=           Service Hover Change       =
=============================================*/
	$('.service1-tab-wrap li:first-child').addClass('active');
	$('.service1-tab-content').hide();
	$('.service1-tab-content:first').show();

	// Click function
	$('.service1-tab-wrap li').mouseenter(function(){
	$('.service1-tab-wrap li').removeClass('active');
	// $(this).addClass('active');
	$('.service1-tab-content').hide();

	var activeTab = $(this).find('.service1-tab-item').attr('data-bs-target');
	$(activeTab).fadeIn();
	return false;
});

/*=============================================
	=           Counter Number       =
=============================================*/
$(".counter-number").counterUp({
	delay: 10,
	time: 1000,
});

/*=============================================
	=           Progress Counter       =
=============================================*/
$('.progress-bar').waypoint(function() {
	$('.progress-bar').css({
	animation: "animate-positive 1.8s",
	opacity: "1"
	});
}, { offset: '100%' });

/*=============================================
	=           Lettering JS Circle       =
=============================================*/
function injector(t, splitter, klass, after) {
    var a = t.text().split(splitter), inject = '';
    if (a.length) {
        $(a).each(function(i, item) {
            inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
        });	
        t.empty().append(inject);
    }
}
var methods = {
    init : function() {

        return this.each(function() {
            injector($(this), '', 'char', '');
        });

    },

    words : function() {

        return this.each(function() {
            injector($(this), ' ', 'word', ' ');
        });

    },
    
    lines : function() {

        return this.each(function() {
            var r = "eefec303079ad17405c889e092e105b0";
            // Because it's hard to split a <br/> tag consistently across browsers,
            // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
            // (of the word "split").  If you're trying to use this plugin on that 
            // md5 hash string, it will fail because you're being ridiculous.
            injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
        });

    }
};
$.fn.lettering = function( method ) {
    // Method calling logic
    if ( method && methods[method] ) {
        return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
    } else if ( method === 'letters' || ! method ) {
        return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
    }
    $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
    return this;
};
$(".hero-title-anime").lettering();

/*=============================================
	=           Marquee Active       =
=============================================*/
if ($(".marquee_mode").length) {
    $('.marquee_mode').marquee({
        speed: 50,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}

if ($(".marquee_mode2").length) {
    $('.marquee_mode2').marquee({
        speed: 15,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}

/*=============================================
	=           Masonary Active       =
=============================================*/
$(".masonary-active").imagesLoaded(function () {
    var $filter = ".masonary-active",
        $filterItem = ".filter-item",
        $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
        var $grid = $($filter).isotope({
            itemSelector: $filterItem,
            filter: "*",
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            },
        });

        // filter items on button click
        $($filterMenu).on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue,
            });
        });

        // Menu Active Class
        $($filterMenu).on("click", "button", function (event) {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings(".active").removeClass("active");
        });
    }
});



})(jQuery);