// $(window).load(funtion() {
//     $(window).on('scroll', function() {
//         if ($(window).scrollTop() > 0) {
//             $('.header').addClass('sticky');
//         } else {
//             $('.header').removeClass('sticky');
//         }
//     })
// })




$(document).ready(function() {
    $(".header-area").sticky({ topSpacing: 0 });
});