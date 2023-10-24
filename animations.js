$(document).ready(function () {
	// bouncing letter animation start *********//

	$(".animated").on({
		mouseenter() {
			$(this).addClass("animated");
		},
		animationend() {
			$(this).removeClass("animated");
		},
	});

	// bouncing letter animation end *********//

	// custom cursor code start --------- //
	function setupCustomCursor() {
		$(window).mousemove(function (e) {
			$(".cursor-outer").css({
				top: e.clientY,
				left: e.clientX,
				opacity: 1,
			});
			$(".cursor-inner").css({
				top: e.clientY + "px",
				left: e.clientX + "px",
				opacity: 1,
			});
		});

		$(window).on({
			mouseleave() {
				$(".cursor-outer").css({
					opacity: 0,
				});
				$(".cursor-inner").css({
					opacity: 0,
				});
			},
		});

		$("[href], [type=submit], .hamburger").on({
			mouseenter() {
				$(".cursor-outer").addClass("cursor-hover");
			},
			mouseleave() {
				$(".cursor-outer").removeClass("cursor-hover");
			},
		});

		$(window).on({
			mousedown() {
				$(".cursor-inner").addClass("cursor-click");
			},
			mouseup() {
				$(".cursor-inner").removeClass("cursor-click");
			},
		});
	}

	setupCustomCursor();

	// custom cursor code end --------- //

	// navbar active class toggle start ************* //

	$(".menu-item").click(function () {
		$(".menu-item").removeClass("active");
		// $(this).addClass('active');
		$(".menu").removeClass("visible");
		$(".hamburger").removeClass("open");
		$(this).addClass("active");
	});

	// navbar active class toggle end *************//

	//navbar hide and slide code start -------------//

	// if ($(".hamburger").hasClass("open")) {
	// 	$("body").css({
	// 		overflow: "hidden",
	// 		position: "absolute",
	// 	});
	// }

	var prevScroll = $(window).scrollTop();
	var timeout;

	function fadeOutHeader() {
		$("header").addClass("fadeout");
		$(".menu").removeClass("visible");
		$(".hamburger").removeClass("open");
	}

	$(window).on("scroll", function () {
		var currentScroll = $(window).scrollTop();
		if (currentScroll == 0) {
			$("header").removeClass("box-shadow");
			clearTimeout(timeout);
		} else if (prevScroll > currentScroll) {
			$("header").removeClass("fadeout");
			$("header").addClass("box-shadow");
			//$('.mobile-menu').removeClass('slide-in');
		} else {
			if (currentScroll >= 100) {
				fadeOutHeader();
			}
		}
		prevScroll = currentScroll;

		// Clear the previous timeout (if any)
		clearTimeout(timeout);

		// Set a new timeout
		if (currentScroll > 0) {
			timeout = setTimeout(function () {
				fadeOutHeader();
			}, 4000);
		}
	});

	// Add an event listener to prevent fadeout when mouse is over header
	$("header").on("mouseenter", function () {
		clearTimeout(timeout);
	});

	// Add an event listener to resume fadeout when mouse leaves header
	$("header").on("mouseleave", function () {
		timeout = setTimeout(function () {
			fadeOutHeader();
		}, 4000); // 2000 milliseconds (2 seconds)
	});

	//navbar hide and slide code end -------------//

	$(".hamburger").on("click", function () {
		$(this).toggleClass("open");
		$(".menu").toggleClass("visible");
	});
});
