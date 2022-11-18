/*$('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
       // .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
*/
$(document).ready(function() {
  var $main = $('.content__main'),
    $mainImg = $main.find('#img_cover'),
    $bool = false,
    $win = $(window),
    $widthImg = $mainImg.width(),
    $heightImg = $mainImg.height(),
    positionFunc = function(e) {
      return x = e.pageX - $main.offset().left, y = e.pageY - $main.offset().top;
    },
    zoomIn = function(e) {
      positionFunc(e);
      $mainImg.animate({
        left: -x,
        top: -y,
        width: $widthImg * 2.01,
        height: $heightImg * 2.01
      }, 200, function() {
        $main.bind('mousemove', function(e) {
          positionFunc(e);
          $mainImg.css({
            left: -x,
            top: -y
          });
        });
      }).css({
        cursor: 'zoom-out',
      });
      $bool = true;
    },
    zoomOut = function() {
      $mainImg.animate({
        left: 0,
        top: 0,
        width: $widthImg,
        height: $heightImg
      }, 100).css({
        cursor: ''
      });
      $main.unbind('mousemove');
      $bool = false;
    }

  $main.bind('mousedown', function(e) {
    if ($bool !== true) {
      zoomIn(e);
      $main.css({
        height: $heightImg
      });
    } else {
      zoomOut();
      $main.css({
        height: $(this).height()
      });
    }
  }).bind('mouseout', function() {
    zoomOut();
  });

  $win.scroll(function() {
    if ($bool) {
      zoomOut();
    }
  });
});




    function makeResizable(element){
      if (element && jQuery(element).length){
        var $el = jQuery(element);
        var elHeight = $el.outerHeight();
        var elWidth = $el.outerWidth();
    
        var $wrapper = $el.parent();
    
        var starterData = {
          size: {
            width: $wrapper.width(),
            height: $wrapper.height()
          }
        }
        var scale = Math.min(
          starterData.size.width / $el.outerWidth(),
          starterData.size.height / $el.outerHeight()
        );
        if (scale > 1){
          scale = 1;
        }
        var elMarginBottom = (scale * elHeight) - starterData.size.height;
        $el.css({
          transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
          'margin-bottom': elMarginBottom
        });
      }
    }
    jQuery(document).ready(function() {
      makeResizable('#very-specific-design');
    });
    jQuery(window).load(function() {
    //	makeResizable('#very-specific-design');
    });
    jQuery(window).resize(function() {
      makeResizable('#very-specific-design');
    });