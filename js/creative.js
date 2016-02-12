/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 (function($) {


    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
        );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

var $tutor_form = $('#tutor_form');
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$tutor_form.submit(function(e) {
    e.preventDefault();
    $.ajax({
       url: "http://getsimpleform.com/messages/ajax?form_api_token=0b348998ebf29ed08a1151165c85c156",
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'jsonp',
        beforeSend: function() {
        },
        success: function(data) {
            $('#myModal').modal();
        },
        error: function(err) {
        }
    });
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
         modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }   
});


var $pupil_form = $('#pupil_form');

$pupil_form.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/melpjackson@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
        },
        success: function(data) {
            $('#myModal').modal();
        },
        error: function(err) {
            $pupil_form.append('<div class="alert alert--error">Ops, there was an error.</div>');
        }
    });
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
         modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }   
});


function show_pupil_form() {
    $("#pupil_form").slideDown();
}

var studentTab = $('.student-tab');
var tutorTab = $('.tutor-tab');

tutorTab.hide();
studentTab.hide();

$('.js-student-btn').click(function () {
    tutorTab.slideUp(function (){
        studentTab.slideDown();
    });


    $('html,body').animate({
        scrollTop: $(".student-tab").offset().top},
        'slow');

});

$('.js-tutor-btn').click(function () {
    studentTab.slideUp(function (){
        tutorTab.slideDown();
    });


    $('html,body').animate({
        scrollTop: $(".tutor-tab").offset().top},
        'slow');
});

})(jQuery); // End of use strict






