$(document).ready(function(){
  fuck();
});

function fuck () {

  var scrollState = '';
  var scrollNum = 0;

  var control_1 = $('#control-1');
  var control_2 = $('#control-2');
  var control_3 = $('#control-3');
  var control_4 = $('#control-4');

  control_1.html('A');
  control_2.html('b');
  control_3.html('C');
  control_4.html('D');


  // detect if IE : from http://stackoverflow.com/a/16657946
  var pageScroll;


  function repeat() {
    control_4.html(scrollState);
    setTimeout(function(){
      repeat();
    },200);
  }
  repeat();


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

  function touchmove(e) {
    preventDefault(e);
  }

  function wheel(e) {
    // for IE
    //if( ie ) {
    //preventDefault(e);
    //}
  }

  function disable_scroll() {
    scrollState = 'disabled';
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    //document.body.ontouchmove = touchmove;
  }

  function enable_scroll() {
    scrollState = 'enabled';
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
  }

  var docElem = window.document.documentElement,
      scrollVal,
      isRevealed,
      noscroll, // ie?
      isAnimating,
      navigation = $('.js-gallery-navigation'),
      container = $('.js-gallery-layout'),
      trigger = $('.js-gallery-container');

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }


// scroll page
  function scrollPage() {

    scrollVal = scrollY();

    control_3.html(scrollNum += 1);
    control_1.html('ScrollTop = '+scrollVal);


    if (container.hasClass('gallery-navigation--fixed')) {
      navigation.removeClass('gallery-navigation--fixed');
      container.removeClass('chicken');
      return false;
    }

    if (isAnimating) {
      // force scroll pos
      $('window').scrollTop(0);
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
      control_2.html('State: Revealed');
      container.addClass('chicken');
    }
    else {
      disable_scroll();
      noscroll = true;
      container.removeClass('chicken');
      navigation.removeClass('gallery-navigation--fixed');
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
  }

  window.addEventListener('scroll', scrollPage);
  trigger.click(function () {
    toggle('reveal');
  });

}