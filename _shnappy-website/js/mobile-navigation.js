// Mobile navigation
// window.resize = close all

$(document).ready(function(){
  // buttons
  const mobileButtonMenu = $('.js-mobile-btn-menu');
  const mobileButtonAccount = $('.js-mobile-btn-account');
  const mobileButtonClose = $('.js-mobile-btn-close');

  // trays
  const mobileTrayMenu = $('.js-mobile-menu');
  const mobileTrayAccount  = $('.js-mobile-account');

  // layout
  const layout = $('.js-layout');
  const overlay = $('.js-overlay');

  let menuOpen = false;

  function closeMobileDrawer() {
    menuOpen = false;
    layout.removeClass('layout--menu-isopen');
    mobileTrayMenu.removeClass('layout__mobile-menu--animate-in');
    mobileTrayAccount.removeClass('layout__mobile-account--animate-in');
  }

  function openMenuDrawer() {
    menuOpen = true;
    layout.addClass('layout--menu-isopen');
    mobileTrayMenu.addClass('layout__mobile-menu--animate-in');
    mobileTrayAccount.removeClass('layout__mobile-account--animate-in');
  }

  function openAccountDrawer() {
    menuOpen = true;
    layout.addClass('layout--menu-isopen');
    mobileTrayAccount.addClass('layout__mobile-account--animate-in');
    mobileTrayMenu.removeClass('layout__mobile-menu--animate-in');
  }


  // close menus if click not on them
  mobileTrayMenu.on('click', function(e) {
    e.stopPropagation();
  });
  mobileTrayAccount.on('click', function(e) {
    e.stopPropagation();
  });

  overlay.on('click', function (e) {
    if (menuOpen === true) {
      closeMobileDrawer();
    }
  });

  mobileButtonClose.click(function(){closeMobileDrawer();});
  mobileButtonMenu.click(function(){openMenuDrawer();});
  mobileButtonAccount.click(function(){openAccountDrawer();});

  $(window).resize(function(){
    closeMobileDrawer();
  });

});
