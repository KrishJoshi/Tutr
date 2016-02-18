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
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
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


var $pupil_form = $('#pupil_form');
var $tutor_form = $('#tutor_form');
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


$pupil_form.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/contact@tutr.london',
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


$tutor_form.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/contact@tutr.london',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
        },
        success: function(data) {
            $('#myModal').modal();
        },
        error: function(err) {
            $tutor_form.append('<div class="alert alert--error">Ops, there was an error.</div>');
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

var featuredTab = $('.featured-tutors');
featuredTab.hide();

$('.js-featured-btn').click(function () {
    featuredTab.slideToggle();

    $('html,body').animate({
        scrollTop: $(".featuredTab").offset().top},
        'slow');
});

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

$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('.modal-body').append($($(this).parents('div').html()).text());
  	 
  	$('#lightbox-modal').modal({show:true});
});



})(jQuery); // End of use strict






