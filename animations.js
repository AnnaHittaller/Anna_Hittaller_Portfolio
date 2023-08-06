  $(document).ready(function(){

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

    // custom mouse code start --------- //

    $(window).mousemove(function(e) {
    $(".cursor-outer").css({
      top: e.clientY,
      left: e.clientX
    });
    $(".cursor-inner").css({
      top: e.clientY +'px',
      left: e.clientX +'px',
    
    });
  });
  
  $("[href],[type=submit], .hamburger").on({
    mouseenter() {
      $(".cursor-outer").addClass("cursor-hover");
    },
    mouseleave() {
      $(".cursor-outer").removeClass("cursor-hover");
    }
  });
  
  $(window).on({
    mousedown() {
      $(".cursor-inner").addClass("cursor-click");
    },
    mouseup() {
      $(".cursor-inner").removeClass("cursor-click");
    }
  });

  // custom mouse code end --------- //

  // navbar active class toggle start ************* //

  $('.menu-item').click(function() {
    $('.menu-item').removeClass('active');
   // $(this).addClass('active');
    $('.menu').removeClass('visible');
    $('.hamburger').removeClass('open');
    $(this).addClass('active');
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

$(window).on('scroll', function() {
  var currentScroll = $(window).scrollTop();
   if(currentScroll == 0) {
      $('header').removeClass('box-shadow')
   } else if(prevScroll > currentScroll) {
      $('header').removeClass('fadeout');
      $('header').addClass('box-shadow');
      //$('.mobile-menu').removeClass('slide-in');
   } else {
      if(currentScroll >= 100) {
        $('header').addClass('fadeout');
        $('.menu').removeClass('visible');
        $('.hamburger').removeClass('open');
      }
   }
  prevScroll = currentScroll;
});

 //navbar hide and slide code end -------------//


  $(".hamburger").on('click', function(){
      $(this).toggleClass("open");
      $('.menu').toggleClass('visible');
  });

});



