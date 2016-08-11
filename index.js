var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
var $CONTACT_US_ANCHOR = document.body.scrollHeight - (1.1 * window.innerHeight);
var $UPCOMING_START = $('#UPCOMING').offset().top;
var $UPCOMING_HEIGHT = $('#UPCOMING').outerHeight();
window.onresize = function() {
    $CONTACT_US_ANCHOR = document.body.scrollHeight - (1.3 * window.innerHeight);
    $UPCOMING_START = $('#UPCOMING').offset().top;
    $UPCOMING_HEIGHT = $('#UPCOMING').outerHeight();
}
$('document').ready(function() {
    $(window).on('scroll', function() {
        if (!$('contact-form').hasClass('compact')) {
            $('contact-form>face').click();
        }
        if (window.innerWidth > 800) {
            $('slideshow>slideWrapper>photo>div').each(function(index) {
                $(this).css({
                    'transform': 'translateY(' + (window.scrollY) / 2 + 'px)'
                });
            });
            if (window.scrollY + window.innerHeight > $UPCOMING_START && (window.scrollY < $UPCOMING_START + $UPCOMING_HEIGHT)) {
                $('#UPCOMING').css("background-position", "50% " + (((($UPCOMING_START - window.scrollY - window.innerHeight) * 20) / $UPCOMING_HEIGHT) - ($UPCOMING_HEIGHT / 2.5)) + "%");
            }
            $('.hidden').each(function() {
                if (window.scrollY > $(this).offset().top + 200 - window.innerHeight) {
                    $(this).removeClass('hidden');
                }
            });
        }
        if (window.innerWidth > 700) {
            $('wrapper>slide').each(function(index) {
                if (window.scrollY > $(this).offset().top - 0.5 * window.innerHeight) {
                    $('tracker>div>div').eq(index).addClass('active').siblings().removeClass('active');
                }
                if (window.scrollY < 100) {
                    $('tracker>div>div').eq(0).addClass('active').siblings().removeClass('active');
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
            if ($('contact-form').hasClass('compact')) {
                $('contact-form>face').click();
            }
        } else if (window.scrollY > 40) {
            if (!$('contact-form').hasClass('compact')) {
                $('contact-form>face').click();
            }
        }
    });
    $('contact-form>face').click(function() {
        $(this).parent().toggleClass('compact');
        if ($(this).parent().hasClass('compact') && window.innerWidth > 800)
            $('#tandc').removeClass('active');
        $('contact-form>.button').removeClass('active');
    });
    if (!isTouch) {}
    $('input').blur(function() {
        if ($(this).val()) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
    $('select').blur(function() {
        if (!$(this).find('option:selected').is('[disabled]')) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
    (function() {
        var slideshow = setInterval(function() {
            $('slideshow slideWrapper.active').removeClass('active').nextOrFirst().addClass('active');
            $('#HOME dots>div.active').removeClass('active').nextOrFirst().addClass('active');
            $('about').addClass('timed');
        }, 5000);
        $('#HOME dots>div').each(function(index) {
            $(this).click(function() {
                $('slideshow slideWrapper').eq(index).addClass('active').siblings().removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
        $('slideshowwrapper').mouseover(function() {
            clearInterval(slideshow);
            $('about').removeClass('timed');
        });
        $('slideshowwrapper').mouseout(function() {
            slideshow = setInterval(function() {
                $('slideshow slideWrapper.active').removeClass('active').nextOrFirst().addClass('active');
                $('#HOME dots>div.active').removeClass('active').nextOrFirst().addClass('active');
                $('about').addClass('timed');
            }, 5000);
        })
    })();
    $.fn.nextOrFirst = function(selector) {
        var next = this.next(selector);
        return (next.length) ? next : this.prevAll(selector).last();
    }
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
        }, 7000);
    }());
    $('tracker>face').click(function() {
        $('tracker>div').toggleClass('active');
    });
    $('contact-form>.button.toggle').click(function() {
        $('#tandc').toggleClass('active');
        $('contact-form>.button').toggleClass('active');
    });
    (function() {
        $('category>div').click(function() {

        });
    })();
    (function() {
        $('category>div').each(function() {
            var $INDEX = 0;
            var $elem = $(this);
            var $LENGTH = $(this).find('div').length;
            var slideshow = undefined;
            $(this).mouseover(function() {
                $INDEX = ($INDEX + 1) % $LENGTH;
                $elem.find('div').eq($INDEX).addClass('active').siblings().removeClass('active');
                slideshow = window.setInterval(function() {
                    $INDEX = ($INDEX + 1) % $LENGTH;
                    $elem.find('div').eq($INDEX).addClass('active').siblings().removeClass('active');
                }, 2000);
            });
            $(this).mouseout(function() {
                clearInterval(slideshow);
            });
        });
    })();
    $('about').mouseover(function() {
        $(this).stop(true, true).animate({ height: $("about>p").get(0).scrollHeight }, 300);
    });
    $('about').mouseout(function() {
        $(this).stop(true, true).animate({ 'height': '0px' }, 300);
    });
    $('.overlay').click(function() {
        $(this).removeClass('active');
        console.log('test');
    });
    $('.policy span').click(function() {
        $('.overlay').addClass('active');
        $("#" + $(this).attr("for")).addClass('active').siblings().removeClass('active');
    })
});
