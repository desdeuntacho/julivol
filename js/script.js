$(document).ready(function () {

    // $("#content").mCustomScrollbar({
    //      theme: "minimal"
    // });
    // $('.components li').on('click', function () {
    //     // open or close li
    //     $(this).toggleClass('active');
    // });

    $('.statement').on('mouseover', function () {
      var delayTime = 500,
      $statement = $('.statement'),
      $statementTxt = $statement.children('.statement-txt');
      $statementTxt.each(function () {
        var child = $(this);
        $statement.queue(function () {
          child.addClass('visible');
          $statement.dequeue();
        }).delay(delayTime);
      });
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar, #content').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.slider').slick({
      dots: true,
      fade: true,
      speed: 500,
      cssEase: 'linear',
      mobileFirst: true,
      adaptiveHeight: true,
    });

    $('.memoria').on('click', function () {
      // var delayTime = 500,
      // $concepto = $('.concepto'),
      // $conceptoTxt = $statement.children('.concepto-txt');
      // $conceptoTxt.each(function () {
      //   var child = $(this);
      //   $conceptoTxt.fadeIn('slow')
      //   // $statement.queue(function () {
      //   //   child.fadeIn('slow');
      //   //   $statement.dequeue();
      //   // }).delay(delayTime);
      // });
      $('.concepto-txt').fadeIn('3000');
    });

});
