//===================================================
//leva a tela ao inicio
$(window).on('scroll',function(){
    $("#scrollTop").toggleClass('d-none', $(this).scrollTop() <= 0);
})

$("#scrollTop").on('click', function(){
   $('html, body').scrollTop(0)
})
//===================================================
//permite mover botao scroll na tela.
let movendoMouse = false;
let inicioXMouse;

$('.scrollmoving').on('mousedown', function (e) {
    movendoMouse = true;
    inicioXMouse = e.clientX - parseInt($('#scrollTop').css('left'));
});

$(document).on('mousemove', function (e) {
    if (movendoMouse) {
        let newLeft = e.clientX - inicioXMouse;
        $('.scrollmoving').css('left', newLeft);
    }
});

$(document).on('mouseup', function () {
    movendoMouse = false;
});
