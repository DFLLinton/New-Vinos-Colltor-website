/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);

function makeSpanish(pagestring){
	if(pagestring == 'index'){
		document.getElementById("subtitle1").innerHTML = "Esto es Colltor, un viñedo, masía y destino turístico"
		document.getElementById("button1").innerHTML = "Book aqui"
		document.getElementById("header1").innerHTML = "Esto es muy bien"
		document.getElementById("para1").innerHTML = "Esto es muy bien y creo que es el mejor"
		document.getElementById("header2").innerHTML = "Esto es muy bien y creo que es el mejor"
		document.getElementById("para2").innerHTML = "Esto es muy bien y creo que es el mejor"
		document.getElementById("button2").innerHTML = "Book aqui"
		document.getElementById("subtitle1").innerHTML = "El Farmhouse"
		document.getElementById("subtitle2").innerHTML = "Los vineas"
		document.getElementById("subtitle3").innerHTML = "El yurt"
		document.getElementById("subpara1").innerHTML = "El yurt"
		document.getElementById("subpara2").innerHTML = "El yurt"
		document.getElementById("subpara3").innerHTML = "El yurt"
		document.getElementById("ctatitle").innerHTML = "Book Aqui"
		document.getElementById("ctapara").innerHTML = "Reserver tus datos aqui por favor"
		document.getElementById("button3").innerHTML = "Reservar"
		document.getElementById("button4").innerHTML = "Air b y b"
		document.getElementById("button5").innerHTML = "El Booking.com"
	}if(pagestring == 'yurt'){
		document.getElementById("title").innerHTML = "El Yurt"
		document.getElementById("subtitle").innerHTML = "Puedes alojar en el yurt por favor"
		document.getElementById("para1").innerHTML = "reservar"
		document.getElementById("para2").innerHTML = "reservar eso por favor"
		document.getElementById("para3").innerHTML = "reservar aqui por favor"
		document.getElementById("subtitle2").innerHTML = "los facilities"


	}if(pagestring == 'farmhouse'){
		document.getElementById("title").innerHTML = "El Yurt"
		document.getElementById("subtitle").innerHTML = "Puedes alojar en el yurt por favor"
		document.getElementById("para1").innerHTML = "reservar"
		document.getElementById("para2").innerHTML = "reservar eso por favor"
		document.getElementById("para3").innerHTML = "reservar aqui por favor"
		document.getElementById("para4").innerHTML = "reservar aqui por favor"
		document.getElementById("subtitle2").innerHTML = "los facilities"

	}if(pagestring == 'vineyard'){
		document.getElementById("title").innerHTML = "El Yurt"
		document.getElementById("subtitle").innerHTML = "Puedes alojar en el yurt por favor"
		document.getElementById("para1").innerHTML = "reservar"
		document.getElementById("para2").innerHTML = "reservar eso por favor"
		document.getElementById("para3").innerHTML = "reservar aqui por favor"
		document.getElementById("para4").innerHTML = "reservar aqui por favor"
		document.getElementById("subtitle2").innerHTML = "los facilities"


	}if(pagestring == 'tourist'){
		document.getElementById("title").innerHTML = "El Yurt"
		document.getElementById("subtitle").innerHTML = "Puedes alojar en el yurt por favor"
		document.getElementById("para1").innerHTML = "reservar"
		document.getElementById("para2").innerHTML = "reservar eso por favor"
		document.getElementById("para3").innerHTML = "reservar aqui por favor"
		document.getElementById("subtitle2").innerHTML = "los facilities"


	}if(pagestring == 'contact'){
		document.getElementById("title").innerHTML = "El Yurt"
		document.getElementById("subtitle").innerHTML = "Puedes alojar en el yurt por favor"
		document.getElementById("button1").innerHTML = "reservar"
		document.getElementById("button2").innerHTML = "reservar eso por favor"
		document.getElementById("button3").innerHTML = "reservar aqui por favor"
		document.getElementById("subtitle2").innerHTML = "los facilities"
		document.getElementById("para1").innerHTML = "reservar aqui por favor"
		document.getElementById("para2").innerHTML = "reservar aqui por favor"
		document.getElementById("para3").innerHTML = "reservar aqui por favor"
		document.getElementById("para4").innerHTML = "reservar aqui por favor"
		document.getElementById("para5").innerHTML = "reservar aqui por favor"


	}else{}
	}