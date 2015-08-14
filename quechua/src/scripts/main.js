(function() {

  var $loader = $('.loader');
  var $main = $('.main');
  var $mainLogo = $('.main__logo');
  var $mainTitle = $('.main__title');
  var $mainSpringSummer = $('.main__spring-summer');
  var $mainButton = $('.main__button');
  var $menuBottom = $('.menu-bottom');
  var $menuBottomItem = $('.menu-bottom__item');
  var time = 1000;

  // Show element
  function show(element) {
    element.show();
  }

  // Hide element
  function hide(element) {
    element.hide();
  }

  // Add Class for element
  function addclass(element,nameclass) {
    element.addClass(nameclass);
  }

  // Remove Class of element
  function removeclass(element,nameclass) {
    element.removeClass(nameclass);
  }

  // Set timeout for the element
  function aftertime(sec, callback, element, attribute) {

    setTimeout(function() {
      callback(element, attribute);
    }, sec);
  }

  // Animation for menu when click on it
  function menuload() {
    var $itemLink = $(event.target);
    var $item = $itemLink.parent();

    aftertime(1000, addclass, $menuBottom, 'active');
    aftertime(2000, addclass, $item, 'width');
    aftertime(3000, show, $loader);
    aftertime(5000, hide, $loader);
    aftertime(6000, removeclass, $item, 'width');
    aftertime(7000, removeclass, $menuBottom, 'active');
  }

  // When load page will show loader
  $(window).on('load', function() {
    aftertime(2000, hide, $loader);
  });

  $(function() {

    // Show the element of main
    aftertime(2100, show, $main);
    aftertime(2500, show, $mainLogo);
    aftertime(3000, show, $mainTitle);
    aftertime(3200, show, $mainSpringSummer);
    aftertime(3500, show, $mainButton);
    aftertime(4000, show, $menuBottom);

    // Click on item of menu bottom will link to page of item
    $menuBottomItem.on('click', function(event) {
      var $grabouw = $('.grabouw-intro');
      var $target = $(event.target);

      if ($target.attr('href') === '#grabouw') {
        menuload();

        setTimeout(function() {
          $grabouw.css({
            display: 'block',
            opacity: '1'
          });

          $main.hide();
        },8000);
      }
    });

    setInterval(function() {

      var weatherInfo = $('.grawbouw-intro__weather__info__item');
      for(var i = 0, weatherInfoLength = weatherInfo.length; i < weatherInfoLength; i++) {

        if(!$(weatherInfo[i]).hasClass('hide') || !$(weatherInfo[i]).hasClass('init')) {

          setTimeout(function() {
            $(weatherInfo[i]).toggleClass('init');
          },1000);

          setTimeout(function() {
            $(weatherInfo[i+1]).removeClass('hide');
          },1500);

          setTimeout(function() {
            $(weatherInfo[i]).removeClass('init');
            $(weatherInfo[i]).addClass('hide');
          },1100);
        }
      }
    },1000);
  });
})();
