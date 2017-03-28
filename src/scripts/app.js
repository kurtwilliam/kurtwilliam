// JavaScript Media Query for Contact scroll bar

function scrollFix(){
	// get initial position of the element
	let scroll = $('.contact').offset().top;

	// get contact form height to offset bottom position
	let contactH = $('.contact').height();

	// assign scroll event listener
	$(window).scroll(function() {
		// get current position, bottom position, and doc height
		let currentScroll = $(window).scrollTop() + 25; 
		let bottomScroll = $(window).scrollTop() + $(window).height();
		let docHeight = $(document).height();
		let footerHeight = $('footer').height();
		let contactHeight = $('.contact').height()+105;
		let bodyW = $('body').width();

		if (bodyW >= 978 ) {

			// if scroll height is below header and above footer:
			if (currentScroll >= scroll && currentScroll <= (docHeight - (footerHeight + contactHeight)))  { 
			// apply position: fixed if you
				$('.contact').css({                 
				// scroll to that element or below it
					position: 'fixed',
					bottom: '0',
					width:'300px'
				});
				$('.wrapper').css({                 
					margin: '25px 0 0 375px'
				});

			// else if the bottom of contact is at the footer:
			} else if (bottomScroll >= docHeight - footerHeight ) {
				$('.contact').css({               
					// if you scroll above it
					position: 'absolute',
					bottom: `${footerHeight}px`,
					top: 'auto',
					left: '0',
					margin: '25px',
					height:'calc( 100vh - 50px )'
				});
				
			// else if scroll position is within header:
		   } else if (scroll >= currentScroll) {
		   // apply position: static
				$('.contact').css({               
				   position: 'relative',
					margin: '25px',
					bottom: '0'
				});
				$('.wrapper').css({                 
					margin: '25px'
				});

		   // else if the bottom of the document is above the header (to reset fixed pos):
		   } else if ( bottomScroll <= docHeight - footerHeight) {
		   	// apply position: fixed
				$('.contact').css({                 
					position: 'fixed',
					top: '0',
					bottom: '0'
				});
				$('.wrapper').css({                 
					margin: '25px 0 0 375px',
					width: '100%'
				});
		   }
		// If the body is skinnier than 978px put the contact form at the top
		} else{
			$('.contact').css({                 
				background: '$main2',
				position: 'relative',
				width: 'calc(100% - 50px)',
				margin: '25px',
				height: 'auto',
				bottom:'0'
			});
			$('.wrapper').css({                 
				margin: '25px',
				width: '100%'
			});
		}
	});
}

$(window).on('resize', function(){
	scrollFix();
})

// When a link starts with an octothorp and it is clicked, scroll smoothly (over 900ms)
function linkScroll(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		let target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top 
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
}

// When the document is ready, run these functions
$(document).ready(function(){
    linkScroll();
    scrollFix();
}); 