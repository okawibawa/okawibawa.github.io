// Scroll Efect

// Event when the nav link clicked
$('.page-scroll').on('click', function(e){

    // Taking the current clicked href value
    var href = $(this).attr('href');
    
    // Catching the elements
    var elementHref = $(href);

    //  Moved scroll
    $('html , body').animate({
        scrollTop: elementHref.offset().top - 50
    }, 1200, 'easeInOutExpo' );

    e.preventDefault();
});

// Parallax Efect

// About
$(window).on('load', function(){
    $('.first').addClass('fshow');
    $('.second').addClass('sshow');
})

// Event when scrolling the page
$(window).scroll(function(){ 
    // Jumbotron
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h2').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // Portfolio
    if(wScroll > $('.portfolio').offset().top - 400){
        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .img-thumbnail').eq(i).addClass('show');
            }, 250 * (i+1));
        });   
    };
    
});