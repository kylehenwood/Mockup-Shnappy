// Pjax pagechange navigation highlight

$(document).ready(function(){
  const navItems = $('.js-navitem');
  let currentItem;
  window.addEventListener('complete',function(){
    navItems.each(function(){
      const item = $(this);
      const classToggle = item.attr('classToggle');
      item.removeClass(classToggle);
    });
  });

  window.addEventListener('complete',function(){
    const classToggle = currentItem.attr('classToggle');
    currentItem.addClass(classToggle);
  });

  navItems.each(function(){
    const item = $(this);
    item.click(function(){
      currentItem = item;
    });
  });

});
