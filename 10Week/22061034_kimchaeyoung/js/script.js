var btnMenuEl = document.querySelector("#btn-menu"),
    sideMenuEl = document.querySelector("#side-menu"),
    btnCloseEl = document.querySelector("#btn-close"),
    sideMenuItemEl = sideMenuEl.querySelectorAll("li"),
    _isOpen = false,
    _isAni = false;

function onClickBtnMenu(e) {
    e.preventDefault();
    if (_isOpen || _isAni) return;
    if (!_isOpen) {
        _isOpen = true;
        _isAni = true;
        sideMenuEl.classList.add("open");
        setTimeout(function () {
            _isAni = false;
            for (var i = 0; i < sideMenuItemEl.length; i++) {
                addAni(i);
            }
        }, 380);
    }
}
function onClickBtnClose(e) {
    e.preventDefault();
    if (!_isOpen || _isAni) return;
    if (_isOpen) {
        _isOpen = false;
        _isAni = true;
        sideMenuEl.classList.remove("open");
        setTimeout(function () {
            _isAni = false;
            for (var i = 0; i < sideMenuItemEl.length; i++) {
                sideMenuItemEl[i].classList.remove("ani");
            }
        }, 400);
    }
}
function addAni(id) {
    setTimeout(function () {
        sideMenuItemEl[id].classList.add("ani");
    }, 40 * id);
}
function addEvent() {
    btnMenuEl.addEventListener("click", onClickBtnMenu);
    btnCloseEl.addEventListener("click", onClickBtnClose);
}
function init() {
    addEvent();
}
init();

window.onload = function () {
    var elm = ".scrollTo";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) { }
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) { }
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
showSlides(slideIndex);