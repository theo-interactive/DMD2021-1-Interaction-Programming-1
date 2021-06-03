console.log(screen.height);
console.log(screen.availHeight);
console.log(screen.width);
console.log(screen.availWidth);
$(document).ready(function () {
    $(".gallery").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});