// Header class
var Header = /** @class */ (function () {
    function Header(header, burger, mobile, logo) {
        if (header === void 0) { header = null; }
        if (burger === void 0) { burger = null; }
        if (mobile === void 0) { mobile = null; }
        if (logo === void 0) { logo = null; }
        this.header = header;
        this.burger = burger;
        this.mobile = mobile;
        this.logo = logo;
    }
    return Header;
}());
var headerIns = new Header(document.querySelector(".header"), document.querySelector(".header__burger"), document.querySelector(".mobile"), document.querySelector(".header__logo"));
// Header animation
// let lastYOffset: Number = 0;
// document.addEventListener("scroll", () => { 
//     if (lastYOffset >= window.pageYOffset) {
//         headerIns.header?.classList.remove("header_active")
//     } else {
//         headerIns.header?.classList.add("header_active")
//     }
//     lastYOffset = window.pageYOffset
// })
// Header burger
headerIns.burger.addEventListener("click", function () {
    headerIns.mobile.classList.toggle("mobile_active");
    headerIns.burger.classList.toggle("header__burger_active");
    headerIns.logo.classList.toggle("logo__visible");
    document.querySelector("body").classList.toggle("_scrollDisable");
});
headerIns.mobile.addEventListener("click", function () {
    headerIns.mobile.classList.toggle("mobile_active");
});
// Logo
// headerIns.header.addEventListener("click", () => { window.location = "https://google.com"; })
