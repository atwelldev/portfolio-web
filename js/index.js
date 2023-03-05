"use strict";
const isMobile = {
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
const back = document.querySelector(".back");
const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".mobile-menu__burger");
const burgerArrow = document.querySelector(".mobile-menu__burger_container");
burger.addEventListener("click", () => {
    back.classList.toggle("_active");
    mobileMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
    burgerArrow.classList.add("_disable");
});
burger.addEventListener("mouseover", () => {
    burgerArrow.classList.toggle("_hidden");
});
burger.addEventListener("mouseout", () => {
    burgerArrow.classList.toggle("_hidden");
});
const firstButton = document.querySelector(".first__button");
const popupCross = document.querySelectorAll(".about-popup__cross");
const popup = document.querySelector(".about-popup");
firstButton.addEventListener("click", () => {
    popup.classList.toggle("_active");
    back.classList.toggle("_active");
    document.documentElement.style.overflow = "hidden";
    mobileMenu.style.display = "none";
    firstButton.classList.add("_disable");
});
popupCross.forEach(el => {
    el.addEventListener("click", () => {
        popup.classList.toggle("_active");
        back.classList.toggle("_active");
        document.documentElement.style.overflow = "auto";
        mobileMenu.style.display = "block";
    });
});
const Observer = new IntersectionObserver((entires) => {
    entires.forEach(entire => {
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
const cardsFirst = document.querySelectorAll(".works__container_1 .works__card");
const cardsSecond = document.querySelectorAll(".works__container_2 .works__card");
cardsFirst.forEach((el, indx) => {
    el.addEventListener("mouseover", () => {
        document.querySelector(`.works__container_1`).classList.toggle('_disable');
    });
    el.addEventListener("mouseout", () => {
        document.querySelector(`.works__container_1`).classList.toggle('_disable');
    });
});
cardsSecond.forEach((el, indx) => {
    el.addEventListener("mouseover", () => {
        document.querySelector(`.works__container_2`).classList.toggle('_disable');
    });
    el.addEventListener("mouseout", () => {
        document.querySelector(`.works__container_2`).classList.toggle('_disable');
    });
});
const crossArr = document.querySelectorAll(".section-rates__cross");
const textArr = document.querySelectorAll(".section-rates__text");
crossArr.forEach((el, ind) => {
    el.addEventListener("click", () => {
        el.classList.toggle("_active");
        textArr[ind].classList.toggle("_active");
    });
});
const tecs = document.querySelectorAll(".section-tec__list div");
const anim = document.querySelector(".section-tec__el_2");
tecs.forEach((el, ind) => {
    el.addEventListener("mouseover", () => {
        anim.classList.add("_disable");
    });
});
