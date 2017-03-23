// contact scroll fixed position
// get initial position of the element
let scroll = $('.contact').offset().top;   

// window.dispatchEvent(new Event('resize'));

// assign scroll event listener
$(window).scroll(function() {             

	// get current position
	let currentScroll = $(window).scrollTop() + 25; 
	let bottomScroll = $(window).scrollTop() + $(window).height() - 275;

	if (currentScroll >= scroll) { 
	// apply position: fixed if you
		$('.contact').css({                 // scroll to that element or below it
			position: 'fixed',
			// top: '50%',
			// left: '0',
			// transform: 'translate(0, -50%)',
			// margin: '0 25px'
		});
		$('.main').css({
			margin: '0 0 0 350px',
			width: '100%'
		});
   } else if (bottomScroll >= scroll) {                               // apply position: static
		$('.contact').css({               
		// if you scroll above it
		   position: 'static',
		   // top:'0',
			margin: '25px',
			// transform: 'none'
		});
		$('.main').css({
			width: '100%',
			margin:'0'
		});
   }
});

//275 px bottom

// Smooth out animation on any link starting with #
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        let target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
}); 