(function(){

  'use strict';

  var execute1 = document.getElementById('js-execute-1'),
      reset1 = document.getElementById('js-reset-1');

  execute1.addEventListener('click', function() {
    var reel = document.getElementById('js-reel-1');

    reel.style.webkitTransform = 'translateY(-3360px)';
    reel.style.mozTransform = 'translateY(-3360px)';
    reel.style.transform = 'translateY(-3360px)';
  }, false);

  reset1.addEventListener('click', function() {
    var reel = document.getElementById('js-reel-1');

    reel.style.webkitTransform = '';
    reel.style.mozTransform = '';
    reel.style.transform = '';
  }, false);

  var execute2 = document.getElementById('js-execute-2'),
      reset2 = document.getElementById('js-reset-2');

  execute2.addEventListener('click', function() {
    var reel = document.getElementById('js-reel-2'),
        items = reel.querySelectorAll('.slot'),
        i, len;

    for (i = 0, len = items.length; i < len; ++i) {
      items[i].style.top = (i * 240) + 'px';
      items[i].style.webkitTransform = 'translateY(-3360px)';
      items[i].style.mozTransform = 'translateY(-3360px)';
      items[i].style.transform = 'translateY(-3360px)';
    }
  }, false);

  reset2.addEventListener('click', function() {
    var reel = document.getElementById('js-reel-2'),
        items = reel.querySelectorAll('.slot'),
        i, len;

    for (i = 0, len = items.length; i < len; ++i) {
      items[i].style.top = '';
      items[i].style.webkitTransform = '';
      items[i].style.mozTransform = '';
      items[i].style.transform = '';
    }
  }, false);

}());
