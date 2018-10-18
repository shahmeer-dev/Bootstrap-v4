$(document).ready(function () {
    
    // Modals
    $('#log-btn').click(function () {
        $('#login-modal').modal('toggle');
    });

    $('#reserve-btn').click(function () {
        $('#reserve-form').modal('show')
    });

    // Carousel
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carousel-button').click(function () {
        if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause')
            $('#carousel-button').removeClass('btn-danger')
            $('#carousel-button').addClass('btn-success')
            $('#carousel-button').children('span').addClass('fa-play')
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play')
            $('#carousel-button').removeClass('btn-success')
            $('#carousel-button').addClass('btn-danger')
            $('#carousel-button').children('span').addClass('fa-pause')
        }
    });

})