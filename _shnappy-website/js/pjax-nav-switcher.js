// Pjax pagechange navigation highlight

$(document).ready(function(){
  const navItems = $('.js-navitem');
  let currentItem = null;

  window.addEventListener('complete',function(){
    navItems.each(function(){
      const item = $(this);
      const classToggle = item.attr('classToggle');
      item.removeClass(classToggle);
    });
  });

  window.addEventListener('complete',function(){
    if (currentItem != null) {
      const classToggle = currentItem.attr('classToggle');
      currentItem.addClass(classToggle);
    }
    currentItem = null;
  });

  navItems.each(function(){
    const item = $(this);
    item.click(function(){
      currentItem = item;
    });
  });
});
