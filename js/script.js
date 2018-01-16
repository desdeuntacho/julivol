$(document).ready(function () {

    // $("#content").mCustomScrollbar({
    //      theme: "minimal"
    // });
    // $('.components li').on('click', function () {
    //     // open or close li
    //     $(this).toggleClass('active');
    // });

    // var $statement = $('.statement');
    // $statement.on('mouseover', function showStatement () {
    //   $statement.delay(1500).queue(function () {
    //     $statement.find('.statement-txt:nth-child(1)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500)
    //   .queue(function () {
    //     $statement.find('.statement-txt:nth-child(2)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500)
    //   .queue(function () {
    //     $statement.find('.statement-txt:nth-child(3)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500)
    //   .queue(function () {
    //     $statement.find('.statement-txt:nth-child(4)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500)
    //   .queue(function () {
    //     $statement.find('.statement-txt:nth-child(5)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500)
    //   .queue(function () {
    //     $statement.find('.statement-txt:nth-child(6)').addClass('visible');
    //     $(this).dequeue();
    //   })
    //   .delay(1500);
    // });
    // var screenWidth = window.innerWidth;
    // if (screenWidth < 768) {
    //     $statement.showStatement();
    // }
    $('.statement').on('mouseover', function () {
      var delayTime = 1000,
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

});
