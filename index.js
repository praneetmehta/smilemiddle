var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
var noOfSlides = $('wrapper slide').length;
var $CONTACT_US_ANCHOR = document.body.scrollHeight - (1.1 * window.innerHeight);
var $UPCOMING_START = $('#UPCOMING').offset().top;
var $UPCOMING_HEIGHT = $('#UPCOMING').outerHeight();
window.onresize = function() {
    $CONTACT_US_ANCHOR = document.body.scrollHeight - (1.1 * window.innerHeight);
    $UPCOMING_START = $('#UPCOMING').offset().top;
    $UPCOMING_HEIGHT = $('#UPCOMING').outerHeight();
}
$('document').ready(function(){
  $('contact-form>button').prop('disable',true);
});
$(window).on('scroll', function() {

    if (window.innerWidth > 800) {
        $('slideshow img').each(function(index) {
            $(this).css({
                'transform': 'translateY(' + (window.scrollY) / 2 + 'px)'
            });
        });
        if (window.scrollY + window.innerHeight > $UPCOMING_START && (window.scrollY < $UPCOMING_START + $UPCOMING_HEIGHT)) {
            $('#UPCOMING').css("background-position", "50% " + (((($UPCOMING_START - window.scrollY - window.innerHeight) * 20) / $UPCOMING_HEIGHT) - 130) + "%");
            console.log('there');
        }
        $('.hidden').each(function() {
            if (window.scrollY > $(this).offset().top + 200 - window.innerHeight) {
                $(this).removeClass('hidden');
            }
        });
        $('slide').each(function(index) {
            if (window.scrollY > $(this).offset().top - 0.75*window.innerHeight) {
                $('tracker>div>div').eq(index).addClass('active').siblings().removeClass('active');
            }
        });
    }
    if (window.scrollY > 40) {
        $('contact-form').addClass('inactive');
        $('tracker').addClass('shade');
    } else {
        $('contact-form').removeClass('inactive');
        $('tracker').removeClass('shade');
    }
    if (window.scrollY > $CONTACT_US_ANCHOR) {
        $('contact-form').addClass('override').removeClass('inactive');
    } else if (window.scrollY > 40) {
        $('contact-form').removeClass('override').addClass('inactive');
    }
});

$('contact-form>face').click(function() {
    $(this).parent().toggleClass('compact');
    if ($(this).parent().hasClass('compact') && window.innerWidth > 800)
        $('#tandc').removeClass('active');
});
if (!isTouch) {

}
$('input').blur(function() {
    if ($(this).val()) {
        $(this).addClass('filled');
    } else {
        $(this).removeClass('filled');
    }
})
var slideshow = setInterval(function() {
    $('slideshow slideWrapper.active').removeClass('active').nextOrFirst().addClass('active');
}, 5000)

$.fn.nextOrFirst = function(selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
};

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            } 
        }
    });
});


(function() {
    "use strict";
    var $INDEX = 1;
    var $LENGTH = $('.testimonial').length;
    setInterval(function() {
        $INDEX = ($INDEX + 1) % $LENGTH;
        $('#TESTIMONIALS>.slider>.testimonial').eq($INDEX).addClass('active').siblings().removeClass('active');
    }, 4000);
}());
$('tracker>face').click(function() {
    $('tracker>div').toggleClass('active');
});

$('contact-form view').click(function() {
    $('#tandc').toggleClass('active');
    $('contact-form>button').prop('disable',false);
    $('contact-form>button').removeClass('disabled');
    $('contact-form>button').attr('title','');
})

var tooltip;
$('category>div').click(function() {
    clearTimeout(tooltip);
    $('tooltip').addClass('active');
    tooltip = setTimeout(function() {
        $('tooltip').removeClass('active');
    }, 5000);
});
 $('#privacy_policy').blur(function(){
   console.log($(this));
   $('#privacyInput').prop('checked',false);
 })
 $('#privacyInput').click(function(){
   if($(this).prop('checked'))
    $('#privacy_policy').focus();
 })
