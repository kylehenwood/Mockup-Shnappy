// javascripts
$(document).ready(function(){
  dropdownController();
  userDropdown();
  navigation();
  button();
  modal();
  annualSwitch();
  advancedControls();
  galleryNavigation();
  planSelect();
  breadcrumb();
});



function breadcrumb(){
  if(!$('.breadcrumb') == true){
    return false;
  }
  var item = $('.breadcrumb__item').last();

  setTimeout(function(){
    item.addClass('breadcrumb__item--animate');
  },200);

}

function planSelect() {
  if (!$('.js-plan-select') == true){
    return false;
  }
  var delay = 0;
  var plans = $('.js-plan-select-item');

  plans.each(function(){
    var plan = $(this);
    setTimeout(function(){
      plan.addClass('plan-select__item--active');
    },delay);
    delay += 120;
  });
}

function galleryNavigation(){
  if (!$('.js-gallery-navigation') == true){
    return false;
  }

  var elem = $('.js-gallery-navigation');
  var dist = 1;//elem.offset().top;
  var scrollPos;

  console.log(dist);

  $(window).scroll(function(){
    checkGalleryNav();
  });

  function checkGalleryNav() {
    scrollPos = $(window).scrollTop();

    if (dist >= scrollPos) {
      elem.removeClass('gallery-navigation--shadow');
    } else {
      elem.addClass('gallery-navigation--shadow');
    }
  }
  checkGalleryNav();
}



function advancedControls() {
  if (!$('.js-advanced-controls') == true){
    return false;
  }

  var trigger = $('.js-advanced-controls-trigger');
  var content = $('.js-advanced-controls-content');

  trigger.click(function(){
    content.toggleClass('advanced-controls__content--open');
  });

}



function annualSwitch() {
  $('.js-annual-switch').each(function(){
    var buttons = $(this).children('.js-annual-button');

    buttons.click(function(){
      annualToggle($(this));
    });

    function annualToggle(button){
      buttons.removeClass('annual-switch__button--active');
      button.addClass('annual-switch__button--active');
    }
  });
}

function modal() {
  var trigger = $('.js-modal-trigger');
  var overlay = $('.js-modal-overlay');
  var content = $('.js-modal-content');
  var close = $('.js-modal-close');
  var state = 'closed';



  trigger.click(function(){
    if (state == 'closed') {
      openOverlay();
    } else {
      closeOverlay();
    }
  });


  if (overlay.hasClass('modal-overlay--active') == true) {
    state = 'open';
  } else {
    state = 'closed';
  }

  close.click(function(){
    closeOverlay();
  });

  content.click(function(event){
    event.stopPropagation();
  });

  overlay.click(function() {
    if (state == 'open') {
      closeOverlay();
    }
  });

  function openOverlay() {
    overlay.addClass('modal-overlay--active');
    state = 'open';
  }
  function closeOverlay() {
    overlay.removeClass('modal-overlay--active');
    state = 'closed';
  }
}


function button() {
  var component = $('.js-primary-button');
  var button = $('.js-primary-trigger');

  button.click(function(){
    component.toggleClass('primary-button--loading');
  });

}


function navigation() {
  var navitems = $('.js-navitem');

  navitems.each(function(){
    var navitem = $(this);

    navitem.click(function(){
      navitems.removeClass('primary-item--active');
      navitem.addClass('primary-item--active');
    });
  });
}



function dropdownController() {
  var dropdowns = $('.dropdown');

  dropdowns.each(function(){

    var state = 'closed';
    var dropdown = $(this);
    var trigger = dropdown.find('.button');
    var dropdownContent = dropdown.find('.dropdown__content');

    if (dropdown.hasClass('dropdown__content--open')) {
      state = 'open';
    }


    //Hide the menus if visible
    $('html').click(function() {
      if (state == 'open') {
        closeDropdown();
      }
    });

    dropdown.click(function(event){
      event.stopPropagation();
    });

    trigger.click(function(){
      if (state == 'open') {
        closeDropdown();
      } else {
        trigger.addClass('button--active');
        dropdownContent.addClass('dropdown__content--open');
        state = 'open';
      }
    });

    function closeDropdown() {
      trigger.removeClass('button--active');
      dropdownContent.removeClass('dropdown__content--open');
      state = 'closed';
    }
  });
}


function userDropdown () {
  var dropdown = $('.js-user-dropdown');
  var state = 'closed';
  var trigger = dropdown.find('.js-user-dropdown-trigger');
  var dropdownContent = dropdown.find('.js-user-dropdown-content');

  if (dropdown.hasClass('user-dropdown--active')) {
    state = 'open';
  }


  //Hide the menus if visible
  $('html').click(function() {
    if (state == 'open') {
      closeDropdown();
    }
  });

  dropdown.click(function(event){
    event.stopPropagation();
  });

  trigger.click(function(){
    if (state == 'open') {
      closeDropdown();
    } else {
      trigger.addClass('user-button--active');
      dropdownContent.addClass('user-dropdown--active');
      state = 'open';
    }
  });

  function closeDropdown() {
    trigger.removeClass('user-button--active');
    dropdownContent.removeClass('user-dropdown--active');
    state = 'closed';
  }
}