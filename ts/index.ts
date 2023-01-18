"use strict"

// Touch detection
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {   
    document.querySelector("body").classList.add("_mobile");
} else {
    document.querySelector("body").classList.add("_desk");
}

// const first: any = document.querySelector(".first");
// // set height of 
// first.style.height = `${window.innerHeight}px`;

// mobile menu
const mobileMenu: any = document.querySelector(".mobile-menu");
const burger: any = document.querySelector(".mobile-menu__burger");
burger.addEventListener("click", () => {

    mobileMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
});

// Mouse move
const paralTop: Element = document.querySelector(".first__paral_top");
const paralBot: Element = document.querySelector(".first__paral_bot");

// let pageX: number = 0;
// let pageY: number = 0;


// let impulseX: number = 0;
// let impulseY: number = 0;
// let direX = 0;

// let lastX = 0;

// paralTop.style.top= "0px";
// paralTop.style.left = "-1000px";

// document.addEventListener("mousemove", event => {
    
//     // impulseX = Math.abs(event.movementX * 5); 
//     // direX = event.movementX != 0 ? event.movementX / Math.abs(event.movementX) : 0;

//     // impulseY += 1;

//     // pageX = event.pageX;
//     // pageY = event.pageY;

//     // paralTop.style.top = ` ${event.movementY / 10}px`;

// })

// // Проверка на окончание данного события
// let moveChecking = setInterval(() => {
    
//     if(pageX !== 0 || pageY !== 0) {
//         // console.log("двигается")
        
//         console.log(impulseX)
//     } else {
//         if(impulseX !== 0 || impulseY !== 0) {
//             // console.log("imp" + impulseX)
//             // console.log(direX)
//             paralTop.style.left = Number.parseInt(paralTop.style.left) + direX + "px";
            

//             // console.log(impulseX)
//             // уменьшаем импульс
            
//             if(impulseX != 0)
//                 impulseX -= 1;

//         }
//         // console.log("стоит")
//     }

//     // Обнуляем значения
//     pageX = 0;
//     pageY = 0;
// }, 1)

// let inter = setInterval(() => {
//     if(eventCheck) {
        
//         paralTop.style.transform = `translate(${1000 + 'px'}, ${500 + 'px'})`;
//         eventCheck = false;
//     }
// }, 1)

// Contact PopUp
const contactPopup: any = document.querySelector(".contact-popup");
const firstButton: any = document.querySelector(".first__button");
const backPopup: any = document.querySelector(".contact-popup__back");
const crossPopup: any = document.querySelectorAll(".contact-popup__cross");
firstButton.addEventListener("click", () => { document.querySelector("body").classList.toggle("_scrollDisable");contactPopup.classList.toggle("contact-popup_active"); backPopup.classList.toggle("contact-popup__back_active");  })
crossPopup.forEach( el => { el.addEventListener("click", () => {
    contactPopup.classList.toggle("contact-popup_active"); 
    backPopup.classList.toggle("contact-popup__back_active");
    document.querySelector("body").classList.toggle("_scrollDisable"); 
})})

//  Contacts

// lightTheme
// const lightSwitch = document.querySelector(".header__el_switch");
// lightSwitch.addEventListener("click", () => { document.querySelector("body").classList.toggle("_white");  })


// Works__ref
// document.querySelector(".works__ref").addEventListener("click", event => { window.scroll(0, window.innerHeight - 200);})

// Works
// const workCardButton = document.querySelector(".works__button");
// workCardButton.addEventListener("click", () => { document.querySelector('.works-popup_1').classList.toggle("works-popup_1_active"); document.querySelector(".header").style.display = "none"; })
// const workPopUpCross = document.querySelector(".works-popup__black_cross");
// workPopUpCross.addEventListener("click", () => {  document.querySelectorAll(".works-popup").forEach((value, index) => { value.classList.remove("works-popup_1_active"); document.querySelector(".header").style.display = "block";}) } )

// const cards = document.querySelectorAll(".works__card");
// cards[1].addEventListener("click", () => { window.location = "https://bolotny.com"; })
// cards[1].addEventListener("click", () => { window.location = "https://bolotny.com"; })
// cards[2].addEventListener("click", () => { window.location = "https://bolotny.com"; })
// cards[3].addEventListener("click", () => { window.location = "https://bolotny.com"; })

// Observer
const Observer: IntersectionObserver = new IntersectionObserver((entires) => {
    entires.forEach(entire => {
        if(entire.isIntersecting) {
            entire.target.classList.add("_intersection");
        }
    })
});

Observer.observe(document.querySelector("#worksInter"));
Observer.observe(document.querySelector("#firstInter"));

// works card
const cards: any = document.querySelectorAll(".works__card");
cards.forEach(el => {
    el.addEventListener("mouseover", () => {
        document.querySelector('.works__container').classList.toggle('_disable')
    });
    el.addEventListener("mouseout", () => {
        document.querySelector('.works__container').classList.toggle('_disable')
    });
})

// section-rates
const crossArr: any = document.querySelectorAll(".section-rates__cross");
const textArr: any = document.querySelectorAll(".section-rates__text");

crossArr.forEach((el, ind) => {
    el.addEventListener("click", () => {
        el.classList.toggle("_active");
        textArr[ind].classList.toggle("_active");
    });
})