$('.tile')
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