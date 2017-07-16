$(document).ready(function(){
  fuck();
});

function fuck () {

  // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = [32, 37, 38, 39, 40], wheelIter = 0;

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  function keydown(e) {
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }


  function disable_scroll() {
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
  }

  function enable_scroll() {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
  }

  var scrollVal;
  var isRevealed;
  var noscroll; // ie?
  var isAnimating;
  var navigation = $('.js-gallery-navigation');
  var container = $('.js-gallery-layout');
  var trigger = $('.js-gallery-container');


  function scrollY() {
    return $(window).scrollTop;
  }


// scroll page
  function scrollPage() {

    scrollVal = scrollY();

    if (noscroll && !ie) {
      if (scrollVal < 0) return false;
      // keep it that way
      window.scrollTo(0, 0);
    }

    if (container.hasClass('gallery-navigation--fixed')) {
      navigation.removeClass('gallery-navigation--fixed');
      container.removeClass('chicken');
      return false;
    }
    /*
     if( classie.has( container, 'notrans' ) ) {
     classie.remove( container, 'notrans' );
     return false;
     }
     */

    console.log(scrollVal);

    if (isAnimating) {
      return false;
    }

    if (scrollVal <= 0) { //&& isRevealed ) {
      toggle(0);
    }
    else if (scrollVal > 0) {// && !isRevealed ){
      toggle(1);
    }
  }

  function toggle(reveal) {
    isAnimating = true;

    if (reveal == true) {
      console.log('scroll page');
      container.addClass('chicken');
      //classie.add( container, 'modify' );
    }
    else {
      noscroll = true;
      disable_scroll();
      container.removeClass('chicken');
      navigation.removeClass('gallery-navigation--fixed');
      //classie.remove( container, 'modify' );
    }

    // simulating the end of the transition:
    setTimeout(function () {
      navigation.addClass('gallery-navigation--fixed'); // change this function to fire at transitionend
      isRevealed = !isRevealed;
      isAnimating = false;
      if (reveal) {
        noscroll = false;
        enable_scroll();
      }
    }, 800);
  }

// refreshing the page...
  pageScroll = scrollY();
  noscroll = pageScroll === 0;

  // disabled scroll
  disable_scroll();

  // if page scroll
  if (pageScroll > 0) {
    isRevealed = true;
    container.addClass('chicken');
    navigation.addClass('gallery-navigation--fixed');
    //classie.add( container, 'notrans' );
    //classie.add( container, 'modify' );
  }

  window.addEventListener('scroll', scrollPage);
  trigger.click(function () {
    toggle('reveal');
  });

}