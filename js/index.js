"use strict";
// Touch detection
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.querySelector("body").classList.add("_mobile");
}
else {
    document.querySelector("body").classList.add("_desk");
}
// const first: any = document.querySelector(".first");
// // set height of 
// first.style.height = `${window.innerHeight}px`;
// mobile menu
var back = document.querySelector(".back");
var mobileMenu = document.querySelector(".mobile-menu");
var burger = document.querySelector(".mobile-menu__burger");
var burgerArrow = document.querySelector(".mobile-menu__burger_container");
burger.addEventListener("click", function () {
    back.classList.toggle("_active");
    mobileMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
    // document.querySelector("body").classList.toggle("_scrollDisable");
    burgerArrow.classList.add("_disable");
});
burger.addEventListener("mouseover", function () {
    burgerArrow.classList.toggle("_hidden");
});
burger.addEventListener("mouseout", function () {
    burgerArrow.classList.toggle("_hidden");
});
// Contact PopUp
var firstButton = document.querySelector(".first__button");
var popupCross = document.querySelectorAll(".about-popup__cross");
var popup = document.querySelector(".about-popup");
firstButton.addEventListener("click", function () {
    popup.classList.toggle("_active");
    back.classList.toggle("_active");
    document.documentElement.style.overflow = "hidden";
    mobileMenu.style.display = "none";
    // anim disable
    firstButton.classList.add("_disable");
});
popupCross.forEach(function (el) {
    el.addEventListener("click", function () {
        popup.classList.toggle("_active");
        back.classList.toggle("_active");
        document.documentElement.style.overflow = "auto";
        mobileMenu.style.display = "block";
    });
});
// Observer
var Observer = new IntersectionObserver(function (entires) {
    entires.forEach(function (entire) {
        if (entire.isIntersecting) {
            entire.target.classList.add("_intersection");
        }
    });
});
Observer.observe(document.querySelector("#worksInter"));
Observer.observe(document.querySelector("#firstInter"));
Observer.observe(document.querySelector("#section-rates__list"));
Observer.observe(document.querySelector("#footer"));
Observer.observe(document.querySelector("#tec"));
Observer.observe(document.querySelector("#works"));
Observer.observe(document.querySelector("#worksMob"));
// works card
// Первая строка
var cardsFirst = document.querySelectorAll(".works__container_1 .works__card");
var cardsSecond = document.querySelectorAll(".works__container_2 .works__card");
cardsFirst.forEach(function (el, indx) {
    el.addEventListener("mouseover", function () {
        document.querySelector(".works__container_1").classList.toggle('_disable');
    });
    el.addEventListener("mouseout", function () {
        document.querySelector(".works__container_1").classList.toggle('_disable');
    });
});
// Вторая строка
cardsSecond.forEach(function (el, indx) {
    el.addEventListener("mouseover", function () {
        document.querySelector(".works__container_2").classList.toggle('_disable');
    });
    el.addEventListener("mouseout", function () {
        document.querySelector(".works__container_2").classList.toggle('_disable');
    });
});
// section-rates
var crossArr = document.querySelectorAll(".section-rates__cross");
var textArr = document.querySelectorAll(".section-rates__text");
crossArr.forEach(function (el, ind) {
    el.addEventListener("click", function () {
        el.classList.toggle("_active");
        textArr[ind].classList.toggle("_active");
    });
});
// ref scroll
var refs = document.querySelectorAll("._ref");
refs.forEach(function (el, ind) {
    ind += 1;
    el.addEventListener("click", function () {
        if (ind != 3)
            window.scrollTo(0, ind * innerHeight);
        else
            window.scrollBy(0, 450);
        el.classList.add("_disable");
    });
});
// tec
var tecs = document.querySelectorAll(".section-tec__list div");
var anim = document.querySelector(".section-tec__el_2");
tecs.forEach(function (el, ind) {
    el.addEventListener("mouseover", function () {
        anim.classList.add("_disable");
    });
});
