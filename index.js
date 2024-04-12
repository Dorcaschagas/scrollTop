$(window).scroll(function () {
    var scrollVertical = window.scrollY || window.pageYOffset;
    if (scrollVertical === 0) {
        $("#scrollTop").addClass('d-none')
    } else {
        $("#scrollTop").removeClass('d-none')
    }
})

function scrollTopBtn() {
    $(window).scrollTop(0)
    $('html , body').animate({
        scrollTop: 0
    }, 'slow')
}