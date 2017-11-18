// Ensure console is defined
if(typeof console === 'undefined') console = {"log":function(m){}};


// PJAX links!
pjax.connect({
  'container': 'js-pjax-container',
  'beforeSend': function(e){ console.log("before send"); },
	'complete': function(e){ console.log("done!"); },
  'success': function(event){
    var url = (typeof event.data !== 'undefined') ? event.data.url : '';
    console.log("Successfully loaded "+ url);
  },
  'error': function(event){
    var url = (typeof event.data !== 'undefined') ? event.data.url : '';
    console.log("Could not load "+ url);
  },
  'ready': function(){
    console.log("PJAX loaded!");
  }
});

// pjax.connect('content', 'pjaxer');
// pjax.connect('content');
// pjax.connect();
