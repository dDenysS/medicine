// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//         $('header').addClass("header-scroll");
//     }
//     else{
//         $('header').removeClass("header-scroll");
//     }
// });

// $(function(){
//     $('.vertical-nav-btn').click(function(){
//         $(this).toggleClass('active');
//
//         $('.vertical-nav').toggleClass('active');
//
//         $('.vertical-nav-overlay').toggleClass('active');
//
//         return false;
//     })
//
//     $(document).mouseup(function (e){
//         var container = $(".vertical-nav-btn");
//
//         if (!container.is(e.target) && container.has(e.target).length === 0){
//             container.removeClass('active');
//             $('.vertical-nav-overlay').removeClass('active');
//             $('.vertical-nav').removeClass('active');
//         }
//     });
// });

$(function () {
    $('footer').footerReveal();
});

$(function () {
    $('.nav-overlay__close').on("click", function() {
        $('.nav-overlay').css('height','0%');
    });

    $('.nav-overlay__open').on("click", function() {
        $('.nav-overlay').css('height','100%');
    });
});

// $(function () {
//     $('#fullpage').fullpage();
// });$(function () {
//     $('#fullpage').fullpage();
// });