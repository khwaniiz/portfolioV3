// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link');

// navToggle.addEventListener('click', () => {
//   document.body.classList.toggle('nav-open');
// });

// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     document.body.classList.remove('nav-open');
//   });
// });

// Sticky navigator

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed() {
  if ($('.header_area').length) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $('.header_area .main-menu').addClass('navbar_fixed');
      } else {
        $('.header_area .main-menu').removeClass('navbar_fixed');
      }
    });
  }
}

function scrollSpy() {
  var selector1 = '.home';
  var selector2 = '.about';
  var selector3 = '.skills';
  var selector4 = '.projects';

  $(document).ready(function () {
    $('.nav li a').removeClass('active');
  });

  $('.nav li a').on('click', function () {
    var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint =
        $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
    $('body,html').animate(
      {
        scrollTop: scrollPoint,
      },
      500
    );
    return false;
  });

  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      var sec1 = $('#home').offset().top - 50;
      var sec2 = $('#about').offset().top - 50;
      var sec3 = $('#skills').offset().top - 100;
      var sec4 = $('#projects').offset().top - 130;

      if (windscroll >= sec1) {
        $(selector1).addClass('active');
      } // do not remove this class

      if (windscroll >= sec2) {
        $(selector2).addClass('active');

        $(selector1).removeClass('active');
        $(selector3).removeClass('active');
        $(selector4).removeClass('active');
      } else {
        $(selector2).removeClass('active');
      }

      if (windscroll >= sec3) {
        $(selector3).addClass('active');

        $(selector1).removeClass('active');
        $(selector2).removeClass('active');
        $(selector4).removeClass('active');
      } else {
        $(selector3).removeClass('active');
      }

      if (windscroll >= sec4) {
        $(selector4).addClass('active');

        $(selector1).removeClass('active');
        $(selector2).removeClass('active');
        $(selector3).removeClass('active');
      } else {
        $(selector4).removeClass('active');
      }
    })
    .scroll();
}

function run() {
  navbarFixed();
  scrollSpy();
}

run();
