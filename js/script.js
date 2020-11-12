// parralax di judul

$(window).on('load', function () {
    $('.jAtas').addClass('jMuncul');
    $('.jBawah').addClass('jMuncul');
});


$(window).scroll(function (){
    var wScroll = $(this).scrollTop();
    
    // jumbotron

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll*2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll*5.3 +'%)'
    });




    // Passion
    if( wScroll > $('.passion').offset().top - 350) {
        $('.passion .material-icons').each(function(i) {
            setTimeout(function() {
                $('.passion .material-icons').eq(i).addClass('muncul');
            }, 300 * (i+1) );
        });

        
        
    }

    // Work
    if( wScroll > $('.work').offset().top - 350) {
        $('.work .port').each(function(i) {
            setTimeout(function() {
                $('.work .port').eq(i).addClass('timbul');
            }, 300 * (i+1) );
        });

        
        
    }


});